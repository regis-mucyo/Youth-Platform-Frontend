"use client"

import { Award, PartyPopper, CheckCircle, XCircle } from "lucide-react"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const StatBar = ({ label, percentage, correct, total, pass, passText }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500">{label}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${pass ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {pass ? passText : `Needs ${passText}`}
        </span>
      </div>

      <div className="flex items-end gap-3 mb-4">
        <div className="text-4xl font-extrabold text-gray-900">{percentage}<span className="text-xl align-top">%</span></div>
        <div className="text-gray-500 mb-2">({correct} / {total} correct)</div>
      </div>

      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${pass ? "bg-green-500" : "bg-yellow-500"}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

const ExamResults = ({
  careerTitle,
  technicalResults,
  softResults,
  onBackToSelection,
  onRetakeExam,
  totalTimeUsed,
}) => {
  const navigate = useNavigate();


  const overallTechnicalPercentage = Math.round((technicalResults.correct / technicalResults.total) * 100);
  const overallSoftPercentage = Math.round((softResults.correct / softResults.total) * 100);

  const handleProceedToDashboard = () => {
    // Update user profile to reflect exam completion
    const userProfileString = localStorage.getItem('userProfile');
    if (userProfileString) {
      const userProfile = JSON.parse(userProfileString);
      userProfile.hasCompletedExams = true;
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
    navigate('/welcome');
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header Banner */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 pt-10 pb-16">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                {careerTitle && (
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-green-800 bg-green-100 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                    {careerTitle}
                  </span>
                )}
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
                  Assessment Summary
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                Assessment Complete!
              </h1>
              <p className="mt-2 text-gray-600 max-w-2xl">
                Below are your scores for both Technical and Soft Skills assessments, each shown out of 100%.
              </p>
            </div>

            {/* Sticker */}
            <div className="shrink-0">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-green-200 shadow-md flex items-center justify-center">
                  <Award className="w-12 h-12 text-green-600" />
                </div>
                <PartyPopper className="w-6 h-6 text-yellow-500 absolute -top-2 -right-3 rotate-12" />
                <PartyPopper className="w-5 h-5 text-pink-500 absolute -bottom-2 -left-2 -rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scores Grid */}
      <div className="mx-auto max-w-5xl px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatBar
            label="Technical Assessment"
            percentage={overallTechnicalPercentage}
            correct={technicalResults.correct}
            total={technicalResults.total}
            pass={true}
            passText="Score"
          />

          <StatBar
            label="Soft Skills Assessment"
            percentage={overallSoftPercentage}
            correct={softResults.correct}
            total={softResults.total}
            pass={true}
            passText="Score"
          />
        </div>

        {/* Result State */}
        <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <div className={`text-lg font-semibold text-green-700`}>
              Assessment Complete!
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleProceedToDashboard}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
              Proceed to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamResults
