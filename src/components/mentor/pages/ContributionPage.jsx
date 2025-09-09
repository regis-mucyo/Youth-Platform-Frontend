import React, { useState, useEffect } from "react";
import { Printer } from "lucide-react";

// Mock data to simulate dynamic values
const mockData = {
  totalHours: 125,
  totalSessions: 55,
  activeMentees: 18,
  userName: "Jane Doe",
};

// Certificate component to be rendered for printing
const Certificate = ({
  userName,
  totalHours,
  totalSessions,
  onDownload,
  onGoBack,
  downloadState,
}) => {
  const getButtonText = () => {
    switch (downloadState) {
      case "downloading":
        return "Downloading...";
      case "downloaded":
        return "Downloaded!";
      default:
        return "Download";
    }
  };

  const isButtonDisabled = downloadState === "downloading";

  return (
    <>
      {/* This style block hides the print controls when printing */}
      <style>
        {`
          @media print {
            .print-controls {
              display: none;
            }
          }
        `}
      </style>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <div className="bg-white border-4 border-gray-800 shadow-xl w-full max-w-2xl text-center p-8 relative">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Certificate of Mentorship
          </h1>
          <p className="text-lg text-gray-600 mb-8">Awarded to</p>
          <p className="text-5xl font-extrabold text-blue-600 mb-8">
            {userName}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            In recognition of your outstanding contribution to the mentorship
            program.
          </p>
          <p className="text-sm text-gray-600 mb-8">
            Your dedication and expertise have been invaluable.
          </p>

          <div className="flex justify-around items-center text-center mb-12">
            <div>
              <p className="text-3xl font-bold text-gray-800">
                {totalSessions}
              </p>
              <p className="text-sm text-gray-500">Sessions Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-800">{totalHours}</p>
              <p className="text-sm text-gray-500">Hours Mentored</p>
            </div>
          </div>

          <div className="flex justify-between items-end mt-12">
            <div className="text-center">
              <div className="border-t-2 border-gray-400 w-48 mx-auto mt-2"></div>
              <p className="text-sm text-gray-600">
                Date: {new Date().toLocaleDateString()}
              </p>
            </div>
            <div className="text-center">
              <div className="border-t-2 border-gray-400 w-48 mx-auto mt-2"></div>
              <p className="text-sm text-gray-600">Program Director</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex space-x-4 print-controls">
          <button
            onClick={onDownload}
            disabled={isButtonDisabled}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg shadow-lg transition-colors font-medium
              ${
                isButtonDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            {downloadState === "downloading" && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            <span>{getButtonText()}</span>
          </button>
          <button
            onClick={onGoBack}
            className="px-6 py-3 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition-colors font-medium"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

const ContributionPage = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [data, setData] = useState(mockData);
  const [downloadState, setDownloadState] = useState("initial");

  const handleDownloadCertificate = () => {
    setShowCertificate(true);
  };

  const handleDownload = () => {
    setDownloadState("downloading");
    setTimeout(() => {
      setDownloadState("downloaded");
    }, 1500); // Simulate download delay
  };

  const handleGoBack = () => {
    setShowCertificate(false);
    setDownloadState("initial");
  };

  if (showCertificate) {
    return (
      <Certificate
        userName={data.userName}
        totalHours={data.totalHours}
        totalSessions={data.totalSessions}
        onDownload={handleDownload}
        onGoBack={handleGoBack}
        downloadState={downloadState}
      />
    );
  }

  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            My Contribution
          </h1>
          <p className="text-gray-600">
            Track your mentoring impact and achievements
          </p>
        </div>
        <button
          onClick={handleDownloadCertificate}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
        >
          <span>Download Certificate</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Impact Summary */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Impact Summary
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Hours Mentored</span>
              <span className="text-xl font-bold text-gray-900">
                {data.totalHours}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Booked Sessions</span>
              <span className="text-xl font-bold text-gray-900">
                {data.totalSessions}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Mentees</span>
              <span className="text-xl font-bold text-gray-900">
                {data.activeMentees}
              </span>
            </div>
          </div>
        </div>

        {/* Milestone Tracker */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Milestone Tracker
          </h2>
          <div className="space-y-4">
            {/* Completed Milestones */}
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
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
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
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
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
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

            {/* Progress Milestone */}
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
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "36%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500 mb-1">4.9</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500 mb-1">95%</div>
            <div className="text-sm text-gray-600">Session Completion</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-500 mb-1">12</div>
            <div className="text-sm text-gray-600">Certificates Earned</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500 mb-1">8</div>
            <div className="text-sm text-gray-600">Skills Shared</div>
          </div>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Achievements
        </h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
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
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
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

export default ContributionPage;
