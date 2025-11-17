// Banco de Questões REVALIDA - NeuroReval PRO
// Total planejado: 2000 questões

export interface Questao {
  id: number;
  materia: string;
  enunciado: string;
  alternativas: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  gabarito: 'A' | 'B' | 'C' | 'D';
  justificativa: string;
  dificuldade: 'facil' | 'medio' | 'dificil';
  tema?: string;
}

// ==================== CLÍNICA MÉDICA (400 questões planejadas) ====================
export const clinicaMedica: Questao[] = [
  {
    id: 1,
    materia: 'Clínica Médica',
    tema: 'Diabetes Mellitus',
    dificuldade: 'medio',
    enunciado: 'Paciente de 58 anos, diabético tipo 2 há 10 anos, em uso de metformina 2g/dia, apresenta HbA1c de 8,5%. Nega sintomas de hipoglicemia. PA: 145/90 mmHg. IMC: 32 kg/m². Qual a melhor conduta terapêutica?',
    alternativas: {
      A: 'Manter metformina e adicionar sulfonilureia',
      B: 'Manter metformina e adicionar inibidor de SGLT2',
      C: 'Suspender metformina e iniciar insulina NPH',
      D: 'Manter metformina e adicionar acarbose'
    },
    gabarito: 'B',
    justificativa: 'Paciente com DM2 descompensado, obeso e hipertenso. Inibidores de SGLT2 promovem perda de peso, redução de PA e proteção cardiovascular, sendo a melhor escolha neste contexto.'
  },
  {
    id: 2,
    materia: 'Clínica Médica',
    tema: 'Hipertensão Arterial',
    dificuldade: 'facil',
    enunciado: 'Homem de 45 anos, assintomático, em consulta de rotina apresenta PA: 152/98 mmHg. Nega comorbidades. Qual a conduta inicial mais adequada?',
    alternativas: {
      A: 'Iniciar anti-hipertensivo imediatamente',
      B: 'Solicitar MAPA ou medidas domiciliares',
      C: 'Encaminhar para cardiologista',
      D: 'Repetir medida em 1 ano'
    },
    gabarito: 'B',
    justificativa: 'Antes de diagnosticar HAS, deve-se confirmar com MAPA ou medidas domiciliares para excluir hipertensão do avental branco, especialmente em paciente assintomático sem lesão de órgão-alvo.'
  },
  {
    id: 3,
    materia: 'Clínica Médica',
    tema: 'DPOC',
    dificuldade: 'medio',
    enunciado: 'Paciente de 65 anos, tabagista 40 anos-maço, apresenta dispneia aos médios esforços há 6 meses. Espirometria: VEF1/CVF = 0,65, VEF1 = 55% do previsto pós-broncodilatador. Qual a classificação GOLD?',
    alternativas: {
      A: 'GOLD 1',
      B: 'GOLD 2',
      C: 'GOLD 3',
      D: 'GOLD 4'
    },
    gabarito: 'B',
    justificativa: 'GOLD 2 (moderado): VEF1 entre 50-79% do previsto. VEF1/CVF < 0,70 confirma obstrução. Paciente apresenta VEF1 = 55%, classificando-se como GOLD 2.'
  },
  {
    id: 4,
    materia: 'Clínica Médica',
    tema: 'Insuficiência Cardíaca',
    dificuldade: 'dificil',
    enunciado: 'Paciente com IC com fração de ejeção reduzida (35%), classe funcional II, em uso de enalapril, carvedilol e furosemida. Persiste sintomático. Qual medicação adicionar para reduzir mortalidade?',
    alternativas: {
      A: 'Digoxina',
      B: 'Espironolactona',
      C: 'Hidralazina + nitrato',
      D: 'Ivabradina'
    },
    gabarito: 'B',
    justificativa: 'Espironolactona (antagonista mineralocorticoide) reduz mortalidade em IC com FE reduzida, classe II-IV, devendo ser adicionada ao IECA e betabloqueador.'
  },
  {
    id: 5,
    materia: 'Clínica Médica',
    tema: 'Infarto Agudo do Miocárdio',
    dificuldade: 'medio',
    enunciado: 'Homem de 62 anos chega à emergência com dor precordial há 2 horas. ECG: supradesnivelamento de ST em DII, DIII e aVF. Hospital sem hemodinâmica. Qual a conduta?',
    alternativas: {
      A: 'Trombólise química imediata',
      B: 'Transferência para centro com hemodinâmica',
      C: 'Observação com anticoagulação',
      D: 'Angiografia por tomografia'
    },
    gabarito: 'A',
    justificativa: 'IAM com supradesnivelamento de ST em parede inferior. Em hospital sem hemodinâmica e dentro da janela terapêutica (< 12h), está indicada trombólise química imediata.'
  },
  {
    id: 6,
    materia: 'Clínica Médica',
    tema: 'Pneumonia Comunitária',
    dificuldade: 'facil',
    enunciado: 'Paciente de 35 anos, previamente hígido, com febre, tosse produtiva e dor torácica há 3 dias. Raio-X: consolidação em lobo inferior direito. CURB-65 = 0. Qual o tratamento ambulatorial?',
    alternativas: {
      A: 'Amoxicilina 1g 8/8h por 7 dias',
      B: 'Azitromicina 500mg/dia por 5 dias',
      C: 'Levofloxacino 750mg/dia por 5 dias',
      D: 'Ceftriaxona 1g IV/dia'
    },
    gabarito: 'A',
    justificativa: 'Pneumonia comunitária em paciente jovem, sem comorbidades, CURB-65 = 0 (baixo risco). Tratamento ambulatorial com amoxicilina é primeira escolha, cobrindo S. pneumoniae.'
  },
  {
    id: 7,
    materia: 'Clínica Médica',
    tema: 'Anemia Ferropriva',
    dificuldade: 'medio',
    enunciado: 'Mulher de 42 anos com astenia. Hemograma: Hb 9,5 g/dL, VCM 72 fL, HCM 24 pg, RDW 18%. Ferritina: 8 ng/mL. Qual a causa mais provável?',
    alternativas: {
      A: 'Anemia de doença crônica',
      B: 'Talassemia minor',
      C: 'Deficiência de ferro',
      D: 'Anemia sideroblástica'
    },
    gabarito: 'C',
    justificativa: 'Anemia microcítica hipocrômica (VCM e HCM baixos) com RDW elevado e ferritina baixa caracteriza anemia ferropriva. Investigar perda sanguínea (menstruação, TGI).'
  },
  {
    id: 8,
    materia: 'Clínica Médica',
    tema: 'Hipotireoidismo',
    dificuldade: 'facil',
    enunciado: 'Paciente de 50 anos com ganho de peso, fadiga, constipação e pele seca. TSH: 12 mUI/L (VR: 0,4-4,0), T4 livre: 0,6 ng/dL (VR: 0,8-1,8). Qual o diagnóstico?',
    alternativas: {
      A: 'Hipotireoidismo subclínico',
      B: 'Hipotireoidismo primário',
      C: 'Hipotireoidismo central',
      D: 'Síndrome do eutireoidiano doente'
    },
    gabarito: 'B',
    justificativa: 'TSH elevado com T4 livre baixo caracteriza hipotireoidismo primário (tireoidiano). Sintomas clássicos presentes. Tratamento: levotiroxina.'
  },
  {
    id: 9,
    materia: 'Clínica Médica',
    tema: 'Doença Renal Crônica',
    dificuldade: 'medio',
    enunciado: 'Diabético com TFG estimada de 35 mL/min/1,73m², albuminúria 450 mg/g. Qual o estágio da DRC e a conduta?',
    alternativas: {
      A: 'Estágio 2, manter acompanhamento anual',
      B: 'Estágio 3a, iniciar IECA/BRA',
      C: 'Estágio 3b, encaminhar para nefrologista',
      D: 'Estágio 4, preparar para diálise'
    },
    gabarito: 'C',
    justificativa: 'TFG 30-44 mL/min = estágio 3b. Com albuminúria > 300 mg/g (macroalbuminúria), há indicação de encaminhamento ao nefrologista para manejo especializado.'
  },
  {
    id: 10,
    materia: 'Clínica Médica',
    tema: 'Asma',
    dificuldade: 'medio',
    enunciado: 'Asmático em uso de corticoide inalatório dose moderada + formoterol. Apresenta 3 exacerbações no último ano. Qual a próxima etapa do tratamento?',
    alternativas: {
      A: 'Aumentar dose do corticoide inalatório',
      B: 'Adicionar teofilina',
      C: 'Adicionar antagonista de leucotrienos',
      D: 'Adicionar tiotrópio'
    },
    gabarito: 'A',
    justificativa: 'Asma não controlada (≥2 exacerbações/ano). Segundo GINA, deve-se aumentar para dose alta de corticoide inalatório antes de adicionar outras medicações.'
  },
  {
    id: 11,
    materia: 'Clínica Médica',
    tema: 'Tuberculose',
    dificuldade: 'facil',
    enunciado: 'Paciente com tosse há 4 semanas, febre vespertina e emagrecimento. Baciloscopia de escarro: BAAR positivo. Qual o esquema básico inicial?',
    alternativas: {
      A: 'Rifampicina + Isoniazida por 6 meses',
      B: 'RHZE por 2 meses, seguido de RH por 4 meses',
      C: 'RHZE por 6 meses',
      D: 'Levofloxacino + Etambutol por 6 meses'
    },
    gabarito: 'B',
    justificativa: 'Esquema básico para TB pulmonar: RHZE (Rifampicina, Isoniazida, Pirazinamida, Etambutol) por 2 meses, seguido de RH por 4 meses, totalizando 6 meses.'
  },
  {
    id: 12,
    materia: 'Clínica Médica',
    tema: 'Cirrose Hepática',
    dificuldade: 'dificil',
    enunciado: 'Cirrótico com ascite volumosa e edema de MMII. Sódio sérico: 128 mEq/L. Qual o diurético de escolha e sua dose inicial?',
    alternativas: {
      A: 'Furosemida 40mg/dia',
      B: 'Espironolactona 100mg/dia',
      C: 'Hidroclorotiazida 25mg/dia',
      D: 'Espironolactona 100mg + Furosemida 40mg'
    },
    gabarito: 'D',
    justificativa: 'Ascite em cirrótico: associação de espironolactona (100mg) + furosemida (40mg) na proporção 100:40 é mais eficaz e previne distúrbios eletrolíticos.'
  },
  {
    id: 13,
    materia: 'Clínica Médica',
    tema: 'Artrite Reumatoide',
    dificuldade: 'medio',
    enunciado: 'Mulher de 38 anos com dor e rigidez matinal (> 1h) em punhos e MCFs há 3 meses. Fator reumatoide e anti-CCP positivos. Qual o tratamento inicial?',
    alternativas: {
      A: 'Prednisona 20mg/dia',
      B: 'Metotrexato 15mg/semana',
      C: 'Hidroxicloroquina 400mg/dia',
      D: 'Anti-inflamatório não esteroidal'
    },
    gabarito: 'B',
    justificativa: 'AR estabelecida (critérios ACR/EULAR). Metotrexato é DMARD de primeira linha, devendo ser iniciado precocemente para prevenir lesões articulares irreversíveis.'
  },
  {
    id: 14,
    materia: 'Clínica Médica',
    tema: 'Tromboembolismo Pulmonar',
    dificuldade: 'medio',
    enunciado: 'Paciente com dispneia súbita, taquicardia e dor torácica pleurítica. Escore de Wells: 6 pontos. D-dímero: 1200 ng/mL. Qual o próximo passo?',
    alternativas: {
      A: 'Iniciar anticoagulação e solicitar angioTC',
      B: 'Aguardar angioTC para iniciar anticoagulação',
      C: 'Realizar cintilografia pulmonar',
      D: 'Solicitar ecocardiograma transtorácico'
    },
    gabarito: 'A',
    justificativa: 'Wells ≥ 4 pontos = alta probabilidade de TEP. D-dímero elevado. Deve-se iniciar anticoagulação imediatamente e solicitar angioTC para confirmação diagnóstica.'
  },
  {
    id: 15,
    materia: 'Clínica Médica',
    tema: 'Doença de Parkinson',
    dificuldade: 'medio',
    enunciado: 'Paciente de 68 anos com tremor de repouso em mão direita, bradicinesia e rigidez. Sintomas interferem nas atividades diárias. Qual o tratamento inicial?',
    alternativas: {
      A: 'Levodopa + carbidopa',
      B: 'Pramipexol',
      C: 'Amantadina',
      D: 'Selegilina'
    },
    gabarito: 'A',
    justificativa: 'Parkinson com comprometimento funcional significativo. Levodopa é mais eficaz para controle sintomático, sendo primeira escolha quando há impacto nas atividades diárias.'
  },
  {
    id: 16,
    materia: 'Clínica Médica',
    tema: 'Dengue',
    dificuldade: 'facil',
    enunciado: 'Paciente com febre há 4 dias, mialgia, cefaleia retroorbitária e exantema. Prova do laço positiva. Hematócrito: 42%, plaquetas: 95.000/mm³. Qual a classificação?',
    alternativas: {
      A: 'Dengue sem sinais de alarme',
      B: 'Dengue com sinais de alarme',
      C: 'Dengue grave',
      D: 'Febre hemorrágica da dengue'
    },
    gabarito: 'A',
    justificativa: 'Dengue clássica sem sinais de alarme (dor abdominal intensa, vômitos persistentes, sangramento de mucosas, letargia, hepatomegalia > 2cm, hematócrito aumentado com plaquetopenia).'
  },
  {
    id: 17,
    materia: 'Clínica Médica',
    tema: 'Hipernatremia',
    dificuldade: 'dificil',
    enunciado: 'Idoso acamado, confuso, com Na+ 158 mEq/L. Osmolalidade urinária: 650 mOsm/kg. Qual a causa mais provável?',
    alternativas: {
      A: 'Diabetes insipidus central',
      B: 'Diabetes insipidus nefrogênico',
      C: 'Desidratação hipertônica',
      D: 'Síndrome de Cushing'
    },
    gabarito: 'C',
    justificativa: 'Hipernatremia com osmolalidade urinária elevada (> 600) indica resposta renal adequada ao ADH, sugerindo perda de água livre (desidratação) em paciente com acesso limitado à água.'
  },
  {
    id: 18,
    materia: 'Clínica Médica',
    tema: 'Hipocalemia',
    dificuldade: 'medio',
    enunciado: 'Paciente em uso de furosemida apresenta K+ 2,8 mEq/L. ECG: onda U proeminente. Assintomático. Qual a reposição adequada?',
    alternativas: {
      A: 'KCl 19,1% 10mL IV em bolus',
      B: 'KCl 10% 30mL VO 8/8h',
      C: 'Espironolactona 25mg/dia',
      D: 'Gluconato de potássio 1g VO 12/12h'
    },
    gabarito: 'B',
    justificativa: 'Hipocalemia moderada (2,5-3,0 mEq/L) assintomática: reposição oral é preferível. KCl 10% 30mL VO fornece aproximadamente 40 mEq de potássio.'
  },
  {
    id: 19,
    materia: 'Clínica Médica',
    tema: 'Acidente Vascular Cerebral',
    dificuldade: 'medio',
    enunciado: 'Paciente com hemiparesia esquerda há 2 horas. TC crânio sem hemorragia. NIHSS: 8. PA: 180/100 mmHg. Glicemia: 110 mg/dL. Qual a conduta?',
    alternativas: {
      A: 'Trombólise com rtPA',
      B: 'Antiagregação com AAS',
      C: 'Redução imediata da PA',
      D: 'Anticoagulação com heparina'
    },
    gabarito: 'A',
    justificativa: 'AVCi dentro da janela terapêutica (< 4,5h), sem contraindicações. PA < 185/110 mmHg, glicemia adequada. Indicação de trombólise com rtPA.'
  },
  {
    id: 20,
    materia: 'Clínica Médica',
    tema: 'Lúpus Eritematoso Sistêmico',
    dificuldade: 'dificil',
    enunciado: 'Mulher de 28 anos com artralgia, fotossensibilidade e rash malar. FAN 1:640 padrão homogêneo. Anti-DNA positivo. Proteinúria 2g/24h. Qual a classificação da nefrite lúpica mais provável?',
    alternativas: {
      A: 'Classe I (mesangial mínima)',
      B: 'Classe II (mesangial proliferativa)',
      C: 'Classe III (focal)',
      D: 'Classe IV (difusa)'
    },
    gabarito: 'D',
    justificativa: 'Proteinúria nefrótica (> 3,5g/24h) em LES jovem com anti-DNA positivo sugere nefrite lúpica classe IV (proliferativa difusa), a mais grave. Requer biópsia renal para confirmação.'
  }
];

