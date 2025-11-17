// Banco de Flashcards REVALIDA - NeuroReval PRO
// Total planejado: 1000 flashcards

export interface Flashcard {
  id: number;
  materia: string;
  tema: string;
  frente: string;
  verso: string;
}

// ==================== CLÍNICA MÉDICA (200 flashcards planejados) ====================
export const clinicaMedicaFlashcards: Flashcard[] = [
  {
    id: 1,
    materia: 'Clínica Médica',
    tema: 'Diabetes Mellitus',
    frente: 'Critérios diagnósticos de Diabetes Mellitus?',
    verso: 'Glicemia jejum ≥126 mg/dL (2x) OU HbA1c ≥6,5% OU glicemia 2h pós-TOTG ≥200 mg/dL OU glicemia aleatória ≥200 mg/dL + sintomas.'
  },
  {
    id: 2,
    materia: 'Clínica Médica',
    tema: 'Diabetes Mellitus',
    frente: 'Meta de HbA1c para maioria dos diabéticos?',
    verso: 'HbA1c < 7%. Individualizar: < 6,5% em jovens sem comorbidades; < 8% em idosos frágeis ou com complicações.'
  },
  {
    id: 3,
    materia: 'Clínica Médica',
    tema: 'Hipertensão Arterial',
    frente: 'Classificação da HAS segundo a 7ª Diretriz Brasileira?',
    verso: 'Estágio 1: 140-159/90-99 mmHg. Estágio 2: 160-179/100-109 mmHg. Estágio 3: ≥180/110 mmHg.'
  },
  {
    id: 4,
    materia: 'Clínica Médica',
    tema: 'Hipertensão Arterial',
    frente: 'Anti-hipertensivos de primeira linha?',
    verso: 'Diuréticos tiazídicos, IECA/BRA, bloqueadores de canal de cálcio, betabloqueadores (em situações específicas).'
  },
  {
    id: 5,
    materia: 'Clínica Médica',
    tema: 'DPOC',
    frente: 'Critério espirométrico para diagnóstico de DPOC?',
    verso: 'VEF1/CVF < 0,70 pós-broncodilatador.'
  },
  {
    id: 6,
    materia: 'Clínica Médica',
    tema: 'DPOC',
    frente: 'Classificação GOLD da DPOC por VEF1?',
    verso: 'GOLD 1: VEF1 ≥80%. GOLD 2: 50-79%. GOLD 3: 30-49%. GOLD 4: <30%.'
  },
  {
    id: 7,
    materia: 'Clínica Médica',
    tema: 'Asma',
    frente: 'Tratamento de manutenção da asma persistente leve?',
    verso: 'Corticoide inalatório dose baixa (budesonida 200-400 mcg/dia ou equivalente).'
  },
  {
    id: 8,
    materia: 'Clínica Médica',
    tema: 'Insuficiência Cardíaca',
    frente: 'Tríade medicamentosa que reduz mortalidade na IC com FE reduzida?',
    verso: 'IECA/BRA (ou INRA), betabloqueador, antagonista mineralocorticoide (espironolactona).'
  },
  {
    id: 9,
    materia: 'Clínica Médica',
    tema: 'IAM',
    frente: 'Critérios diagnósticos da SEPSE segundo Sepsis-3?',
    verso: 'Disfunção orgânica + infecção suspeita/confirmada + aumento ≥2 pontos no SOFA.'
  },
  {
    id: 10,
    materia: 'Clínica Médica',
    tema: 'IAM',
    frente: 'Janela terapêutica para trombólise no IAM com supra de ST?',
    verso: 'Até 12 horas do início dos sintomas (idealmente < 3h). Se hospital sem hemodinâmica e < 120 min para transferência.'
  },
  {
    id: 11,
    materia: 'Clínica Médica',
    tema: 'Pneumonia',
    frente: 'Escore CURB-65 para estratificação de pneumonia comunitária?',
    verso: 'Confusão mental, Ureia >50 mg/dL, FR ≥30 irpm, PA <90/60 mmHg, idade ≥65 anos. 0-1: ambulatorial. ≥2: internação.'
  },
  {
    id: 12,
    materia: 'Clínica Médica',
    tema: 'Tuberculose',
    frente: 'Esquema básico para tratamento de TB pulmonar?',
    verso: 'RHZE (Rifampicina, Isoniazida, Pirazinamida, Etambutol) por 2 meses + RH por 4 meses = 6 meses total.'
  },
  {
    id: 13,
    materia: 'Clínica Médica',
    tema: 'Anemia Ferropriva',
    frente: 'Características laboratoriais da anemia ferropriva?',
    verso: 'Anemia microcítica hipocrômica (VCM e HCM baixos), RDW elevado, ferritina baixa (<30 ng/mL).'
  },
  {
    id: 14,
    materia: 'Clínica Médica',
    tema: 'Hipotireoidismo',
    frente: 'Diferença entre hipotireoidismo primário e central?',
    verso: 'Primário: TSH alto + T4 livre baixo (problema na tireoide). Central: TSH baixo/normal + T4 livre baixo (problema hipofisário/hipotalâmico).'
  },
  {
    id: 15,
    materia: 'Clínica Médica',
    tema: 'Doença Renal Crônica',
    frente: 'Estágios da DRC por TFG?',
    verso: 'G1: ≥90. G2: 60-89. G3a: 45-59. G3b: 30-44. G4: 15-29. G5: <15 mL/min/1,73m².'
  },
  {
    id: 16,
    materia: 'Clínica Médica',
    tema: 'Cirrose',
    frente: 'Classificação de Child-Pugh para cirrose?',
    verso: 'Avalia: bilirrubina, albumina, TP/INR, ascite, encefalopatia. A: 5-6 pontos. B: 7-9. C: 10-15.'
  },
  {
    id: 17,
    materia: 'Clínica Médica',
    tema: 'Artrite Reumatoide',
    frente: 'DMARD de primeira linha na artrite reumatoide?',
    verso: 'Metotrexato 15-25 mg/semana VO + ácido fólico 5 mg/semana.'
  },
  {
    id: 18,
    materia: 'Clínica Médica',
    tema: 'TEP',
    frente: 'Escore de Wells para TEP - alta probabilidade?',
    verso: 'Wells ≥4 pontos = alta probabilidade. Investigar com angioTC ou iniciar anticoagulação empírica se instável.'
  },
  {
    id: 19,
    materia: 'Clínica Médica',
    tema: 'Parkinson',
    frente: 'Tríade clássica da Doença de Parkinson?',
    verso: 'Tremor de repouso, rigidez, bradicinesia. (+ instabilidade postural tardiamente).'
  },
  {
    id: 20,
    materia: 'Clínica Médica',
    tema: 'Dengue',
    frente: 'Sinais de alarme na dengue?',
    verso: 'Dor abdominal intensa, vômitos persistentes, sangramento de mucosas, letargia/irritabilidade, hepatomegalia >2cm, queda de plaquetas + aumento de Ht.'
  }
];

