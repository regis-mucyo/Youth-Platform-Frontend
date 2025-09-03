import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LandPage from "./components/landpage/LandPage";
import ExM from "./components/data/Exam/ExM.jsx";
import RegistrationForm from "./components/Auth/RegistrationForm.jsx";
import LoginForm from "./components/Auth/LoginForm.jsx";

function RegisterRoute() {
  return <RegistrationForm onRegistrationComplete={() => {}} />;
}

function LoginRoute() {
  const navigate = useNavigate();
  return (
    <LoginForm
      onLoginComplete={() => navigate('/exm')}
      onSwitchToRegister={() => navigate('/register')}
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
        <Route path="/exm" element={<ExM />} />
      </Routes>
    </Router>
  );
}
