import SessionPage from "./components/mentee/SessionPage";
import MyConnection from "./components/mentee/MyConnection";
import ChatApp from "./components/mentee/Message";
import Market from "./components/mentee/Market";
import Report from "./components/mentee/Report";
import LandPage from "./components/landpage/LandPage";
import Resource from "./components/mentee/Resource";
import Welcome from "./components/mentee/Welcome.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import ExM from "./components/data/Exam/ExM.jsx";
import RegistrationForm from "./components/Auth/RegistrationForm.jsx";
import LoginForm from "./components/Auth/LoginForm.jsx";
import Dashboard from "./components/Dashboard.jsx";
import CareerSelection from "./components/CareerSelection.jsx";
import MentorDashboard from "./components/mentor/MentorDashboard";
import MentorRegistrationForm from "./components/Auth/MentorRegistrationForm.jsx";
import MentorVerificationPending from "./components/mentor/MentorVerificationPending.jsx"; // Import new component
import { useState, useEffect } from "react";

function RegisterRoute({ onRegistrationComplete }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "mentee";

  if (role === "mentor") {
    return (
      <MentorRegistrationForm
        onRegistrationComplete={(profile) => {
          onRegistrationComplete(profile);
          // Direct navigation based on verificationStatus after mentor registration
          if (profile.verificationStatus === 'verified') {
            navigate('/mentor-dashboard');
          } else {
            navigate('/mentor-pending-verification');
          }
        }}
      />
    );
  } else {
    return (
      <RegistrationForm
        onRegistrationComplete={(profile) => {
          onRegistrationComplete(profile);
          navigate("/login");
        }}
        role={role}
      />
    );
  }
}

function LoginRoute({ onLoginComplete, userProfile }) {
  const navigate = useNavigate();

  const handleLoginSuccess = (profile) => {
    onLoginComplete(profile);

    if (profile.role === 'mentor') {
      if (profile.verificationStatus === 'pending') {
        navigate('/mentor-pending-verification');
      } else if (profile.verificationStatus === 'verified') {
        navigate('/mentor-dashboard');
      } else {
        // Fallback for mentors with unexpected verificationStatus
        navigate('/mentor-pending-verification');
      }
      return;
    }

    // Mentee login logic
    if (profile.hasCompletedExams) {
      navigate("/welcome");
    } else {
      navigate("/career-selection");
    }
  };

  return (
    <LoginForm
      onLoginComplete={handleLoginSuccess}
      onSwitchToRegister={() => navigate("/register")}
    />
  );
}

export default function App() {
  const [userProfile, setUserProfile] = useState(() => {
    try {
      const storedProfile = localStorage.getItem('userProfile');
      return storedProfile ? JSON.parse(storedProfile) : null;
    } catch (error) {
      console.error("Error parsing user profile from localStorage", error);
      return null;
    }
  });

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
    } else {
      localStorage.removeItem('userProfile');
    }
  }, [userProfile]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage role="mentee" userProfile={userProfile} />} />
        <Route path="/mentee" element={<LandPage role="mentee" userProfile={userProfile} />} />
        <Route path="/mentor" element={<LandPage role="mentor" userProfile={userProfile} />} />
        <Route path="/register" element={<RegisterRoute onRegistrationComplete={setUserProfile} />} />
        <Route path="/login" element={<LoginRoute onLoginComplete={setUserProfile} userProfile={userProfile} />} />
        <Route path="/career-selection" element={<CareerSelection />} />
        <Route path="/exam" element={<ExM />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/mentee/session" element={<SessionPage />} />
        <Route path="/mentee/connection" element={<MyConnection />} />
        <Route path="/mentee/message" element={<ChatApp />} />
        <Route path="/mentee/market" element={<Market />} />
        <Route path="/mentee/report" element={<Report />} />
        <Route path="/mentee/resource" element={<Resource />} />
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/mentor-pending-verification" element={<MentorVerificationPending />} />
      </Routes>
    </Router>
  );
}
