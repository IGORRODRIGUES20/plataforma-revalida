"use client"

import { useState, useEffect } from 'react'
import { Home, BookOpen, Brain, User } from 'lucide-react'
import OnboardingScreen from './components/OnboardingScreen'
import HomeScreen from './components/HomeScreen'
import FlashcardsScreen from './components/FlashcardsScreen'
import QuizScreen from './components/QuizScreen'
import ProfileScreen from './components/ProfileScreen'
import BottomNav from './components/BottomNav'

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [currentScreen, setCurrentScreen] = useState<'home' | 'flashcards' | 'quiz' | 'profile'>('home')
  const [userData, setUserData] = useState({
    periodo: '',
    idade: '',
    curso: '',
    objetivos: '',
    disponibilidade: ''
  })

  useEffect(() => {
    const onboardingCompleted = localStorage.getItem('onboardingCompleted')
    if (onboardingCompleted) {
      setShowOnboarding(false)
      const savedUserData = localStorage.getItem('userData')
      if (savedUserData) {
        setUserData(JSON.parse(savedUserData))
      }
    }
  }, [])

  const handleOnboardingComplete = (data: typeof userData) => {
    setUserData(data)
    localStorage.setItem('userData', JSON.stringify(data))
    localStorage.setItem('onboardingCompleted', 'true')
    setShowOnboarding(false)
  }

  if (showOnboarding) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pb-20">
      {currentScreen === 'home' && <HomeScreen userData={userData} />}
      {currentScreen === 'flashcards' && <FlashcardsScreen />}
      {currentScreen === 'quiz' && <QuizScreen />}
      {currentScreen === 'profile' && <ProfileScreen userData={userData} />}
      
      <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
    </div>
  )
}
