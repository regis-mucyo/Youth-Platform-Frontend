import SessionPage from "./components/mentee/SessionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mentee/connection" element={<MyConnection />} />
        <Route path="/" element={<SessionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
