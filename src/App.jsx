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
function RegisterRoute() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "mentee";
  return (
    <RegistrationForm
      onRegistrationComplete={() => navigate("/login")}
      role={role}
    />
  );
}

function LoginRoute() {
  const navigate = useNavigate();

  const checkExamStatus = () => {
    // Check all possible exam results in localStorage
    const careerPaths = ["software-developer", "data-scientist"];
    const experienceLevels = ["Beginner", "Intermediate", "Junior", "Senior"];

    for (const careerId of careerPaths) {
      for (const level of experienceLevels) {
        const storageKey = `examResults:${careerId}:${level}`;
        try {
          const stored = localStorage.getItem(storageKey);
          if (stored) {
            const results = JSON.parse(stored);
            if (results.passed) {
              // User has passed exams, navigate to dashboard with results
              navigate("/dashboard", {
                state: {
                  examResults: results,
                  careerTitle: results.careerTitle,
                  experienceLevel: results.experienceLevel,
                },
              });
              return;
            }
          }
        } catch (error) {
          console.error("Error checking exam results:", error);
        }
      }
    }

    // No passed exams found, go to career selection
    navigate("/career-selection");
  };

  return (
    <LoginForm
      onLoginComplete={checkExamStatus}
      onSwitchToRegister={() => navigate("/register")}
    />
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage role="mentee" />} />
        <Route path="/mentee" element={<LandPage role="mentee" />} />
        <Route path="/mentor" element={<LandPage role="mentor" />} />
        <Route path="/register" element={<RegisterRoute />} />
        <Route path="/login" element={<LoginRoute />} />
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
      </Routes>
    </Router>
  );
}
