import React from "react";

const TabNavigation = ({ tabs, activeTab, onTabChange, className = "" }) => {
  return (
    <div className={`flex space-x-8 border-b border-gray-200 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-3 px-1 border-b-2 font-medium text-sm ${
            activeTab === tab.id
              ? "border-green-500 text-green-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
