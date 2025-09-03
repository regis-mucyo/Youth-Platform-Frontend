"use client"

import { getFilteredCareerPaths } from "../examData"
import { BookOpen, Users, Clock, Play } from "lucide-react"

// Helper to count questions regardless of storage shape
const countQuestions = (exam, level) => {
    if (!exam || !exam.questions) return 0
    const q = exam.questions
    if (Array.isArray(q)) return q.length
    if (level && q[level]) {
        return Array.isArray(q[level]) ? q[level].length : 0
    }
    return Object.values(q).reduce((acc, arr) => acc + (Array.isArray(arr) ? arr.length : 0), 0)
}

const ExamSelection = ({ onSelectCareer, userProfile }) => {
    const careerPaths = getFilteredCareerPaths(userProfile)

    const getDifficultyLevel = () => {
        const experienceMapping = {
            Beginner: "Entry Level",
            Intermediate: "Mid Level",
            Junior: "Junior Level",
            Senior: "Senior Level",
        }
        return experienceMapping[userProfile?.experienceLevel] || "All Levels"
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl">
                {/* Header */}
                <div className="bg-green-500 text-white p-8 rounded-t-2xl text-center shadow-lg">
                    <h1 className="text-3xl font-bold mb-2">
                        {userProfile?.fieldOfWork ? `${userProfile.fieldOfWork} Assessments` : "Career Assessment Platform"}
                    </h1>
                    <p className="text-green-100 max-w-2xl mx-auto">
                        {careerPaths.length > 0
                            ? `Choose from assessments tailored for your ${userProfile?.experienceLevel?.toLowerCase()} level experience`
                            : "Choose your career path and complete both technical and soft skills assessments"}
                    </p>
                </div>

                {/* Main Content */}
                <div className="bg-white p-8 rounded-b-2xl shadow-lg">
                    {careerPaths.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {careerPaths.map((career) => (
                                <div
                                    key={career.id}
                                    className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
                                >
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-semibold text-gray-800">{career.title}</h3>
                                            {userProfile?.fieldOfWork && (
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Recommended</span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 text-sm mb-6">{career.description}</p>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <BookOpen className="w-4 h-4 text-green-600" />
                                                <span>
                                                    Technical: {countQuestions(career.technical, userProfile?.experienceLevel)} questions ({career.technical.duration} min)
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Users className="w-4 h-4 text-green-600" />
                                                <span>
                                                    Soft Skills: {countQuestions(career.soft, userProfile?.experienceLevel)} questions ({career.soft.duration} min)
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Clock className="w-4 h-4 text-green-600" />
                                                <span>Total Duration: {career.technical.duration + career.soft.duration} minutes</span>
                                            </div>
                                        </div>

                                        {/* Conditional rendering for assessment button */}
                                        {countQuestions(career.technical, userProfile?.experienceLevel) > 0 &&
                                            countQuestions(career.soft, userProfile?.experienceLevel) > 0 ? (
                                            <button
                                                onClick={() => onSelectCareer(career.id)}
                                                className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Play className="w-4 h-4" />
                                                Start Complete Assessment
                                            </button>
                                        ) : (
                                            <div className="text-center text-sm text-red-500 py-3">
                                                Assessments not yet available for your experience level.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <div className="bg-white rounded-lg border border-gray-200 shadow-md p-8 max-w-md mx-auto">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">No Matching Assessments</h3>
                                <p className="text-gray-600 mb-6">
                                    We're working on adding assessments for your selected field and experience level. Please check back soon or contact
                                    support.
                                </p>
                                <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ExamSelection
