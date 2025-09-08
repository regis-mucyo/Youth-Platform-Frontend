// src/mentor/components/layout/LeftPanel.jsx
import React from "react";
import {
  LayoutDashboard,
  Users,
  Share2,
  BarChart3,
  FileText,
  MessageSquare,
  Calendar,
  Briefcase,
} from "lucide-react";

const LeftPanel = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "session", label: "Session", icon: Users },
    { id: "connection", label: "My Connection", icon: Share2 },
    { id: "contribution", label: "My Contribution", icon: BarChart3 },
    { id: "linkage", label: "Market Linkage", icon: Briefcase },
    { id: "resource", label: "My Resource", icon: FileText },
    { id: "message", label: "Message", icon: MessageSquare },
    { id: "calendar", label: "My Calendar", icon: Calendar },
  ];

  return (
    <div className="w-[450px] bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-2 mb-2">
          {/* Unique geometric logo design */}
          <div className="flex space-x-1">
            <div className="w-2 h-6 rounded-full bg-blue-500"></div>
            <div
              className="w-1.5 h-5 mt-0.5 rounded-full"
              style={{ backgroundColor: "#F59E0B" }}
            ></div>
            <div
              className="w-1 h-4 mt-1 rounded-full"
              style={{ backgroundColor: "#0F766E" }}
            ></div>
          </div>
          <h1 className="text-2xl font-bold text-blue-500">ElevateLink</h1>
        </div>
        <p className="text-sm text-blue-500">Mentor Dashboard</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActivePage(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? "text-white shadow-md bg-blue-500"
                      : "text-blue-500 hover:shadow-sm hover:bg-blue-50"
                  }`}
                >
                  <Icon
                    size={18}
                    className={isActive ? "text-white" : "text-blue-500"}
                  />
                  <span className="text-sm font-medium">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-blue-500" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm bg-blue-500">
              <span className="text-white text-sm font-semibold">SJ</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-500">
                Dr. Sarah Johnson
              </p>
              <p className="text-xs text-blue-500">Senior Software Engineer</p>
            </div>
          </div>
          <button className="p-2 rounded-lg transition-colors hover:shadow-sm text-blue-500 hover:bg-blue-50">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