// ==================== PEDIATRIA (300 questões planejadas) ====================
export const pediatria: Questao[] = [
  {
    id: 101,
    materia: 'Pediatria',
    tema: 'Calendário Vacinal',
    dificuldade: 'facil',
    enunciado: 'Lactente de 2 meses comparece para vacinação de rotina. Quais vacinas devem ser administradas nesta idade?',
    alternativas: {
      A: 'BCG, Hepatite B e Pentavalente',
      B: 'Pentavalente, VIP, Pneumocócica 10 e Rotavírus',
      C: 'Tríplice viral, Hepatite A e Varicela',
      D: 'Meningocócica C, Febre amarela e DTP'
    },
    gabarito: 'B',
    justificativa: 'Aos 2 meses: Pentavalente (DTP+Hib+HepB), VIP (poliomielite inativada), Pneumocócica 10-valente e Rotavírus humano (primeira dose até 3m15d).'
  },
  {
    id: 102,
    materia: 'Pediatria',
    tema: 'Desidratação',
    dificuldade: 'medio',
    enunciado: 'Lactente de 8 meses com diarreia há 2 dias. Olhos fundos, mucosas secas, sinal da prega cutânea presente. FC: 150 bpm. Qual o grau de desidratação?',
    alternativas: {
      A: 'Sem desidratação',
      B: 'Desidratação leve',
      C: 'Desidratação moderada',
      D: 'Desidratação grave'
    },
    gabarito: 'C',
    justificativa: 'Desidratação moderada (perda de 5-10%): olhos fundos, mucosas secas, sinal da prega presente, taquicardia. Tratamento: TRO 50-100 mL/kg em 4-6h.'
  },
  {
    id: 103,
    materia: 'Pediatria',
    tema: 'Sarampo',
    dificuldade: 'facil',
    enunciado: 'Criança de 3 anos com febre alta, tosse, coriza, conjuntivite e exantema maculopapular que iniciou na face. Ao exame: manchas de Koplik. Qual o diagnóstico?',
    alternativas: {
      A: 'Rubéola',
      B: 'Sarampo',
      C: 'Escarlatina',
      D: 'Roséola infantil'
    },
    gabarito: 'B',
    justificativa: 'Sarampo: febre alta, tosse, coriza, conjuntivite (3 Cs), manchas de Koplik (patognomônicas) e exantema craniocaudal maculopapular. Notificação compulsória imediata.'
  },
  {
    id: 104,
    materia: 'Pediatria',
    tema: 'Icterícia Neonatal',
    dificuldade: 'medio',
    enunciado: 'RN com 36 horas de vida, ictérico até tórax. Bilirrubina total: 14 mg/dL (indireta: 13 mg/dL). Mãe O+, RN A+. Coombs direto negativo. Qual a conduta?',
    alternativas: {
      A: 'Observação clínica',
      B: 'Fototerapia',
      C: 'Exsanguineotransfusão',
      D: 'Imunoglobulina endovenosa'
    },
    gabarito: 'B',
    justificativa: 'Icterícia fisiológica com bilirrubina em zona de alto risco para idade (36h). Segundo nomograma de Bhutani, BT > 12 mg/dL em 36h indica fototerapia.'
  },
  {
    id: 105,
    materia: 'Pediatria',
    tema: 'Asma Pediátrica',
    dificuldade: 'medio',
    enunciado: 'Criança de 5 anos com sibilância recorrente (3 episódios no último ano), tosse noturna e dispneia aos esforços. Qual o tratamento de manutenção?',
    alternativas: {
      A: 'Salbutamol inalatório de resgate',
      B: 'Corticoide inalatório dose baixa',
      C: 'Montelucaste oral',
      D: 'Corticoide oral contínuo'
    },
    gabarito: 'B',
    justificativa: 'Asma persistente leve (sintomas > 2x/semana). Tratamento de manutenção: corticoide inalatório dose baixa (budesonida ou fluticasona) + broncodilatador de resgate.'
  },
  {
    id: 106,
    materia: 'Pediatria',
    tema: 'Refluxo Gastroesofágico',
    dificuldade: 'facil',
    enunciado: 'Lactente de 3 meses com regurgitações frequentes após mamadas, sem perda ponderal. Ganha peso adequadamente. Qual a conduta?',
    alternativas: {
      A: 'Iniciar omeprazol',
      B: 'Solicitar endoscopia digestiva',
      C: 'Orientações posturais e tranquilização',
      D: 'Suspender aleitamento materno'
    },
    gabarito: 'C',
    justificativa: 'Refluxo gastroesofágico fisiológico (regurgitação do lactente feliz): sem sinais de alarme, ganho ponderal adequado. Conduta: orientações posturais, fracionamento das mamadas.'
  },
  {
    id: 107,
    materia: 'Pediatria',
    tema: 'Meningite Bacteriana',
    dificuldade: 'dificil',
    enunciado: 'Lactente de 4 meses com febre, irritabilidade e fontanela abaulada. Líquor: 2000 células (90% neutrófilos), glicose 20 mg/dL, proteína 180 mg/dL. Qual o agente mais provável?',
    alternativas: {
      A: 'Streptococcus pneumoniae',
      B: 'Neisseria meningitidis',
      C: 'Haemophilus influenzae',
      D: 'Streptococcus agalactiae'
    },
    gabarito: 'A',
    justificativa: 'Meningite bacteriana em lactente 3-12 meses: S. pneumoniae é o agente mais comum. Líquor com pleocitose neutrofílica, hipoglicorraquia e hiperproteinorraquia.'
  },
  {
    id: 108,
    materia: 'Pediatria',
    tema: 'Anemia Ferropriva',
    dificuldade: 'facil',
    enunciado: 'Lactente de 10 meses em aleitamento materno exclusivo até 6 meses, sem introdução de alimentos ricos em ferro. Hb: 9,2 g/dL, VCM: 68 fL. Qual a conduta?',
    alternativas: {
      A: 'Solicitar eletroforese de hemoglobina',
      B: 'Iniciar sulfato ferroso 3-5 mg/kg/dia de ferro elementar',
      C: 'Transfusão de concentrado de hemácias',
      D: 'Investigar sangramento oculto'
    },
    gabarito: 'B',
    justificativa: 'Anemia ferropriva (microcítica hipocrômica) por deficiência dietética. Tratamento: sulfato ferroso 3-5 mg/kg/dia de ferro elementar, longe das refeições, por 3 meses.'
  },
  {
    id: 109,
    materia: 'Pediatria',
    tema: 'Bronquiolite Viral Aguda',
    dificuldade: 'medio',
    enunciado: 'Lactente de 4 meses com coriza, tosse e sibilância há 3 dias. FR: 65 irpm, tiragem subcostal leve, SatO2: 94% em ar ambiente. Qual a conduta?',
    alternativas: {
      A: 'Internação hospitalar',
      B: 'Salbutamol inalatório e reavaliação',
      C: 'Corticoide sistêmico',
      D: 'Antibioticoterapia'
    },
    gabarito: 'A',
    justificativa: 'Bronquiolite moderada: FR > 60 irpm, tiragem subcostal, SatO2 < 95%. Indicação de internação para suporte (oxigenioterapia, hidratação). Broncodilatador não tem benefício comprovado.'
  },
  {
    id: 110,
    materia: 'Pediatria',
    tema: 'Puberdade Precoce',
    dificuldade: 'medio',
    enunciado: 'Menina de 7 anos com telarca e pubarca. Idade óssea: 9 anos. RNM: sem alterações. Qual o diagnóstico mais provável?',
    alternativas: {
      A: 'Puberdade precoce central idiopática',
      B: 'Puberdade precoce periférica',
      C: 'Hiperplasia adrenal congênita',
      D: 'Tumor ovariano'
    },
    gabarito: 'A',
    justificativa: 'Puberdade precoce central (< 8 anos em meninas): telarca + pubarca, idade óssea avançada, RNM normal. Causa mais comum: idiopática. Tratamento: análogo de GnRH.'
  },
  {
    id: 111,
    materia: 'Pediatria',
    tema: 'Febre Reumática',
    dificuldade: 'dificil',
    enunciado: 'Criança de 9 anos com artrite migratória em joelhos e tornozelos, febre e sopro cardíaco novo. ASLO: 800 UI/mL. ECG: PR prolongado. Quantos critérios de Jones maiores?',
    alternativas: {
      A: '1 critério maior',
      B: '2 critérios maiores',
      C: '3 critérios maiores',
      D: '4 critérios maiores'
    },
    gabarito: 'C',
    justificativa: 'Critérios de Jones maiores presentes: artrite (poliartrite migratória), cardite (sopro novo + PR prolongado) e febre. Total: 3 critérios maiores + evidência de infecção estreptocócica prévia.'
  },
  {
    id: 112,
    materia: 'Pediatria',
    tema: 'Convulsão Febril',
    dificuldade: 'facil',
    enunciado: 'Criança de 18 meses com episódio convulsivo tônico-clônico generalizado durante febre (39°C), com duração de 2 minutos. Primeiro episódio. Qual a conduta?',
    alternativas: {
      A: 'Iniciar anticonvulsivante profilático',
      B: 'Solicitar EEG e RNM de crânio',
      C: 'Punção lombar imediata',
      D: 'Orientação aos pais e antitérmico'
    },
    gabarito: 'D',
    justificativa: 'Convulsão febril simples (6m-5anos, < 15min, generalizada, única em 24h). Benigna, autolimitada. Conduta: orientação familiar, antitérmico. Não requer anticonvulsivante nem exames.'
  },
  {
    id: 113,
    materia: 'Pediatria',
    tema: 'Doença Celíaca',
    dificuldade: 'medio',
    enunciado: 'Criança de 2 anos com diarreia crônica, distensão abdominal e déficit ponderal após introdução de papinhas com trigo. Qual o exame diagnóstico inicial?',
    alternativas: {
      A: 'Biópsia intestinal',
      B: 'Anti-transglutaminase IgA',
      C: 'Teste do suor',
      D: 'Parasitológico de fezes'
    },
    gabarito: 'B',
    justificativa: 'Suspeita de doença celíaca: anti-transglutaminase IgA é o teste sorológico inicial (sensibilidade > 95%). Se positivo, confirmar com biópsia intestinal mostrando atrofia vilositária.'
  },
  {
    id: 114,
    materia: 'Pediatria',
    tema: 'Síndrome Nefrótica',
    dificuldade: 'medio',
    enunciado: 'Criança de 4 anos com edema periorbitário, ascite e proteinúria 3+. Albumina: 1,8 g/dL. Colesterol: 350 mg/dL. Qual o diagnóstico mais provável?',
    alternativas: {
      A: 'Glomerulonefrite difusa aguda',
      B: 'Síndrome nefrótica por lesão mínima',
      C: 'Síndrome nefrítica',
      D: 'Insuficiência renal aguda'
    },
    gabarito: 'B',
    justificativa: 'Síndrome nefrótica (proteinúria maciça, hipoalbuminemia, edema, hiperlipidemia) em pré-escolar. Causa mais comum: lesão mínima (90%). Tratamento: corticoide (prednisona 2 mg/kg/dia).'
  },
  {
    id: 115,
    materia: 'Pediatria',
    tema: 'Intussuscepção',
    dificuldade: 'medio',
    enunciado: 'Lactente de 8 meses com choro intenso intermitente, vômitos e evacuação com sangue vivo ("geleia de framboesa"). Massa palpável em hipocôndrio direito. Qual o diagnóstico?',
    alternativas: {
      A: 'Apendicite aguda',
      B: 'Intussuscepção intestinal',
      C: 'Divertículo de Meckel',
      D: 'Volvo intestinal'
    },
    gabarito: 'B',
    justificativa: 'Intussuscepção (invaginação intestinal): tríade clássica em lactente - dor abdominal cólica, massa palpável e fezes com sangue. Diagnóstico: USG. Tratamento: enema com contraste ou cirurgia.'
  },
  {
    id: 116,
    materia: 'Pediatria',
    tema: 'Dermatite Atópica',
    dificuldade: 'facil',
    enunciado: 'Lactente de 6 meses com lesões eritematosas, descamativas e pruriginosas em face e superfícies extensoras. Mãe com rinite alérgica. Qual o diagnóstico?',
    alternativas: {
      A: 'Dermatite seborreica',
      B: 'Dermatite atópica',
      C: 'Escabiose',
      D: 'Psoríase'
    },
    gabarito: 'B',
    justificativa: 'Dermatite atópica: início precoce (< 1 ano), prurido intenso, lesões em face e extensoras (lactente), história familiar de atopia. Tratamento: hidratação + corticoide tópico.'
  },
  {
    id: 117,
    materia: 'Pediatria',
    tema: 'Hiperbilirrubinemia Neonatal',
    dificuldade: 'dificil',
    enunciado: 'RN com 12 horas de vida, ictérico até abdome. Mãe O-, RN A+. Coombs direto positivo. Bilirrubina total: 18 mg/dL. Qual a conduta?',
    alternativas: {
      A: 'Fototerapia',
      B: 'Exsanguineotransfusão',
      C: 'Imunoglobulina + fototerapia',
      D: 'Observação clínica'
    },
    gabarito: 'C',
    justificativa: 'Doença hemolítica por incompatibilidade Rh (Coombs direto +) com icterícia precoce (< 24h) e BT elevada. Tratamento: imunoglobulina EV (0,5-1 g/kg) + fototerapia para prevenir exsanguineotransfusão.'
  },
  {
    id: 118,
    materia: 'Pediatria',
    tema: 'Criptorquidia',
    dificuldade: 'facil',
    enunciado: 'RN a termo com testículo direito não palpável em bolsa escrotal. Testículo esquerdo tópico. Qual a conduta?',
    alternativas: {
      A: 'Cirurgia imediata',
      B: 'Aguardar descida espontânea até 6 meses',
      C: 'Tratamento hormonal com hCG',
      D: 'Orquiectomia profilática'
    },
    gabarito: 'B',
    justificativa: 'Criptorquidia: aguardar descida espontânea até 6 meses. Se persistir, orquidopexia entre 6-18 meses (idealmente antes de 1 ano) para preservar fertilidade e reduzir risco de malignização.'
  },
  {
    id: 119,
    materia: 'Pediatria',
    tema: 'Estenose Hipertrófica do Piloro',
    dificuldade: 'medio',
    enunciado: 'Lactente de 5 semanas com vômitos não biliosos em jato após mamadas. Perda ponderal. Massa palpável em epigástrio. Qual o diagnóstico?',
    alternativas: {
      A: 'Refluxo gastroesofágico',
      B: 'Estenose hipertrófica do piloro',
      C: 'Atresia duodenal',
      D: 'Gastroenterite aguda'
    },
    gabarito: 'B',
    justificativa: 'Estenose hipertrófica do piloro: vômitos não biliosos em jato (3-6 semanas), massa em epigástrio ("oliva pilórica"), alcalose metabólica hipoclorêmica. Diagnóstico: USG. Tratamento: piloromiotomia.'
  },
  {
    id: 120,
    materia: 'Pediatria',
    tema: 'Coqueluche',
    dificuldade: 'medio',
    enunciado: 'Lactente de 2 meses com tosse paroxística há 2 semanas, seguida de guincho inspiratório e vômitos. Não vacinado. Qual o diagnóstico e tratamento?',
    alternativas: {
      A: 'Bronquiolite viral - suporte',
      B: 'Coqueluche - azitromicina',
      C: 'Pneumonia bacteriana - amoxicilina',
      D: 'Asma - corticoide inalatório'
    },
    gabarito: 'B',
    justificativa: 'Coqueluche (Bordetella pertussis): tosse paroxística + guincho inspiratório + vômitos pós-tosse em lactente não vacinado. Tratamento: azitromicina 10 mg/kg/dia por 5 dias. Notificação compulsória.'
  }
];

