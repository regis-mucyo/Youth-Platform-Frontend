import SessionPage from "./components/mentee/SessionPage";
import MyConnection from "./components/mentee/MyConnection"; // Make sure this is imported
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mentee/session" element={<SessionPage />} />
        <Route path="/mentee/connection" element={<MyConnection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