// ==================== PEDIATRIA (150 flashcards planejados) ====================
export const pediatriaFlashcards: Flashcard[] = [
  {
    id: 101,
    materia: 'Pediatria',
    tema: 'Calendário Vacinal',
    frente: 'Vacinas aos 2 meses de vida?',
    verso: 'Pentavalente (DTP+Hib+HepB), VIP (poliomielite inativada), Pneumocócica 10, Rotavírus.'
  },
  {
    id: 102,
    materia: 'Pediatria',
    tema: 'Calendário Vacinal',
    frente: 'Vacinas aos 12 meses?',
    verso: 'Tríplice viral (sarampo, caxumba, rubéola), Meningocócica C (reforço), Pneumocócica 10 (reforço).'
  },
  {
    id: 103,
    materia: 'Pediatria',
    tema: 'Desidratação',
    frente: 'Sinais de desidratação grave em lactente?',
    verso: 'Letargia/inconsciência, olhos muito fundos, não consegue beber, sinal da prega cutânea muito lento (>2s), pulso fraco/ausente.'
  },
  {
    id: 104,
    materia: 'Pediatria',
    tema: 'Desidratação',
    frente: 'Plano C (desidratação grave) - volume e via?',
    verso: '100 mL/kg de SF 0,9% ou Ringer lactato EV: 30 mL/kg em 30 min (se <1 ano) ou 1h (se >1 ano), depois 70 mL/kg em 2,5h (se <1 ano) ou 5h (se >1 ano).'
  },
  {
    id: 105,
    materia: 'Pediatria',
    tema: 'Sarampo',
    frente: 'Tríade clássica do sarampo (3 Cs)?',
    verso: 'Coriza, Conjuntivite, Tosse (+ febre alta e exantema maculopapular craniocaudal).'
  },
  {
    id: 106,
    materia: 'Pediatria',
    tema: 'Sarampo',
    frente: 'Sinal patognomônico do sarampo?',
    verso: 'Manchas de Koplik (pequenas manchas brancas com halo eritematoso na mucosa jugal, surgem 1-2 dias antes do exantema).'
  },
  {
    id: 107,
    materia: 'Pediatria',
    tema: 'Icterícia Neonatal',
    frente: 'Quando a icterícia neonatal é sempre patológica?',
    verso: 'Icterícia nas primeiras 24h de vida, aumento de bilirrubina >5 mg/dL/dia, icterícia >2 semanas (RN termo) ou >3 semanas (prematuro).'
  },
  {
    id: 108,
    materia: 'Pediatria',
    tema: 'Asma Pediátrica',
    frente: 'Critério para asma persistente (necessita tratamento de manutenção)?',
    verso: 'Sintomas >2x/semana OU despertares noturnos >2x/mês OU necessidade de beta-2 >2x/semana.'
  },
  {
    id: 109,
    materia: 'Pediatria',
    tema: 'RGE',
    frente: 'Diferença entre RGE fisiológico e DRGE?',
    verso: 'RGE: regurgitações sem repercussão (lactente feliz). DRGE: sintomas (recusa alimentar, choro, arqueamento) ou complicações (esofagite, pneumonia aspirativa, déficit ponderal).'
  },
  {
    id: 110,
    materia: 'Pediatria',
    tema: 'Meningite',
    frente: 'Agente mais comum de meningite bacteriana em neonatos?',
    verso: 'Streptococcus agalactiae (Streptococcus do grupo B), E. coli, Listeria monocytogenes.'
  },
  {
    id: 111,
    materia: 'Pediatria',
    tema: 'Meningite',
    frente: 'Agente mais comum de meningite bacteriana em lactentes (3-12 meses)?',
    verso: 'Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae (raro após vacinação).'
  },
  {
    id: 112,
    materia: 'Pediatria',
    tema: 'Anemia Ferropriva',
    frente: 'Dose de sulfato ferroso para tratamento de anemia ferropriva?',
    verso: '3-5 mg/kg/dia de ferro elementar, dividido em 1-2 doses, longe das refeições, por 3 meses após normalização da Hb.'
  },
  {
    id: 113,
    materia: 'Pediatria',
    tema: 'Bronquiolite',
    frente: 'Critérios de internação na bronquiolite?',
    verso: 'Idade <3 meses, FR >60-70 irpm, SatO2 <90-92%, desidratação, apneia, tiragem subcostal importante, doença de base.'
  },
  {
    id: 114,
    materia: 'Pediatria',
    tema: 'Puberdade Precoce',
    frente: 'Definição de puberdade precoce?',
    verso: 'Meninas: caracteres sexuais secundários <8 anos. Meninos: <9 anos.'
  },
  {
    id: 115,
    materia: 'Pediatria',
    tema: 'Febre Reumática',
    frente: 'Critérios de Jones maiores?',
    verso: 'Cardite, Poliartrite migratória, Coreia de Sydenham, Eritema marginado, Nódulos subcutâneos.'
  },
  {
    id: 116,
    materia: 'Pediatria',
    tema: 'Convulsão Febril',
    frente: 'Características da convulsão febril simples?',
    verso: 'Idade 6 meses-5 anos, duração <15 min, generalizada, única em 24h, recuperação rápida.'
  },
  {
    id: 117,
    materia: 'Pediatria',
    tema: 'Doença Celíaca',
    frente: 'Exame sorológico de triagem para doença celíaca?',
    verso: 'Anti-transglutaminase IgA (sensibilidade >95%). Dosar IgA total (excluir deficiência de IgA).'
  },
  {
    id: 118,
    materia: 'Pediatria',
    tema: 'Síndrome Nefrótica',
    frente: 'Tétrade da síndrome nefrótica?',
    verso: 'Proteinúria maciça (>3,5g/24h ou >40mg/m²/h), hipoalbuminemia (<2,5g/dL), edema, hiperlipidemia.'
  },
  {
    id: 119,
    materia: 'Pediatria',
    tema: 'Intussuscepção',
    frente: 'Tríade clássica da intussuscepção?',
    verso: 'Dor abdominal cólica intermitente, massa palpável (sinal da dança), fezes com sangue (geleia de framboesa).'
  },
  {
    id: 120,
    materia: 'Pediatria',
    tema: 'Dermatite Atópica',
    frente: 'Distribuição das lesões de dermatite atópica por idade?',
    verso: 'Lactente: face e superfícies extensoras. Criança/adolescente: dobras (flexoras), pescoço, punhos, tornozelos.'
  }
];

