// src/mentor/components/pages/MyConnectionPage.jsx
import React from "react";
import { Search } from "lucide-react";

// 🇷🇼 Rwanda Flag Colors — ONLY
const RWANDA_BLUE = "#00A1DE";
const RWANDA_YELLOW = "#FFDD00";
const RWANDA_GREEN = "#00A651";

const MyConnectionPage = ({ activeConnectionTab, setActiveConnectionTab }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Connection</h1>
        <p className="text-gray-600">Connect with mentors and mentees</p>
      </div>
      {/* Tab Navigation */}
      <div className="flex space-x-8 border-b border-gray-200">
        <button
          onClick={() => setActiveConnectionTab("mentor")}
          className={`pb-3 px-1 font-medium text-sm ${
            activeConnectionTab === "mentor"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
          style={{
            borderColor:
              activeConnectionTab === "mentor" ? RWANDA_BLUE : "transparent",
            color: activeConnectionTab === "mentor" ? RWANDA_BLUE : "",
          }}
        >
          Mentor
        </button>
        <button
          onClick={() => setActiveConnectionTab("mentee")}
          className={`pb-3 px-1 font-medium text-sm ${
            activeConnectionTab === "mentee"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
          style={{
            borderColor:
              activeConnectionTab === "mentee" ? RWANDA_GREEN : "transparent",
            color: activeConnectionTab === "mentee" ? RWANDA_GREEN : "",
          }}
        >
          Mentee
        </button>
      </div>
      {/* Search Bar */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search by field (e.g. UI Design, Data Science)"
          className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          style={{
            borderColor: RWANDA_BLUE,
          }}
          onFocus={(e) =>
            (e.target.style.boxShadow = `0 0 0 3px ${RWANDA_YELLOW}`)
          }
          onBlur={(e) => (e.target.style.boxShadow = "")}
        />
      </div>
      {/* Content Area */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="text-center py-12">
          {activeConnectionTab === "mentor" && (
            <p className="text-gray-500">No mentors available</p>
          )}
          {activeConnectionTab === "mentee" && (
            <p className="text-gray-500">No mentees available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyConnectionPage;
