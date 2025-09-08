// src/mentor/components/pages/SessionsPage.jsx
import React from "react";

// 🇷🇼 Rwanda Flag Colors — ONLY
const RWANDA_BLUE = "#00A1DE";
const RWANDA_YELLOW = "#FFDD00";
const RWANDA_GREEN = "#00A651";

const SessionsPage = ({ activeSessionTab, setActiveSessionTab }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sessions</h1>
        <p className="text-gray-600">Manage your mentoring sessions</p>
      </div>
      {/* Tab Navigation */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200 px-6 pt-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveSessionTab("upcoming")}
              className={`pb-3 px-1 border-b-2 font-medium text-sm ${
                activeSessionTab === "upcoming"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              style={{
                borderColor:
                  activeSessionTab === "upcoming"
                    ? RWANDA_GREEN
                    : "transparent",
                color: activeSessionTab === "upcoming" ? RWANDA_GREEN : "",
              }}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveSessionTab("pending")}
              className={`pb-3 px-1 border-b-2 font-medium text-sm ${
                activeSessionTab === "pending"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              style={{
                borderColor:
                  activeSessionTab === "pending" ? RWANDA_GREEN : "transparent",
                color: activeSessionTab === "pending" ? RWANDA_GREEN : "",
              }}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveSessionTab("history")}
              className={`pb-3 px-1 border-b-2 font-medium text-sm ${
                activeSessionTab === "history"
                  ? "border-green-500 text-green-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
              style={{
                borderColor:
                  activeSessionTab === "history" ? RWANDA_GREEN : "transparent",
                color: activeSessionTab === "history" ? RWANDA_GREEN : "",
              }}
            >
              History
            </button>
          </div>
        </div>
        {/* Content Area */}
        <div className="p-6">
          <div className="text-center py-12">
            {activeSessionTab === "upcoming" && (
              <p className="text-gray-500">No upcoming sessions found</p>
            )}
            {activeSessionTab === "pending" && (
              <p className="text-gray-500">No pending sessions found</p>
            )}
            {activeSessionTab === "history" && (
              <p className="text-gray-500">No session history found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionsPage;
