import SessionPage from "./components/mentee/SessionPage";
import MyConnection from "./components/mentee/MyConnection"; // Make sure this is imported
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatApp from "./components/mentee/Message";
import Market from "./components/mentee/Market";
import Report from "./components/mentee/Report";
import LandPage from "./components/landpage/LandPage";
import Resource from "./components/mentee/Resource";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/mentee/session" element={<SessionPage />} />
        <Route path="/mentee/connection" element={<MyConnection />} />
        <Route path="/mentee/message" element={<ChatApp />} />
        <Route path="/mentee/market" element={<Market />} />
        <Route path="/mentee/report" element={<Report />} />
        <Route path="/mentee/resource" element={<Resource/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