// ==================== GINECOLOGIA E OBSTETRÍCIA (150 flashcards planejados) ====================
export const ginecologiaObstetriciaFlashcards: Flashcard[] = [
  {
    id: 201,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Pré-natal',
    frente: 'Número mínimo de consultas de pré-natal recomendado?',
    verso: 'Mínimo 6 consultas: 1 no 1º trimestre, 2 no 2º trimestre, 3 no 3º trimestre.'
  },
  {
    id: 202,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Diabetes Gestacional',
    frente: 'Valores do TOTG 75g para diagnóstico de diabetes gestacional?',
    verso: 'Jejum ≥92 mg/dL OU 1h ≥180 mg/dL OU 2h ≥153 mg/dL. Um valor alterado já confirma diagnóstico.'
  },
  {
    id: 203,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Pré-eclâmpsia',
    frente: 'Critérios diagnósticos de pré-eclâmpsia?',
    verso: 'PA ≥140/90 mmHg após 20 semanas + proteinúria ≥300 mg/24h (ou relação proteína/creatinina ≥0,3).'
  },
  {
    id: 204,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Pré-eclâmpsia',
    frente: 'Critérios de pré-eclâmpsia grave?',
    verso: 'PA ≥160/110 mmHg, proteinúria >5g/24h, oligúria, edema agudo de pulmão, sintomas cerebrais/visuais, dor epigástrica, plaquetopenia, elevação de enzimas hepáticas.'
  },
  {
    id: 205,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Trabalho de Parto Prematuro',
    frente: 'Indicações de corticoide antenatal?',
    verso: 'Gestação 24-34 semanas com risco de parto prematuro. Betametasona 12mg IM 2 doses (24h intervalo) ou dexametasona 6mg IM 4 doses (12h intervalo).'
  },
  {
    id: 206,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Hemorragia Pós-parto',
    frente: 'Definição de hemorragia pós-parto?',
    verso: 'Perda sanguínea >500 mL (parto vaginal) ou >1000 mL (cesárea) nas primeiras 24h.'
  },
  {
    id: 207,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Câncer de Colo Uterino',
    frente: 'Conduta na citologia com HSIL?',
    verso: 'Colposcopia com biópsia imediata (não repetir citologia). HSIL = lesão precursora de alto grau.'
  },
  {
    id: 208,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Endometriose',
    frente: 'Tríade clássica da endometriose?',
    verso: 'Dismenorreia progressiva, dispareunia de profundidade, infertilidade.'
  },
  {
    id: 209,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Mioma Uterino',
    frente: 'Classificação dos miomas por localização?',
    verso: 'Submucoso (cavidade uterina), intramural (parede), subseroso (superfície externa), pediculado.'
  },
  {
    id: 210,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'SOP',
    frente: 'Critérios de Rotterdam para SOP (2 de 3)?',
    verso: 'Oligo/anovulação, hiperandrogenismo clínico/laboratorial, ovários policísticos ao USG.'
  },
  {
    id: 211,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Gravidez Ectópica',
    frente: 'Zona discriminatória do β-hCG para visualização de saco gestacional?',
    verso: 'β-hCG >1500-2000 mUI/mL: deve-se visualizar saco gestacional intrauterino ao USG transvaginal. Se ausente, suspeitar de ectópica.'
  },
  {
    id: 212,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Candidíase',
    frente: 'Características da candidíase vulvovaginal?',
    verso: 'Prurido intenso, corrimento branco grumoso (leite coalhado), pH <4,5, KOH: pseudo-hifas.'
  },
  {
    id: 213,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Vaginose Bacteriana',
    frente: 'Critérios de Amsel para vaginose bacteriana (3 de 4)?',
    verso: 'Corrimento homogêneo, pH >4,5, teste de Whiff positivo (odor de peixe com KOH), clue cells.'
  },
  {
    id: 214,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'DIP',
    frente: 'Critérios mínimos para diagnóstico de DIP?',
    verso: 'Dor à mobilização cervical + dor anexial + dor à palpação uterina (em mulher sexualmente ativa).'
  },
  {
    id: 215,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Menopausa',
    frente: 'Definição de menopausa?',
    verso: 'Amenorreia por 12 meses consecutivos (retrospectivo). Idade média: 51 anos.'
  },
  {
    id: 216,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'DPP',
    frente: 'Tríade clássica do descolamento prematuro de placenta?',
    verso: 'Dor abdominal intensa, sangramento vaginal escuro, hipertonia uterina (útero "lenhoso").'
  },
  {
    id: 217,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Placenta Prévia',
    frente: 'Classificação da placenta prévia?',
    verso: 'Total (recobre orifício interno), parcial (recobre parcialmente), marginal (borda atinge orifício), baixa (próxima mas não atinge).'
  },
  {
    id: 218,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'RPM',
    frente: 'Testes para confirmar rotura de membranas?',
    verso: 'Teste de cristalização (padrão de samambaia), teste de nitrazina (pH >6,5 = azul), pooling de líquido no fórnice posterior.'
  },
  {
    id: 219,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Incompatibilidade Rh',
    frente: 'Quando administrar imunoglobulina anti-D?',
    verso: 'Mãe Rh negativo não sensibilizada: 28 semanas + pós-parto (72h se RN Rh+) + eventos sensibilizantes (amniocentese, sangramento, aborto).'
  },
  {
    id: 220,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Mola Hidatiforme',
    frente: 'Características da mola hidatiforme completa?',
    verso: 'β-hCG muito elevado, útero > IG, USG "tempestade de neve", cariótipo 46,XX (paterno), sem feto.'
  }
];

