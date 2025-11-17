"use client"

import { useState } from "react"
import { Brain, BookOpen, Target, Clock, Flame, Calendar, TrendingUp, Award, ChevronRight, Play, CheckCircle2, Sparkles, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { estatisticasBanco } from "@/data/questoes"
import { estatisticasFlashcards } from "@/data/flashcards"

export default function Home() {
  const [activeTab, setActiveTab] = useState("home")
  const [conteudoCarregado, setConteudoCarregado] = useState(false)
  const [gerandoIA, setGerandoIA] = useState(false)

  const handleCarregarConteudo = () => {
    setConteudoCarregado(true)
  }

  const handleGerarQuestoesIA = () => {
    setGerandoIA(true)
    // Simula geração de questões por IA
    setTimeout(() => {
      setGerandoIA(false)
      alert("✨ 50 novas questões geradas por IA foram adicionadas ao banco!\n\nTemas: Cardiologia, Neurologia, Endocrinologia\nDificuldade: Mista\nFormato: REVALIDA")
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F9FA] via-white to-[#F0F0F5]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#5B4BDF] to-[#1D6FFF] rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">NeuroReval PRO</h1>
                <p className="text-xs text-gray-500">Preparação Inteligente</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Award className="w-4 h-4 mr-2" />
              Premium
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="hidden">
            <TabsTrigger value="home">Início</TabsTrigger>
            <TabsTrigger value="decks">Decks</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
          </TabsList>

          {/* HOME TAB */}
          <TabsContent value="home" className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center space-y-3 py-6">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Bem-vindo ao NeuroReval PRO
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Preparação inteligente e baseada em evidências para o REVALIDA
              </p>
            </div>

            {/* Main Card - Banco Permanente */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-[#5B4BDF] to-[#1D6FFF] border-0 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
              
              <div className="relative p-8 sm:p-10">
                {!conteudoCarregado ? (
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="space-y-4 flex-1">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Brain className="w-5 h-5 text-white" />
                        <span className="text-sm font-medium text-white">Banco Permanente REVALIDA</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
                        Acesse {estatisticasBanco.total} questões e {estatisticasFlashcards.total} flashcards organizados por competência
                      </h3>
                      <p className="text-white/80 text-base">
                        Conteúdo atualizado e validado por especialistas
                      </p>
                    </div>
                    <Button 
                      size="lg" 
                      onClick={handleCarregarConteudo}
                      className="bg-white text-[#5B4BDF] hover:bg-gray-100 shadow-xl rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-105"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Carregar Conteúdo
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                      <div>
                        <h3 className="text-2xl font-semibold text-white">Conteúdo Carregado com Sucesso!</h3>
                        <p className="text-white/80">Banco completo disponível para estudo</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="text-4xl font-bold text-white mb-2">{estatisticasBanco.total}</div>
                        <div className="text-white/80 text-sm mb-4">Questões Disponíveis</div>
                        <div className="space-y-2 text-sm text-white/70">
                          <div className="flex justify-between">
                            <span>Clínica Médica</span>
                            <span className="font-semibold">{estatisticasBanco.porMateria['Clínica Médica']}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Pediatria</span>
                            <span className="font-semibold">{estatisticasBanco.porMateria['Pediatria']}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>GO</span>
                            <span className="font-semibold">{estatisticasBanco.porMateria['Ginecologia e Obstetrícia']}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Cirurgia</span>
                            <span className="font-semibold">{estatisticasBanco.porMateria['Cirurgia']}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>MFC</span>
                            <span className="font-semibold">{estatisticasBanco.porMateria['Medicina da Família e Comunidade']}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saúde Pública</span>
                            <span className="font-semibold">{estatisticasBanco.porMateria['Saúde Pública / Epidemiologia']}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Urgência</span>
                            <span className="font-semibold">{estatisticasBanco.porMateria['Urgência e Emergência']}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="text-4xl font-bold text-white mb-2">{estatisticasFlashcards.total}</div>
                        <div className="text-white/80 text-sm mb-4">Flashcards Disponíveis</div>
                        <div className="space-y-2 text-sm text-white/70">
                          <div className="flex justify-between">
                            <span>Clínica Médica</span>
                            <span className="font-semibold">{estatisticasFlashcards.porMateria['Clínica Médica']}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Pediatria</span>
                            <span className="font-semibold">{estatisticasFlashcards.porMateria['Pediatria']}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>GO</span>
                            <span className="font-semibold">{estatisticasFlashcards.porMateria['Ginecologia e Obstetrícia']}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Cirurgia</span>
                            <span className="font-semibold">{estatisticasFlashcards.porMateria['Cirurgia']}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>MFC</span>
                            <span className="font-semibold">{estatisticasFlashcards.porMateria['Medicina da Família e Comunidade']}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saúde Pública</span>
                            <span className="font-semibold">{estatisticasFlashcards.porMateria['Saúde Pública / Epidemiologia']}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Urgência</span>
                            <span className="font-semibold">{estatisticasFlashcards.porMateria['Urgência e Emergência']}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        onClick={() => setActiveTab("quizzes")}
                        className="flex-1 bg-white text-[#5B4BDF] hover:bg-gray-100"
                      >
                        <Target className="w-4 h-4 mr-2" />
                        Iniciar Quiz
                      </Button>
                      <Button 
                        onClick={() => setActiveTab("decks")}
                        className="flex-1 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Ver Flashcards
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* AI Generator Card - NOVO */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 border-0 shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-24 -mt-24" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
              
              <div className="relative p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Sparkles className="w-5 h-5 text-white" />
                      <span className="text-sm font-medium text-white">Gerador de Questões IA</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
                      Gere questões originais com Inteligência Artificial
                    </h3>
                    <p className="text-white/90 text-base">
                      Questões inéditas no padrão REVALIDA, criadas instantaneamente por IA avançada
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                        ✨ Enunciados clínicos contextualizados
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                        🎯 4 alternativas + gabarito
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white">
                        📚 Justificativas detalhadas
                      </span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    onClick={handleGerarQuestoesIA}
                    disabled={gerandoIA}
                    className="bg-white text-emerald-600 hover:bg-gray-100 shadow-xl rounded-xl px-8 py-6 text-base font-semibold transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {gerandoIA ? (
                      <>
                        <Wand2 className="w-5 h-5 mr-2 animate-spin" />
                        Gerando...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-5 h-5 mr-2" />
                        Gerar com IA
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Daily Progress Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="p-6 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                    <Flame className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">7</span>
                </div>
                <h4 className="text-sm font-medium text-gray-600 mb-1">Streak</h4>
                <p className="text-xs text-gray-500">dias consecutivos</p>
              </Card>

              <Card className="p-6 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5B4BDF] to-[#1D6FFF] rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">24</span>
                </div>
                <h4 className="text-sm font-medium text-gray-600 mb-1">Cards Hoje</h4>
                <p className="text-xs text-gray-500">revisados com sucesso</p>
              </Card>

              <Card className="p-6 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3CCB7F] to-emerald-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900">2h 15m</span>
                </div>
                <h4 className="text-sm font-medium text-gray-600 mb-1">Tempo de Estudo</h4>
                <p className="text-xs text-gray-500">sessões Pomodoro</p>
              </Card>
            </div>

            {/* Quick Actions Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Ações Rápidas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card 
                  className="p-6 bg-white border border-gray-200 hover:border-[#5B4BDF] hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => setActiveTab("decks")}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-[#5B4BDF]" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Decks</h4>
                  <p className="text-sm text-gray-600 mb-4">Organize seu material de estudo com eficiência.</p>
                  <div className="flex items-center text-[#5B4BDF] text-sm font-medium">
                    Acessar <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>

                <Card className="p-6 bg-white border border-gray-200 hover:border-[#1D6FFF] hover:shadow-xl transition-all cursor-pointer group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-[#1D6FFF]" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Pomodoro</h4>
                  <p className="text-sm text-gray-600 mb-4">Sessões de estudo estruturadas para máxima produtividade.</p>
                  <div className="flex items-center text-[#1D6FFF] text-sm font-medium">
                    Iniciar <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>

                <Card 
                  className="p-6 bg-white border border-gray-200 hover:border-[#3CCB7F] hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => setActiveTab("quizzes")}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-[#3CCB7F]" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Quizzes</h4>
                  <p className="text-sm text-gray-600 mb-4">Avalie seu domínio por tema ou dificuldade.</p>
                  <div className="flex items-center text-[#3CCB7F] text-sm font-medium">
                    Começar <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>

                <Card 
                  className="p-6 bg-white border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => setActiveTab("profile")}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Metas</h4>
                  <p className="text-sm text-gray-600 mb-4">Monitore indicadores de desempenho e alcance metas semanais.</p>
                  <div className="flex items-center text-orange-500 text-sm font-medium">
                    Ver Progresso <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </div>
            </div>

            {/* Weekly Progress */}
            <Card className="p-6 sm:p-8 bg-white border border-gray-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Progresso Semanal</h3>
                <Button variant="ghost" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Esta Semana
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Meta de Questões</span>
                    <span className="text-sm font-semibold text-gray-900">68/100</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Meta de Flashcards</span>
                    <span className="text-sm font-semibold text-gray-900">142/200</span>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Tempo de Estudo</span>
                    <span className="text-sm font-semibold text-gray-900">12h 30m / 20h</span>
                  </div>
                  <Progress value={62.5} className="h-2" />
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* DECKS TAB */}
          <TabsContent value="decks" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Meus Decks</h2>
                <p className="text-sm text-gray-600 mt-1">Organize e revise seus flashcards por especialidade</p>
              </div>
              <Button className="bg-[#5B4BDF] hover:bg-[#4a3bc8]">
                <BookOpen className="w-4 h-4 mr-2" />
                Novo Deck
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Clínica Médica", cards: estatisticasFlashcards.porMateria['Clínica Médica'], due: 12, accuracy: 87, color: "from-red-500 to-pink-500" },
                { title: "Pediatria", cards: estatisticasFlashcards.porMateria['Pediatria'], due: 8, accuracy: 92, color: "from-blue-500 to-cyan-500" },
                { title: "Ginecologia e Obstetrícia", cards: estatisticasFlashcards.porMateria['Ginecologia e Obstetrícia'], due: 15, accuracy: 79, color: "from-pink-500 to-rose-500" },
                { title: "Cirurgia", cards: estatisticasFlashcards.porMateria['Cirurgia'], due: 6, accuracy: 94, color: "from-orange-500 to-amber-500" },
                { title: "Medicina da Família", cards: estatisticasFlashcards.porMateria['Medicina da Família e Comunidade'], due: 10, accuracy: 85, color: "from-green-500 to-emerald-500" },
                { title: "Saúde Pública", cards: estatisticasFlashcards.porMateria['Saúde Pública / Epidemiologia'], due: 7, accuracy: 90, color: "from-purple-500 to-indigo-500" },
                { title: "Urgência e Emergência", cards: estatisticasFlashcards.porMateria['Urgência e Emergência'], due: 9, accuracy: 88, color: "from-red-600 to-orange-600" },
              ].map((deck, idx) => (
                <Card key={idx} className="p-6 bg-white border border-gray-200 hover:shadow-xl transition-all cursor-pointer group">
                  <div className={`w-full h-2 bg-gradient-to-r ${deck.color} rounded-full mb-4`} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{deck.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Total de cards</span>
                      <span className="font-semibold text-gray-900">{deck.cards}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Para revisar</span>
                      <span className="font-semibold text-orange-600">{deck.due}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Taxa de acerto</span>
                      <span className="font-semibold text-[#3CCB7F]">{deck.accuracy}%</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Estudar Agora
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* QUIZZES TAB */}
          <TabsContent value="quizzes" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Quizzes Profissionais</h2>
                <p className="text-sm text-gray-600 mt-1">Teste seu conhecimento com questões estilo REVALIDA</p>
              </div>
              <Button className="bg-[#1D6FFF] hover:bg-[#1557cc]">
                <Target className="w-4 h-4 mr-2" />
                Novo Quiz
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-[#5B4BDF] to-[#1D6FFF] border-0 text-white">
                <h3 className="text-xl font-semibold mb-4">Quiz Rápido</h3>
                <p className="text-white/80 mb-6">10 questões aleatórias para revisão diária</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-sm">Todas as competências</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-sm">Dificuldade mista</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-sm">~15 minutos</span>
                  </div>
                </div>
                <Button className="w-full bg-white text-[#5B4BDF] hover:bg-gray-100">
                  Iniciar Quiz Rápido
                </Button>
              </Card>

              <Card className="p-6 bg-white border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quiz Personalizado</h3>
                <p className="text-gray-600 mb-6">Configure seu próprio simulado</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Tema</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B4BDF] focus:border-transparent">
                      <option>Todas as áreas</option>
                      <option>Clínica Médica ({estatisticasBanco.porMateria['Clínica Médica']} questões)</option>
                      <option>Pediatria ({estatisticasBanco.porMateria['Pediatria']} questões)</option>
                      <option>Ginecologia e Obstetrícia ({estatisticasBanco.porMateria['Ginecologia e Obstetrícia']} questões)</option>
                      <option>Cirurgia ({estatisticasBanco.porMateria['Cirurgia']} questões)</option>
                      <option>Medicina da Família ({estatisticasBanco.porMateria['Medicina da Família e Comunidade']} questões)</option>
                      <option>Saúde Pública ({estatisticasBanco.porMateria['Saúde Pública / Epidemiologia']} questões)</option>
                      <option>Urgência e Emergência ({estatisticasBanco.porMateria['Urgência e Emergência']} questões)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Dificuldade</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B4BDF] focus:border-transparent">
                      <option>Mista</option>
                      <option>Fácil</option>
                      <option>Média</option>
                      <option>Difícil</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Número de questões</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B4BDF] focus:border-transparent">
                      <option>10 questões</option>
                      <option>20 questões</option>
                      <option>50 questões</option>
                      <option>100 questões</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-[#1D6FFF] hover:bg-[#1557cc]">
                  Criar Quiz
                </Button>
              </Card>
            </div>

            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Histórico de Quizzes</h3>
              <div className="space-y-3">
                {[
                  { title: "Cardiologia - 20 questões", score: 85, date: "Hoje, 14:30", time: "18min" },
                  { title: "Quiz Rápido Misto", score: 90, date: "Ontem, 09:15", time: "12min" },
                  { title: "Neurologia - 50 questões", score: 78, date: "2 dias atrás", time: "45min" },
                ].map((quiz, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{quiz.title}</h4>
                      <p className="text-sm text-gray-600">{quiz.date} • {quiz.time}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${quiz.score >= 80 ? 'text-[#3CCB7F]' : 'text-orange-500'}`}>
                        {quiz.score}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* PROFILE TAB */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#5B4BDF] to-[#1D6FFF] border-0 text-white">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl font-bold">
                  DR
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-2xl font-semibold mb-2">Dr. Estudante</h2>
                  <p className="text-white/80 mb-4">Membro Premium • Desde Janeiro 2024</p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">🔥 7 dias de streak</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">⭐ Nível 12</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">🏆 Top 5%</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-6 bg-white border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#5B4BDF] mb-2">1,247</div>
                  <div className="text-sm text-gray-600">Questões Respondidas</div>
                </div>
              </Card>
              <Card className="p-6 bg-white border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1D6FFF] mb-2">3,892</div>
                  <div className="text-sm text-gray-600">Flashcards Revisados</div>
                </div>
              </Card>
              <Card className="p-6 bg-white border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3CCB7F] mb-2">84%</div>
                  <div className="text-sm text-gray-600">Taxa de Acerto Média</div>
                </div>
              </Card>
              <Card className="p-6 bg-white border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">127h</div>
                  <div className="text-sm text-gray-600">Tempo Total de Estudo</div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Desempenho Semanal</h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {[65, 78, 82, 70, 88, 92, 85].map((value, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-gradient-to-t from-[#5B4BDF] to-[#1D6FFF] rounded-t-lg transition-all hover:opacity-80" style={{ height: `${value}%` }} />
                    <span className="text-xs text-gray-600">
                      {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][idx]}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Conquistas Recentes</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: "🔥", title: "Semana Perfeita", desc: "7 dias seguidos" },
                  { icon: "🎯", title: "Precisão", desc: "90% de acerto" },
                  { icon: "📚", title: "Estudioso", desc: "100 cards/dia" },
                  { icon: "⚡", title: "Velocidade", desc: "Quiz em 10min" },
                ].map((achievement, idx) => (
                  <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <div className="font-semibold text-gray-900 text-sm">{achievement.title}</div>
                    <div className="text-xs text-gray-600">{achievement.desc}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Configurações</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  Preferências de Estudo
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Notificações
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Backup e Sincronização
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Tema Claro/Escuro
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === "home" 
                  ? "text-[#5B4BDF] bg-purple-50" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Brain className="w-5 h-5" />
              <span className="text-xs font-medium">Início</span>
            </button>
            <button
              onClick={() => setActiveTab("decks")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === "decks" 
                  ? "text-[#5B4BDF] bg-purple-50" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-xs font-medium">Decks</span>
            </button>
            <button
              onClick={() => setActiveTab("quizzes")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === "quizzes" 
                  ? "text-[#5B4BDF] bg-purple-50" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Target className="w-5 h-5" />
              <span className="text-xs font-medium">Quizzes</span>
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === "profile" 
                  ? "text-[#5B4BDF] bg-purple-50" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Award className="w-5 h-5" />
              <span className="text-xs font-medium">Perfil</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Spacing for Fixed Nav */}
      <div className="h-20" />
    </div>
  )
}
