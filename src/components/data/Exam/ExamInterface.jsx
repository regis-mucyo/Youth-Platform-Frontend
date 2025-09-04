"use client"

import { useState, useEffect } from "react"
import ExamTimer from "./ExamTimer"
import ProgressBar from "./ProgressBar"
import QuestionCard from "./QuestionCard"
import { useNavigate } from 'react-router-dom';
import { BookOpen } from "lucide-react";

const ExamInterface = ({ exam, careerTitle, examType, onExamComplete, onBackToSelection, userProfile }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeUp, setTimeUp] = useState(false)
  const navigate = useNavigate();

  // Reset state when switching exams (e.g., from technical to soft)
  useEffect(() => {
    setCurrentQuestion(0)
    setAnswers({})
    setTimeUp(false)
  }, [examType, exam?.title])

  const handleAnswer = (questionId, answerIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      // Reached end of current section; show summary with continue button
      setCurrentQuestion(exam.questions.length)
    }
  }

  const handleTimeUp = () => {
    setTimeUp(true)
    if (examType === "soft") {
      // For soft skills, directly complete without showing summary
      completeExam();
    } else {
      // Show summary for technical
      setCurrentQuestion(exam.questions.length)
    }
  }

  const completeExam = () => {
    let correct = 0
    exam.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correct++
      }
    })

    const results = {
      correct,
      total: exam.questions.length,
      percentage: Math.round((correct / exam.questions.length) * 100),
      timeUp,
      examTitle: exam.title,
      examType,
      experienceLevel: userProfile?.experienceLevel,
      fieldOfWork: userProfile?.fieldOfWork,
    }

    onExamComplete(results);
  }

  const computeScore = () => {
    let correct = 0;
    exam.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correct++
      }
    })
    const total = exam.questions.length
    const percentage = Math.round((correct / total) * 100)
    return { correct, total, percentage }
  }

  const score = computeScore()

  const currentQ = exam.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        {/* Header Banner */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-green-50 via-white to-green-50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {careerTitle && (
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-green-800 bg-green-100 px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                        {careerTitle}
                      </span>
                    )}
                    {userProfile?.experienceLevel && (
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
                        {userProfile.experienceLevel} Level
                      </span>
                    )}
                  </div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {exam.title}
                  </h1>
                  <p className="text-gray-600 text-sm mt-1">
                    {examType === 'technical' ? 'Technical Assessment' : 'Soft Skills Assessment'}
                  </p>
                </div>
              </div>

              <div className="self-stretch sm:self-auto sm:mt-0">
                <ExamTimer key={`${examType}-${exam.title}`} duration={exam.duration} onTimeUp={handleTimeUp} isActive={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <ProgressBar current={currentQuestion} total={exam.questions.length} sectionTitle={exam.title} />
        </div>

        {/* Question or Continue Button */}
        {currentQuestion < exam.questions.length && !timeUp ? (
          <div className="max-w-4xl mx-auto">
            <QuestionCard
              question={currentQ}
              onAnswer={(answerIndex) => handleAnswer(currentQ.id, answerIndex)}
              selectedAnswer={answers[currentQ.id]}
              onNext={handleNext}
              isLastQuestion={currentQuestion === exam.questions.length - 1}
            />
          </div>
        ) : (
          <div className="max-w-md mx-auto text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              {examType === "technical"
                ? "Technical Assessment Complete!"
                : score.percentage >= 70
                  ? "Congratulations!"
                  : "Assessment Complete!"}
            </h2>
            <p className="text-gray-600 mb-6">
              {examType === "technical"
                ? "You have finished the technical assessment. Click below to continue to the soft skills assessment."
                : `You scored ${score.percentage}% (${score.correct} out of ${score.total} correct).`}
            </p>
            {examType === "technical" && (
              <button
                onClick={() => {
                  completeExam(); // This will trigger the onExamComplete in App.jsx to start soft skills
                  // App.jsx's handleExamComplete will call startExam for 'soft' which navigates to /exam again.
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Continue to Soft Skills
              </button>
            )}
            {examType === "soft" && (
              <button
                onClick={() => completeExam()}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                View Results
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ExamInterface
