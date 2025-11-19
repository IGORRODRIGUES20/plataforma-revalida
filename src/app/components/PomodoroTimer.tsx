"use client"

import { useState, useEffect, useRef } from 'react'
import { X, Play, Pause, RotateCcw, Settings, Activity } from 'lucide-react'

interface PomodoroTimerProps {
  onClose: () => void
}

export default function PomodoroTimer({ onClose }: PomodoroTimerProps) {
  const [duration, setDuration] = useState(30) // minutos
  const [timeLeft, setTimeLeft] = useState(duration * 60) // segundos
  const [isRunning, setIsRunning] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false)
            playCompletionSound()
            savePomodoroSession()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, timeLeft])

  const playCompletionSound = () => {
    // Som simples de conclusão
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.value = 800
    gainNode.gain.value = 0.3
    
    oscillator.start()
    setTimeout(() => oscillator.stop(), 200)
  }

  const savePomodoroSession = () => {
    const sessions = JSON.parse(localStorage.getItem('pomodoroSessions') || '[]')
    sessions.push({
      date: new Date().toISOString(),
      duration: duration
    })
    localStorage.setItem('pomodoroSessions', JSON.stringify(sessions))
  }

  const handleStart = () => {
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTimeLeft(duration * 60)
  }

  const handleDurationChange = (newDuration: number) => {
    setDuration(newDuration)
    setTimeLeft(newDuration * 60)
    setIsRunning(false)
    setShowSettings(false)
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const progress = ((duration * 60 - timeLeft) / (duration * 60)) * 100

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl shadow-2xl max-w-md w-full p-8 relative border-2 border-blue-200 dark:border-slate-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
        </button>

        {/* Settings Button */}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="absolute top-4 left-4 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <Settings className="w-6 h-6 text-slate-600 dark:text-slate-400" />
        </button>

        {/* Settings Panel */}
        {showSettings && (
          <div className="mb-6 p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl border border-blue-200 dark:border-slate-700">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-white mb-3">
              Duração da Sessão
            </h3>
            <div className="flex gap-2">
              {[25, 30, 50].map((min) => (
                <button
                  key={min}
                  onClick={() => handleDurationChange(min)}
                  className={`flex-1 py-2 rounded-xl font-semibold transition-all ${
                    duration === min
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
                  }`}
                >
                  {min}min
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8 mt-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Activity className="w-6 h-6 text-blue-500 animate-pulse" />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Sessão de Foco
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Mantenha o foco por {duration} minutos
          </p>
        </div>

        {/* Circular Timer */}
        <div className="relative w-64 h-64 mx-auto mb-8">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="128"
              cy="128"
              r="120"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-slate-200 dark:text-slate-700"
            />
            {/* Progress Circle */}
            <circle
              cx="128"
              cy="128"
              r="120"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 120}`}
              strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-linear"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>

          {/* Timer Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              {isRunning ? 'Em andamento...' : timeLeft === 0 ? 'Concluído!' : 'Pronto para começar'}
            </div>
          </div>

          {/* ECG Line Animation */}
          {isRunning && (
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 animate-pulse" />
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleReset}
            className="p-4 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all hover:scale-110"
          >
            <RotateCcw className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </button>

          <button
            onClick={isRunning ? handlePause : handleStart}
            disabled={timeLeft === 0}
            className="p-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 hover:shadow-2xl transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRunning ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white" />
            )}
          </button>

          <div className="w-14" /> {/* Spacer for symmetry */}
        </div>

        {/* Tips */}
        {!isRunning && timeLeft === duration * 60 && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-300 text-center">
              💡 Dica: Elimine distrações e foque 100% nos estudos durante a sessão
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
