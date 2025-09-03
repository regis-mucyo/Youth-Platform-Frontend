import { useState } from "react";
import { ExamSelection, ExamInterface, ExamResults } from "./index.js";
import { getExamByPath, careerPaths } from "../../data/examData.js";

export default function ExM() {
  const [userProfile, setUserProfile] = useState({
    fieldOfWork: "Software Development",
    experienceLevel: "Intermediate",
  });
  const [selectedCareerId, setSelectedCareerId] = useState(null);
  const [examStage, setExamStage] = useState("technical");
  const [currentExam, setCurrentExam] = useState(null);
  const [technicalResults, setTechnicalResults] = useState(null);
  const [softResults, setSoftResults] = useState(null);

  const startExam = (careerId, stage) => {
    const exam = getExamByPath(careerId, stage, userProfile?.experienceLevel);
    setCurrentExam(exam);
    setExamStage(stage);
  };

  const handleSelectCareer = (careerId) => {
    setSelectedCareerId(careerId);
    startExam(careerId, "technical");
  };

  const handleExamComplete = (results) => {
    if (examStage === "technical") {
      setTechnicalResults(results);
      startExam(selectedCareerId, "soft");
    } else {
      setSoftResults(results);
    }
  };

  const handleBackToSelection = () => {
    setCurrentExam(null);
    setExamStage("technical");
    setTechnicalResults(null);
    setSoftResults(null);
  };

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

  if (technicalResults && softResults) {
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
