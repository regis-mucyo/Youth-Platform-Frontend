import { useState } from "react";
import LandPage from "./components/landpage/LandPage.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import LoginForm from "./components/LoginForm.jsx";
import ExamSelection from "./components/ExamSelection.jsx";
import ExamInterface from "./components/ExamInterface.jsx";
import ExamResults from "./components/ExamResults.jsx";
import { getExamByPath, careerPaths } from "./components/data/examData.js";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from "./components/Dashboard.jsx"; // We'll create this file

export default function App() {
  // const [view, setView] = useState("landing"); // "landing" | "register" | "login" | "select" | "exam" | "results"
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();
  const [selectedCareerId, setSelectedCareerId] = useState(null);
  const [examStage, setExamStage] = useState("technical"); // "technical" | "soft"
  const [currentExam, setCurrentExam] = useState(null);
  const [technicalResults, setTechnicalResults] = useState(null);
  const [softResults, setSoftResults] = useState(null);

  const handleRegistrationComplete = (profile) => {
    setUserProfile(profile);
    // setView("select");
    navigate('/exam-selection');
  };

  const handleLoginComplete = (profile) => {
    setUserProfile(profile);
    // setView("select");
    navigate('/exam-selection');
  };

  const startExam = (careerId, stage) => {
    const exam = getExamByPath(careerId, stage, userProfile?.experienceLevel);
    setCurrentExam(exam);
    setExamStage(stage);
    // setView("exam");
    navigate('/exam');
  };

  const handleSelectCareer = (careerId) => {
    setSelectedCareerId(careerId);
    startExam(careerId, "technical");
  };

  const handleExamComplete = (results) => {
    if (examStage === "technical") {
      setTechnicalResults(results);
      // proceed to soft skills
      startExam(selectedCareerId, "soft");
    } else {
      setSoftResults(results);
      // setView("results");
      navigate('/results');
    }
  };

  const handleBackToSelection = () => {
    // setView("select");
    setCurrentExam(null);
    setExamStage("technical");
    setTechnicalResults(null);
    setSoftResults(null);
    navigate('/exam-selection');
  };

  const careerTitle = selectedCareerId ? careerPaths[selectedCareerId]?.title : "";

  return (

    <Routes>
      <Route path="/" element={<LandPage onGetStarted={() => navigate('/register')} />} />
      <Route
        path="/register"
        element={
          <RegistrationForm
            onRegistrationComplete={handleRegistrationComplete}
            onSwitchToLogin={() => navigate('/login')}
          />
        }
      />
      <Route
        path="/login"
        element={
          <LoginForm
            onLoginComplete={handleLoginComplete}
            onSwitchToRegister={() => navigate('/register')}
          />
        }
      />
      <Route
        path="/exam-selection"
        element={
          <ExamSelection onSelectCareer={handleSelectCareer} userProfile={userProfile} />
        }
      />
      <Route
        path="/exam"
        element={
          <ExamInterface
            exam={currentExam}
            careerTitle={careerTitle}
            examType={examStage}
            onExamComplete={handleExamComplete}
            onBackToSelection={handleBackToSelection}
            userProfile={userProfile}
          />
        }
      />
      <Route
        path="/results"
        element={
          <ExamResults
            careerTitle={careerTitle}
            technicalResults={technicalResults}
            softResults={softResults}
            onBackToSelection={handleBackToSelection}
            onRetakeExam={() => handleSelectCareer(selectedCareerId)}
            totalTimeUsed={0}
          />
        }
      />
      <Route path="/dashboard" element={<Dashboard userProfile={userProfile} />} />
    </Routes>

  );
}
