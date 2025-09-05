"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"

const QuestionCard = ({ question, onAnswer, selectedAnswer, onNext, isLastQuestion }) => {
    const [localSelected, setLocalSelected] = useState(null)

    // Sync local selection with parent when question or external selection changes
    useEffect(() => {
        setLocalSelected(selectedAnswer ?? null)
    }, [question, selectedAnswer])

    const handleOptionSelect = (optionIndex) => {
        // Toggle selection: clicking the same option again will deselect it
        if (localSelected === optionIndex) {
            setLocalSelected(null)
            onAnswer(null)
        } else {
            setLocalSelected(optionIndex)
            onAnswer(optionIndex)
        }
    }

    const handleNext = () => {
        if (localSelected !== null) {
            onNext()
        }
    }

    return (
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <div className="space-y-8">
                <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed text-balance">{question.question}</h2>

                <div className="space-y-4">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionSelect(index)}
                            aria-pressed={localSelected === index}
                            className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/30 ${localSelected === index
                                ? "border-green-500 bg-green-50 text-gray-900 shadow-md"
                                : "border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:bg-green-50"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${localSelected === index ? "bg-green-500 text-white" : "bg-white text-gray-600 border border-gray-300"}`}
                                >
                                    {String.fromCharCode(65 + index)}
                                </div>
                                <span className="text-base font-medium leading-relaxed">{option}</span>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="flex justify-end pt-6">
                    <button
                        onClick={handleNext}
                        disabled={localSelected === null}
                        className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-200 ${localSelected !== null
                            ? "bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl transform hover:scale-105"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        {isLastQuestion ? "Finish" : "Next"}
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