// ==================== GINECOLOGIA E OBSTETRÍCIA (300 questões planejadas) ====================
export const ginecologiaObstetricia: Questao[] = [
  {
    id: 201,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Pré-natal',
    dificuldade: 'facil',
    enunciado: 'Gestante de 28 semanas, G2P1, sem comorbidades. Qual a periodicidade ideal das consultas de pré-natal a partir desta idade gestacional?',
    alternativas: {
      A: 'Mensal até o parto',
      B: 'Quinzenal até 36 semanas, depois semanal',
      C: 'Semanal até o parto',
      D: 'Mensal até 32 semanas, depois quinzenal'
    },
    gabarito: 'B',
    justificativa: 'Pré-natal de baixo risco: consultas mensais até 28 semanas, quinzenais de 28-36 semanas e semanais após 36 semanas até o parto.'
  },
  {
    id: 202,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Diabetes Gestacional',
    dificuldade: 'medio',
    enunciado: 'Gestante de 26 semanas com TOTG 75g: jejum 88 mg/dL, 1h 195 mg/dL, 2h 160 mg/dL. Qual o diagnóstico e conduta inicial?',
    alternativas: {
      A: 'Normal - seguimento habitual',
      B: 'Diabetes gestacional - dieta e exercícios',
      C: 'Diabetes gestacional - insulinoterapia imediata',
      D: 'Intolerância à glicose - repetir em 4 semanas'
    },
    gabarito: 'B',
    justificativa: 'Diabetes gestacional: ≥1 valor alterado no TOTG (jejum ≥92, 1h ≥180, 2h ≥153 mg/dL). Conduta inicial: dieta fracionada + exercícios. Insulina se glicemia não controlada em 2 semanas.'
  },
  {
    id: 203,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Pré-eclâmpsia',
    dificuldade: 'medio',
    enunciado: 'Gestante de 34 semanas com PA 160/110 mmHg, proteinúria 3g/24h e cefaleia. Qual a conduta?',
    alternativas: {
      A: 'Anti-hipertensivo oral e seguimento ambulatorial',
      B: 'Internação, sulfato de magnésio e resolução da gestação',
      C: 'Corticoide para maturação pulmonar e alta',
      D: 'Observação domiciliar com controle pressórico'
    },
    gabarito: 'B',
    justificativa: 'Pré-eclâmpsia grave (PA ≥160/110 + proteinúria + sintomas). Conduta: internação, sulfato de magnésio (neuroproteção), anti-hipertensivo e resolução da gestação (≥34 semanas).'
  },
  {
    id: 204,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Trabalho de Parto Prematuro',
    dificuldade: 'medio',
    enunciado: 'Gestante de 30 semanas com contrações regulares e colo com 3 cm de dilatação. Qual a conduta?',
    alternativas: {
      A: 'Tocólise + corticoide + antibiótico',
      B: 'Apenas observação',
      C: 'Resolução imediata da gestação',
      D: 'Corticoide e alta hospitalar'
    },
    gabarito: 'A',
    justificativa: 'Trabalho de parto prematuro (24-34 semanas): tocólise (nifedipina/atosiban), corticoide para maturação pulmonar fetal e antibiótico profilático para Streptococcus do grupo B.'
  },
  {
    id: 205,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Hemorragia Pós-parto',
    dificuldade: 'dificil',
    enunciado: 'Puérpera com sangramento vaginal volumoso 2 horas após parto vaginal. Útero atônico à palpação. Conduta inicial?',
    alternativas: {
      A: 'Curetagem uterina',
      B: 'Massagem uterina + ocitocina',
      C: 'Histerectomia de urgência',
      D: 'Transfusão sanguínea'
    },
    gabarito: 'B',
    justificativa: 'Atonia uterina (causa mais comum de HPP). Conduta: massagem uterina bimanual + ocitocina EV. Se refratário: misoprostol, metilergonovina, ácido tranexâmico. Cirurgia se falha clínica.'
  },
  {
    id: 206,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Câncer de Colo Uterino',
    dificuldade: 'facil',
    enunciado: 'Mulher de 35 anos com citologia oncótica: HSIL (lesão intraepitelial de alto grau). Qual a conduta?',
    alternativas: {
      A: 'Repetir citologia em 6 meses',
      B: 'Colposcopia com biópsia',
      C: 'Histerectomia total',
      D: 'Teste de HPV'
    },
    gabarito: 'B',
    justificativa: 'HSIL: lesão precursora de câncer. Conduta: colposcopia com biópsia para confirmar diagnóstico histológico e estadiamento. Tratamento: excisão (CAF, conização) ou ablação.'
  },
  {
    id: 207,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Endometriose',
    dificuldidade: 'medio',
    enunciado: 'Mulher de 28 anos com dismenorreia progressiva, dispareunia de profundidade e infertilidade. Qual o exame complementar inicial?',
    alternativas: {
      A: 'Laparoscopia diagnóstica',
      B: 'Ultrassonografia transvaginal',
      C: 'Ressonância magnética de pelve',
      D: 'Dosagem de CA-125'
    },
    gabarito: 'B',
    justificativa: 'Suspeita de endometriose: USG transvaginal com preparo intestinal é exame inicial (identifica endometriomas e lesões profundas). Padrão-ouro: laparoscopia, mas reservada para casos específicos.'
  },
  {
    id: 208,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Mioma Uterino',
    dificuldade: 'facil',
    enunciado: 'Mulher de 42 anos com sangramento menstrual aumentado e mioma intramural de 4 cm. Deseja preservar fertilidade. Qual o tratamento?',
    alternativas: {
      A: 'Histerectomia total',
      B: 'Miomectomia',
      C: 'Embolização de artérias uterinas',
      D: 'Observação clínica'
    },
    gabarito: 'B',
    justificativa: 'Mioma sintomático em mulher que deseja preservar fertilidade: miomectomia (ressecção cirúrgica do mioma preservando útero) é o tratamento de escolha.'
  },
  {
    id: 209,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Síndrome dos Ovários Policísticos',
    dificuldade: 'medio',
    enunciado: 'Mulher de 25 anos com oligomenorreia, hirsutismo e acne. IMC: 31 kg/m². USG: ovários policísticos. Testosterona total elevada. Qual o tratamento inicial?',
    alternativas: {
      A: 'Metformina + anticoncepcional combinado',
      B: 'Espironolactona isolada',
      C: 'Clomifeno',
      D: 'Cirurgia ovariana'
    },
    gabarito: 'A',
    justificativa: 'SOP com resistência insulínica (IMC elevado): metformina (melhora resistência insulínica) + anticoncepcional combinado (regula ciclo, reduz andrógenos). Perda de peso é fundamental.'
  },
  {
    id: 210,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Gravidez Ectópica',
    dificuldade: 'medio',
    enunciado: 'Mulher com atraso menstrual, dor pélvica e sangramento vaginal discreto. β-hCG: 2000 mUI/mL. USG transvaginal: útero vazio, massa anexial. Qual o diagnóstico?',
    alternativas: {
      A: 'Abortamento incompleto',
      B: 'Gravidez ectópica',
      C: 'Cisto ovariano',
      D: 'Gravidez tópica inicial'
    },
    gabarito: 'B',
    justificativa: 'Gravidez ectópica: β-hCG > 1500 mUI/mL sem saco gestacional intrauterino + massa anexial. Tratamento: metotrexato (se estável, β-hCG < 5000, sem atividade cardíaca) ou cirurgia.'
  },
  {
    id: 211,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Candidíase Vulvovaginal',
    dificuldade: 'facil',
    enunciado: 'Mulher com prurido vulvovaginal intenso e corrimento branco grumoso. pH vaginal: 4,0. Qual o tratamento?',
    alternativas: {
      A: 'Metronidazol oral',
      B: 'Fluconazol 150mg dose única',
      C: 'Ceftriaxona IM',
      D: 'Doxiciclina oral'
    },
    gabarito: 'B',
    justificativa: 'Candidíase vulvovaginal: prurido, corrimento grumoso, pH < 4,5. Tratamento: fluconazol 150mg VO dose única ou antifúngico tópico (miconazol, clotrimazol) por 3-7 dias.'
  },
  {
    id: 212,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Vaginose Bacteriana',
    dificuldade: 'facil',
    enunciado: 'Mulher com corrimento vaginal acinzentado, odor fétido ("peixe podre") e pH vaginal 5,5. Qual o tratamento?',
    alternativas: {
      A: 'Fluconazol oral',
      B: 'Metronidazol 500mg 12/12h por 7 dias',
      C: 'Azitromicina dose única',
      D: 'Penicilina benzatina'
    },
    gabarito: 'B',
    justificativa: 'Vaginose bacteriana: corrimento com odor fétido, pH > 4,5, teste de Whiff positivo, clue cells. Tratamento: metronidazol 500mg VO 12/12h por 7 dias ou gel vaginal.'
  },
  {
    id: 213,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Doença Inflamatória Pélvica',
    dificuldade: 'medio',
    enunciado: 'Mulher de 22 anos com dor pélvica, febre e corrimento vaginal purulento. Dor à mobilização cervical. Qual o tratamento ambulatorial?',
    alternativas: {
      A: 'Ceftriaxona 500mg IM dose única + doxiciclina 100mg 12/12h por 14 dias',
      B: 'Azitromicina 1g VO dose única',
      C: 'Metronidazol oral por 7 dias',
      D: 'Ciprofloxacino 500mg 12/12h por 10 dias'
    },
    gabarito: 'A',
    justificativa: 'DIP leve/moderada: ceftriaxona 500mg IM dose única + doxiciclina 100mg VO 12/12h por 14 dias ± metronidazol. Cobre N. gonorrhoeae, C. trachomatis e anaeróbios.'
  },
  {
    id: 214,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Amenorreia Primária',
    dificuldade: 'dificil',
    enunciado: 'Adolescente de 16 anos sem menarca. Desenvolvimento mamário normal (Tanner V). Ausência de pelos pubianos. Cariótipo: 46,XY. Qual o diagnóstico?',
    alternativas: {
      A: 'Síndrome de Turner',
      B: 'Síndrome de Insensibilidade Androgênica',
      C: 'Agenesia mülleriana',
      D: 'Hiperplasia adrenal congênita'
    },
    gabarito: 'B',
    justificativa: 'Síndrome de Insensibilidade Androgênica (Morris): cariótipo 46,XY, fenótipo feminino, mamas desenvolvidas (conversão periférica de testosterona em estrogênio), ausência de pelos (resistência androgênica), amenorreia primária.'
  },
  {
    id: 215,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Menopausa',
    dificuldade: 'facil',
    enunciado: 'Mulher de 52 anos com amenorreia há 14 meses, fogachos e sudorese noturna. FSH: 68 mUI/mL. Qual a conduta?',
    alternativas: {
      A: 'Terapia hormonal com estrogênio + progesterona',
      B: 'Apenas observação',
      C: 'Reposição de testosterona',
      D: 'Indução de ovulação'
    },
    gabarito: 'A',
    justificativa: 'Menopausa confirmada (amenorreia > 12 meses, FSH elevado) com sintomas vasomotores. Terapia hormonal (estrogênio + progesterona em mulheres com útero) alivia sintomas e previne osteoporose.'
  },
  {
    id: 216,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Descolamento Prematuro de Placenta',
    dificuldade: 'medio',
    enunciado: 'Gestante de 36 semanas com dor abdominal intensa, sangramento vaginal escuro e hipertonia uterina. BCF: 100 bpm. Qual o diagnóstico e conduta?',
    alternativas: {
      A: 'Placenta prévia - cesárea eletiva',
      B: 'DPP - cesárea de urgência',
      C: 'Trabalho de parto - parto vaginal',
      D: 'Rotura uterina - laparotomia'
    },
    gabarito: 'B',
    justificativa: 'Descolamento prematuro de placenta (DPP): dor abdominal intensa, sangramento escuro, hipertonia uterina, sofrimento fetal. Emergência obstétrica. Conduta: cesárea imediata.'
  },
  {
    id: 217,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Placenta Prévia',
    dificuldade: 'medio',
    enunciado: 'Gestante de 32 semanas com sangramento vaginal vermelho vivo, indolor, recorrente. USG: placenta recobrindo orifício interno do colo. Qual a conduta?',
    alternativas: {
      A: 'Cesárea imediata',
      B: 'Indução do parto vaginal',
      C: 'Repouso, corticoide e programar cesárea eletiva',
      D: 'Toque vaginal para avaliar dilatação'
    },
    gabarito: 'C',
    justificativa: 'Placenta prévia total com sangramento: repouso, corticoide (maturação pulmonar), programar cesárea eletiva (37-38 semanas). NUNCA toque vaginal (pode desencadear hemorragia maciça).'
  },
  {
    id: 218,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Rotura Prematura de Membranas',
    dificuldade: 'medio',
    enunciado: 'Gestante de 34 semanas com perda líquida clara pela vagina há 6 horas. Teste de cristalização positivo. Sem contrações. Qual a conduta?',
    alternativas: {
      A: 'Conduta expectante até 37 semanas',
      B: 'Antibiótico + corticoide + indução do parto em 24-48h',
      C: 'Cesárea imediata',
      D: 'Alta hospitalar com seguimento ambulatorial'
    },
    gabarito: 'B',
    justificativa: 'RPM pré-termo (34-37 semanas): antibiótico profilático, corticoide (se < 34 semanas) e indução do parto em 24-48h (reduz risco de corioamnionite). Após 34 semanas, benefício da resolução supera riscos.'
  },
  {
    id: 219,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Incompatibilidade Rh',
    dificuldade: 'facil',
    enunciado: 'Gestante Rh negativo, parceiro Rh positivo, sem sensibilização prévia (Coombs indireto negativo). Qual a profilaxia?',
    alternativas: {
      A: 'Imunoglobulina anti-D com 28 semanas e após o parto',
      B: 'Imunoglobulina anti-D apenas após o parto',
      C: 'Nenhuma profilaxia necessária',
      D: 'Corticoide antenatal'
    },
    gabarito: 'A',
    justificativa: 'Profilaxia de aloimunização Rh: imunoglobulina anti-D (300 mcg) com 28 semanas e nas primeiras 72h pós-parto (se RN Rh+). Também após eventos sensibilizantes (amniocentese, sangramento).'
  },
  {
    id: 220,
    materia: 'Ginecologia e Obstetrícia',
    tema: 'Mola Hidatiforme',
    dificuldade: 'medio',
    enunciado: 'Mulher com sangramento vaginal, útero maior que idade gestacional e β-hCG muito elevado (> 100.000 mUI/mL). USG: imagem em "tempestade de neve". Qual o diagnóstico e tratamento?',
    alternativas: {
      A: 'Gravidez gemelar - seguimento pré-natal',
      B: 'Mola hidatiforme - esvaziamento uterino',
      C: 'Abortamento - curetagem',
      D: 'Coriocarcinoma - quimioterapia'
    },
    gabarito: 'B',
    justificativa: 'Mola hidatiforme: β-hCG muito elevado, útero > IG, USG com imagem em "tempestade de neve". Tratamento: esvaziamento uterino (AMIU/curetagem). Seguimento: β-hCG semanal (risco de doença trofoblástica gestacional).'
  }
];