// ==================== CIRURGIA (150 flashcards planejados) ====================
export const cirurgiaFlashcards: Flashcard[] = [
  {
    id: 301,
    materia: 'Cirurgia',
    tema: 'Apendicite',
    frente: 'Sinal de Blumberg?',
    verso: 'Descompressão brusca dolorosa (sinal de irritação peritoneal). Positivo na apendicite aguda.'
  },
  {
    id: 302,
    materia: 'Cirurgia',
    tema: 'Colecistite',
    frente: 'Sinal de Murphy?',
    verso: 'Interrupção da inspiração profunda durante palpação do hipocôndrio direito (dor). Positivo na colecistite aguda.'
  },
  {
    id: 303,
    materia: 'Cirurgia',
    tema: 'Pancreatite',
    frente: 'Critérios de Ranson na admissão (5)?',
    verso: 'Idade >55 anos, leucócitos >16.000, glicemia >200 mg/dL, LDH >350 U/L, AST >250 U/L.'
  },
  {
    id: 304,
    materia: 'Cirurgia',
    tema: 'Hérnia',
    frente: 'Diferença entre hérnia encarcerada e estrangulada?',
    verso: 'Encarcerada: irredutível mas sem isquemia. Estrangulada: isquemia do conteúdo (dor intensa, sinais de obstrução, necrose).'
  },
  {
    id: 305,
    materia: 'Cirurgia',
    tema: 'Obstrução Intestinal',
    frente: 'Sinais radiológicos de obstrução intestinal?',
    verso: 'Níveis hidroaéreos, distensão de alças, ausência de gás distal (obstrução completa).'
  },
  {
    id: 306,
    materia: 'Cirurgia',
    tema: 'Úlcera Perfurada',
    frente: 'Sinal radiológico clássico de perfuração de víscera oca?',
    verso: 'Pneumoperitônio (ar livre na cavidade abdominal) - melhor visualizado em raio-X em ortostase ou decúbito lateral com raios horizontais.'
  },
  {
    id: 307,
    materia: 'Cirurgia',
    tema: 'Hemorroidas',
    frente: 'Classificação das hemorroidas internas?',
    verso: 'Grau I: sangram, não prolapso. II: prolapso com evacuação, redução espontânea. III: prolapso, redução manual. IV: prolapso irredutível.'
  },
  {
    id: 308,
    materia: 'Cirurgia',
    tema: 'Trauma Abdominal',
    frente: 'Indicações de laparotomia no trauma abdominal fechado?',
    verso: 'Instabilidade hemodinâmica + FAST positivo, peritonite, evisceração, pneumoperitônio.'
  },
  {
    id: 309,
    materia: 'Cirurgia',
    tema: 'Pneumotórax Hipertensivo',
    frente: 'Tríade do pneumotórax hipertensivo?',
    verso: 'Dispneia grave, turgência jugular, desvio de traqueia (para lado oposto). + Hipotensão, ausência de MV.'
  },
  {
    id: 310,
    materia: 'Cirurgia',
    tema: 'Queimaduras',
    frente: 'Regra dos 9 de Wallace (adulto)?',
    verso: 'Cabeça 9%, tronco anterior 18%, tronco posterior 18%, cada membro superior 9%, cada membro inferior 18%, períneo 1%.'
  },
  {
    id: 311,
    materia: 'Cirurgia',
    tema: 'Câncer de Mama',
    frente: 'Classificação BI-RADS?',
    verso: '0: inconclusivo. 1: normal. 2: benigno. 3: provavelmente benigno. 4: suspeito. 5: altamente suspeito. 6: malignidade comprovada.'
  },
  {
    id: 312,
    materia: 'Cirurgia',
    tema: 'TVP',
    frente: 'Escore de Wells para TVP - alta probabilidade?',
    verso: 'Wells ≥2 pontos = provável TVP. Investigar com Doppler venoso.'
  },
  {
    id: 313,
    materia: 'Cirurgia',
    tema: 'Aneurisma de Aorta',
    frente: 'Indicação cirúrgica de aneurisma de aorta abdominal?',
    verso: 'Diâmetro >5,5 cm, crescimento >0,5 cm/ano, sintomático, rotura.'
  },
  {
    id: 314,
    materia: 'Cirurgia',
    tema: 'Isquemia Mesentérica',
    frente: 'Tríade da isquemia mesentérica aguda?',
    verso: 'Dor abdominal desproporcional ao exame físico, FA (embolia), acidose metabólica + lactato elevado.'
  },
  {
    id: 315,
    materia: 'Cirurgia',
    tema: 'Diverticulite',
    frente: 'Classificação de Hinchey da diverticulite?',
    verso: 'I: abscesso pericólico. II: abscesso pélvico/distante. III: peritonite purulenta. IV: peritonite fecal.'
  },
  {
    id: 316,
    materia: 'Cirurgia',
    tema: 'Câncer Colorretal',
    frente: 'Indicações de colonoscopia de rastreamento?',
    verso: 'Idade ≥50 anos (risco habitual) ou ≥40 anos (história familiar de CCR em parente de 1º grau <60 anos).'
  },
  {
    id: 317,
    materia: 'Cirurgia',
    tema: 'Abdome Agudo',
    frente: 'Sinal de Jobert?',
    verso: 'Desaparecimento da macicez hepática à percussão (pneumoperitônio interposto entre fígado e parede abdominal).'
  },
  {
    id: 318,
    materia: 'Cirurgia',
    tema: 'Fístula Perianal',
    frente: 'Classificação de Parks das fístulas perianais?',
    verso: 'Interesfincteriana, transesfincteriana, supraesfincteriana, extraesfincteriana.'
  },
  {
    id: 319,
    materia: 'Cirurgia',
    tema: 'Volvo',
    frente: 'Imagem radiológica clássica do volvo de sigmoide?',
    verso: 'Sinal do "grão de café" ou "U invertido" - alça colônica distendida com aspecto característico.'
  },
  {
    id: 320,
    materia: 'Cirurgia',
    tema: 'Peritonite',
    frente: 'Tríade da peritonite bacteriana espontânea?',
    verso: 'Dor abdominal, febre, alteração do estado mental (em cirrótico com ascite). Diagnóstico: PMN >250/mm³ no líquido ascítico.'
  }
];

