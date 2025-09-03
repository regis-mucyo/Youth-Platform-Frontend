import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "./components/landpage/LandPage";
import ExM from "./components/data/Exam/ExM.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage role="mentee" />} />
        <Route path="/mentee" element={<LandPage role="mentee" />} />
        <Route path="/mentor" element={<LandPage role="mentor" />} />
        <Route path="/exm" element={<ExM />} />
      </Routes>
    </Router>
  );
}
