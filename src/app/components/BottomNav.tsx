"use client"

import { Home, BookOpen, Brain, User } from 'lucide-react'

interface BottomNavProps {
  currentScreen: 'home' | 'flashcards' | 'quiz' | 'profile'
  onNavigate: (screen: 'home' | 'flashcards' | 'quiz' | 'profile') => void
}

export default function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home' as const, icon: Home, label: 'Home' },
    { id: 'flashcards' as const, icon: BookOpen, label: 'Flashcards' },
    { id: 'quiz' as const, icon: Brain, label: 'Quiz' },
    { id: 'profile' as const, icon: User, label: 'Perfil' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-blue-100 dark:border-slate-800 z-50">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-around py-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentScreen === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center gap-1 px-6 py-2 rounded-2xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg scale-105' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5]' : 'stroke-[2]'}`} />
                <span className={`text-xs font-medium ${isActive ? 'font-semibold' : ''}`}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