// ==================== MEDICINA DA FAMÍLIA E COMUNIDADE (150 flashcards planejados) ====================
export const medicinaFamiliaComunidadeFlashcards: Flashcard[] = [
  {
    id: 401,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Rastreamento',
    frente: 'Rastreamento de câncer de mama (MS/INCA)?',
    verso: 'Mamografia bienal dos 50-69 anos. Exame clínico anual a partir de 40 anos.'
  },
  {
    id: 402,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Rastreamento',
    frente: 'Rastreamento de câncer de colo uterino?',
    verso: 'Citologia oncótica: iniciar aos 25 anos, anual por 2 anos, depois trienal até 64 anos (se rastreamento adequado).'
  },
  {
    id: 403,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Puericultura',
    frente: 'Quando iniciar alimentação complementar?',
    verso: 'Aos 6 meses de idade, mantendo aleitamento materno até 2 anos ou mais.'
  },
  {
    id: 404,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Hipertensão',
    frente: 'Meta pressórica para maioria dos hipertensos?',
    verso: 'PA <140/90 mmHg. Diabéticos/DRC: <130/80 mmHg. Idosos frágeis: individualizar.'
  },
  {
    id: 405,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Diabetes',
    frente: 'Primeira linha de tratamento no DM2?',
    verso: 'Metformina + mudanças de estilo de vida (dieta, exercícios, perda de peso).'
  },
  {
    id: 406,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Tabagismo',
    frente: 'Abordagem mínima para cessação tabágica (5 As)?',
    verso: 'Ask (perguntar), Advise (aconselhar), Assess (avaliar), Assist (ajudar), Arrange (agendar seguimento).'
  },
  {
    id: 407,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Violência',
    frente: 'Notificação compulsória de violência?',
    verso: 'Violência doméstica/intrafamiliar, sexual, autoprovocada, tráfico de pessoas, trabalho escravo, tortura, intervenção legal.'
  },
  {
    id: 408,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Saúde Mental',
    frente: 'Escore PHQ-9 para depressão?',
    verso: '0-4: mínima. 5-9: leve. 10-14: moderada. 15-19: moderadamente grave. 20-27: grave.'
  },
  {
    id: 409,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Visita Domiciliar',
    frente: 'Atributos essenciais da APS (Starfield)?',
    verso: 'Acesso de primeiro contato, Longitudinalidade, Integralidade, Coordenação do cuidado.'
  },
  {
    id: 410,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Planejamento Familiar',
    frente: 'Métodos contraceptivos reversíveis de longa duração (LARC)?',
    verso: 'DIU de cobre, DIU hormonal (SIU-LNG), implante subdérmico. Eficácia >99%, não dependem de adesão diária.'
  },
  {
    id: 411,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Dislipidemia',
    frente: 'Meta de LDL em prevenção primária de alto risco?',
    verso: 'LDL <70 mg/dL ou redução >50% do valor basal.'
  },
  {
    id: 412,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Obesidade',
    frente: 'Classificação do IMC?',
    verso: 'Baixo peso: <18,5. Normal: 18,5-24,9. Sobrepeso: 25-29,9. Obesidade I: 30-34,9. II: 35-39,9. III: ≥40 kg/m².'
  },
  {
    id: 413,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Saúde do Idoso',
    frente: 'Avaliação Geriátrica Ampla - domínios?',
    verso: 'Funcionalidade (AVDs), cognição, humor, mobilidade, nutrição, polifarmácia, suporte social, ambiente doméstico.'
  },
  {
    id: 414,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Alcoolismo',
    frente: 'Escore AUDIT para uso de álcool?',
    verso: '0-7: baixo risco. 8-15: uso de risco. 16-19: uso nocivo. ≥20: provável dependência.'
  },
  {
    id: 415,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Saúde do Trabalhador',
    frente: 'Diferença entre acidente de trabalho típico e de trajeto?',
    verso: 'Típico: durante atividade laboral. Trajeto: percurso residência-trabalho-residência.'
  },
  {
    id: 416,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Dismenorreia',
    frente: 'Tratamento de primeira linha da dismenorreia primária?',
    verso: 'AINE (ibuprofeno, naproxeno) iniciado no início da menstruação. Anticoncepcional hormonal se refratário.'
  },
  {
    id: 417,
    materia: 'Medicina da Família e Comunidade',
    tema: 'ITU',
    frente: 'Tratamento de cistite não complicada?',
    verso: 'Nitrofurantoína 100mg 6/6h por 7 dias OU fosfomicina 3g dose única OU SMX-TMP 160/800mg 12/12h por 3 dias.'
  },
  {
    id: 418,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Osteoporose',
    frente: 'Critério densitométrico de osteoporose?',
    verso: 'T-score ≤ -2,5 DP em coluna lombar, colo de fêmur ou fêmur total.'
  },
  {
    id: 419,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Rinite Alérgica',
    frente: 'Tratamento de manutenção da rinite alérgica persistente?',
    verso: 'Corticoide nasal (fluticasona, mometasona) é mais eficaz. Anti-histamínico oral como adjuvante.'
  },
  {
    id: 420,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Lombalgia',
    frente: 'Sinais de alarme (red flags) na lombalgia?',
    verso: 'Idade <20 ou >50 anos, trauma, sintomas constitucionais, déficit neurológico progressivo, incontinência, história de câncer, uso de corticoide, dor noturna.'
  }
];