// ==================== CIRURGIA (300 questões planejadas) ====================
export const cirurgia: Questao[] = [
  {
    id: 301,
    materia: 'Cirurgia',
    tema: 'Apendicite Aguda',
    dificuldade: 'facil',
    enunciado: 'Paciente de 25 anos com dor periumbilical migratória para FID, febre, náuseas e sinal de Blumberg positivo. Leucócitos: 15.000/mm³. Qual o diagnóstico?',
    alternativas: {
      A: 'Diverticulite aguda',
      B: 'Apendicite aguda',
      C: 'Colecistite aguda',
      D: 'Gastroenterite'
    },
    gabarito: 'B',
    justificativa: 'Apendicite aguda: dor migratória (periumbilical → FID), febre, sinais de irritação peritoneal (Blumberg), leucocitose. Tratamento: apendicectomia (laparoscópica ou aberta).'
  },
  {
    id: 302,
    materia: 'Cirurgia',
    tema: 'Colecistite Aguda',
    dificuldade: 'medio',
    enunciado: 'Mulher de 45 anos com dor em hipocôndrio direito, febre e Murphy positivo. USG: vesícula distendida, parede espessada, cálculo impactado. Qual a conduta?',
    alternativas: {
      A: 'Tratamento clínico com antibiótico',
      B: 'Colecistectomia videolaparoscópica precoce',
      C: 'CPRE com papilotomia',
      D: 'Observação e dieta zero'
    },
    gabarito: 'B',
    justificativa: 'Colecistite aguda litiásica: colecistectomia videolaparoscópica precoce (< 72h do início dos sintomas) reduz complicações. Antibioticoterapia + cirurgia.'
  },
  {
    id: 303,
    materia: 'Cirurgia',
    tema: 'Pancreatite Aguda',
    dificuldade: 'medio',
    enunciado: 'Paciente com dor abdominal epigástrica em faixa, vômitos e amilase 5x o valor normal. Qual o critério de gravidade de Ranson em 48h que indica pior prognóstico?',
    alternativas: {
      A: 'Idade > 55 anos',
      B: 'Queda do hematócrito > 10%',
      C: 'Leucócitos > 16.000/mm³',
      D: 'Glicemia > 200 mg/dL'
    },
    gabarito: 'B',
    justificativa: 'Critérios de Ranson em 48h (pior prognóstico): queda Ht > 10%, aumento ureia > 5 mg/dL, Ca < 8 mg/dL, PaO2 < 60 mmHg, déficit de base > 4 mEq/L, sequestro líquido > 6L.'
  },
  {
    id: 304,
    materia: 'Cirurgia',
    tema: 'Hérnia Inguinal',
    dificuldade: 'facil',
    enunciado: 'Homem de 60 anos com abaulamento inguinal redutível, que aumenta com esforço. Qual o tratamento definitivo?',
    alternativas: {
      A: 'Uso de cinta elástica',
      B: 'Herniorrafia eletiva',
      C: 'Observação clínica',
      D: 'Antibioticoterapia'
    },
    gabarito: 'B',
    justificativa: 'Hérnia inguinal redutível: tratamento definitivo é cirúrgico (herniorrafia com ou sem tela). Indicação eletiva para prevenir encarceramento e estrangulamento.'
  },
  {
    id: 305,
    materia: 'Cirurgia',
    tema: 'Obstrução Intestinal',
    dificuldade: 'medio',
    enunciado: 'Paciente com distensão abdominal, vômitos, parada de eliminação de gases e fezes. Raio-X: níveis hidroaéreos. Qual a causa mais comum em adultos?',
    alternativas: {
      A: 'Aderências pós-operatórias',
      B: 'Hérnia encarcerada',
      C: 'Neoplasia colorretal',
      D: 'Volvo de sigmoide'
    },
    gabarito: 'A',
    justificativa: 'Obstrução intestinal em adultos: aderências pós-operatórias são a causa mais comum (60-70%). Tratamento inicial: descompressão (SNG), hidratação. Cirurgia se não resolver ou sinais de estrangulamento.'
  },
  {
    id: 306,
    materia: 'Cirurgia',
    tema: 'Úlcera Péptica Perfurada',
    dificuldade: 'medio',
    enunciado: 'Paciente com dor abdominal súbita e intensa, abdome em tábua. Raio-X: pneumoperitônio. Qual a conduta?',
    alternativas: {
      A: 'Tratamento clínico com IBP',
      B: 'Endoscopia digestiva alta',
      C: 'Laparotomia exploradora',
      D: 'Observação por 24h'
    },
    gabarito: 'C',
    justificativa: 'Úlcera péptica perfurada: pneumoperitônio + abdome agudo. Emergência cirúrgica. Conduta: laparotomia (ou laparoscopia) com rafia da perfuração + epiploplastia (patch de Graham).'
  },
  {
    id: 307,
    materia: 'Cirurgia',
    tema: 'Hemorroidas',
    dificuldade: 'facil',
    enunciado: 'Paciente com sangramento vermelho vivo ao evacuar, sem dor. Ao exame: tumorações violáceas redutíveis no canal anal. Qual o diagnóstico?',
    alternativas: {
      A: 'Fissura anal',
      B: 'Hemorroidas internas grau II',
      C: 'Câncer de reto',
      D: 'Abscesso perianal'
    },
    gabarito: 'B',
    justificativa: 'Hemorroidas internas grau II: prolapso com evacuação, redução espontânea, sangramento indolor. Tratamento: medidas clínicas (fibras, hidratação). Cirurgia se refratário ou grau III/IV.'
  },
  {
    id: 308,
    materia: 'Cirurgia',
    tema: 'Trauma Abdominal Fechado',
    dificuldade: 'medio',
    enunciado: 'Vítima de acidente automobilístico com dor abdominal e hipotensão. FAST positivo para líquido livre. Qual a conduta?',
    alternativas: {
      A: 'TC de abdome com contraste',
      B: 'Laparotomia exploradora imediata',
      C: 'Observação clínica',
      D: 'Lavado peritoneal diagnóstico'
    },
    gabarito: 'B',
    justificativa: 'Trauma abdominal fechado com instabilidade hemodinâmica + FAST positivo: indicação de laparotomia exploradora imediata. TC apenas em pacientes estáveis.'
  },
  {
    id: 309,
    materia: 'Cirurgia',
    tema: 'Trauma de Tórax',
    dificuldade: 'dificil',
    enunciado: 'Vítima de FAF em hemitórax esquerdo com dispneia, turgência jugular e desvio de traqueia para direita. Qual o diagnóstico e tratamento imediato?',
    alternativas: {
      A: 'Hemotórax - drenagem torácica',
      B: 'Pneumotórax hipertensivo - descompressão com agulha',
      C: 'Tamponamento cardíaco - pericardiocentese',
      D: 'Contusão pulmonar - ventilação mecânica'
    },
    gabarito: 'B',
    justificativa: 'Pneumotórax hipertensivo: dispneia, turgência jugular, desvio de traqueia, hipotensão. Emergência! Tratamento: descompressão imediata com agulha (2º EIC linha hemiclavicular) seguida de drenagem torácica.'
  },
  {
    id: 310,
    materia: 'Cirurgia',
    tema: 'Queimaduras',
    dificuldade: 'medio',
    enunciado: 'Paciente com queimadura em tronco anterior e membro superior direito (adulto). Qual a superfície corporal queimada pela regra dos 9?',
    alternativas: {
      A: '18%',
      B: '27%',
      C: '36%',
      D: '45%'
    },
    gabarito: 'B',
    justificativa: 'Regra dos 9 (adulto): tronco anterior = 18%, membro superior = 9%. Total: 27%. Queimadura > 20% requer reposição volêmica (fórmula de Parkland: 4 mL x peso x % SCQ).'
  },
  {
    id: 311,
    materia: 'Cirurgia',
    tema: 'Câncer de Mama',
    dificuldade: 'medio',
    enunciado: 'Mulher de 55 anos com nódulo mamário de 2 cm, móvel, indolor. Mamografia: BI-RADS 5. Qual a conduta?',
    alternativas: {
      A: 'Repetir mamografia em 6 meses',
      B: 'Biópsia do nódulo',
      C: 'Mastectomia radical',
      D: 'Quimioterapia neoadjuvante'
    },
    gabarito: 'B',
    justificativa: 'BI-RADS 5: alta suspeita de malignidade (> 95%). Conduta: biópsia (core biopsy ou PAAF) para confirmação histológica antes de definir tratamento cirúrgico.'
  },
  {
    id: 312,
    materia: 'Cirurgia',
    tema: 'Trombose Venosa Profunda',
    dificuldade: 'facil',
    enunciado: 'Paciente pós-operatório de cirurgia ortopédica com edema, dor e empastamento em panturrilha esquerda. Qual o exame diagnóstico?',
    alternativas: {
      A: 'Raio-X de membro inferior',
      B: 'Doppler venoso de MMII',
      C: 'Arteriografia',
      D: 'Ressonância magnética'
    },
    gabarito: 'B',
    justificativa: 'Suspeita de TVP: Doppler venoso de MMII é o exame de escolha (sensibilidade > 95%). D-dímero pode ser usado para exclusão em baixa probabilidade. Tratamento: anticoagulação.'
  },
  {
    id: 313,
    materia: 'Cirurgia',
    tema: 'Aneurisma de Aorta Abdominal',
    dificuldade: 'medio',
    enunciado: 'Homem de 70 anos, tabagista, com massa pulsátil abdominal. TC: aneurisma de aorta abdominal de 6 cm. Qual a conduta?',
    alternativas: {
      A: 'Observação clínica',
      B: 'Correção cirúrgica eletiva',
      C: 'Anticoagulação',
      D: 'Controle pressórico apenas'
    },
    gabarito: 'B',
    justificativa: 'Aneurisma de aorta abdominal > 5,5 cm: alto risco de rotura (> 10%/ano). Indicação de correção cirúrgica eletiva (aberta ou endovascular). < 5,5 cm: seguimento com USG/TC.'
  },
  {
    id: 314,
    materia: 'Cirurgia',
    tema: 'Isquemia Mesentérica Aguda',
    dificuldade: 'dificil',
    enunciado: 'Idoso com fibrilação atrial, dor abdominal desproporcional ao exame físico, acidose metabólica e lactato elevado. Qual o diagnóstico?',
    alternativas: {
      A: 'Pancreatite aguda',
      B: 'Isquemia mesentérica aguda',
      C: 'Obstrução intestinal',
      D: 'Diverticulite perfurada'
    },
    gabarito: 'B',
    justificativa: 'Isquemia mesentérica aguda: dor desproporcional, FA (embolia), acidose, lactato elevado. Emergência vascular. Diagnóstico: angioTC. Tratamento: revascularização cirúrgica urgente + ressecção de alças necróticas.'
  },
  {
    id: 315,
    materia: 'Cirurgia',
    tema: 'Diverticulite Aguda',
    dificuldade: 'medio',
    enunciado: 'Paciente de 65 anos com dor em FIE, febre e leucocitose. TC: espessamento de cólon sigmoide com borramento da gordura. Qual a classificação de Hinchey?',
    alternativas: {
      A: 'Hinchey I - diverticulite não complicada',
      B: 'Hinchey II - abscesso pélvico',
      C: 'Hinchey III - peritonite purulenta',
      D: 'Hinchey IV - peritonite fecal'
    },
    gabarito: 'A',
    justificativa: 'Diverticulite não complicada (Hinchey I): espessamento colônico, borramento gordura, sem abscesso/perfuração. Tratamento: antibiótico (ciprofloxacino + metronidazol) ambulatorial ou internação se grave.'
  },
  {
    id: 316,
    materia: 'Cirurgia',
    tema: 'Câncer Colorretal',
    dificuldade: 'medio',
    enunciado: 'Homem de 60 anos com sangramento retal, alteração do hábito intestinal e emagrecimento. Colonoscopia: lesão vegetante em sigmoide. Biópsia: adenocarcinoma. Qual o exame de estadiamento?',
    alternativas: {
      A: 'PET-CT',
      B: 'TC de tórax, abdome e pelve',
      C: 'Ressonância magnética',
      D: 'Cintilografia óssea'
    },
    gabarito: 'B',
    justificativa: 'Câncer colorretal: estadiamento com TC de tórax, abdome e pelve (avaliar metástases hepáticas e pulmonares). CEA pré-operatório. RNM de pelve se câncer de reto.'
  },
  {
    id: 317,
    materia: 'Cirurgia',
    tema: 'Abdome Agudo Perfurativo',
    dificuldade: 'facil',
    enunciado: 'Paciente com dor abdominal súbita, abdome em tábua e desaparecimento da macicez hepática. Qual o sinal radiológico esperado?',
    alternativas: {
      A: 'Sinal da meia-lua (Chilaiditi)',
      B: 'Pneumoperitônio',
      C: 'Sinal da dupla bolha',
      D: 'Sinal do colar de pérolas'
    },
    gabarito: 'B',
    justificativa: 'Abdome agudo perfurativo: pneumoperitônio (ar livre na cavidade) é o sinal radiológico clássico. Raio-X em ortostase ou decúbito lateral com raios horizontais. Desaparecimento da macicez hepática (sinal de Jobert).'
  },
  {
    id: 318,
    materia: 'Cirurgia',
    tema: 'Fístula Perianal',
    dificuldade: 'medio',
    enunciado: 'Paciente com drenagem purulenta crônica próxima ao ânus, história de abscesso perianal prévio. Qual o exame para avaliar trajeto fistuloso?',
    alternativas: {
      A: 'Colonoscopia',
      B: 'Ressonância magnética de pelve',
      C: 'Raio-X simples',
      D: 'Ultrassonografia abdominal'
    },
    gabarito: 'B',
    justificativa: 'Fístula perianal: RNM de pelve é padrão-ouro para avaliar trajeto fistuloso, relação com esfíncteres e ramificações. Tratamento: fistulotomia ou fistulectomia, preservando continência.'
  },
  {
    id: 319,
    materia: 'Cirurgia',
    tema: 'Volvo de Sigmoide',
    dificuldade: 'medio',
    enunciado: 'Idoso com distensão abdominal progressiva e parada de eliminação de gases. Raio-X: alça colônica distendida em "grão de café". Qual o diagnóstico e tratamento inicial?',
    alternativas: {
      A: 'Obstrução por aderências - laparotomia',
      B: 'Volvo de sigmoide - retossigmoidoscopia descompressiva',
      C: 'Megacólon tóxico - colectomia',
      D: 'Íleo paralítico - tratamento clínico'
    },
    gabarito: 'B',
    justificativa: 'Volvo de sigmoide: imagem em "grão de café" no raio-X. Tratamento inicial: retossigmoidoscopia descompressiva (sucesso em 70-80%). Cirurgia eletiva posterior (sigmoidectomia) para prevenir recorrência.'
  },
  {
    id: 320,
    materia: 'Cirurgia',
    tema: 'Peritonite Bacteriana Espontânea',
    dificuldade: 'dificil',
    enunciado: 'Cirrótico com ascite, febre e dor abdominal. Paracentese: 400 PMN/mm³, cultura negativa. Qual o tratamento?',
    alternativas: {
      A: 'Observação clínica',
      B: 'Cefotaxima ou ceftriaxona',
      C: 'Metronidazol',
      D: 'Laparotomia exploradora'
    },
    gabarito: 'B',
    justificativa: 'Peritonite bacteriana espontânea: PMN > 250/mm³ no líquido ascítico. Tratamento: cefalosporina de 3ª geração (cefotaxima ou ceftriaxona) por 5-7 dias. Albumina EV se Cr > 1 mg/dL.'
  }
];

