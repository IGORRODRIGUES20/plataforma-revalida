import { createClient } from '@supabase/supabase-js'

// Configuração com fallback para evitar erros
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Cliente Supabase com verificação
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Função helper para verificar se Supabase está configurado
export const isSupabaseConfigured = () => {
  return !!(supabaseUrl && supabaseAnonKey)
}

export type Questao = {
  id: string
  materia: string
  numero: number
  enunciado: string
  alternativa_a: string
  alternativa_b: string
  alternativa_c: string
  alternativa_d: string
  gabarito: string
  justificativa: string
  dificuldade: 'fácil' | 'médio' | 'difícil'
  created_at: string
}

export type Flashcard = {
  id: string
  materia: string
  numero: number
  frente: string
  verso: string
  created_at: string
}
