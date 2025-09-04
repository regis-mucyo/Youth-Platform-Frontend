import SessionPage from "./components/mentee/SessionPage";
import MyConnection from "./components/mentee/MyConnection"; // Make sure this is imported
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatApp from "./components/mentee/Message";
import Market from "./components/mentee/Market";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mentee/session" element={<SessionPage />} />
        <Route path="/mentee/connection" element={<MyConnection />} />
        <Route path="mentee/message" element={<ChatApp/>}/>
        <Route path="mentee/market" element={<Market/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