// ==================== MEDICINA DA FAMÍLIA E COMUNIDADE (300 questões planejadas) ====================
export const medicinaFamiliaComunidade: Questao[] = [
  {
    id: 401,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Rastreamento de Câncer de Mama',
    dificuldade: 'facil',
    enunciado: 'Mulher de 52 anos, assintomática, sem fatores de risco. Qual a recomendação do Ministério da Saúde para rastreamento de câncer de mama?',
    alternativas: {
      A: 'Mamografia anual a partir de 40 anos',
      B: 'Mamografia bienal dos 50-69 anos',
      C: 'Mamografia anual a partir de 35 anos',
      D: 'Ultrassonografia mamária anual'
    },
    gabarito: 'B',
    justificativa: 'MS/INCA: mamografia de rastreamento bienal para mulheres de 50-69 anos sem fatores de risco. Exame clínico das mamas anual a partir de 40 anos.'
  },
  {
    id: 402,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Rastreamento de Câncer de Colo Uterino',
    dificuldade: 'facil',
    enunciado: 'Mulher de 28 anos com 2 citologias oncóticas normais consecutivas. Qual a periodicidade do próximo exame?',
    alternativas: {
      A: 'Anual',
      B: 'Bienal',
      C: 'Trienal',
      D: 'Quinquenal'
    },
    gabarito: 'C',
    justificativa: 'Rastreamento de câncer de colo uterino: após 2 exames normais consecutivos (intervalo de 1 ano), realizar citologia a cada 3 anos. Iniciar aos 25 anos, suspender aos 64 anos (se rastreamento adequado).'
  },
  {
    id: 403,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Puericultura',
    dificuldade: 'medio',
    enunciado: 'Lactente de 6 meses em aleitamento materno exclusivo. Mãe questiona sobre introdução alimentar. Qual a orientação?',
    alternativas: {
      A: 'Manter AME até 12 meses',
      B: 'Iniciar alimentação complementar aos 6 meses',
      C: 'Introduzir fórmula infantil',
      D: 'Aguardar até 8 meses'
    },
    gabarito: 'B',
    justificativa: 'Alimentação complementar: iniciar aos 6 meses (alimentos sólidos, amassados), mantendo aleitamento materno até 2 anos ou mais. Oferecer alimentos da família, sem sal/açúcar no primeiro ano.'
  },
  {
    id: 404,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Hipertensão Arterial na APS',
    dificuldade: 'medio',
    enunciado: 'Paciente de 50 anos com HAS estágio 1 (PA 145/95 mmHg), sem lesão de órgão-alvo. Qual a conduta inicial?',
    alternativas: {
      A: 'Iniciar anti-hipertensivo imediatamente',
      B: 'Mudanças de estilo de vida por 3-6 meses',
      C: 'Encaminhar para cardiologista',
      D: 'Solicitar MAPA'
    },
    gabarito: 'B',
    justificativa: 'HAS estágio 1 sem lesão de órgão-alvo ou RCV alto: iniciar com mudanças de estilo de vida (dieta DASH, exercícios, redução de sal) por 3-6 meses. Iniciar medicação se não houver controle.'
  },
  {
    id: 405,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Diabetes Mellitus Tipo 2',
    dificuldade: 'medio',
    enunciado: 'Paciente de 55 anos, obeso, com glicemia de jejum 135 mg/dL em 2 ocasiões. HbA1c: 7,2%. Qual o tratamento inicial?',
    alternativas: {
      A: 'Dieta e exercícios apenas',
      B: 'Metformina + mudanças de estilo de vida',
      C: 'Insulina NPH',
      D: 'Sulfonilureia'
    },
    gabarito: 'B',
    justificativa: 'DM2 recém-diagnosticado: metformina é primeira linha (se TFG > 30 mL/min) associada a mudanças de estilo de vida. Iniciar com 500-850mg/dia, aumentar gradualmente até 2g/dia.'
  },
  {
    id: 406,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Tabagismo',
    dificuldade: 'facil',
    enunciado: 'Paciente tabagista motivado a parar de fumar. Qual a abordagem inicial na APS?',
    alternativas: {
      A: 'Prescrever vareniclina imediatamente',
      B: 'Abordagem cognitivo-comportamental + TRN se necessário',
      C: 'Encaminhar para psiquiatria',
      D: 'Aguardar tentativa espontânea'
    },
    gabarito: 'B',
    justificativa: 'Cessação tabágica: abordagem cognitivo-comportamental (aconselhamento breve) é primeira linha. Terapia de reposição de nicotina (TRN) ou bupropiona/vareniclina se dependência moderada/grave.'
  },
  {
    id: 407,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Violência Doméstica',
    dificuldade: 'medio',
    enunciado: 'Mulher de 35 anos com hematomas em diferentes estágios de evolução, relato vago sobre quedas. Qual a conduta?',
    alternativas: {
      A: 'Ignorar se paciente negar violência',
      B: 'Abordar em ambiente privado, oferecer suporte e notificar',
      C: 'Encaminhar para delegacia imediatamente',
      D: 'Solicitar apenas exames complementares'
    },
    gabarito: 'B',
    justificativa: 'Suspeita de violência doméstica: abordar em ambiente seguro e privado, acolher sem julgamento, oferecer suporte (rede de proteção), notificar ao Conselho Tutelar/autoridades (notificação compulsória).'
  },
  {
    id: 408,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Saúde Mental na APS',
    dificuldade: 'medio',
    enunciado: 'Paciente com tristeza persistente, anedonia, insônia e perda de peso há 4 semanas. PHQ-9: 18 pontos. Qual a conduta?',
    alternativas: {
      A: 'Observação clínica',
      B: 'Iniciar antidepressivo (ISRS) + acompanhamento',
      C: 'Encaminhar para psiquiatria imediatamente',
      D: 'Prescrever benzodiazepínico'
    },
    gabarito: 'B',
    justificativa: 'Depressão moderada a grave (PHQ-9 > 15): iniciar ISRS (sertralina, fluoxetina) na APS + acompanhamento regular. Encaminhar para psiquiatria se refratário, risco de suicídio ou psicose.'
  },
  {
    id: 409,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Visita Domiciliar',
    dificuldade: 'facil',
    enunciado: 'Idoso acamado, dependente para AVDs. Qual o principal objetivo da visita domiciliar?',
    alternativas: {
      A: 'Prescrever medicações',
      B: 'Avaliar contexto familiar, funcionalidade e plano de cuidados',
      C: 'Solicitar exames laboratoriais',
      D: 'Substituir consultas ambulatoriais'
    },
    gabarito: 'B',
    justificativa: 'Visita domiciliar: avaliar contexto familiar, funcionalidade (AVDs), condições de moradia, rede de apoio, elaborar plano de cuidados compartilhado. Ferramenta essencial para cuidado longitudinal.'
  },
  {
    id: 410,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Planejamento Familiar',
    dificuldade: 'facil',
    enunciado: 'Mulher de 25 anos, nulípara, solicita método contraceptivo. Sem contraindicações. Qual o método mais eficaz de longa duração?',
    alternativas: {
      A: 'Anticoncepcional oral combinado',
      B: 'DIU de cobre ou hormonal',
      C: 'Preservativo masculino',
      D: 'Diafragma'
    },
    gabarito: 'B',
    justificativa: 'Métodos contraceptivos reversíveis de longa duração (LARC): DIU de cobre ou hormonal (SIU-LNG) são mais eficazes (falha < 1%), não dependem de adesão diária, podem ser usados em nulíparas.'
  },
  {
    id: 411,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Dislipidemia',
    dificuldade: 'medio',
    enunciado: 'Homem de 48 anos, tabagista, com LDL 160 mg/dL. Escore de Framingham: risco cardiovascular de 12% em 10 anos. Qual a conduta?',
    alternativas: {
      A: 'Dieta e exercícios apenas',
      B: 'Iniciar estatina de alta intensidade',
      C: 'Iniciar estatina de moderada intensidade',
      D: 'Fibratos'
    },
    gabarito: 'C',
    justificativa: 'Prevenção primária com risco intermediário (10-20%): estatina de moderada intensidade (atorvastatina 10-20mg ou sinvastatina 40mg) + mudanças de estilo de vida. Meta: redução de LDL > 30%.'
  },
  {
    id: 412,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Obesidade',
    dificuldade: 'facil',
    enunciado: 'Paciente com IMC 32 kg/m², sem comorbidades. Qual a classificação e abordagem inicial?',
    alternativas: {
      A: 'Sobrepeso - orientação dietética',
      B: 'Obesidade grau I - mudanças de estilo de vida',
      C: 'Obesidade grau II - cirurgia bariátrica',
      D: 'Obesidade mórbida - farmacoterapia'
    },
    gabarito: 'B',
    justificativa: 'IMC 30-34,9 kg/m² = obesidade grau I. Abordagem: mudanças de estilo de vida (dieta hipocalórica, atividade física regular, apoio comportamental). Farmacoterapia se falha após 6 meses.'
  },
  {
    id: 413,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Saúde do Idoso',
    dificuldade: 'medio',
    enunciado: 'Idoso de 75 anos com quedas recorrentes. Qual a avaliação inicial na APS?',
    alternativas: {
      A: 'Solicitar TC de crânio',
      B: 'Avaliar marcha, equilíbrio, força muscular e polifarmácia',
      C: 'Prescrever andador',
      D: 'Encaminhar para neurologista'
    },
    gabarito: 'B',
    justificativa: 'Quedas em idosos: avaliar fatores de risco (marcha, equilíbrio, força muscular, visão, polifarmácia, ambiente doméstico). Timed Up and Go test. Intervenções multifatoriais reduzem risco de novas quedas.'
  },
  {
    id: 414,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Alcoolismo',
    dificuldade: 'medio',
    enunciado: 'Paciente com consumo diário de 6 latas de cerveja. AUDIT: 18 pontos. Qual a classificação e conduta?',
    alternativas: {
      A: 'Uso de baixo risco - orientação breve',
      B: 'Uso de risco - intervenção breve',
      C: 'Provável dependência - abordagem intensiva',
      D: 'Uso nocivo - internação'
    },
    gabarito: 'C',
    justificativa: 'AUDIT ≥ 16 pontos: provável dependência alcoólica. Conduta: abordagem intensiva (aconselhamento estruturado, acompanhamento frequente, considerar farmacoterapia - naltrexona, dissulfiram). Encaminhar CAPS-AD se necessário.'
  },
  {
    id: 415,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Saúde do Trabalhador',
    dificuldade: 'facil',
    enunciado: 'Trabalhador com dor lombar crônica relacionada ao trabalho. Qual o documento para afastamento do trabalho?',
    alternativas: {
      A: 'Atestado médico',
      B: 'CAT (Comunicação de Acidente de Trabalho)',
      C: 'Laudo médico pericial',
      D: 'Declaração de comparecimento'
    },
    gabarito: 'A',
    justificativa: 'Afastamento do trabalho: atestado médico (até 15 dias, empresa paga). Após 15 dias, INSS assume. CAT é notificação de acidente/doença ocupacional (obrigatória pelo empregador).'
  },
  {
    id: 416,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Saúde da Mulher',
    dificuldade: 'facil',
    enunciado: 'Mulher de 30 anos com dismenorreia leve. Qual o tratamento inicial?',
    alternativas: {
      A: 'Histerectomia',
      B: 'AINE (ibuprofeno) durante menstruação',
      C: 'Opioide',
      D: 'Laparoscopia diagnóstica'
    },
    gabarito: 'B',
    justificativa: 'Dismenorreia primária: AINE (ibuprofeno, naproxeno) iniciado no início da menstruação é primeira linha. Anticoncepcional hormonal se refratário ou desejo de contracepção.'
  },
  {
    id: 417,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Infecção Urinária',
    dificuldade: 'facil',
    enunciado: 'Mulher de 28 anos com disúria, polaciúria e urgência miccional. Sem febre. EAS: leucocitúria e nitrito positivo. Qual o tratamento?',
    alternativas: {
      A: 'Nitrofurantoína 100mg 6/6h por 7 dias',
      B: 'Ciprofloxacino 500mg 12/12h por 3 dias',
      C: 'Ceftriaxona IM',
      D: 'Observação clínica'
    },
    gabarito: 'A',
    justificativa: 'Cistite não complicada: nitrofurantoína 100mg 6/6h por 7 dias é primeira linha (baixa resistência). Alternativas: fosfomicina 3g dose única, SMX-TMP (se resistência local < 20%).'
  },
  {
    id: 418,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Osteoporose',
    dificuldade: 'medio',
    enunciado: 'Mulher de 68 anos, pós-menopausa, com densitometria óssea: T-score -2,8 em coluna lombar. Qual a conduta?',
    alternativas: {
      A: 'Observação clínica',
      B: 'Suplementação de cálcio e vitamina D',
      C: 'Bisfosfonato (alendronato) + cálcio + vitamina D',
      D: 'Terapia hormonal'
    },
    gabarito: 'C',
    justificativa: 'Osteoporose (T-score ≤ -2,5): bisfosfonato (alendronato 70mg/semana) + cálcio (1000-1200mg/dia) + vitamina D (800-1000 UI/dia). Orientar exercícios de impacto e prevenção de quedas.'
  },
  {
    id: 419,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Rinite Alérgica',
    dificuldade: 'facil',
    enunciado: 'Criança de 8 anos com espirros, coriza e prurido nasal recorrentes. Qual o tratamento de manutenção?',
    alternativas: {
      A: 'Anti-histamínico oral',
      B: 'Corticoide nasal (fluticasona)',
      C: 'Descongestionante nasal',
      D: 'Antibiótico'
    },
    gabarito: 'B',
    justificativa: 'Rinite alérgica persistente: corticoide nasal (fluticasona, mometasona) é mais eficaz para controle de sintomas. Anti-histamínico oral (loratadina, cetirizina) como adjuvante ou em casos leves.'
  },
  {
    id: 420,
    materia: 'Medicina da Família e Comunidade',
    tema: 'Lombalgia',
    dificuldade: 'medio',
    enunciado: 'Paciente de 40 anos com lombalgia aguda há 3 dias, sem sinais de alarme. Qual a conduta?',
    alternativas: {
      A: 'Repouso absoluto',
      B: 'AINE + retorno às atividades habituais',
      C: 'Ressonância magnética de coluna',
      D: 'Opioides'
    },
    gabarito: 'B',
    justificativa: 'Lombalgia aguda inespecífica (sem sinais de alarme): AINE + orientação para manter atividades habituais (repouso prolongado piora). Fisioterapia se persistir > 4 semanas. Imagem apenas se sinais de alarme.'
  }
];

