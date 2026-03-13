import React from 'react';
import { 
  ShieldCheck, 
  Brain, 
  Layout, 
  Zap, 
  Mic2, 
  Eye, 
  Target, 
  Video, 
  AlertCircle,
  Copyright,
  Printer,
  CheckCircle2,
  ArrowRight,
  Info,
  BookOpen,
  UserCheck,
  MessageSquare,
  Lock,
  Sparkles,
  MousePointer2,
  Heart,
  Check,
  Clock
} from 'lucide-react';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 selection:bg-emerald-500/30 font-sans">
      {/* Print Button - Hidden during print */}
      <div className="fixed top-6 right-6 z-50 print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full shadow-xl transition-all active:scale-95 group"
        >
          <Printer className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          GERAR EBOOK (PDF)
        </button>
      </div>

      {/* PDF Container */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none">
        
        {/* PAGE 1: COVER */}
        <section className="relative h-[297mm] w-[210mm] overflow-hidden flex flex-col items-center justify-between p-20 bg-zinc-950 text-white page-break-after-always">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-emerald-500/20 blur-[150px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-emerald-500/10 blur-[150px] rounded-full" />
          </div>

          <div className="relative z-10 text-center space-y-6 mt-16">
            <div className="inline-block px-6 py-2 border border-emerald-500/50 rounded-full text-emerald-400 text-sm font-bold tracking-[0.3em] uppercase mb-8">
              EBOOK PREMIUM
            </div>
            <h1 className="text-8xl font-black leading-none tracking-tighter">
              MÉTODO <br />
              <span className="text-emerald-500 italic">FALAR BEM</span>
            </h1>
            <div className="h-1.5 w-32 bg-emerald-500 mx-auto my-12" />
            <p className="text-2xl text-zinc-400 font-medium max-w-xl mx-auto leading-relaxed">
              O guia definitivo para dominar a oratória, estruturar qualquer fala e se comunicar com confiança em qualquer situação.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-sm aspect-[3/4] bg-zinc-900 rounded-3xl border border-zinc-800 shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800" 
              alt="Oratória e Liderança"
              className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-20 text-center p-10 bg-black/40 backdrop-blur-md w-full h-full flex flex-col items-center justify-center border border-white/5 rounded-3xl">
              <Brain className="w-28 h-28 text-emerald-500 mb-8" />
              <div className="text-4xl font-black tracking-tight uppercase leading-tight">Manual de <br/><span className="text-emerald-500">Alta Performance</span></div>
            </div>
          </div>

          <div className="relative z-10 w-full text-center space-y-10">
            <div className="space-y-3">
              <p className="text-xs font-bold tracking-[0.4em] text-zinc-500 uppercase">Desenvolvido por</p>
              <p className="text-4xl font-serif italic text-emerald-500">Instituto Falar Bem</p>
            </div>

            <div className="pt-10 border-t border-zinc-800 w-full max-w-md mx-auto space-y-4">
              <div className="flex items-center justify-center gap-3 text-[11px] text-zinc-600 uppercase tracking-[0.2em] font-bold">
                <ShieldCheck className="w-4 h-4" />
                Aviso de Direitos Autorais
              </div>
              <p className="text-[10px] text-zinc-500 leading-relaxed text-center px-4">
                Este material é protegido por leis internacionais de direitos autorais. A reprodução, distribuição ou venda sem autorização expressa do Instituto Falar Bem é estritamente proibida e sujeita a penalidades legais.
              </p>
              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 font-mono">
                <Copyright className="w-3.5 h-3.5" />
                2026 Instituto Falar Bem. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 2: APRESENTAÇÃO */}
        <section className="h-[297mm] w-[210mm] p-24 flex flex-col page-break-after-always">
          <header className="flex justify-between items-end border-b-4 border-emerald-500/10 pb-8 mb-16">
            <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter">Apresentação</h2>
            <p className="text-zinc-400 font-mono text-base">02 / 11</p>
          </header>

          <div className="flex-1 space-y-12">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-5xl font-black text-zinc-900 mb-10 leading-[1.1]">
                A comunicação não é um dom, <br/>
                <span className="text-emerald-600 italic">é uma habilidade treinável.</span>
              </h3>
              
              <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                Você já sentiu que suas ideias são brilhantes, mas na hora de falar, elas parecem se perder em um labirinto de nervosismo? Você não está sozinho. A maioria das pessoas trava ao falar não por falta de conhecimento, mas por falta de um <strong>método estruturado</strong>.
              </p>

              <div className="my-16 p-10 bg-zinc-50 rounded-[2rem] border border-zinc-100 italic text-zinc-700 text-xl leading-relaxed relative shadow-sm">
                <div className="absolute -top-6 -left-6 w-14 h-14 bg-emerald-500 rounded-2xl rotate-12 flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-8 h-8" />
                </div>
                "O medo de falar em público é, na verdade, o medo do julgamento social. É um mecanismo ancestral que hoje nos impede de alcançar nosso potencial máximo."
              </div>

              <p className="text-xl text-zinc-600 leading-relaxed">
                O <strong>Método Falar Bem</strong> resolve esse problema atacando a raiz: a biologia do medo e a desorganização do pensamento. Aqui, você aprenderá a reprogramar seu cérebro e a usar frameworks que garantem clareza em qualquer situação.
              </p>

              <div className="mt-16 space-y-8">
                <h4 className="text-2xl font-bold text-zinc-900 border-l-4 border-emerald-500 pl-6">O que você vai dominar:</h4>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    "Eliminar o branco mental e a ansiedade paralisante.",
                    "Estruturar apresentações e falas de improviso em segundos.",
                    "Usar a voz e o corpo para projetar autoridade natural.",
                    "Persuadir e conectar-se com qualquer tipo de público."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 text-zinc-700 text-lg">
                      <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 stroke-[3]" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-auto pt-10 border-t border-zinc-100 flex justify-between text-xs text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Instituto Falar Bem</span>
            <span>Página 02</span>
          </footer>
        </section>

        {/* PAGE 3: CAPÍTULO 1 - NEURO CONEXÃO */}
        <section className="h-[297mm] w-[210mm] p-24 flex flex-col page-break-after-always">
          <header className="flex justify-between items-end border-b-4 border-emerald-500/10 pb-8 mb-16">
            <div>
              <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-1">Capítulo 01</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter">Neuro Conexão</h2>
            </div>
            <p className="text-zinc-400 font-mono text-base">03 / 11</p>
          </header>

          <div className="flex-1 space-y-12">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-3xl font-bold text-zinc-900 mb-8">O Mecanismo do Bloqueio Mental</h3>
              <p className="text-xl text-zinc-600 leading-relaxed">
                Quando você se sente exposto, seu cérebro ativa o sistema de "luta ou fuga". A amígdala sequestra o córtex pré-frontal, desviando energia para os músculos. <strong>O "branco" é uma resposta biológica de proteção.</strong> Para falar bem, você precisa aprender a desativar esse alerta.
              </p>
            </div>

            <div className="bg-zinc-950 p-12 rounded-[2.5rem] text-white space-y-10 shadow-xl">
              <h4 className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-3">
                <Zap className="w-6 h-6" /> Protocolos de Controle
              </h4>
              
              <div className="space-y-8">
                <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                  <p className="text-xl font-bold text-emerald-500 mb-3">1. Reprogramação Mental</p>
                  <p className="text-zinc-400 leading-relaxed">Substitua "Estou com medo" por "Estou animado para entregar valor". O corpo sente a mesma adrenalina; o rótulo que você dá determina se ela te paralisa ou te impulsiona.</p>
                </div>

                <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                  <p className="text-xl font-bold text-emerald-500 mb-3">2. Respiração 4-7-8</p>
                  <p className="text-zinc-400 leading-relaxed">Inspire por 4s, segure por 7s, solte por 8s. Este ciclo força o sistema nervoso parassimpático a assumir o controle, reduzindo o cortisol instantaneamente.</p>
                </div>

                <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                  <p className="text-xl font-bold text-emerald-500 mb-3">3. Ativação de Foco (Grounding)</p>
                  <p className="text-zinc-400 leading-relaxed">Antes de falar, identifique 3 objetos azuis na sala. Isso força seu cérebro a voltar para o processamento lógico, tirando-o do modo de pânico emocional.</p>
                </div>
              </div>
            </div>

            <div className="p-10 bg-emerald-50 rounded-3xl border-l-[6px] border-emerald-500 shadow-sm">
              <h5 className="text-sm font-black text-emerald-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" /> Exercício Prático
              </h5>
              <p className="text-lg text-emerald-900 italic leading-relaxed">
                "Pratique a respiração 4-7-8 três vezes ao dia, mesmo sem estar nervoso. Isso cria uma memória muscular que facilitará o uso da técnica em momentos de alta pressão."
              </p>
            </div>
          </div>

          <footer className="mt-auto pt-10 border-t border-zinc-100 flex justify-between text-xs text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Instituto Falar Bem</span>
            <span>Página 03</span>
          </footer>
        </section>

        {/* PAGE 4: CAPÍTULO 2 - ARQUITETURA DA FALA */}
        <section className="h-[297mm] w-[210mm] p-24 flex flex-col page-break-after-always">
          <header className="flex justify-between items-end border-b-4 border-emerald-500/10 pb-8 mb-16">
            <div>
              <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-1">Capítulo 02</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter">Arquitetura da Fala</h2>
            </div>
            <p className="text-zinc-400 font-mono text-base">04 / 11</p>
          </header>

          <div className="flex-1 space-y-12">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-3xl font-bold text-zinc-900 mb-8">O Mapa da Comunicação Eficaz</h3>
              <p className="text-xl text-zinc-600 leading-relaxed">
                A clareza vem da estrutura, não da improvisação pura. Quando você domina a <strong>Arquitetura da Fala</strong>, você nunca mais fica sem saber o que dizer, pois tem um trilho mental para seguir.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-zinc-900 flex items-center gap-3 mb-8">
                <Layout className="w-6 h-6 text-emerald-500" /> Framework de Estruturação Rápida
              </h4>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "1. Abertura de Impacto", desc: "Uma pergunta, um dado ou uma história curta. Capture a atenção nos primeiros 10 segundos." },
                  { title: "2. Contextualização", desc: "Por que esse assunto importa agora? Estabeleça a relevância para o seu público." },
                  { title: "3. Ideia Central", desc: "Sua mensagem em uma frase. Se for complexo demais, o público se perderá." },
                  { title: "4. Provas e Exemplos", desc: "Dê vida à ideia. Use analogias ou fatos que validem seu ponto de vista." },
                  { title: "5. Conclusão e Chamada", desc: "Recapitule e diga exatamente o que o público deve fazer ou pensar a seguir." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 p-8 bg-zinc-50 rounded-3xl border border-zinc-100 items-start hover:bg-white hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-black flex items-center justify-center font-black text-xl shrink-0 shadow-sm">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-xl font-bold text-zinc-900 mb-1">{item.title}</p>
                      <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 bg-zinc-950 rounded-[2rem] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MessageSquare className="w-24 h-24" />
              </div>
              <h5 className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em] mb-6">Exercício de Aplicação</h5>
              <p className="text-lg italic leading-relaxed relative z-10">
                "Escolha um tema do seu dia a dia e tente encaixá-lo nestes 5 passos. Escreva apenas uma frase para cada etapa. Você verá que a fala se organiza sozinha."
              </p>
            </div>
          </div>

          <footer className="mt-auto pt-10 border-t border-zinc-100 flex justify-between text-xs text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Instituto Falar Bem</span>
            <span>Página 04</span>
          </footer>
        </section>

        {/* PAGE 5: CAPÍTULO 3 - DOMÍNIO DO MEDO */}
        <section className="h-[297mm] w-[210mm] p-24 flex flex-col page-break-after-always">
          <header className="flex justify-between items-end border-b-4 border-emerald-500/10 pb-8 mb-16">
            <div>
              <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-1">Capítulo 03</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter">Domínio do Medo</h2>
            </div>
            <p className="text-zinc-400 font-mono text-base">05 / 11</p>
          </header>

          <div className="flex-1 space-y-12">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-3xl font-bold text-zinc-900 mb-8">Dissolvendo a Ansiedade</h3>
              <p className="text-xl text-zinc-600 leading-relaxed">
                O medo não desaparece, ele é <strong>dominado</strong>. A origem é psicológica: o receio do julgamento e da exclusão. Para vencer, usamos a exposição controlada e o reset fisiológico.
              </p>
            </div>

            <div className="bg-emerald-50 p-12 rounded-[2.5rem] border border-emerald-100 space-y-10 shadow-sm">
              <h4 className="text-emerald-800 font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-3">
                <Lock className="w-6 h-6" /> Protocolo de Enfrentamento Gradual
              </h4>
              
              <div className="space-y-5">
                {[
                  { level: "Nível 1", task: "Fale sozinho no espelho por 2 minutos diários." },
                  { level: "Nível 2", task: "Grave um vídeo de 1 minuto e assista (sem julgar)." },
                  { level: "Nível 3", task: "Faça uma pergunta simples em uma reunião online." },
                  { level: "Nível 4", task: "Conte uma história curta para 3 amigos próximos." },
                  { level: "Nível 5", task: "Lidere uma pequena apresentação para sua equipe." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl border border-emerald-100 shadow-sm">
                    <span className="font-black text-emerald-600 text-xs uppercase tracking-widest">{item.level}</span>
                    <span className="text-lg text-zinc-700 font-medium">{item.task}</span>
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100">
              <h4 className="text-xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-emerald-500" /> Técnica de Reset Emocional
              </h4>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Se o pânico bater antes de falar: <strong>Aperte os punhos com toda a força por 5 segundos e solte bruscamente.</strong> Repita 3 vezes. Isso "queima" a adrenalina acumulada nos músculos e força o relaxamento físico imediato.
              </p>
            </div>
          </div>

          <footer className="mt-auto pt-10 border-t border-zinc-100 flex justify-between text-xs text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Instituto Falar Bem</span>
            <span>Página 05</span>
          </footer>
        </section>

        {/* PAGE 6: CAPÍTULO 4 - VOZ DE AUTORIDADE */}
        <section className="h-[297mm] w-[210mm] p-24 flex flex-col page-break-after-always">
          <header className="flex justify-between items-end border-b-4 border-emerald-500/10 pb-8 mb-16">
            <div>
              <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-1">Capítulo 04</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter">Voz de Autoridade</h2>
            </div>
            <p className="text-zinc-400 font-mono text-base">06 / 11</p>
          </header>

          <div className="flex-1 space-y-12">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-3xl font-bold text-zinc-900 mb-8">O Som da Confiança</h3>
              <p className="text-xl text-zinc-600 leading-relaxed">
                Sua voz é um instrumento de influência. Autoridade não é volume, é <strong>ressonância e controle</strong>. Pessoas inseguras falam com a garganta; líderes falam com o diafragma.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-10 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 space-y-6 shadow-sm">
                <Mic2 className="w-10 h-10 text-emerald-500" />
                <h4 className="text-xl font-bold text-zinc-900">Projeção Vocal</h4>
                <p className="text-zinc-500 leading-relaxed">Imagine que sua voz deve tocar a parede do fundo da sala. Use o ar do abdômen para sustentar o som.</p>
              </div>
              <div className="p-10 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 space-y-6 shadow-sm">
                <Clock className="w-10 h-10 text-emerald-500" />
                <h4 className="text-xl font-bold text-zinc-900">Pausas Estratégicas</h4>
                <p className="text-zinc-500 leading-relaxed">O silêncio após uma frase importante dá peso ao que foi dito. Use pausas de 2s para ênfase.</p>
              </div>
            </div>

            <div className="bg-zinc-950 p-12 rounded-[2.5rem] text-white space-y-8">
              <h4 className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-xs">Treino Vocal Diário</h4>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-black font-black text-sm shrink-0 shadow-lg">1</div>
                  <p className="text-zinc-400 leading-relaxed"><strong>O Bocejo:</strong> Boceje profundamente para abrir a laringe e relaxar a musculatura da fala.</p>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-black font-black text-sm shrink-0 shadow-lg">2</div>
                  <p className="text-zinc-400 leading-relaxed"><strong>Vibração de Lábios:</strong> Faça o som de um motor (Brrrrr) variando do grave ao agudo por 1 min.</p>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-black font-black text-sm shrink-0 shadow-lg">3</div>
                  <p className="text-zinc-400 leading-relaxed"><strong>Articulação Exagerada:</strong> Leia um texto movendo excessivamente os lábios para treinar a dicção.</p>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-auto pt-10 border-t border-zinc-100 flex justify-between text-xs text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Instituto Falar Bem</span>
            <span>Página 06</span>
          </footer>
        </section>

        {/* PAGE 7: CAPÍTULO 5 - LINGUAGEM INVISÍVEL */}
        <section className="h-[297mm] w-[210mm] p-24 flex flex-col page-break-after-always">
          <header className="flex justify-between items-end border-b-4 border-emerald-500/10 pb-8 mb-16">
            <div>
              <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-1">Capítulo 05</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter">Linguagem Invisível</h2>
            </div>
            <p className="text-zinc-400 font-mono text-base">07 / 11</p>
          </header>

          <div className="flex-1 space-y-12">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-3xl font-bold text-zinc-900 mb-8">O Corpo Fala Primeiro</h3>
              <p className="text-xl text-zinc-600 leading-relaxed">
                Mais de 50% da sua comunicação é não-verbal. Antes de você abrir a boca, as pessoas já decidiram se você é confiável baseadas na sua <strong>postura e olhar</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10">
              <div className="flex gap-10 items-start p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                <div className="p-5 bg-emerald-100 rounded-2xl text-emerald-600 shadow-sm">
                  <UserCheck className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-2xl mb-2">Postura de Expansão</h4>
                  <p className="text-zinc-500 text-lg leading-relaxed">Mantenha a coluna ereta e ombros relaxados. Ocupe seu espaço. Pessoas inseguras tentam "encolher" o corpo; líderes se expandem.</p>
                </div>
              </div>

              <div className="flex gap-10 items-start p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                <div className="p-5 bg-emerald-100 rounded-2xl text-emerald-600 shadow-sm">
                  <Eye className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-2xl mb-2">Contato Visual Estratégico</h4>
                  <p className="text-zinc-500 text-lg leading-relaxed">Não olhe para o chão. Distribua seu olhar. Se estiver nervoso, foque na testa das pessoas — elas sentirão que você está olhando nos olhos.</p>
                </div>
              </div>

              <div className="flex gap-10 items-start p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                <div className="p-5 bg-emerald-100 rounded-2xl text-emerald-600 shadow-sm">
                  <MousePointer2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-2xl mb-2">Gestos Ilustradores</h4>
                  <p className="text-zinc-500 text-lg leading-relaxed">Suas mãos devem ajudar a explicar suas ideias. Evite mãos nos bolsos. Use gestos abertos para mostrar transparência.</p>
                </div>
              </div>
            </div>

            <div className="p-10 bg-emerald-50 rounded-[2rem] border border-emerald-100 text-center shadow-sm">
              <p className="text-emerald-900 font-black uppercase tracking-widest text-sm mb-3">Dica de Ouro</p>
              <p className="text-xl text-emerald-800 italic leading-relaxed">"Sorria com os olhos. Um sorriso genuíno desarma qualquer resistência e cria uma conexão instantânea com o público."</p>
            </div>
          </div>

          <footer className="mt-auto pt-10 border-t border-zinc-100 flex justify-between text-xs text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Instituto Falar Bem</span>
            <span>Página 07</span>
          </footer>
        </section>

        {/* PAGE 8: CAPÍTULO 6 - PERSUASÃO ÉTICA */}
        <section className="h-[297mm] w-[210mm] p-24 flex flex-col page-break-after-always">
          <header className="flex justify-between items-end border-b-4 border-emerald-500/10 pb-8 mb-16">
            <div>
              <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-1">Capítulo 06</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter">Persuasão Ética</h2>
            </div>
            <p className="text-zinc-400 font-mono text-base">08 / 11</p>
          </header>

          <div className="flex-1 space-y-12">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-3xl font-bold text-zinc-900 mb-8">Comunicando com Impacto</h3>
              <p className="text-xl text-zinc-600 leading-relaxed">
                Persuadir não é manipular. É apresentar sua ideia de forma tão clara que a aceitação se torna o caminho lógico. A persuasão ética nasce da <strong>empatia e da clareza</strong>.
              </p>
            </div>

            <div className="space-y-8">
              <div className="p-12 bg-zinc-950 rounded-[2.5rem] text-white shadow-xl">
                <h4 className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-xs mb-10">Modelos de Estruturas Persuasivas</h4>
                
                <div className="space-y-10">
                  <div className="border-l-4 border-emerald-500 pl-8">
                    <p className="text-xl font-bold text-white mb-2">O Gatilho do "Porque"</p>
                    <p className="text-lg text-zinc-400 italic">"Gostaria de sugerir [X], porque isso nos ajudará a [Benefício Y]."</p>
                    <p className="text-sm text-zinc-500 mt-4">Usar a palavra 'porque' aumenta a aceitação de pedidos em até 94%.</p>
                  </div>

                  <div className="border-l-4 border-emerald-500 pl-8">
                    <p className="text-xl font-bold text-white mb-2">Storytelling em 3 Atos</p>
                    <p className="text-lg text-zinc-400 italic">"Antes tínhamos [Problema]... Aplicamos [Solução]... E agora temos [Resultado]."</p>
                    <p className="text-sm text-zinc-500 mt-4">Histórias ativam áreas do cérebro que fatos isolados não alcançam.</p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center gap-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-1">Clareza Absoluta</h4>
                  <p className="text-zinc-500 leading-relaxed">Use palavras simples. Se você não consegue explicar para uma criança de 10 anos, você não entendeu o assunto o suficiente.</p>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-auto pt-10 border-t border-zinc-100 flex justify-between text-xs text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Instituto Falar Bem</span>
            <span>Página 08</span>
          </footer>
        </section>

        {/* PAGE 9: BÔNUS 1 - MESTRE DAS REUNIÕES ONLINE */}
        <section className="h-[297mm] w-[210mm] p-24 flex flex-col page-break-after-always bg-zinc-50">
          <header className="flex justify-between items-end border-b-4 border-emerald-200 pb-8 mb-16">
            <div>
              <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-1">Bônus 01</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter">Mestre das Reuniões Online</h2>
            </div>
            <p className="text-zinc-400 font-mono text-base">09 / 11</p>
          </header>

          <div className="flex-1 space-y-12">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-3xl font-bold text-zinc-900 mb-8">A Nova Fronteira da Oratória</h3>
              <p className="text-xl text-zinc-600 leading-relaxed">
                Falar para uma câmera exige energia extra e ajustes técnicos. O enquadramento e a iluminação são sua "postura" digital.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="p-10 bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm space-y-6">
                <Video className="w-12 h-12 text-emerald-500" />
                <h4 className="text-xl font-bold text-zinc-900">Enquadramento</h4>
                <p className="text-zinc-500 leading-relaxed">Olhos na linha do terço superior da tela. Nunca olhe para baixo; eleve o notebook se necessário.</p>
              </div>
              <div className="p-10 bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm space-y-6">
                <Sparkles className="w-12 h-12 text-emerald-500" />
                <h4 className="text-xl font-bold text-zinc-900">Iluminação</h4>
                <p className="text-zinc-500 leading-relaxed">A luz deve estar sempre de frente. Luz atrás cria silhueta e esconde suas expressões.</p>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[2.5rem] border border-emerald-100 shadow-md space-y-8">
              <h4 className="text-emerald-600 font-black uppercase tracking-widest text-xs">Checklist Prático para Calls</h4>
              <div className="grid grid-cols-1 gap-5">
                {[
                  "Olhe para o furo da câmera, não para a sua própria imagem.",
                  "Mantenha o microfone próximo e teste o áudio antes de entrar.",
                  "Use um fundo neutro e organizado (evite fundos virtuais).",
                  "Sorria e gesticule mais do que faria pessoalmente.",
                  "Tenha um roteiro P.R.E.P. anotado ao lado da câmera."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 text-lg text-zinc-600">
                    <div className="w-7 h-7 rounded-lg border-2 border-emerald-200 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <footer className="mt-auto pt-10 border-t border-emerald-100 flex justify-between text-xs text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Instituto Falar Bem</span>
            <span>Página 09</span>
          </footer>
        </section>

        {/* PAGE 10: BÔNUS 2 - PROTOCOLO ANTI-BRANCO */}
        <section className="h-[297mm] w-[210mm] p-24 flex flex-col page-break-after-always bg-zinc-50">
          <header className="flex justify-between items-end border-b-4 border-emerald-200 pb-8 mb-16">
            <div>
              <p className="text-emerald-600 font-bold text-sm tracking-widest uppercase mb-1">Bônus 02</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tighter">Protocolo Anti-Branco</h2>
            </div>
            <p className="text-zinc-400 font-mono text-base">10 / 11</p>
          </header>

          <div className="flex-1 space-y-12">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-3xl font-bold text-zinc-900 mb-8">O que fazer quando tudo sumir?</h3>
              <p className="text-xl text-zinc-600 leading-relaxed">
                O "branco" acontece com todos. A diferença é que o profissional sabe como <strong>mascarar o lapso</strong> enquanto o cérebro reconecta os pontos.
              </p>
            </div>

            <div className="bg-zinc-950 p-16 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <AlertCircle className="w-48 h-48 text-emerald-500" />
              </div>
              
              <h4 className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-xs mb-12">Protocolo de Emergência</h4>
              
              <div className="space-y-10 relative z-10">
                <div className="flex gap-8">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-black text-sm shrink-0 shadow-lg">1</div>
                  <div>
                    <p className="text-xl font-bold mb-2">Repita a última frase</p>
                    <p className="text-zinc-400 leading-relaxed">Isso dá 3-5 segundos para o seu cérebro processar o link perdido sem que o público perceba.</p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-black text-sm shrink-0 shadow-lg">2</div>
                  <div>
                    <p className="text-xl font-bold mb-2">Faça uma pergunta ao público</p>
                    <p className="text-zinc-400 leading-relaxed">"Faz sentido até aqui?" ou "Alguém tem uma dúvida?". Isso transfere a pressão para eles por 10s.</p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-black text-sm shrink-0 shadow-lg">3</div>
                  <div>
                    <p className="text-xl font-bold mb-2">Pule para o próximo ponto</p>
                    <p className="text-zinc-400 leading-relaxed">Se a ideia não voltou, abandone-a. O público não sabe seu roteiro. Siga em frente com confiança.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 border-4 border-dashed border-zinc-200 rounded-[2rem] text-center">
              <p className="text-zinc-800 font-black uppercase tracking-widest text-sm mb-4">Regra de Ouro</p>
              <p className="text-xl text-zinc-500 italic leading-relaxed">"Nunca peça desculpas pelo branco. Pedir desculpas chama atenção para o erro. Apenas mantenha a calma e use o protocolo."</p>
            </div>
          </div>

          <footer className="mt-auto pt-10 border-t border-emerald-100 flex justify-between text-xs text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Instituto Falar Bem</span>
            <span>Página 10</span>
          </footer>
        </section>

        {/* PAGE 11: AGRADECIMENTOS */}
        <section className="h-[297mm] w-[210mm] p-24 flex flex-col justify-center items-center text-center space-y-16 bg-zinc-950 text-white">
          <div className="w-32 h-1.5 bg-emerald-500 mb-12" />
          
          <div className="space-y-10 max-w-2xl">
            <h2 className="text-6xl font-black tracking-tighter uppercase leading-tight">Sua Jornada <br/> <span className="text-emerald-500 italic">Começa Agora</span></h2>
            <p className="text-zinc-400 text-xl leading-relaxed">
              Você agora possui as ferramentas, o método e o protocolo. Mas lembre-se: a oratória é um músculo. O conhecimento sem prática é apenas entretenimento.
            </p>
            <p className="text-zinc-400 text-xl leading-relaxed">
              Use este guia como seu manual de consulta rápida. Revise as técnicas antes de reuniões importantes e pratique os exercícios diariamente. A cada fala, você se tornará mais confiante, mais claro e mais influente.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-bold tracking-[0.4em] text-zinc-500 uppercase">Com admiração,</p>
            <p className="text-5xl font-serif italic text-emerald-500">Instituto Falar Bem</p>
          </div>

          <div className="pt-32 space-y-8">
            <div className="text-xs text-zinc-600 font-mono uppercase tracking-[0.3em]">
              © 2026 Todos os direitos reservados.
            </div>
            <div className="flex justify-center gap-6">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
            </div>
          </div>

          <div className="absolute bottom-16 w-full px-24 flex justify-between items-center text-[10px] text-zinc-800 font-bold uppercase tracking-[0.3em]">
            <span>Guia de Transformação</span>
            <span>Final do Documento</span>
          </div>
        </section>

      </div>

      {/* Global Print Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .page-break-after-always {
            page-break-after: always !important;
          }
          @page {
            size: A4;
            margin: 0;
          }
          .max-w-\\[210mm\\] {
            max-width: none !important;
            width: 210mm !important;
          }
          /* Fix for background colors in print */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
        
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #18181b;
        }
        ::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #10b981;
        }
      `}} />
    </div>
  );
}
