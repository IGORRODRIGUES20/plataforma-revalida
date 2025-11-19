"use client"

import { useState } from 'react'
import { Activity, Atom, ChevronRight } from 'lucide-react'

interface OnboardingScreenProps {
  onComplete: (data: {
    periodo: string
    idade: string
    curso: string
    objetivos: string
    disponibilidade: string
  }) => void
}

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    periodo: '',
    idade: '',
    curso: '',
    objetivos: '',
    disponibilidade: ''
  })

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1)
    } else {
      onComplete(formData)
    }
  }

  const isStepValid = () => {
    switch (step) {
      case 1: return formData.periodo !== ''
      case 2: return formData.idade !== ''
      case 3: return formData.curso !== ''
      case 4: return formData.objetivos !== ''
      case 5: return formData.disponibilidade !== ''
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center p-4">
      {/* Elementos decorativos médicos */}
      <div className="absolute top-10 left-10 opacity-10">
        <Activity className="w-32 h-32 text-blue-500" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Atom className="w-32 h-32 text-green-500" />
      </div>

      <div className="w-full max-w-md">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`w-full h-2 rounded-full mx-1 transition-all duration-300 ${
                  s <= step 
                    ? 'bg-gradient-to-r from-blue-500 to-green-500' 
                    : 'bg-slate-200 dark:bg-slate-800'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
            Etapa {step} de 5
          </p>
        </div>

        {/* Card principal */}
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-blue-100 dark:border-slate-800">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  Bem-vindo ao NeuroReval PRO! 🩺
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Em qual período/semestre você está?
                </p>
              </div>
              <select
                value={formData.periodo}
                onChange={(e) => setFormData({ ...formData, periodo: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Selecione...</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((p) => (
                  <option key={p} value={p}>{p}º período</option>
                ))}
              </select>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  Qual sua idade?
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Isso nos ajuda a personalizar sua experiência
                </p>
              </div>
              <input
                type="number"
                value={formData.idade}
                onChange={(e) => setFormData({ ...formData, idade: e.target.value })}
                placeholder="Digite sua idade"
                className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  Qual seu curso?
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Vamos adaptar o conteúdo para você
                </p>
              </div>
              <select
                value={formData.curso}
                onChange={(e) => setFormData({ ...formData, curso: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Selecione...</option>
                <option value="medicina">Medicina</option>
                <option value="enfermagem">Enfermagem</option>
                <option value="odontologia">Odontologia</option>
                <option value="fisioterapia">Fisioterapia</option>
                <option value="farmacia">Farmácia</option>
                <option value="nutricao">Nutrição</option>
                <option value="biomedicina">Biomedicina</option>
              </select>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  Quais seus objetivos?
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  O que você deseja alcançar?
                </p>
              </div>
              <select
                value={formData.objetivos}
                onChange={(e) => setFormData({ ...formData, objetivos: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Selecione...</option>
                <option value="passar-semestre">Passar no semestre</option>
                <option value="residencia">Preparar para residência</option>
                <option value="concursos">Concursos públicos</option>
                <option value="revalida">Revalidação de diploma</option>
                <option value="aprimoramento">Aprimoramento geral</option>
              </select>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  Disponibilidade diária
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Quanto tempo você pode dedicar aos estudos?
                </p>
              </div>
              <select
                value={formData.disponibilidade}
                onChange={(e) => setFormData({ ...formData, disponibilidade: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Selecione...</option>
                <option value="30min">30 minutos</option>
                <option value="1h">1 hora</option>
                <option value="2h">2 horas</option>
                <option value="3h">3 horas</option>
                <option value="4h+">4+ horas</option>
              </select>
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {step === 5 ? 'Começar' : 'Próximo'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