// ==================== SAÚDE PÚBLICA / EPIDEMIOLOGIA (200 questões planejadas) ====================
export const saudePublica: Questao[] = [
  {
    id: 501,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Sistema Único de Saúde',
    dificuldade: 'facil',
    enunciado: 'Qual o princípio do SUS que garante atendimento sem discriminação a todos os cidadãos?',
    alternativas: {
      A: 'Integralidade',
      B: 'Universalidade',
      C: 'Equidade',
      D: 'Descentralização'
    },
    gabarito: 'B',
    justificativa: 'Universalidade: acesso garantido a todos os cidadãos, sem discriminação. Equidade: tratar desigualmente os desiguais. Integralidade: atenção em todos os níveis de complexidade.'
  },
  {
    id: 502,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Vigilância Epidemiológica',
    dificuldade: 'medio',
    enunciado: 'Doença de notificação compulsória imediata (até 24h):',
    alternativas: {
      A: 'Tuberculose pulmonar',
      B: 'Sarampo',
      C: 'Hanseníase',
      D: 'Sífilis congênita'
    },
    gabarito: 'B',
    justificativa: 'Notificação compulsória imediata (até 24h): sarampo, rubéola, poliomielite, febre amarela, peste, cólera, raiva humana, botulismo, entre outras. Tuberculose e hanseníase são notificação semanal.'
  },
  {
    id: 503,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Indicadores de Saúde',
    dificuldade: 'medio',
    enunciado: 'Qual indicador avalia a qualidade da assistência pré-natal e ao parto?',
    alternativas: {
      A: 'Taxa de mortalidade infantil',
      B: 'Taxa de mortalidade neonatal',
      C: 'Razão de mortalidade materna',
      D: 'Todas as anteriores'
    },
    gabarito: 'D',
    justificativa: 'Mortalidade infantil, neonatal e materna são indicadores sensíveis da qualidade da assistência pré-natal, ao parto e puerpério. Refletem condições socioeconômicas e acesso aos serviços de saúde.'
  },
  {
    id: 504,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Medidas de Frequência',
    dificuldade: 'dificil',
    enunciado: 'Em um estudo, 50 casos novos de diabetes foram diagnosticados em uma população de 10.000 pessoas em 1 ano. Qual a medida calculada?',
    alternativas: {
      A: 'Prevalência de 0,5%',
      B: 'Incidência de 50 por 10.000 pessoas-ano',
      C: 'Taxa de mortalidade',
      D: 'Razão de chances'
    },
    gabarito: 'B',
    justificativa: 'Incidência: casos novos em um período de tempo. 50 casos/10.000 pessoas/ano = 50 por 10.000 pessoas-ano ou 5 por 1.000 pessoas-ano. Prevalência seria casos existentes (novos + antigos).'
  },
  {
    id: 505,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Estudos Epidemiológicos',
    dificuldade: 'medio',
    enunciado: 'Estudo que acompanha grupo de expostos e não expostos ao longo do tempo para avaliar desfecho:',
    alternativas: {
      A: 'Caso-controle',
      B: 'Coorte',
      C: 'Transversal',
      D: 'Ecológico'
    },
    gabarito: 'B',
    justificativa: 'Estudo de coorte: acompanha expostos e não expostos prospectivamente para avaliar incidência de desfecho. Permite calcular risco relativo. Caso-controle: retrospectivo, parte do desfecho.'
  },
  {
    id: 506,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Vacinação',
    dificuldade: 'facil',
    enunciado: 'Vacina contraindicada em gestantes:',
    alternativas: {
      A: 'Influenza (inativada)',
      B: 'Hepatite B',
      C: 'Tríplice viral (sarampo, caxumba, rubéola)',
      D: 'dTpa (tétano, difteria, coqueluche)'
    },
    gabarito: 'C',
    justificativa: 'Vacinas de vírus vivos atenuados são contraindicadas na gestação: tríplice viral, varicela, febre amarela. Vacinas inativadas (influenza, hepatite B, dTpa) são seguras e recomendadas.'
  },
  {
    id: 507,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Saneamento Básico',
    dificuldade: 'facil',
    enunciado: 'Qual doença está diretamente relacionada à falta de saneamento básico?',
    alternativas: {
      A: 'Diabetes mellitus',
      B: 'Esquistossomose',
      C: 'Hipertensão arterial',
      D: 'Asma'
    },
    gabarito: 'B',
    justificativa: 'Esquistossomose: doença parasitária transmitida por água contaminada com caramujos infectados. Relacionada à falta de saneamento básico. Outras: diarreia, hepatite A, leptospirose.'
  },
  {
    id: 508,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Determinantes Sociais da Saúde',
    dificuldade: 'medio',
    enunciado: 'Qual fator é considerado determinante social distal da saúde?',
    alternativas: {
      A: 'Tabagismo',
      B: 'Sedentarismo',
      C: 'Desigualdade de renda',
      D: 'Hipertensão arterial'
    },
    gabarito: 'C',
    justificativa: 'Determinantes sociais distais: condições socioeconômicas, culturais e ambientais (renda, educação, emprego). Determinantes proximais: comportamentos individuais (tabagismo, dieta). Intermediários: condições de vida e trabalho.'
  },
  {
    id: 509,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Atenção Primária à Saúde',
    dificuldade: 'facil',
    enunciado: 'Qual o atributo essencial da APS que se refere ao primeiro contato do usuário com o sistema de saúde?',
    alternativas: {
      A: 'Longitudinalidade',
      B: 'Integralidade',
      C: 'Acesso de primeiro contato',
      D: 'Coordenação do cuidado'
    },
    gabarito: 'C',
    justificativa: 'Atributos essenciais da APS (Starfield): acesso de primeiro contato, longitudinalidade, integralidade e coordenação do cuidado. Atributos derivados: orientação familiar e comunitária, competência cultural.'
  },
  {
    id: 510,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Política Nacional de Humanização',
    dificuldade: 'facil',
    enunciado: 'Qual dispositivo da PNH visa garantir presença de acompanhante durante internação?',
    alternativas: {
      A: 'Acolhimento com classificação de risco',
      B: 'Visita aberta e direito a acompanhante',
      C: 'Projeto Terapêutico Singular',
      D: 'Colegiado gestor'
    },
    gabarito: 'B',
    justificativa: 'PNH: visita aberta e direito a acompanhante garantem presença de familiar/acompanhante durante internação (Lei 11.108/2005 garante acompanhante no parto). Acolhimento com classificação de risco organiza demanda.'
  },
  {
    id: 511,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Redes de Atenção à Saúde',
    dificuldade: 'medio',
    enunciado: 'Qual o papel da APS nas Redes de Atenção à Saúde?',
    alternativas: {
      A: 'Atendimento de urgências',
      B: 'Coordenadora do cuidado e ordenadora da rede',
      C: 'Realização de cirurgias eletivas',
      D: 'Atendimento hospitalar'
    },
    gabarito: 'B',
    justificativa: 'APS como coordenadora do cuidado e ordenadora da rede: porta de entrada preferencial, coordena fluxos, referencia e contrarreferencia, acompanhamento longitudinal. Centro de comunicação das RAS.'
  },
  {
    id: 512,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Controle de Endemias',
    dificuldade: 'medio',
    enunciado: 'Qual a principal medida de controle da dengue?',
    alternativas: {
      A: 'Vacinação em massa',
      B: 'Controle vetorial (eliminação de criadouros)',
      C: 'Quimioprofilaxia',
      D: 'Isolamento de casos'
    },
    gabarito: 'B',
    justificativa: 'Dengue: controle vetorial (eliminação de criadouros do Aedes aegypti) é medida mais eficaz. Vacina disponível mas com indicações restritas. Não há quimioprofilaxia. Isolamento não é necessário (não há transmissão pessoa-pessoa).'
  },
  {
    id: 513,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Transição Epidemiológica',
    dificuldade: 'medio',
    enunciado: 'Qual característica da transição epidemiológica no Brasil?',
    alternativas: {
      A: 'Predomínio de doenças infecciosas',
      B: 'Dupla carga de doenças (infecciosas e crônicas)',
      C: 'Eliminação de doenças crônicas',
      D: 'Redução da expectativa de vida'
    },
    gabarito: 'B',
    justificativa: 'Transição epidemiológica no Brasil: dupla carga de doenças (persistência de infecciosas + aumento de crônicas não transmissíveis). Envelhecimento populacional, mudança de perfil de morbimortalidade.'
  },
  {
    id: 514,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Biossegurança',
    dificuldade: 'facil',
    enunciado: 'Qual o EPI essencial para proteção contra gotículas respiratórias?',
    alternativas: {
      A: 'Máscara N95',
      B: 'Máscara cirúrgica',
      C: 'Óculos de proteção',
      D: 'Luvas'
    },
    gabarito: 'B',
    justificativa: 'Precaução para gotículas: máscara cirúrgica (protege contra gotículas > 5 μm). N95/PFF2 para aerossóis (< 5 μm, ex: tuberculose, COVID-19 em procedimentos geradores de aerossóis).'
  },
  {
    id: 515,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Ética em Pesquisa',
    dificuldade: 'medio',
    enunciado: 'Qual documento regulamenta pesquisas envolvendo seres humanos no Brasil?',
    alternativas: {
      A: 'Declaração de Helsinque',
      B: 'Resolução CNS 466/2012',
      C: 'Código de Nuremberg',
      D: 'Relatório Belmont'
    },
    gabarito: 'B',
    justificativa: 'Resolução CNS 466/2012: regulamenta pesquisas com seres humanos no Brasil. Princípios: autonomia, beneficência, não maleficência, justiça. Exige aprovação de Comitê de Ética em Pesquisa (CEP).'
  },
  {
    id: 516,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Programa Nacional de Imunizações',
    dificuldade: 'facil',
    enunciado: 'Qual vacina é administrada ao nascer?',
    alternativas: {
      A: 'BCG e Hepatite B',
      B: 'Pentavalente',
      C: 'Tríplice viral',
      D: 'Varicela'
    },
    gabarito: 'A',
    justificativa: 'Ao nascer: BCG (dose única) e Hepatite B (primeira dose nas primeiras 12-24h de vida). Pentavalente aos 2, 4 e 6 meses. Tríplice viral aos 12 meses.'
  },
  {
    id: 517,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Vigilância Sanitária',
    dificuldade: 'facil',
    enunciado: 'Qual órgão federal responsável pela vigilância sanitária no Brasil?',
    alternativas: {
      A: 'ANVISA',
      B: 'FUNASA',
      C: 'FIOCRUZ',
      D: 'CONASS'
    },
    gabarito: 'A',
    justificativa: 'ANVISA (Agência Nacional de Vigilância Sanitária): autarquia federal responsável por regulação, controle e fiscalização de produtos e serviços que envolvam risco à saúde pública.'
  },
  {
    id: 518,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Saúde do Trabalhador',
    dificuldade: 'medio',
    enunciado: 'Qual exame é obrigatório na admissão de trabalhador?',
    alternativas: {
      A: 'Exame admissional',
      B: 'Exame periódico',
      C: 'Exame demissional',
      D: 'Exame de retorno ao trabalho'
    },
    gabarito: 'A',
    justificativa: 'PCMSO (NR-7): exames obrigatórios - admissional (antes de iniciar atividades), periódico (anual ou conforme risco), retorno ao trabalho (após afastamento > 30 dias), mudança de função, demissional.'
  },
  {
    id: 519,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Estatística em Saúde',
    dificuldade: 'dificil',
    enunciado: 'Teste estatístico utilizado para comparar médias de dois grupos independentes:',
    alternativas: {
      A: 'Teste t de Student',
      B: 'Qui-quadrado',
      C: 'ANOVA',
      D: 'Correlação de Pearson'
    },
    gabarito: 'A',
    justificativa: 'Teste t de Student: compara médias de dois grupos independentes (variável quantitativa). Qui-quadrado: variáveis categóricas. ANOVA: compara ≥ 3 grupos. Correlação de Pearson: associação entre duas variáveis quantitativas.'
  },
  {
    id: 520,
    materia: 'Saúde Pública / Epidemiologia',
    tema: 'Políticas de Saúde',
    dificuldade: 'medio',
    enunciado: 'Qual política visa reduzir morbimortalidade por doenças crônicas não transmissíveis?',
    alternativas: {
      A: 'Política Nacional de Atenção Básica',
      B: 'Plano de Ações Estratégicas para Enfrentamento das DCNT',
      C: 'Política Nacional de Promoção da Saúde',
      D: 'Todas as anteriores'
    },
    gabarito: 'D',
    justificativa: 'DCNT: abordagem multifacetada envolvendo PNAB (rastreamento, acompanhamento), Plano de Ações Estratégicas (metas de redução), PNPS (promoção de hábitos saudáveis, ambientes favoráveis).'
  }
];

