import LandPage from "./components/landpage/LandPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExM from "./components/data/Exam/ExM.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/exm" element={<ExM />} />
      </Routes>
    </Router>
  );
}
