"use client"

import { useState } from "react"
import ExamTimer from "./ExamTimer"
import ProgressBar from "./ProgressBar"
import QuestionCard from "./QuestionCard"
import { useNavigate } from 'react-router-dom';

const ExamInterface = ({ exam, careerTitle, examType, onExamComplete, onBackToSelection, userProfile }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeUp, setTimeUp] = useState(false)
  const navigate = useNavigate();

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
      // This is the last question of the current exam type
      completeExam();
    }
  }

  const handleTimeUp = () => {
    setTimeUp(true)
    completeExam()
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

  const currentQ = exam.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{careerTitle}</h1>
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground">{exam.title}</p>
              {userProfile?.experienceLevel && (
                <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                  {userProfile.experienceLevel} Level
                </span>
              )}
            </div>
          </div>
          <ExamTimer duration={exam.duration} onTimeUp={handleTimeUp} isActive={true} />
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
            <h2 className="text-2xl font-bold text-green-600 mb-4">{examType === "technical" ? "Technical Assessment Complete!" : "Assessment Complete!"}</h2>
            <p className="text-gray-600 mb-6">
              {examType === "technical"
                ? "You have finished the technical assessment. Click below to continue to the soft skills assessment."
                : "You have finished both assessments. Please proceed to see your results."}
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
                Proceed to Results
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ExamInterface