// ==================== URGÊNCIA E EMERGÊNCIA (200 questões planejadas) ====================
export const urgenciaEmergencia: Questao[] = [
  {
    id: 601,
    materia: 'Urgência e Emergência',
    tema: 'Parada Cardiorrespiratória',
    dificuldade: 'medio',
    enunciado: 'Paciente em PCR com ritmo de FV. Após 2 choques e 2 ciclos de RCP, qual medicação administrar?',
    alternativas: {
      A: 'Atropina 1mg',
      B: 'Adrenalina 1mg',
      C: 'Amiodarona 300mg',
      D: 'Lidocaína 100mg'
    },
    gabarito: 'B',
    justificativa: 'PCR com FV/TV sem pulso: adrenalina 1mg EV a cada 3-5 min (após 2º choque). Amiodarona 300mg após 3º choque (ritmo refratário). Sequência: RCP-choque-RCP-choque-RCP-adrenalina-choque-amiodarona.'
  },
  {
    id: 602,
    materia: 'Urgência e Emergência',
    tema: 'Choque Séptico',
    dificuldade: 'dificil',
    enunciado: 'Paciente com sepse, PAM 55 mmHg após 30 mL/kg de cristaloide. Lactato: 4 mmol/L. Qual a próxima conduta?',
    alternativas: {
      A: 'Mais 30 mL/kg de cristaloide',
      B: 'Iniciar noradrenalina',
      C: 'Dobutamina',
      D: 'Corticoide em dose de estresse'
    },
    gabarito: 'B',
    justificativa: 'Choque séptico refratário a volume (PAM < 65 mmHg após ressuscitação): iniciar noradrenalina (vasopressor de primeira linha). Meta: PAM ≥ 65 mmHg. Dobutamina se disfunção miocárdica.'
  },
  {
    id: 603,
    materia: 'Urgência e Emergência',
    tema: 'Intoxicação Exógena',
    dificuldade: 'medio',
    enunciado: 'Paciente com miose puntiforme, bradicardia, hipersalivação e broncoespasmo. Qual a intoxicação e antídoto?',
    alternativas: {
      A: 'Opioides - naloxona',
      B: 'Organofosforados - atropina',
      C: 'Benzodiazepínicos - flumazenil',
      D: 'Anticolinérgicos - fisostigmina'
    },
    gabarito: 'B',
    justificativa: 'Síndrome colinérgica (organofosforados): miose, bradicardia, broncoespasmo, hipersalivação, sudorese (SLUDGE). Antídoto: atropina (0,5-2mg EV, repetir até atropinização) + pralidoxima.'
  },
  {
    id: 604,
    materia: 'Urgência e Emergência',
    tema: 'Trauma Cranioencefálico',
    dificuldade: 'medio',
    enunciado: 'Vítima de TCE com Glasgow 7, pupilas anisocóricas. Qual a conduta imediata?',
    alternativas: {
      A: 'TC de crânio',
      B: 'Intubação orotraqueal + hiperventilação',
      C: 'Manitol 1g/kg',
      D: 'Observação clínica'
    },
    gabarito: 'B',
    justificativa: 'TCE grave (Glasgow ≤ 8) com sinais de herniação (anisocoria): intubação orotraqueal para proteção de via aérea + hiperventilação moderada (PaCO2 30-35 mmHg) temporária. Manitol/salina hipertônica se sinais de HIC.'
  },
  {
    id: 605,
    materia: 'Urgência e Emergência',
    tema: 'Anafilaxia',
    dificuldade: 'facil',
    enunciado: 'Paciente com urticária generalizada, angioedema e broncoespasmo após picada de abelha. Qual o tratamento imediato?',
    alternativas: {
      A: 'Anti-histamínico oral',
      B: 'Adrenalina 0,3-0,5mg IM',
      C: 'Corticoide EV',
      D: 'Broncodilatador inalatório'
    },
    gabarito: 'B',
    justificativa: 'Anafilaxia: adrenalina 0,3-0,5mg IM (1:1000) na face anterolateral da coxa é primeira linha. Repetir a cada 5-15 min se necessário. Associar: O2, cristaloide, anti-histamínico, corticoide.'
  },
  {
    id: 606,
    materia: 'Urgência e Emergência',
    tema: 'Síndrome Coronariana Aguda',
    dificuldade: 'medio',
    enunciado: 'Paciente com dor precordial, ECG com infradesnivelamento de ST em V4-V6. Troponina elevada. Qual o diagnóstico?',
    alternativas: {
      A: 'IAM com supradesnivelamento de ST',
      B: 'IAM sem supradesnivelamento de ST',
      C: 'Angina estável',
      D: 'Pericardite aguda'
    },
    gabarito: 'B',
    justificativa: 'IAM sem supradesnivelamento de ST (IAMSST): infradesnivelamento de ST, inversão de onda T ou ECG normal + troponina elevada. Tratamento: AAS, clopidogrel, anticoagulação, estratificação de risco.'
  },
  {
    id: 607,
    materia: 'Urgência e Emergência',
    tema: 'Acidente Vascular Cerebral',
    dificuldade: 'dificil',
    enunciado: 'Paciente com hemiplegia há 1 hora. PA: 195/110 mmHg. Glicemia: 180 mg/dL. TC: sem hemorragia. Qual a contraindicação para trombólise?',
    alternativas: {
      A: 'PA elevada',
      B: 'Glicemia elevada',
      C: 'Tempo de sintomas',
      D: 'Nenhuma das anteriores'
    },
    gabarito: 'A',
    justificativa: 'Contraindicação para trombólise: PA > 185/110 mmHg (risco de hemorragia). Deve-se reduzir PA antes de trombolizar. Glicemia 180 mg/dL não contraindica. Tempo < 4,5h é indicação.'
  },
  {
    id: 608,
    materia: 'Urgência e Emergência',
    tema: 'Cetoacidose Diabética',
    dificuldade: 'medio',
    enunciado: 'Paciente diabético com glicemia 450 mg/dL, pH 7,15, bicarbonato 10 mEq/L, cetonúria 3+. Qual o tratamento inicial?',
    alternativas: {
      A: 'Insulina regular EV em bolus',
      B: 'Hidratação vigorosa + insulina regular EV contínua',
      C: 'Bicarbonato de sódio',
      D: 'Insulina NPH SC'
    },
    gabarito: 'B',
    justificativa: 'Cetoacidose diabética: hidratação vigorosa (SF 0,9% 1-2L na primeira hora) + insulina regular EV contínua (0,1 UI/kg/h). Bicarbonato apenas se pH < 6,9. Repor potássio.'
  },
  {
    id: 609,
    materia: 'Urgência e Emergência',
    tema: 'Crise Hipertensiva',
    dificuldade: 'medio',
    enunciado: 'Paciente com PA 220/130 mmHg, assintomático, sem lesão de órgão-alvo. Qual a conduta?',
    alternativas: {
      A: 'Nitroprussiato de sódio EV',
      B: 'Captopril 25mg sublingual',
      C: 'Anti-hipertensivo oral e reavaliação ambulatorial',
      D: 'Observação hospitalar por 24h'
    },
    gabarito: 'C',
    justificativa: 'Urgência hipertensiva (PA elevada sem lesão de órgão-alvo): anti-hipertensivo oral (captopril, anlodipino) e reavaliação ambulatorial em 24-48h. Redução gradual da PA. Emergência hipertensiva requer internação e EV.'
  },
  {
    id: 610,
    materia: 'Urgência e Emergência',
    tema: 'Hemorragia Digestiva Alta',
    dificuldade: 'medio',
    enunciado: 'Paciente com hematêmese, FC 120 bpm, PA 80/50 mmHg. Qual a conduta inicial?',
    alternativas: {
      A: 'Endoscopia digestiva alta imediata',
      B: 'Ressuscitação volêmica + hemotransfusão se necessário',
      C: 'Inibidor de bomba de prótons oral',
      D: 'Sonda nasogástrica para lavagem'
    },
    gabarito: 'B',
    justificativa: 'HDA com instabilidade hemodinâmica: ressuscitação volêmica (cristaloide, hemotransfusão se Hb < 7 g/dL), IBP EV, endoscopia após estabilização (< 24h). Classificação de risco (Glasgow-Blatchford).'
  },
  {
    id: 611,
    materia: 'Urgência e Emergência',
    tema: 'Edema Agudo de Pulmão',
    dificuldade: 'medio',
    enunciado: 'Paciente com dispneia intensa, estertores crepitantes bilaterais, SatO2 85%. PA: 180/110 mmHg. Qual o tratamento?',
    alternativas: {
      A: 'Furosemida EV + nitroglicerina + O2',
      B: 'Hidratação vigorosa',
      C: 'Antibioticoterapia',
      D: 'Broncodilatador inalatório'
    },
    gabarito: 'A',
    justificativa: 'Edema agudo de pulmão cardiogênico: furosemida EV (40-80mg), nitroglicerina sublingual/EV (reduz pré e pós-carga), O2 suplementar (VNI se necessário). Morfina se ansiedade/dor.'
  },
  {
    id: 612,
    materia: 'Urgência e Emergência',
    tema: 'Crise Asmática',
    dificuldade: 'facil',
    enunciado: 'Paciente com dispneia, sibilância difusa, uso de musculatura acessória. Qual o tratamento inicial?',
    alternativas: {
      A: 'Corticoide oral',
      B: 'Salbutamol inalatório + ipratrópio + corticoide sistêmico',
      C: 'Antibiótico',
      D: 'Oxigenioterapia apenas'
    },
    gabarito: 'B',
    justificativa: 'Crise asmática: beta-2 agonista (salbutamol) + anticolinérgico (ipratrópio) inalatórios + corticoide sistêmico (prednisona 40-60mg ou hidrocortisona EV). O2 se SatO2 < 90%. Sulfato de magnésio se grave.'
  },
  {
    id: 613,
    materia: 'Urgência e Emergência',
    tema: 'Convulsão',
    dificuldade: 'medio',
    enunciado: 'Paciente em crise convulsiva tônico-clônica há 10 minutos. Qual a medicação de escolha?',
    alternativas: {
      A: 'Fenitoína EV',
      B: 'Diazepam 10mg EV ou midazolam 10mg IM',
      C: 'Fenobarbital',
      D: 'Ácido valproico'
    },
    gabarito: 'B',
    justificativa: 'Estado de mal epiléptico (convulsão > 5 min): benzodiazepínico (diazepam 10mg EV ou midazolam 10mg IM) é primeira linha. Se refratário: fenitoína ou fenobarbital EV.'
  },
  {
    id: 614,
    materia: 'Urgência e Emergência',
    tema: 'Hipoglicemia',
    dificuldade: 'facil',
    enunciado: 'Diabético com glicemia 35 mg/dL, confuso, sudorese. Qual o tratamento?',
    alternativas: {
      A: 'Insulina regular',
      B: 'Glicose 50% 20-40mL EV ou glucagon 1mg IM',
      C: 'Hidratação venosa',
      D: 'Observação clínica'
    },
    gabarito: 'B',
    justificativa: 'Hipoglicemia grave (< 50 mg/dL com sintomas): glicose 50% 20-40mL EV (ou glicose 10% 100-200mL). Se sem acesso venoso: glucagon 1mg IM/SC. Reavaliar glicemia em 15 min.'
  },
  {
    id: 615,
    materia: 'Urgência e Emergência',
    tema: 'Queimadura',
    dificuldade: 'medio',
    enunciado: 'Paciente com queimadura de 2º grau em 30% da SCQ. Qual a reposição volêmica nas primeiras 24h (Parkland)?',
    alternativas: {
      A: '2 mL x peso x % SCQ',
      B: '4 mL x peso x % SCQ',
      C: '6 mL x peso x % SCQ',
      D: '8 mL x peso x % SCQ'
    },
    gabarito: 'B',
    justificativa: 'Fórmula de Parkland: 4 mL x peso (kg) x % SCQ nas primeiras 24h. Metade nas primeiras 8h, metade nas 16h seguintes. Cristaloide (Ringer lactato). Ajustar conforme diurese (0,5-1 mL/kg/h).'
  },
  {
    id: 616,
    materia: 'Urgência e Emergência',
    tema: 'Afogamento',
    dificuldade: 'medio',
    enunciado: 'Vítima de afogamento em PCR. Qual a primeira conduta?',
    alternativas: {
      A: 'Manobra de Heimlich',
      B: '5 ventilações de resgate + RCP',
      C: 'Desfibrilação imediata',
      D: 'Drenagem de água pulmonar'
    },
    gabarito: 'B',
    justificativa: 'PCR por afogamento (asfixia): iniciar com 5 ventilações de resgate, depois RCP convencional (30:2). Não tentar drenar água dos pulmões. Desfibrilação se ritmo chocável.'
  },
  {
    id: 617,
    materia: 'Urgência e Emergência',
    tema: 'Picada de Serpente',
    dificuldade: 'medio',
    enunciado: 'Paciente com edema local progressivo, equimose e sangramento gengival após picada de cobra. Qual o soro antiofídico?',
    alternativas: {
      A: 'Soro anticrotálico',
      B: 'Soro antibotrópico',
      C: 'Soro antilaquético',
      D: 'Soro antielapídico'
    },
    gabarito: 'B',
    justificativa: 'Acidente botrópico (jararaca): edema local progressivo, equimose, sangramento (coagulopatia). Soro antibotrópico (SAB). Crotálico: mialgia, urina escura. Laquético: botrópico + vagal. Elapídico: neurotóxico.'
  },
  {
    id: 618,
    materia: 'Urgência e Emergência',
    tema: 'Descompensação de DPOC',
    dificuldade: 'medio',
    enunciado: 'Paciente com DPOC, dispneia intensa, FR 32 irpm, SatO2 85%, pH 7,28, PaCO2 65 mmHg. Qual a conduta?',
    alternativas: {
      A: 'O2 alto fluxo (FiO2 100%)',
      B: 'VNI (CPAP ou BiPAP)',
      C: 'Intubação orotraqueal imediata',
      D: 'Broncodilatador inalatório apenas'
    },
    gabarito: 'B',
    justificativa: 'Exacerbação grave de DPOC com insuficiência respiratória e acidose: VNI (BiPAP) é primeira linha (reduz necessidade de IOT). Broncodilatador, corticoide, antibiótico. IOT se falha de VNI ou contraindicação.'
  },
  {
    id: 619,
    materia: 'Urgência e Emergência',
    tema: 'Taquicardia Supraventricular',
    dificuldade: 'medio',
    enunciado: 'Paciente com palpitações, FC 180 bpm, QRS estreito regular. PA estável. Qual a conduta inicial?',
    alternativas: {
      A: 'Cardioversão elétrica sincronizada',
      B: 'Manobra vagal + adenosina 6mg EV',
      C: 'Amiodarona 300mg EV',
      D: 'Observação clínica'
    },
    gabarito: 'B',
    justificativa: 'Taquicardia supraventricular (TSV) estável: manobra vagal (Valsalva, massagem carotídea). Se falhar: adenosina 6mg EV rápido (pode repetir 12mg). Se instável: cardioversão elétrica sincronizada.'
  },
  {
    id: 620,
    materia: 'Urgência e Emergência',
    tema: 'Abdome Agudo',
    dificuldade: 'medio',
    enunciado: 'Paciente com dor abdominal difusa, distensão, ausência de RHA e sinais de irritação peritoneal. Qual o diagnóstico mais provável?',
    alternativas: {
      A: 'Obstrução intestinal',
      B: 'Peritonite',
      C: 'Gastroenterite',
      D: 'Constipação'
    },
    gabarito: 'B',
    justificativa: 'Peritonite: dor abdominal difusa, distensão, ausência de RHA (íleo paralítico), sinais de irritação peritoneal (defesa, descompressão brusca dolorosa). Emergência cirúrgica. Investigar causa (perfuração, isquemia).'
  }
];

