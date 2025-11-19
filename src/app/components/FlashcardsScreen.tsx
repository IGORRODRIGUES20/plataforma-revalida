"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, RotateCcw, Heart, BookOpen } from 'lucide-react'

interface Flashcard {
  id: number
  front: string
  back: string
  category: string
}

const sampleFlashcards: Flashcard[] = [
  {
    id: 1,
    front: "O que é a Síndrome Coronariana Aguda?",
    back: "Conjunto de manifestações clínicas decorrentes da ruptura de placa aterosclerótica com trombose coronariana, incluindo angina instável, IAM sem supra de ST e IAM com supra de ST.",
    category: "Cardiologia"
  },
  {
    id: 2,
    front: "Quais são os sinais clássicos de pneumonia?",
    back: "Febre, tosse produtiva, dor torácica pleurítica, dispneia e crepitações à ausculta pulmonar. Radiografia pode mostrar infiltrado.",
    category: "Pneumologia"
  },
  {
    id: 3,
    front: "O que caracteriza um AVC isquêmico?",
    back: "Déficit neurológico focal súbito causado por obstrução vascular cerebral, resultando em isquemia e necrose do tecido cerebral. Tratamento: trombólise em janela terapêutica.",
    category: "Neurologia"
  }
]

export default function FlashcardsScreen() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    // Carregar flashcards (exemplo com dados locais)
    setFlashcards(sampleFlashcards)
    
    const savedFavorites = localStorage.getItem('favoriteFlashcards')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const handleNext = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcards.length)
    }, 150)
  }

  const handlePrevious = () => {
    setIsFlipped(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length)
    }, 150)
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleFavorite = () => {
    const cardId = flashcards[currentIndex].id
    const newFavorites = favorites.includes(cardId)
      ? favorites.filter(id => id !== cardId)
      : [...favorites, cardId]
    
    setFavorites(newFavorites)
    localStorage.setItem('favoriteFlashcards', JSON.stringify(newFavorites))
  }

  const handleReset = () => {
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  if (flashcards.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600 dark:text-slate-400">Carregando flashcards...</p>
        </div>
      </div>
    )
  }

  const currentCard = flashcards[currentIndex]
  const isFavorite = favorites.includes(currentCard.id)

  return (
    <div className="min-h-screen p-4 pt-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
            Flashcards
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            {currentIndex + 1} de {flashcards.length}
          </p>
        </div>

        {/* Category Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
            {currentCard.category}
          </span>
        </div>

        {/* Flashcard */}
        <div 
          onClick={handleFlip}
          className="relative h-96 mb-6 cursor-pointer perspective-1000"
        >
          <div 
            className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front */}
            <div className="absolute inset-0 backface-hidden">
              <div className="h-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-blue-200 dark:border-slate-700 p-8 flex flex-col items-center justify-center">
                <BookOpen className="w-12 h-12 text-blue-500 mb-4" />
                <p className="text-xl text-center text-slate-800 dark:text-white font-medium">
                  {currentCard.front}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">
                  Toque para ver a resposta
                </p>
              </div>
            </div>

            {/* Back */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <div className="h-full bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center">
                <p className="text-lg text-center text-white leading-relaxed">
                  {currentCard.back}
                </p>
                <p className="text-sm text-blue-100 mt-6">
                  Toque para voltar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handlePrevious}
            className="p-4 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-blue-100 dark:border-slate-800"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </button>

          <div className="flex gap-3">
            <button
              onClick={handleFavorite}
              className={`p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 ${
                isFavorite
                  ? 'bg-gradient-to-r from-pink-500 to-red-500'
                  : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-blue-100 dark:border-slate-800'
              }`}
            >
              <Heart 
                className={`w-6 h-6 ${
                  isFavorite ? 'text-white fill-white' : 'text-slate-700 dark:text-slate-300'
                }`} 
              />
            </button>

            <button
              onClick={handleReset}
              className="p-4 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-blue-100 dark:border-slate-800"
            >
              <RotateCcw className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </button>
          </div>

          <button
            onClick={handleNext}
            className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500 shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-blue-100 dark:border-slate-800">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-600 dark:text-slate-400">Progresso</span>
            <span className="text-slate-800 dark:text-white font-semibold">
              {Math.round(((currentIndex + 1) / flashcards.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}
