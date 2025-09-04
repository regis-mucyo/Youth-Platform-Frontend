"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

const ExamTimer = ({ duration, onTimeUp, isActive }) => {
    const [timeLeft, setTimeLeft] = useState(duration * 60) // Convert minutes to seconds

    useEffect(() => {
        if (!isActive) return

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    onTimeUp()
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [isActive, onTimeUp])

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }

    const getTimerColor = () => {
        const percentage = (timeLeft / (duration * 60)) * 100
        if (percentage > 50) return "text-green-600"
        if (percentage > 20) return "text-yellow-600"
        return "text-red-600"
    }

    return (
        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border">
            <Clock className={`w-5 h-5 ${getTimerColor()}`} />
            <span className={`font-mono text-lg font-semibold ${getTimerColor()}`}>{formatTime(timeLeft)}</span>
            <span className="text-muted-foreground text-sm">remaining</span>
        </div>
    )
}

export default ExamTimer
