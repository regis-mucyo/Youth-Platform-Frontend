// src/mentor/components/pages/DashboardPage.jsx
import React from "react";

// 🇷🇼 Rwanda Flag Colors — ONLY
const RWANDA_BLUE = "#00A1DE";
const RWANDA_YELLOW = "#FFDD00";
const RWANDA_GREEN = "#00A651";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Overview of your mentoring activities</p>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Sessions</p>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <div
                className="w-4 h-4"
                style={{ backgroundColor: RWANDA_GREEN }}
              ></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Hours Mentored</p>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: RWANDA_GREEN }}
              ></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">
                Total Booked Sessions
              </p>
              <p className="text-3xl font-bold text-gray-900">2</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <div
                className="w-4 h-4"
                style={{ backgroundColor: RWANDA_GREEN }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* Upcoming Sessions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Upcoming Sessions
        </h2>
        <div className="text-center py-12">
          <p className="text-gray-500">No upcoming sessions scheduled</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
