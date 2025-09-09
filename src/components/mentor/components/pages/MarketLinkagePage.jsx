// src/mentor/components/pages/MarketLinkagePage.jsx
import React from "react";
import { Search, Share2, Briefcase } from "lucide-react";

// 🇷🇼 Rwanda Flag Colors — ONLY
const RWANDA_BLUE = "#00A1DE";
const RWANDA_YELLOW = "#FFDD00";
const RWANDA_GREEN = "#00A651";

const MarketLinkagePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Market Linkage
        </h1>
        <p className="text-gray-600">Discover opportunities for your mentees</p>
      </div>
      {/* Top Talent Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Top Talent</h2>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Filter by field or name"
              className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              style={{
                borderColor: RWANDA_BLUE,
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = `0 0 0 3px ${RWANDA_YELLOW}`)
              }
              onBlur={(e) => (e.target.style.boxShadow = "")}
            />
          </div>
        </div>
        {/* Talent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Emma Wilson Card */}
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">EW</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Emma Wilson</h3>
                <p className="text-sm text-gray-500">
                  Frontend Development • Startup Inc
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Junior developer learning React
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                React
              </span>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                JavaScript
              </span>
            </div>
          </div>
          {/* Michael Park Card */}
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">MP</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Michael Park</h3>
                <p className="text-sm text-gray-500">
                  Data Science • Tech Corp
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Transitioning to data science
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                Python
              </span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">
                Machine Learning
              </span>
            </div>
          </div>
          {/* Alice Smith Card */}
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AS</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Alice Smith</h3>
                <p className="text-sm text-gray-500">
                  UX Design • Design Studio
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Seeking UX mentorship opportunities
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">
                Figma
              </span>
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">
                UI Design
              </span>
            </div>
          </div>
        </div>
        {/* Opportunity Tags */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              Job
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Internship
            </span>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full flex items-center">
              <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
              Bootcamp
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center">
              <svg
                className="w-3 h-3 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Webinar
            </span>
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
            style={{ backgroundColor: RWANDA_GREEN }}
          >
            <Share2 size={16} className="mr-2" />
            Share Opportunity
          </button>
        </div>
      </div>
      {/* Job Opportunities Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Available Opportunities
        </h2>
        {/* Filter Tabs */}
        <div className="flex space-x-6 mb-6 border-b border-gray-200">
          <button
            className="pb-2 px-1 border-b-2 border-green-500 text-green-600 font-medium text-sm"
            style={{ borderColor: RWANDA_GREEN, color: RWANDA_GREEN }}
          >
            All
          </button>
          <button className="pb-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
            Jobs
          </button>
          <button className="pb-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
            Internships
          </button>
          <button className="pb-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
            Bootcamps
          </button>
          <button className="pb-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">
            Webinars
          </button>
        </div>
        {/* Empty State */}
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8zM16 10h.01M12 14h.01M8 14h.01M8 10h.01M12 10h.01M16 14h.01"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-lg mb-2">
            No job opportunities available at the moment
          </p>
          <p className="text-gray-400 text-sm">
            Check back later for new opportunities or share your own!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketLinkagePage;
