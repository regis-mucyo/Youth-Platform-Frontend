"use client"

import { Clock, CheckCircle, XCircle } from "lucide-react"
import { useNavigate } from 'react-router-dom';

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

    const overallScore = {
        correct: technicalResults.correct + softResults.correct,
        total: technicalResults.total + softResults.total,
        percentage: Math.round(
            ((technicalResults.correct + softResults.correct) / (technicalResults.total + softResults.total)) * 100,
        ),
    }

    // const hasPassedTechnical = overallTechnicalPercentage >= 70;
    // const hasPassedSoft = overallSoftPercentage >= 70;
    // const hasPassedOverall = hasPassedTechnical && hasPassedSoft;

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }

    const handleProceedToDashboard = () => {
        navigate('/dashboard');
    }

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center">
                <div className="mb-6">
                    <div className="w-20 h-20 mx-auto flex items-center justify-center">
                        {/* Always show check circle since there's no pass/fail for dashboard */}
                        <CheckCircle className="w-20 h-20 text-green-500" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-4 text-green-600">
                    Assessment Complete!
                </h1>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    You have successfully completed both technical and soft skills assessments. Here are your results.
                </p>

                {/* Technical Results */}
                <div className="border rounded-xl p-6 mb-4 bg-gray-50 border-gray-200">
                    <div className="font-bold text-xl mb-1 text-gray-700">
                        Technical Score: {overallTechnicalPercentage}%
                    </div>
                    <div className="text-gray-600 text-sm mb-2">
                        {technicalResults.correct} out of {technicalResults.total} questions correct
                    </div>
                    {/* <div className={`text-sm ${hasPassedTechnical ? "text-green-600" : "text-red-600"}`}>
                        {hasPassedTechnical ? "✅ Minimum 70% required - PASSED" : "❌ Minimum 70% required - NOT PASSED"}
                    </div> */}
                </div>

                {/* Soft Skills Results */}
                <div className="border rounded-xl p-6 mb-6 bg-gray-50 border-gray-200">
                    <div className="font-bold text-xl mb-1 text-gray-700">
                        Soft Skills Score: {overallSoftPercentage}%
                    </div>
                    <div className="text-gray-600 text-sm mb-2">
                        {softResults.correct} out of {softResults.total} questions correct
                    </div>
                    {/* <div className={`text-sm ${hasPassedSoft ? "text-green-600" : "text-red-600"}`}>
                        {hasPassedSoft ? "✅ Minimum 70% required - PASSED" : "❌ Minimum 70% required - NOT PASSED"}
                    </div> */}
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-8">
                    <div className="text-gray-700 font-medium mb-1">
                        Total Questions Completed: {overallScore.total}
                    </div>
                    {/* <div className="text-gray-600 flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>Time Used: {formatTime(totalTimeUsed || 0)}</span>
                    </div> */}
                </div>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={handleProceedToDashboard}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                    >
                        Proceed to Dashboard
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ExamResults