// ==================== SAÚDE PÚBLICA (100 flashcards planejados) ====================
export const saudePublicaFlashcards: Flashcard[] = [
  {
    id: 501,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'SUS',
    frente: 'Princípios doutrinários do SUS?',
    verso: 'Universalidade, Equidade, Integralidade.'
  },
  {
    id: 502,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'SUS',
    frente: 'Princípios organizativos do SUS?',
    verso: 'Descentralização, Regionalização, Hierarquização, Participação social.'
  },
  {
    id: 503,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Vigilância',
    frente: 'Doenças de notificação compulsória imediata (até 24h)?',
    verso: 'Sarampo, rubéola, poliomielite, febre amarela, peste, cólera, raiva humana, botulismo, varíola, tularemia, antraz.'
  },
  {
    id: 504,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Indicadores',
    frente: 'Diferença entre mortalidade infantil e neonatal?',
    verso: 'Infantil: óbitos <1 ano/1000 NV. Neonatal: óbitos <28 dias/1000 NV. Neonatal precoce: <7 dias. Tardia: 7-27 dias.'
  },
  {
    id: 505,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Epidemiologia',
    frente: 'Diferença entre incidência e prevalência?',
    verso: 'Incidência: casos novos em período de tempo. Prevalência: casos existentes (novos + antigos) em momento específico.'
  },
  {
    id: 506,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Estudos',
    frente: 'Diferença entre estudo de coorte e caso-controle?',
    verso: 'Coorte: parte da exposição, segue prospectivamente, calcula risco relativo. Caso-controle: parte do desfecho, retrospectivo, calcula odds ratio.'
  },
  {
    id: 507,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Vacinação',
    frente: 'Vacinas contraindicadas na gestação?',
    verso: 'Vírus vivos atenuados: tríplice viral, varicela, febre amarela, BCG.'
  },
  {
    id: 508,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Determinantes',
    frente: 'Modelo de Dahlgren e Whitehead - camadas dos determinantes sociais?',
    verso: 'Centro: idade, sexo, fatores genéticos. Camadas: estilo de vida, redes sociais, condições de vida/trabalho, condições socioeconômicas/culturais/ambientais.'
  },
  {
    id: 509,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'APS',
    frente: 'Atributos derivados da APS?',
    verso: 'Orientação familiar, Orientação comunitária, Competência cultural.'
  },
  {
    id: 510,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Humanização',
    frente: 'Dispositivos da Política Nacional de Humanização?',
    verso: 'Acolhimento com classificação de risco, visita aberta e direito a acompanhante, PTS, colegiado gestor, gestão participativa.'
  },
  {
    id: 511,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'RAS',
    frente: 'Componentes das Redes de Atenção à Saúde?',
    verso: 'APS (coordenadora), atenção especializada, urgência/emergência, atenção hospitalar, sistemas de apoio (diagnóstico, assistência farmacêutica), sistemas logísticos, governança.'
  },
  {
    id: 512,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Endemias',
    frente: 'Diferença entre endemia, epidemia e pandemia?',
    verso: 'Endemia: ocorrência habitual em região. Epidemia: aumento súbito acima do esperado. Pandemia: epidemia em múltiplos países/continentes.'
  },
  {
    id: 513,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Transição',
    frente: 'Características da transição epidemiológica?',
    verso: 'Redução de doenças infecciosas, aumento de doenças crônicas não transmissíveis, envelhecimento populacional, mudança no perfil de morbimortalidade.'
  },
  {
    id: 514,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Biossegurança',
    frente: 'Precauções padrão (standard)?',
    verso: 'Higiene das mãos, uso de EPI conforme risco (luvas, máscara, avental, óculos), descarte adequado de perfurocortantes, limpeza/desinfecção de superfícies.'
  },
  {
    id: 515,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Ética',
    frente: 'Princípios da bioética (Beauchamp e Childress)?',
    verso: 'Autonomia, Beneficência, Não maleficência, Justiça.'
  },
  {
    id: 516,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'PNI',
    frente: 'Vacinas aos 15 meses?',
    verso: 'Tríplice viral (2ª dose), Varicela, DTP (1º reforço), VOP (1º reforço), Hepatite A.'
  },
  {
    id: 517,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'ANVISA',
    frente: 'Competências da ANVISA?',
    verso: 'Regulação, controle e fiscalização de medicamentos, alimentos, cosméticos, saneantes, produtos para saúde, sangue/hemoderivados, serviços de saúde.'
  },
  {
    id: 518,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Saúde do Trabalhador',
    frente: 'Componentes do PCMSO (NR-7)?',
    verso: 'Exames: admissional, periódico, retorno ao trabalho, mudança de função, demissional.'
  },
  {
    id: 519,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Estatística',
    frente: 'Medidas de tendência central?',
    verso: 'Média (soma/n), Mediana (valor central), Moda (valor mais frequente).'
  },
  {
    id: 520,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'DCNT',
    frente: 'Principais DCNT no Brasil?',
    verso: 'Doenças cardiovasculares, câncer, diabetes, doenças respiratórias crônicas. Fatores de risco: tabagismo, álcool, inatividade física, alimentação inadequada.'
  }
];

