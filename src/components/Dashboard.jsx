import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Award, CheckCircle, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get exam results from navigation state
  const examResults = location.state?.examResults;
  const careerTitle = location.state?.careerTitle;
  const experienceLevel = location.state?.experienceLevel;

  // If no exam results, show basic dashboard
  if (!examResults) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Your Dashboard</h1>
          <p className="text-gray-600 mb-6">Complete your assessments to see your results here!</p>
          <button
            onClick={() => navigate('/exm')}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors mb-4"
          >
            Take Assessment
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  // Calculate percentages
  const technicalPercentage = Math.round((examResults.technicalResults.correct / examResults.technicalResults.total) * 100);
  const softPercentage = Math.round((examResults.softResults.correct / examResults.softResults.total) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="w-8 h-8 text-green-600" />
            <span className="text-sm font-semibold text-green-800 bg-green-100 px-3 py-1 rounded-full">
              Assessment Complete
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Congratulations! 🎉</h1>
          <p className="text-gray-600">You have successfully completed your assessments</p>
        </div>

        {/* Career Info */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{careerTitle}</h2>
                <p className="text-gray-600">{experienceLevel} Level</p>
              </div>
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
        </div>

        {/* Results Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Technical Results */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Technical Assessment</h3>
                <p className="text-sm text-gray-600">Passed (≥70%)</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Score</span>
                <span className="font-semibold">{technicalPercentage}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Correct Answers</span>
                <span>{examResults.technicalResults.correct} / {examResults.technicalResults.total}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${technicalPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Soft Skills Results */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Soft Skills Assessment</h3>
                <p className="text-sm text-gray-600">Passed (≥50%)</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Score</span>
                <span className="font-semibold">{softPercentage}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Correct Answers</span>
                <span>{examResults.softResults.correct} / {examResults.softResults.total}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${softPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="max-w-md mx-auto text-center">
          <div className="space-y-4">
            <button
              onClick={() => navigate('/exm')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Retake Assessment
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
