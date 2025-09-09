// Combine.jsx
import React, { useState } from "react";
import LeftPanel from "./layout/LeftPanel";
import TopPanel from "./layout/TopPanel";
import DashboardPage from "./pages/DashboardPage";
import SessionsPage from "./pages/SessionsPage";
import ConnectionPage from "./pages/ConnectionPage";
import ContributionPage from "./pages/ContributionPage";
import MarketLinkagePage from "./pages/MarketLinkagePage";
import ResourcePage from "./pages/ResourcePage";
import MessagePage from "./pages/MessagePage";
import CalendarPage from "./pages/CalendarPage";

const Test = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [activeSessionTab, setActiveSessionTab] = useState("upcoming");
  const [activeConnectionTab, setActiveConnectionTab] = useState("mentor");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardPage />;
      case "session":
        return (
          <SessionsPage
            activeSessionTab={activeSessionTab}
            setActiveSessionTab={setActiveSessionTab}
          />
        );
      case "connection":
        return (
          <ConnectionPage
            activeConnectionTab={activeConnectionTab}
            setActiveConnectionTab={setActiveConnectionTab}
          />
        );
      case "contribution":
        return <ContributionPage />;
      case "linkage":
        return <MarketLinkagePage />;
      case "resource":
        return <ResourcePage />;
      case "message":
        return <MessagePage />;
      case "calendar":
        return <CalendarPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="h-screen flex bg-gray-100">
      <LeftPanel activePage={activePage} setActivePage={setActivePage} />

      <div className="flex-1 flex flex-col">
        <TopPanel />
        <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default Test;
