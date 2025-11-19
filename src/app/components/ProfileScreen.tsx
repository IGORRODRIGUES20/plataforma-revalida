"use client"

import { useState, useEffect } from 'react'
import { User, Award, Clock, BookOpen, Brain, TrendingUp, Settings, LogOut } from 'lucide-react'

interface ProfileScreenProps {
  userData: {
    periodo: string
    idade: string
    curso: string
    objetivos: string
    disponibilidade: string
  }
}

export default function ProfileScreen({ userData }: ProfileScreenProps) {
  const [pomodoroStats, setPomodoroStats] = useState({
    totalSessions: 0,
    totalMinutes: 0,
    thisWeek: 0
  })

  const [studyStats, setStudyStats] = useState({
    flashcardsCompleted: 0,
    quizzesCompleted: 0,
    studyStreak: 0,
    totalStudyTime: 0
  })

  useEffect(() => {
    // Carregar estatísticas do Pomodoro
    const sessions = JSON.parse(localStorage.getItem('pomodoroSessions') || '[]')
    const totalMinutes = sessions.reduce((acc: number, session: any) => acc + session.duration, 0)
    
    // Sessões desta semana
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    const thisWeekSessions = sessions.filter((session: any) => 
      new Date(session.date) > oneWeekAgo
    )

    setPomodoroStats({
      totalSessions: sessions.length,
      totalMinutes,
      thisWeek: thisWeekSessions.length
    })

    // Carregar estatísticas de estudo
    const savedStats = localStorage.getItem('dailyStats')
    if (savedStats) {
      const stats = JSON.parse(savedStats)
      setStudyStats({
        flashcardsCompleted: stats.flashcardsToday || 0,
        quizzesCompleted: stats.quizzesToday || 0,
        studyStreak: stats.studyStreak || 0,
        totalStudyTime: Math.floor(totalMinutes / 60)
      })
    }
  }, [])

  const getBadge = () => {
    const total = pomodoroStats.totalSessions
    if (total >= 50) return { name: 'Residente', color: 'from-purple-500 to-pink-500', icon: '👨‍⚕️' }
    if (total >= 20) return { name: 'Interno', color: 'from-blue-500 to-cyan-500', icon: '🩺' }
    return { name: 'Calouro', color: 'from-green-500 to-emerald-500', icon: '📚' }
  }

  const badge = getBadge()

  const handleResetOnboarding = () => {
    if (confirm('Deseja realmente refazer o questionário inicial? Seus dados de estudo serão mantidos.')) {
      localStorage.removeItem('onboardingCompleted')
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen p-4 pt-6">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
            Perfil
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Acompanhe seu progresso
          </p>
        </div>

        {/* User Info Card */}
        <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl p-6 shadow-2xl text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl">
              {badge.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">Estudante</h2>
              <p className="text-blue-100 capitalize">{userData.curso || 'Medicina'}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-blue-100 text-xs mb-1">Período</p>
              <p className="text-xl font-bold">{userData.periodo}º</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <p className="text-blue-100 text-xs mb-1">Idade</p>
              <p className="text-xl font-bold">{userData.idade} anos</p>
            </div>
          </div>
        </div>

        {/* Badge Card */}
        <div className={`bg-gradient-to-r ${badge.color} rounded-2xl p-6 shadow-xl text-white text-center`}>
          <Award className="w-12 h-12 mx-auto mb-2" />
          <h3 className="text-2xl font-bold mb-1">{badge.name}</h3>
          <p className="text-sm opacity-90">
            {pomodoroStats.totalSessions} sessões de foco completadas
          </p>
        </div>

        {/* Pomodoro Stats */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-blue-100 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-blue-500" />
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
              Estatísticas Pomodoro
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Total de Sessões</span>
              <span className="text-2xl font-bold text-slate-800 dark:text-white">
                {pomodoroStats.totalSessions}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Minutos de Foco</span>
              <span className="text-2xl font-bold text-slate-800 dark:text-white">
                {pomodoroStats.totalMinutes}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-slate-600 dark:text-slate-400">Esta Semana</span>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                {pomodoroStats.thisWeek}
              </span>
            </div>
          </div>
        </div>

        {/* Study Stats */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-blue-100 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
              Estatísticas de Estudo
            </h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <BookOpen className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-800 dark:text-white">
                {studyStats.flashcardsCompleted}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Flashcards</p>
            </div>
            
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <Brain className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-800 dark:text-white">
                {studyStats.quizzesCompleted}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Quizzes</p>
            </div>
            
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
              <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-800 dark:text-white">
                {studyStats.studyStreak}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Dias seguidos</p>
            </div>
            
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-800 dark:text-white">
                {studyStats.totalStudyTime}h
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">Total</p>
            </div>
          </div>
        </div>

        {/* Goals Card */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-blue-100 dark:border-slate-800">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
            Seus Objetivos
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium text-slate-800 dark:text-white">Objetivo</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                  {userData.objetivos?.replace('-', ' ') || 'Aprimoramento geral'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium text-slate-800 dark:text-white">Disponibilidade</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {userData.disponibilidade || '1 hora'} por dia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={handleResetOnboarding}
            className="w-full p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-xl shadow-lg border border-blue-100 dark:border-slate-800 hover:shadow-xl transition-all flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300"
          >
            <Settings className="w-5 h-5" />
            Refazer Questionário Inicial
          </button>
        </div>
      </div>
    </div>
  )
}