// Consolidar todas as questões
export const todasQuestoes: Questao[] = [
  ...clinicaMedica,
  ...pediatria,
  ...ginecologiaObstetricia,
  ...cirurgia,
  ...medicinaFamiliaComunidade,
  ...saudePublica,
  ...urgenciaEmergencia
];

// Função auxiliar para buscar questões por matéria
export const getQuestoesPorMateria = (materia: string): Questao[] => {
  return todasQuestoes.filter(q => q.materia === materia);
};

// Função auxiliar para buscar questões por dificuldade
export const getQuestoesPorDificuldade = (dificuldade: 'facil' | 'medio' | 'dificil'): Questao[] => {
  return todasQuestoes.filter(q => q.dificuldade === dificuldade);
};

// Estatísticas do banco
export const estatisticasBanco = {
  total: todasQuestoes.length,
  porMateria: {
    'Clínica Médica': clinicaMedica.length,
    'Pediatria': pediatria.length,
    'Ginecologia e Obstetrícia': ginecologiaObstetricia.length,
    'Cirurgia': cirurgia.length,
    'Medicina da Família e Comunidade': medicinaFamiliaComunidade.length,
    'Saúde Pública / Epidemiologia': saudePublica.length,
    'Urgência e Emergência': urgenciaEmergencia.length
  },
  metaPlanejada: 2000,
  percentualConcluido: (todasQuestoes.length / 2000) * 100
};
