// src/mentor/MentorDashboard.jsx
import React, { useState } from "react";
import LeftPanel from "./components/layout/LeftPanel";
import TopPanel from "./components/layout/TopPanel";
import CenterPanel from "./components/layout/CenterPanel";

// 🇷🇼 Rwanda Flag Colors — ONLY
export const RWANDA_BLUE = "#00A1DE";
export const RWANDA_YELLOW = "#FFDD00";
export const RWANDA_GREEN = "#00A651";

const MentorDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [activeSessionTab, setActiveSessionTab] = useState("upcoming");
  const [activeConnectionTab, setActiveConnectionTab] = useState("mentee");

  return (
    <div className="h-screen flex bg-gray-100 overflow-hidden">
      <LeftPanel activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col">
        <TopPanel />
        <CenterPanel
          activePage={activePage}
          activeSessionTab={activeSessionTab}
          setActiveSessionTab={setActiveSessionTab}
          activeConnectionTab={activeConnectionTab}
          setActiveConnectionTab={setActiveConnectionTab}
        />
      </div>
    </div>
  );
};

export default MentorDashboard;
