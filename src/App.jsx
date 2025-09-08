import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "./components/landpage/LandPage";
import MentorDashboard from "./components/mentor/MentorDashboard";

function App() {
  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<LandPage role="mentee" />} />
  //       <Route path="/mentee" element={<LandPage role="mentee" />} />
  //       <Route path="/mentor" element={<LandPage role="mentor" />} />
  //     </Routes>
  //   </Router>
  // );
  return <MentorDashboard />;
}

export default App;
