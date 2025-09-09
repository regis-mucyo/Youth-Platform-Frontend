import React from "react";
import { Bell, Plus, Menu } from "lucide-react";

const Header = ({ setSidebarOpen,dashboard,description }) => {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-4 bg-white shadow">
      {/* Left: Page title & subtitle */}
      <div className="flex items-start sm:items-center space-x-3">
        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">{dashboard}</h1>
          <p className="text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>

      {/* Right: Notification + Book button */}
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            2
          </span>
        </div>

        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg shadow text-sm sm:text-base">
          <Plus className="w-4 h-4 mr-1 sm:mr-2" />
          <span className="hidden sm:inline">Book Session</span>
          <span className="sm:hidden">Book</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
