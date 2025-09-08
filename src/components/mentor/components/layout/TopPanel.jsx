// src/mentor/components/layout/TopPanel.jsx
import React from "react";
import { Search, Bell, User } from "lucide-react";

// 🇷🇼 Rwanda Flag Colors — ONLY
const RWANDA_BLUE = "#00A1DE";
const RWANDA_YELLOW = "#FFDD00";
const RWANDA_GREEN = "#00A651";

const TopPanel = () => {
  return (
    <div
      className="h-16 flex items-center justify-between px-6"
      style={{
        backgroundColor: RWANDA_BLUE,
        borderBottom: `2px solid ${RWANDA_GREEN}`,
      }}
    >
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
            size={18}
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          />
          <input
            type="text"
            placeholder="Search mentees, sessions..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg focus:outline-none transition-all"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "#333",
              border: "none",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = `0 0 0 3px ${RWANDA_YELLOW}`)
            }
            onBlur={(e) =>
              (e.target.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)")
            }
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button
          className="relative p-2 rounded-lg transition-all"
          style={{
            color: "white",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <Bell size={18} />
          <span
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
            style={{ backgroundColor: RWANDA_YELLOW }}
          ></span>
        </button>

        {/* User Avatar */}
        <button
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-medium transition-all"
          style={{
            backgroundColor: RWANDA_GREEN,
            border: `2px solid ${RWANDA_YELLOW}`,
          }}
        >
          <User size={16} />
        </button>
      </div>
    </div>
  );
};

export default TopPanel;
