import { useState, useEffect } from "react";
import { ExamSelection, ExamInterface, ExamResults } from "./index.js";
import { getExamByPath, careerPaths } from "../../data/examData.js";
import { useNavigate, useLocation } from 'react-router-dom';

export default function ExM() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userProfile, setUserProfile] = useState(() => {
    try {
      const stored = localStorage.getItem('userProfile');
      return stored ? JSON.parse(stored) : {
        fieldOfWork: "Software Development",
        experienceLevel: "Intermediate",
      };
    } catch {
      return {
        fieldOfWork: "Software Development",
        experienceLevel: "Intermediate",
      };
    }
  });
  const [selectedCareerId, setSelectedCareerId] = useState(location.state?.selectedCareer || null);
  const [examStage, setExamStage] = useState("technical");
  const [currentExam, setCurrentExam] = useState(null);
  const [technicalResults, setTechnicalResults] = useState(null);
  const [softResults, setSoftResults] = useState(null);

  // Local storage helpers for exam persistence
  const storageKey = (careerId, level) => `examResults:${careerId}:${level}`;
  const getStoredResults = (careerId, level) => {
    try {
      const raw = localStorage.getItem(storageKey(careerId, level));
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  };
  const saveResults = (careerId, level, data) => {
    try {
      localStorage.setItem(storageKey(careerId, level), JSON.stringify(data));
    } catch {}
  };

  const startExam = (careerId, stage) => {
    const exam = getExamByPath(careerId, stage, userProfile?.experienceLevel);
    setCurrentExam(exam);
    setExamStage(stage);
  };

  const handleSelectCareer = (careerId) => {
    setSelectedCareerId(careerId);
    const stored = getStoredResults(careerId, userProfile?.experienceLevel);
    if (stored && stored.passed) {
      // Already passed; show results instead of allowing retake
      setTechnicalResults(stored.technicalResults);
      setSoftResults(stored.softResults);
      setCurrentExam(null);
      setExamStage("technical");
    } else {
      startExam(careerId, "technical");
    }
  };

  const handleExamComplete = (results) => {
    if (examStage === "technical") {
      setTechnicalResults(results);
      startExam(selectedCareerId, "soft");
    } else {
      setSoftResults(results);
      // Directly go to results page after soft exam completion, skipping "Proceed to Mark"
      setExamStage("results");
    }
  };

  const handleBackToSelection = () => {
    setCurrentExam(null);
    setExamStage("technical");
    setTechnicalResults(null);
    setSoftResults(null);
  };

  // Handle automatic exam start when career is selected from navigation
  useEffect(() => {
    if (selectedCareerId && !currentExam && !technicalResults) {
      const stored = getStoredResults(selectedCareerId, userProfile?.experienceLevel);
      if (stored && stored.passed) {
        // Already passed; show results instead of allowing retake
        setTechnicalResults(stored.technicalResults);
        setSoftResults(stored.softResults);
        setExamStage("technical");
      } else {
        startExam(selectedCareerId, "technical");
      }
    }
  }, [selectedCareerId, userProfile?.experienceLevel]);

  // Persist results after both sections are complete
  useEffect(() => {
    if (selectedCareerId && technicalResults && softResults) {
      const techPct = Math.round((technicalResults.correct / technicalResults.total) * 100);
      const softPct = Math.round((softResults.correct / softResults.total) * 100);
      const passed = techPct >= 70 && softPct >= 50;
      saveResults(selectedCareerId, userProfile?.experienceLevel, {
        technicalResults,
        softResults,
        passed,
        careerTitle: userProfile?.fieldOfWork || "",
        experienceLevel: userProfile?.experienceLevel,
      });
    }
  }, [selectedCareerId, technicalResults, softResults, userProfile?.experienceLevel]);

  const careerTitle = selectedCareerId ? careerPaths[selectedCareerId]?.title : "";

  // View rendering
  if (!selectedCareerId) {
    return (
      <ExamSelection onSelectCareer={handleSelectCareer} userProfile={userProfile} />
    );
  }

  if (currentExam && !softResults) {
    return (
      <ExamInterface
        exam={currentExam}
        careerTitle={careerTitle}
        examType={examStage}
        onExamComplete={handleExamComplete}
        onBackToSelection={handleBackToSelection}
        userProfile={userProfile}
      />
    );
  }

  if (examStage === "results" && technicalResults && softResults) {
    return (
      <ExamResults
        careerTitle={careerTitle}
        technicalResults={technicalResults}
        softResults={softResults}
        onBackToSelection={handleBackToSelection}
        onRetakeExam={() => handleSelectCareer(selectedCareerId)}
        totalTimeUsed={0}
      />
    );
  }

  return null;
}
