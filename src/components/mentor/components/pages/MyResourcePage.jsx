// src/mentor/components/pages/MyResourcePage.jsx
import React from "react";
import { Search, FileText } from "lucide-react";

// 🇷🇼 Rwanda Flag Colors — ONLY
const RWANDA_BLUE = "#00A1DE";
const RWANDA_YELLOW = "#FFDD00";
const RWANDA_GREEN = "#00A651";

const MyResourcePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Resource</h1>
        <p className="text-gray-600">
          Share knowledge and resources with your mentees
        </p>
      </div>
      {/* Upload New Resource Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Upload New Resource
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resource Type
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-500"
              style={{
                borderColor: RWANDA_BLUE,
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = `0 0 0 3px ${RWANDA_YELLOW}`)
              }
              onBlur={(e) => (e.target.style.boxShadow = "")}
            >
              <option>Select type</option>
              <option>Document</option>
              <option>Video</option>
              <option>Link</option>
              <option>Tool</option>
              <option>Template</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Topic
            </label>
            <input
              type="text"
              placeholder="e.g. React Hooks"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Resource title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              style={{
                borderColor: RWANDA_BLUE,
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = `0 0 0 3px ${RWANDA_YELLOW}`)
              }
              onBlur={(e) => (e.target.style.boxShadow = "")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Audience Level
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-500"
              style={{
                borderColor: RWANDA_BLUE,
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = `0 0 0 3px ${RWANDA_YELLOW}`)
              }
              onBlur={(e) => (e.target.style.boxShadow = "")}
            >
              <option>Select level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            placeholder="Brief description of the resource"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            style={{
              borderColor: RWANDA_BLUE,
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = `0 0 0 3px ${RWANDA_YELLOW}`)
            }
            onBlur={(e) => (e.target.style.boxShadow = "")}
          />
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Upload or Link
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
            <div className="flex flex-col items-center">
              <svg
                className="w-12 h-12 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-gray-500 mb-2">
                Drag and drop files here or click to browse
              </p>
              <p className="text-sm text-gray-400">Or paste a URL here</p>
            </div>
            <input type="file" className="hidden" />
          </div>
          <div className="mt-4">
            <input
              type="url"
              placeholder="Or paste a URL here"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-500"
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
        <div className="mt-6">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            style={{ backgroundColor: RWANDA_GREEN }}
          >
            Upload Resource
          </button>
        </div>
      </div>
      {/* Resource Library Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Resource Library
          </h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search resources..."
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
            <select
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              style={{
                borderColor: RWANDA_BLUE,
              }}
              onFocus={(e) =>
                (e.target.style.boxShadow = `0 0 0 3px ${RWANDA_YELLOW}`)
              }
              onBlur={(e) => (e.target.style.boxShadow = "")}
            >
              <option>All Types</option>
              <option>Documents</option>
              <option>Videos</option>
              <option>Links</option>
              <option>Tools</option>
            </select>
          </div>
        </div>
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-500 text-lg mb-2">
            No resources uploaded yet
          </p>
          <p className="text-gray-400 text-sm">
            Upload your first resource to get started sharing knowledge with
            your mentees
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyResourcePage;
