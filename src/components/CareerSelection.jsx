import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, Clock, Play, Briefcase } from 'lucide-react';
import { careerPaths } from './data/examData';

const CareerSelection = () => {
  const navigate = useNavigate();
  const [selectedCareer, setSelectedCareer] = useState(null);

  // Get user profile from localStorage
  const getUserProfile = () => {
    try {
      const stored = localStorage.getItem('userProfile');
      return stored ? JSON.parse(stored) : {
        fieldOfWork: "Software Development",
        experienceLevel: "Intermediate",
      };
    } catch {
      return {
        fieldOfWork: "Software Development",
        experienceLevel: "Intermediate",
      };
    }
  };

  const userProfile = getUserProfile();

  // Filter careers based on user's field of work
  const getFilteredCareers = () => {
    const fieldMapping = {
      "Software Development": ["software-developer"],
      "Data Science": ["data-scientist"],
      "Product Management": ["product-manager"],
      "Digital Marketing": ["digital-marketer"],
      "UI/UX Design": ["software-developer"], // Map to software-developer for now
      Cybersecurity: ["software-developer"], // Map to software-developer for now
      "Business": ["business"],
      "Business Analysis": ["business"],
      "DevOps Engineering": ["software-developer"], // Map to software-developer for now
    };

    const relevantCareers = fieldMapping[userProfile.fieldOfWork] || [];

    // Build complete list and mark recommended
    const all = Object.keys(careerPaths).map((key) => ({
      id: key,
      ...careerPaths[key],
      recommended: relevantCareers.includes(key),
    }));

    // Sort with recommended first, keep all visible
    all.sort((a, b) => (b.recommended === a.recommended ? 0 : b.recommended ? 1 : -1));

    return all;
  };

  const availableCareers = getFilteredCareers();

  const handleCareerSelect = (careerId) => {
    setSelectedCareer(careerId);
    // Store selected career in localStorage
    localStorage.setItem('selectedCareer', careerId);
    // Navigate to exam with selected career
    navigate('/exam', { state: { selectedCareer: careerId } });
  };

  const countQuestions = (exam, level) => {
    if (!exam || !exam.questions) return 0;
    const q = exam.questions;
    if (Array.isArray(q)) return q.length;
    if (level && q[level]) {
      return Array.isArray(q[level]) ? q[level].length : 0;
    }
    return Object.values(q).reduce((acc, arr) => acc + (Array.isArray(arr) ? arr.length : 0), 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-blue-50 via-white to-blue-50">
            <div className="px-6 py-8 text-center">
              <div className="inline-flex items-center gap-2 mb-3">
                <Briefcase className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-semibold text-blue-800 bg-blue-100 px-3 py-1 rounded-full">Career Selection</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Choose Your Career Path</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Select the career path that best matches your goals. You'll take assessments tailored to your chosen career and experience level.
              </p>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <div className="text-center">
              <p className="text-sm text-gray-600">Field of Work</p>
              <p className="font-semibold text-gray-900">{userProfile.fieldOfWork}</p>
              <p className="text-sm text-gray-600 mt-2">Experience Level</p>
              <p className="font-semibold text-gray-900">{userProfile.experienceLevel}</p>
            </div>
          </div>
        </div>

        {/* Career Options */}
        <div className="max-w-4xl mx-auto">
          {availableCareers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableCareers.map((career) => (
                <div
                  key={career.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden hover:-translate-y-0.5"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{career.title}</h3>
                      {career.recommended && (
                        <div className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                          Recommended
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm mb-6">{career.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        <span>
                          Technical: {countQuestions(career.technical, userProfile.experienceLevel)} questions
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span>
                          Soft Skills: {countQuestions(career.soft, userProfile.experienceLevel)} questions
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span>
                          Duration: {career.technical.duration + career.soft.duration} minutes
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCareerSelect(career.id)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <Play className="w-5 h-5" />
                      Start {career.title} Assessment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">No Careers Available</h3>
                <p className="text-gray-600 mb-6">
                  No career assessments are currently available for your field of work. Please contact support for assistance.
                </p>
                <button
                  onClick={() => navigate('/')}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Go to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerSelection;
