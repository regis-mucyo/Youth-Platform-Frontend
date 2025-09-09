import React from "react";

const colorClasses = {
  green: { bgLight: "bg-green-100", bgDark: "bg-green-500" },
  blue: { bgLight: "bg-blue-100", bgDark: "bg-blue-500" },
  red: { bgLight: "bg-red-100", bgDark: "bg-red-500" },
  yellow: { bgLight: "bg-yellow-100", bgDark: "bg-yellow-500" },
  // add more colors if needed
};

const StatsCard = ({ title, value, icon, color = "green" }) => {
  const bgClasses = colorClasses[color] || colorClasses.green;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        {icon && (
          <div
            className={`${bgClasses.bgLight} w-8 h-8 rounded-lg flex items-center justify-center`}
          >
            <div className={`${bgClasses.bgDark} w-4 h-4 rounded`}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