// ==================== URGÊNCIA E EMERGÊNCIA (100 flashcards planejados) ====================
export const urgenciaEmergenciaFlashcards: Flashcard[] = [
  {
    id: 601,
    materia: 'Urgência e Emergência',
    tema: 'PCR',
    frente: 'Sequência do ACLS em FV/TV sem pulso?',
    verso: 'RCP 2 min → choque → RCP 2 min → choque → RCP 2 min + adrenalina 1mg → choque → RCP 2 min + amiodarona 300mg → repetir.'
  },
  {
    id: 602,
    materia: 'Urgência e Emergência',
    tema: 'Sepse',
    frente: 'Pacote de 1 hora da sepse (Surviving Sepsis)?',
    verso: 'Lactato, hemocultura, antibiótico, cristaloide 30 mL/kg (se hipotensão/lactato ≥4), vasopressor (se refratário a volume).'
  },
  {
    id: 603,
    materia: 'Urgência e Emergência',
    tema: 'Intoxicação',
    frente: 'Antídotos principais?',
    verso: 'Opioides: naloxona. Organofosforados: atropina. Benzodiazepínicos: flumazenil. Paracetamol: N-acetilcisteína. Warfarina: vitamina K.'
  },
  {
    id: 604,
    materia: 'Urgência e Emergência',
    tema: 'TCE',
    frente: 'Escala de Coma de Glasgow?',
    verso: 'Abertura ocular (1-4) + resposta verbal (1-5) + resposta motora (1-6) = 3-15 pontos. ≤8: grave. 9-12: moderado. 13-15: leve.'
  },
  {
    id: 605,
    materia: 'Urgência e Emergência',
    tema: 'Anafilaxia',
    frente: 'Dose de adrenalina na anafilaxia?',
    verso: 'Adrenalina 1:1000 (1 mg/mL): 0,3-0,5 mg IM na face anterolateral da coxa. Repetir a cada 5-15 min se necessário.'
  },
  {
    id: 606,
    materia: 'Urgência e Emergência',
    tema: 'SCA',
    frente: 'Diferença entre IAM com e sem supra de ST?',
    verso: 'Com supra: supradesnivelamento ST, oclusão total, trombólise/angioplastia primária. Sem supra: infra ST/inversão T, oclusão parcial, estratificação de risco.'
  },
  {
    id: 607,
    materia: 'Urgência e Emergência',
    tema: 'AVC',
    frente: 'Contraindicações absolutas para trombólise no AVCi?',
    verso: 'Hemorragia intracraniana, PA >185/110 mmHg (não controlada), glicemia <50 mg/dL, cirurgia/trauma recente, uso de anticoagulante.'
  },
  {
    id: 608,
    materia: 'Urgência e Emergência',
    tema: 'Cetoacidose',
    frente: 'Critérios diagnósticos de cetoacidose diabética?',
    verso: 'Glicemia >250 mg/dL, pH <7,3, bicarbonato <18 mEq/L, cetonemia/cetonúria positiva.'
  },
  {
    id: 609,
    materia: 'Urgência e Emergência',
    tema: 'Crise Hipertensiva',
    frente: 'Diferença entre urgência e emergência hipertensiva?',
    verso: 'Urgência: PA muito elevada sem lesão de órgão-alvo. Emergência: PA elevada com lesão aguda de órgão-alvo (encefalopatia, EAP, IAM, AVE, dissecção).'
  },
  {
    id: 610,
    materia: 'Urgência e Emergência',
    tema: 'HDA',
    frente: 'Escore de Glasgow-Blatchford para HDA?',
    verso: 'Estratifica risco (0-23 pontos). 0-1: baixo risco (alta precoce). ≥2: risco aumentado (internação, endoscopia).'
  },
  {
    id: 611,
    materia: 'Urgência e Emergência',
    tema: 'EAP',
    frente: 'Tríade terapêutica do edema agudo de pulmão?',
    verso: 'Furosemida EV (40-80mg), Nitroglicerina (reduz pré/pós-carga), O2 suplementar (VNI se necessário).'
  },
  {
    id: 612,
    materia: 'Urgência e Emergência',
    tema: 'Asma',
    frente: 'Critérios de asma grave/quase fatal?',
    verso: 'PFE <33%, SatO2 <90%, cianose, confusão mental, tórax silencioso, bradicardia, hipotensão, exaustão.'
  },
  {
    id: 613,
    materia: 'Urgência e Emergência',
    tema: 'Convulsão',
    frente: 'Definição de estado de mal epiléptico?',
    verso: 'Crise convulsiva >5 minutos OU crises recorrentes sem recuperação da consciência entre elas.'
  },
  {
    id: 614,
    materia: 'Urgência e Emergência',
    tema: 'Hipoglicemia',
    frente: 'Regra dos 15 para hipoglicemia consciente?',
    verso: '15g de carboidrato simples VO → aguardar 15 min → checar glicemia → repetir se <70 mg/dL.'
  },
  {
    id: 615,
    materia: 'Urgência e Emergência',
    tema: 'Queimadura',
    frente: 'Classificação das queimaduras por profundidade?',
    verso: '1º grau: eritema, dor. 2º grau superficial: flictenas, base rósea. 2º grau profundo: base pálida. 3º grau: indolor, branca/carbonizada.'
  },
  {
    id: 616,
    materia: 'Urgência e Emergência',
    tema: 'Afogamento',
    frente: 'Classificação de Szpilman para afogamento?',
    verso: 'Grau 1: tosse. 2: espuma boca/nariz. 3: EAP. 4: EAP + hipotensão. 5: PCR. 6: óbito.'
  },
  {
    id: 617,
    materia: 'Urgência e Emergência',
    tema: 'Ofidismo',
    frente: 'Diferença entre acidentes botrópico e crotálico?',
    verso: 'Botrópico (jararaca): edema local, equimose, sangramento. Crotálico (cascavel): mialgia, urina escura (rabdomiólise), fácies miastênica.'
  },
  {
    id: 618,
    materia: 'Urgência e Emergência',
    tema: 'DPOC',
    frente: 'Indicações de VNI na exacerbação de DPOC?',
    verso: 'Acidose respiratória (pH 7,25-7,35), hipercapnia (PaCO2 >45 mmHg), FR >25 irpm, uso de musculatura acessória.'
  },
  {
    id: 619,
    materia: 'Urgência e Emergência',
    tema: 'Arritmia',
    frente: 'Dose de adenosina para TSV?',
    verso: 'Adenosina 6mg EV rápido (flush com SF). Se não reverter em 1-2 min: 12mg. Pode repetir 12mg mais uma vez.'
  },
  {
    id: 620,
    materia: 'Urgência e Emergência',
    tema: 'Abdome Agudo',
    frente: 'Causas mais comuns de abdome agudo cirúrgico?',
    verso: 'Apendicite aguda, colecistite aguda, úlcera perfurada, obstrução intestinal, isquemia mesentérica, gravidez ectópica rota.'
  }
];

