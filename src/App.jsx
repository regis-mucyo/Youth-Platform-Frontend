import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "./components/landpage/LandPage";
import Dashboard from "./components/mentor/Dashboard";

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
  return <Dashboard />;
}

export default App;
