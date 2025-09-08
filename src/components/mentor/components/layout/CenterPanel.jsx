// src/mentor/components/layout/CenterPanel.jsx
import React from "react";
import DashboardPage from "../pages/DashboardPage";
import SessionsPage from "../pages/SessionsPage";
import MyConnectionPage from "../pages/MyConnectionPage";
import MyContributionPage from "../pages/MyContributionPage";
import MarketLinkagePage from "../pages/MarketLinkagePage";
import MyResourcePage from "../pages/MyResourcePage";
import MessagePage from "../pages/MessagePage";
import MyCalendarPage from "../pages/MyCalendarPage";

// 🇷🇼 Rwanda Flag Colors — ONLY
const RWANDA_BLUE = "#00A1DE";
const RWANDA_YELLOW = "#FFDD00";
const RWANDA_GREEN = "#00A651";

const CenterPanel = ({
  activePage,
  activeSessionTab,
  setActiveSessionTab,
  activeConnectionTab,
  setActiveConnectionTab,
}) => {
  const renderContent = () => {
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
          <MyConnectionPage
            activeConnectionTab={activeConnectionTab}
            setActiveConnectionTab={setActiveConnectionTab}
          />
        );
      case "contribution":
        return <MyContributionPage />;
      case "linkage":
        return <MarketLinkagePage />;
      case "resource":
        return <MyResourcePage />;
      case "message":
        return <MessagePage />;
      case "calendar":
        return <MyCalendarPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div
      className="flex-1 p-6 overflow-y-auto transition-all duration-300"
      style={{
        backgroundColor: "#FAFAFA",
        borderTop: `3px solid ${RWANDA_BLUE}`,
        scrollbarWidth: "thin",
        scrollbarColor: `${RWANDA_YELLOW} #f1f1f1`,
      }}
    >
      <div className="animate-fadeIn">{renderContent()}</div>
    </div>
  );
};

export default CenterPanel;
