import React from "react";
import { menuItems } from "../data/menuItems";
import { Settings } from "lucide-react";

const LeftPanel = ({ activePage, setActivePage, setShowProfileModal }) => {
  return (
    <div className="w-72 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Logo Section */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-500 mb-1">ElevateLink</h1>
        <p className="text-sm text-gray-500">Mentor Dashboard</p>
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
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.label}</span>
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
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">DS</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Dr. Sarah Johnson
              </p>
              <p className="text-xs text-gray-500">Senior Software Engineer</p>
            </div>
          </div>
          <button
            onClick={() => setShowProfileModal(true)}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Settings size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
