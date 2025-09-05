"use client"

import { CheckCircle, ArrowRight } from "lucide-react"

const SectionComplete = ({ sectionType, onContinue, timeRemaining }) => {
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            {/* Timer at top */}
            <div className="fixed top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded-full px-4 py-2 shadow-lg border flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-mono text-lg font-semibold">{formatTime(timeRemaining)}</span>
                    <span className="text-gray-500 text-sm">remaining</span>
                </div>
            </div>

            {/* Main content */}
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
                {/* Success icon */}
                <div className="mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    {sectionType === "technical" ? "Technical Section Completed" : "Soft Skills Section Completed"} ✅
                </h1>

                {/* Message */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                    {sectionType === "technical"
                        ? "Great job! You've completed the technical questions. Ready to move on to the soft skills section?"
                        : "Excellent! You've completed both sections. Let's see your results!"}
                </p>

                {/* Continue button */}
                <button
                    onClick={onContinue}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                    Ready to Go
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

export default SectionComplete
