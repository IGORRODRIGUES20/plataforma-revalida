"use client"

import { useState, useEffect } from 'react'
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Trophy } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "Qual é o tratamento de primeira linha para hipertensão arterial em pacientes jovens sem comorbidades?",
    options: [
      "Betabloqueador",
      "IECA ou BRA",
      "Diurético tiazídico",
      "Bloqueador de canal de cálcio"
    ],
    correctAnswer: 1,
    explanation: "IECAs ou BRAs são primeira linha em jovens, pois têm efeito protetor cardiovascular e renal, além de boa tolerabilidade.",
    category: "Cardiologia"
  },
  {
    id: 2,
    question: "Qual antibiótico é primeira escolha para pneumonia comunitária em adulto previamente hígido?",
    options: [
      "Amoxicilina",
      "Azitromicina",
      "Levofloxacino",
      "Ceftriaxona"
    ],
    correctAnswer: 1,
    explanation: "Azitromicina é primeira escolha por cobrir os principais agentes (S. pneumoniae, M. pneumoniae, C. pneumoniae) com boa tolerabilidade.",
    category: "Pneumologia"
  },
  {
    id: 3,
    question: "Qual o tempo máximo para trombólise no AVC isquêmico agudo?",
    options: [
      "3 horas",
      "4,5 horas",
      "6 horas",
      "12 horas"
    ],
    correctAnswer: 1,
    explanation: "A janela terapêutica para trombólise com rtPA é de até 4,5 horas do início dos sintomas, com melhores resultados nas primeiras 3 horas.",
    category: "Neurologia"
  }
]

export default function QuizScreen() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  useEffect(() => {
    setQuestions(sampleQuestions)
  }, [])

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return // Já respondeu
    
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    setAnsweredQuestions(prev => prev + 1)
    
    if (answerIndex === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnsweredQuestions(0)
    setQuizCompleted(false)
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p className="text-slate-600 dark:text-slate-400">Carregando quiz...</p>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100)
    
    return (
      <div className="min-h-screen p-4 pt-6 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border-2 border-blue-200 dark:border-slate-700 text-center">
            <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
              Quiz Concluído!
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Parabéns por completar o quiz
            </p>
            
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-6 mb-6">
              <p className="text-white text-5xl font-bold mb-2">{percentage}%</p>
              <p className="text-blue-100">
                {score} de {questions.length} questões corretas
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Acertos</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">{score}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Erros</span>
                <span className="text-red-600 dark:text-red-400 font-semibold">{questions.length - score}</span>
              </div>
            </div>

            <button
              onClick={handleRestart}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Refazer Quiz
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4 pt-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
            Quiz
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Questão {currentQuestionIndex + 1} de {questions.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-600 dark:text-slate-400">Progresso</span>
            <span className="text-slate-800 dark:text-white font-semibold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Category Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
            {currentQuestion.category}
          </span>
        </div>

        {/* Question Card */}
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 mb-6 border-2 border-blue-200 dark:border-slate-700">
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === currentQuestion.correctAnswer
              const showResult = showExplanation

              let buttonClass = "w-full p-4 rounded-xl text-left transition-all border-2 "
              
              if (!showResult) {
                buttonClass += "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-500 hover:shadow-lg"
              } else if (isCorrect) {
                buttonClass += "bg-green-100 dark:bg-green-900/30 border-green-500 text-green-800 dark:text-green-300"
              } else if (isSelected && !isCorrect) {
                buttonClass += "bg-red-100 dark:bg-red-900/30 border-red-500 text-red-800 dark:text-red-300"
              } else {
                buttonClass += "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 opacity-50"
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {showResult && isCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <XCircle className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`rounded-2xl p-6 mb-6 border-2 ${
            selectedAnswer === currentQuestion.correctAnswer
              ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
              : 'bg-red-50 dark:bg-red-900/20 border-red-500'
          }`}>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
              {selectedAnswer === currentQuestion.correctAnswer ? '✅ Correto!' : '❌ Incorreto'}
            </h4>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {showExplanation && (
          <button
            onClick={handleNext}
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Score Display */}
        <div className="mt-6 flex justify-center gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{score}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Acertos</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">{answeredQuestions - score}</p>
            <p className="text-xs text-slate-600 dark:text-slate-400">Erros</p>
          </div>
        </div>
      </div>
    </div>
  )
}