// Consolidar todos os flashcards
export const todosFlashcards: Flashcard[] = [
  ...clinicaMedicaFlashcards,
  ...pediatriaFlashcards,
  ...ginecologiaObstetriciaFlashcards,
  ...cirurgiaFlashcards,
  ...medicinaFamiliaComunidadeFlashcards,
  ...saudePublicaFlashcards,
  ...urgenciaEmergenciaFlashcards
];

// Função auxiliar para buscar flashcards por matéria
export const getFlashcardsPorMateria = (materia: string): Flashcard[] => {
  return todosFlashcards.filter(f => f.materia === materia);
};

// Função auxiliar para buscar flashcards por tema
export const getFlashcardsPorTema = (tema: string): Flashcard[] => {
  return todosFlashcards.filter(f => f.tema === tema);
};

// Estatísticas do banco de flashcards
export const estatisticasFlashcards = {
  total: todosFlashcards.length,
  porMateria: {
    'Clínica Médica': clinicaMedicaFlashcards.length,
    'Pediatria': pediatriaFlashcards.length,
    'Ginecologia e Obstetrícia': ginecologiaObstetriciaFlashcards.length,
    'Cirurgia': cirurgiaFlashcards.length,
    'Medicina da Família e Comunidade': medicinaFamiliaComunidadeFlashcards.length,
    'Saúde Pública / Epidemiologia': saudePublicaFlashcards.length,
    'Urgência e Emergência': urgenciaEmergenciaFlashcards.length
  },
  metaPlanejada: 1000,
  percentualConcluido: (todosFlashcards.length / 1000) * 100
};
