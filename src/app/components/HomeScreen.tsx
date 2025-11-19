"use client"

import { useState, useEffect } from 'react'
import { Clock, BookOpen, Brain, TrendingUp, Timer, Play, Pause, RotateCcw } from 'lucide-react'
import PomodoroTimer from './PomodoroTimer'

interface HomeScreenProps {
  userData: {
    periodo: string
    idade: string
    curso: string
    objetivos: string
    disponibilidade: string
  }
}

export default function HomeScreen({ userData }: HomeScreenProps) {
  const [showPomodoro, setShowPomodoro] = useState(false)
  const [stats, setStats] = useState({
    flashcardsToday: 0,
    quizzesToday: 0,
    studyStreak: 0
  })

  useEffect(() => {
    const savedStats = localStorage.getItem('dailyStats')
    if (savedStats) {
      setStats(JSON.parse(savedStats))
    }
  }, [])

  return (
    <div className="min-h-screen p-4 pt-6">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
            NeuroReval PRO
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Olá, {userData.curso ? `estudante de ${userData.curso}` : 'estudante'}! 👋
          </p>
        </div>

        {/* Pomodoro Card */}
        <div 
          onClick={() => setShowPomodoro(true)}
          className="bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl p-6 shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="flex items-center justify-between text-white">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Timer className="w-6 h-6" />
                <h3 className="text-xl font-bold">Pomodoro</h3>
              </div>
              <p className="text-blue-100 text-sm">
                Inicie uma sessão de foco
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Play className="w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-blue-100 dark:border-slate-800">
            <BookOpen className="w-6 h-6 text-blue-500 mb-2" />
            <p className="text-2xl font-bold text-slate-800 dark:text-white">{stats.flashcardsToday}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Flashcards</p>
          </div>
          
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-blue-100 dark:border-slate-800">
            <Brain className="w-6 h-6 text-green-500 mb-2" />
            <p className="text-2xl font-bold text-slate-800 dark:text-white">{stats.quizzesToday}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Quizzes</p>
          </div>
          
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-blue-100 dark:border-slate-800">
            <TrendingUp className="w-6 h-6 text-orange-500 mb-2" />
            <p className="text-2xl font-bold text-slate-800 dark:text-white">{stats.studyStreak}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Dias</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white px-2">
            Atalhos Rápidos
          </h3>
          
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-blue-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-3">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800 dark:text-white">Revisar Flashcards</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Continue de onde parou</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-blue-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-3">
                <Brain className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800 dark:text-white">Novo Quiz</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Teste seus conhecimentos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-blue-100 dark:border-slate-800">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
            Progresso Diário
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600 dark:text-slate-400">Meta de Flashcards</span>
                <span className="text-slate-800 dark:text-white font-semibold">{stats.flashcardsToday}/10</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((stats.flashcardsToday / 10) * 100, 100)}%` }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600 dark:text-slate-400">Meta de Quizzes</span>
                <span className="text-slate-800 dark:text-white font-semibold">{stats.quizzesToday}/5</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((stats.quizzesToday / 5) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pomodoro Modal */}
      {showPomodoro && (
        <PomodoroTimer onClose={() => setShowPomodoro(false)} />
      )}
    </div>
  )
}
