// src/mentor/components/pages/MyContributionPage.jsx
import React from "react";
import { BarChart3 } from "lucide-react";

// 🇷🇼 Rwanda Flag Colors — ONLY
const RWANDA_BLUE = "#00A1DE";
const RWANDA_YELLOW = "#FFDD00";
const RWANDA_GREEN = "#00A651";

const MyContributionPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          My Contribution
        </h1>
        <p className="text-gray-600">
          Track your mentoring impact and achievements
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Impact Summary */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Impact Summary
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Hours Mentored</span>
              <span className="text-xl font-bold text-gray-900">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Booked Sessions</span>
              <span className="text-xl font-bold text-gray-900">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Mentees</span>
              <span className="text-xl font-bold text-gray-900">2</span>
            </div>
          </div>
        </div>
        {/* Milestone Tracker */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Milestone Tracker
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: RWANDA_GREEN }}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-700">Completed First Session</span>
            </div>
            <div className="flex items-center space-x-3">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: RWANDA_GREEN }}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-700">Reached 5 Sessions</span>
            </div>
            <div className="flex items-center space-x-3">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: RWANDA_GREEN }}
              >
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-700">Mentored 100+ Hours</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <span className="text-gray-500">Reach 50 Mentees</span>
                <div className="text-xs text-gray-400 mt-1">
                  Progress: 18/50
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "36%", backgroundColor: RWANDA_GREEN }}
                  ></div>
                </div>
              </div>
            </div>
            <button
              className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              style={{ backgroundColor: RWANDA_GREEN }}
            >
              Print Certificate
            </button>
          </div>
        </div>
      </div>
      {/* Additional Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-center">
            <div
              className="text-2xl font-bold mb-1"
              style={{ color: RWANDA_GREEN }}
            >
              4.9
            </div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-center">
            <div
              className="text-2xl font-bold mb-1"
              style={{ color: RWANDA_BLUE }}
            >
              95%
            </div>
            <div className="text-sm text-gray-600">Session Completion</div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-center">
            <div
              className="text-2xl font-bold mb-1"
              style={{ color: RWANDA_YELLOW }}
            >
              12
            </div>
            <div className="text-sm text-gray-600">Certificates Earned</div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-center">
            <div
              className="text-2xl font-bold mb-1"
              style={{ color: RWANDA_GREEN }}
            >
              8
            </div>
            <div className="text-sm text-gray-600">Skills Shared</div>
          </div>
        </div>
      </div>
      {/* Recent Achievements */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Achievements
        </h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: RWANDA_GREEN }}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Top Mentor Badge
              </p>
              <p className="text-xs text-gray-500">
                Earned for exceptional mentoring quality
              </p>
            </div>
            <div className="text-xs text-gray-400 ml-auto">2 days ago</div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: RWANDA_BLUE }}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                50 Sessions Milestone
              </p>
              <p className="text-xs text-gray-500">
                Successfully completed 50 mentoring sessions
              </p>
            </div>
            <div className="text-xs text-gray-400 ml-auto">1 week ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContributionPage;
