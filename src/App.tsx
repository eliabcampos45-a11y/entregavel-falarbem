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
  Clock,
  Quote,
  Lightbulb,
  ArrowDownCircle,
  ChevronRight,
  Star,
  Activity,
  Waves,
  Fingerprint,
  Compass,
  Award,
  BarChart3,
  Users,
  Instagram,
  Globe
} from 'lucide-react';

// --- COMPONENTS ---

const Page = ({ children, pageNumber, chapterTitle, className = "" }) => (
  <div className={`w-[210mm] h-[297mm] p-[25mm] bg-white relative overflow-hidden print:m-0 print:shadow-none shadow-[0_0_50px_rgba(0,0,0,0.1)] mb-12 mx-auto flex flex-col break-after-page ${className}`}>
    {/* Header Decor */}
    <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-100" />
    
    {/* Content Area */}
    <div className="flex-1 relative z-10 flex flex-col">
      {children}
    </div>

    {/* Footer Decor */}
    <footer className="mt-auto pt-8 border-t border-zinc-100 flex justify-between items-center text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em] relative z-10">
      <div className="flex items-center gap-4">
        <span className="text-emerald-600">MÉTODO FALAR BEM</span>
        <span className="w-1 h-1 rounded-full bg-zinc-300" />
        <span>{chapterTitle || "Instituto Falar Bem"}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-zinc-900">PÁGINA {pageNumber.toString().padStart(2, '0')}</span>
      </div>
    </footer>

    {/* Subtle Background Elements */}
    <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-50/50 blur-[100px] rounded-full -z-10" />
  </div>
);

const ChapterCover = ({ number, title, subtitle, pageNumber }) => (
  <Page pageNumber={pageNumber} className="bg-zinc-950 text-white !p-0" chapterTitle={title}>
    <div className="h-full w-full flex flex-col justify-center p-24 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>
      
      <div className="relative z-10 space-y-12">
        <div className="inline-block">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-emerald-500" />
            <span className="text-emerald-500 font-black tracking-[0.5em] text-xs uppercase">Capítulo</span>
          </div>
          <h2 className="text-[12rem] font-black leading-none tracking-tighter text-white/10 absolute -top-24 -left-12 select-none">
            {number}
          </h2>
          <h3 className="text-8xl font-black uppercase tracking-tighter leading-[0.85] relative">
            {title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h3>
        </div>
        
        <div className="h-2 w-32 bg-emerald-500 rounded-full" />
        
        <p className="text-3xl text-zinc-400 font-medium max-w-md leading-tight tracking-tight">
          {subtitle}
        </p>
      </div>

      <div className="absolute bottom-24 right-24 flex items-center gap-4">
        <div className="text-right">
          <p className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">Próxima Seção</p>
          <p className="text-sm font-bold text-emerald-500 uppercase tracking-tighter">Exploração Profunda</p>
        </div>
        <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center">
          <ChevronRight className="w-6 h-6 text-emerald-500" />
        </div>
      </div>
    </div>
  </Page>
);

export default function App() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 selection:bg-emerald-500/30 font-sans py-12 print:p-0 print:bg-white">
      {/* UI Controls */}
      <div className="fixed top-6 right-6 z-50 print:hidden flex gap-4">
        <button
          onClick={handlePrint}
          className="flex items-center gap-3 px-10 py-5 bg-zinc-950 hover:bg-zinc-900 text-white font-black rounded-full shadow-2xl transition-all active:scale-95 group uppercase tracking-widest text-xs"
        >
          <Printer className="w-5 h-5 text-emerald-500" />
          Gerar Ebook Premium (PDF)
        </button>
      </div>

      {/* BOOK CONTAINER */}
      <div className="print:block">
        
        {/* PAGE 01: COVER */}
        <div className="w-[210mm] h-[297mm] mx-auto bg-zinc-950 text-white relative overflow-hidden flex flex-col items-center justify-between p-24 mb-12 shadow-2xl print:m-0 print:shadow-none break-after-page">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-emerald-500/30 blur-[200px] rounded-full" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[100%] h-[100%] bg-emerald-500/10 blur-[200px] rounded-full" />
          </div>

          <div className="relative z-10 text-center space-y-10 mt-20">
            <div className="inline-flex items-center gap-4 px-8 py-3 border border-emerald-500/30 bg-emerald-500/5 rounded-full text-emerald-400 text-xs font-black tracking-[0.5em] uppercase">
              <Star className="w-4 h-4 fill-current" />
              Edição de Colecionador
            </div>
            <h1 className="text-[10rem] font-black leading-[0.8] tracking-tighter uppercase flex flex-col">
              <span>Método</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 italic">Falar Bem</span>
            </h1>
            <div className="h-3 w-48 bg-emerald-500 mx-auto rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)]" />
            <p className="text-3xl text-zinc-400 font-medium max-w-2xl mx-auto leading-tight tracking-tight">
              O método prático para organizar pensamentos, eliminar o branco mental e falar com confiança em qualquer situação.
            </p>
          </div>

          <div className="relative z-10 w-full text-center space-y-6 mb-10">
            <div className="space-y-2">
              <p className="text-[10px] font-black tracking-[0.6em] text-zinc-500 uppercase">Autoridade em Comunicação</p>
              <p className="text-6xl font-serif italic text-white tracking-tight">Instituto Falar Bem</p>
            </div>
          </div>
        </div>

        {/* PAGE 02: COPYRIGHT */}
        <Page pageNumber={2} chapterTitle="Aviso Legal">
          <div className="h-full flex flex-col justify-center max-w-xl mx-auto space-y-16">
            <div className="space-y-6 text-center">
              <ShieldCheck className="w-20 h-20 text-emerald-600 mx-auto" />
              <h2 className="text-4xl font-black uppercase tracking-tighter text-zinc-900">Aviso de Direitos Autorais</h2>
              <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full" />
            </div>

            <div className="space-y-8 text-zinc-500 text-xl leading-relaxed text-center font-medium">
              <p>
                Este material é protegido pelas leis internacionais de direitos autorais. Nenhuma parte deste conteúdo pode ser reproduzida, distribuída ou transmitida em qualquer formato sem autorização prévia e expressa do <span className="text-zinc-900 font-bold">Instituto Falar Bem</span>.
              </p>
              <p>
                Este material foi criado exclusivamente para fins educacionais e uso pessoal do comprador.
              </p>
              <p className="p-10 bg-zinc-50 border border-zinc-100 rounded-[3rem] text-zinc-900 font-bold italic text-2xl leading-tight">
                "A redistribuição não autorizada deste conteúdo constitui violação de direitos autorais e crime de pirataria."
              </p>
            </div>

            <div className="pt-16 border-t border-zinc-100 text-center space-y-4">
              <div className="flex items-center justify-center gap-3 text-zinc-400 font-black uppercase tracking-widest text-xs">
                <Copyright className="w-4 h-4" />
                Aviso de Copyright
              </div>
              <p className="text-xl font-bold text-zinc-900">
                © 2026 Instituto Falar Bem — Todos os direitos reservados.
              </p>
            </div>
          </div>
        </Page>

        {/* PAGE 03: SUMÁRIO */}
        <Page pageNumber={3} chapterTitle="Sumário Executivo">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-6xl font-black uppercase tracking-tighter">Sumário</h2>
              <p className="text-xl text-zinc-400 font-medium">A jornada para a sua nova voz.</p>
            </div>

            <div className="space-y-6">
              {[
                { p: "05", t: "Introdução: O Fim do Mito do Dom" },
                { p: "12", t: "Capítulo 1: Neuro-Conexão e Rapport" },
                { p: "28", t: "Capítulo 2: Arquitetura da Fala Universal" },
                { p: "44", t: "Capítulo 3: Domínio do Medo e Biologia" },
                { p: "58", t: "Capítulo 4: Voz de Autoridade e Tom" },
                { p: "72", t: "Capítulo 5: Linguagem Invisível e Corpo" },
                { p: "86", t: "Capítulo 6: Persuasão Ética e Vendas" },
                { p: "98", t: "Bônus: Reuniões Online e Anti-Branco" },
                { p: "110", t: "Conclusão e Próximos Passos" }
              ].map((item, i) => (
                <div key={i} className="flex items-end gap-4 group cursor-pointer">
                  <span className="text-emerald-600 font-black text-2xl w-12">{item.p}</span>
                  <div className="flex-1 border-b border-dotted border-zinc-200 mb-1.5" />
                  <span className="text-zinc-900 font-black uppercase text-lg tracking-tighter group-hover:text-emerald-600 transition-colors">
                    {item.t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Page>

        {/* PAGE 04: QUOTE PAGE */}
        <Page pageNumber={4} chapterTitle="Introdução" className="justify-center items-center text-center bg-zinc-50">
          <div className="max-w-xl space-y-12">
            <Quote className="w-24 h-24 text-emerald-500/20 mx-auto" />
            <h2 className="text-5xl font-serif italic text-zinc-900 leading-tight tracking-tight">
              "Comunicação não é um dom que você recebe ao nascer. É uma ferramenta que você constrói com método."
            </h2>
            <div className="flex flex-col items-center gap-4">
              <div className="h-px w-16 bg-emerald-500" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Instituto Falar Bem</p>
            </div>
          </div>
        </Page>

        {/* PAGE 05: INTRODUÇÃO - PARTE 1 */}
        <Page pageNumber={5} chapterTitle="Introdução">
          <div className="space-y-12">
            <h2 className="text-7xl font-black uppercase tracking-tighter leading-[0.85]">
              Introdução <br/>
              <span className="text-emerald-600">O Fim do Mito</span>
            </h2>
            
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p className="first-letter:text-8xl first-letter:font-black first-letter:text-zinc-900 first-letter:mr-4 first-letter:float-left">
                Comunicação não é dom. É método. Existe um mito muito comum sobre comunicação: a ideia de que algumas pessoas simplesmente nasceram com o dom de falar bem, enquanto outras não.
              </p>
              <p>
                Se você já assistiu alguém falar com clareza, confiança e impacto, provavelmente pensou algo como: <span className="text-zinc-900 font-bold italic">“Essa pessoa nasceu com talento para isso.”</span>
              </p>
              <p>
                Mas a realidade é bem diferente. A habilidade de falar bem não é um talento natural. Ela é resultado de três fatores principais que trabalharemos profundamente neste guia.
              </p>
            </div>

            <div className="p-12 bg-zinc-950 text-white rounded-[3rem] space-y-6 relative overflow-hidden">
              <Sparkles className="absolute top-0 right-0 p-12 opacity-10 w-40 h-40" />
              <p className="text-3xl font-black leading-tight italic relative z-10">
                "A excelência na fala é uma ciência exata, não um sorteio genético."
              </p>
            </div>
          </div>
        </Page>

        {/* PAGE 06: INTRODUÇÃO - OS 3 FATORES */}
        <Page pageNumber={6} chapterTitle="Introdução">
          <div className="space-y-16">
            <div className="space-y-4">
              <h3 className="text-4xl font-black uppercase tracking-tighter">Os Três Pilares da Maestria</h3>
              <p className="text-xl text-zinc-400 font-medium">A base de toda comunicação de alto impacto.</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {[
                { 
                  icon: Brain, 
                  title: "Estrutura Mental", 
                  desc: "A capacidade de organizar pensamentos de forma lógica antes mesmo de abrir a boca. Sem estrutura, a mensagem se perde no ruído.",
                  details: "Envolve o uso de frameworks cognitivos que permitem ao cérebro acessar informações de forma sequencial."
                },
                { 
                  icon: Heart, 
                  title: "Controle Emocional", 
                  desc: "O domínio sobre as reações fisiológicas do medo. Não se trata de não sentir medo, mas de saber usá-lo a seu favor.",
                  details: "Regulação do sistema nervoso autônomo através de técnicas de biofeedback e respiração tática."
                },
                { 
                  icon: Zap, 
                  title: "Prática Consciente", 
                  desc: "A repetição deliberada de técnicas específicas. Falar muito não é praticar; praticar é falar com intenção de melhoria.",
                  details: "Uso de ciclos de feedback e análise de performance para refinamento contínuo."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 group hover:bg-white hover:shadow-2xl transition-all">
                  <div className="w-20 h-20 rounded-3xl bg-zinc-900 text-emerald-500 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-black uppercase tracking-tighter text-zinc-900">{item.title}</h4>
                    <p className="text-lg text-zinc-600 leading-relaxed">{item.desc}</p>
                    <div className="pt-4 border-t border-zinc-200">
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{item.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Page>

        {/* PAGE 07: INTRODUÇÃO - O PROBLEMA */}
        <Page pageNumber={7} chapterTitle="Introdução">
          <div className="space-y-12">
            <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              O Problema <br/>
              <span className="text-emerald-600">Invisível</span>
            </h2>

            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                O problema é que a maioria das pessoas nunca foi ensinada como organizar pensamentos antes de falar. Na escola aprendemos matemática, história e gramática, mas raramente aprendemos algo fundamental: <span className="text-zinc-900 font-bold">como estruturar ideias para que outras pessoas entendam facilmente.</span>
              </p>
              <p>
                Isso faz com que muitas pessoas tenham boas ideias, mas não consigam expressá-las com clareza. Talvez você já tenha vivido situações como:
              </p>
              
              <div className="grid grid-cols-1 gap-4 my-12">
                {[
                  "Saber exatamente o que queria dizer, mas não conseguir explicar",
                  "Esquecer o que ia falar no meio de uma frase",
                  "Sentir ansiedade ao falar em público",
                  "Perceber que outras pessoas com menos conhecimento conseguem se expressar melhor"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-8 bg-zinc-50 rounded-2xl border-l-8 border-emerald-500">
                    <AlertCircle className="w-8 h-8 text-emerald-600 shrink-0" />
                    <p className="font-bold text-zinc-800 text-xl">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-3xl font-black text-zinc-900 leading-tight">
                Se isso já aconteceu com você, saiba que o problema não está na sua inteligência. O problema está na ausência de um método claro de comunicação.
              </p>
            </div>
          </div>
        </Page>

        {/* PAGE 08: INTRODUÇÃO - OS 6 PILARES */}
        <Page pageNumber={8} chapterTitle="O Método">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-5xl font-black uppercase tracking-tighter">O Método <br/><span className="text-emerald-600">Falar Bem</span></h2>
              <p className="text-xl text-zinc-400 font-medium max-w-md">Seis pilares fundamentais para uma comunicação de autoridade.</p>
            </div>

            <div className="grid grid-cols-2 gap-6 my-12">
              {[
                { t: "Neuro-Conexão", d: "Como o cérebro decide prestar atenção em você.", icon: Brain },
                { t: "Arquitetura da Fala", d: "Como organizar qualquer ideia em segundos.", icon: Layout },
                { t: "Domínio do Medo", d: "Entendendo e regulando a ansiedade ao falar.", icon: ShieldCheck },
                { t: "Voz de Autoridade", d: "O uso estratégico do tom, ritmo e pausas.", icon: Mic2 },
                { t: "Linguagem Invisível", d: "O poder da postura e do contato visual.", icon: Eye },
                { t: "Persuasão Ética", d: "Como mover pessoas através das ideias.", icon: Target }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-zinc-50 border border-zinc-100 rounded-[2.5rem] space-y-4 group hover:bg-zinc-950 hover:text-white transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-zinc-950 flex items-center justify-center font-black">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-2xl font-black uppercase tracking-tighter">{item.t}</h4>
                    <p className="text-sm font-medium opacity-60 leading-tight">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-12 bg-emerald-600 rounded-[3rem] text-white text-center shadow-xl">
              <p className="text-2xl font-black italic">"Cada um desses pilares trabalha uma parte essencial da comunicação humana."</p>
            </div>
          </div>
        </Page>

        {/* PAGE 09: CAPÍTULO 1 - COVER */}
        <ChapterCover 
          number="01" 
          title="Neuro Conexão" 
          subtitle="A ciência de capturar a atenção e criar confiança instantânea."
          pageNumber={9}
        />

        {/* PAGE 10: CAPÍTULO 1 - O FILTRO COGNITIVO */}
        <Page pageNumber={10} chapterTitle="Neuro-Conexão">
          <div className="space-y-12">
            <h3 className="text-5xl font-black uppercase tracking-tighter">O Filtro Cognitivo</h3>
            
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Antes de qualquer palavra ser analisada, o cérebro do ouvinte responde a uma pergunta inconsciente: <span className="text-emerald-600 font-black">“Devo prestar atenção nessa pessoa?”</span>
              </p>
              <p>
                Esse julgamento acontece em milissegundos. Nosso cérebro evoluiu para filtrar rapidamente estímulos sociais e decidir onde investir atenção.
              </p>
              <p>
                Existem três fatores principais que influenciam essa decisão: Familiaridade, Clareza e Intenção.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 my-10">
              <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 flex items-center gap-10">
                <div className="w-20 h-20 bg-zinc-900 text-emerald-500 rounded-3xl flex items-center justify-center shrink-0 font-black text-3xl">01</div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black uppercase tracking-tighter text-zinc-900">Familiaridade</h4>
                  <p className="text-lg text-zinc-500 leading-relaxed">Pessoas tendem a confiar mais em quem parece semelhante a elas. O cérebro interpreta a semelhança como um sinal de segurança.</p>
                </div>
              </div>
              <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 flex items-center gap-10">
                <div className="w-20 h-20 bg-zinc-900 text-emerald-500 rounded-3xl flex items-center justify-center shrink-0 font-black text-3xl">02</div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-black uppercase tracking-tighter text-zinc-900">Clareza</h4>
                  <p className="text-lg text-zinc-500 leading-relaxed">O cérebro humano prefere mensagens simples e organizadas. Confusão gera gasto de energia desnecessário.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 11: CAPÍTULO 1 - ESPELHAMENTO */}
        <Page pageNumber={11} chapterTitle="Neuro-Conexão">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Espelhamento Social</h3>
            
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                O fenômeno do espelhamento social é uma das ferramentas mais poderosas para criar conexão. Quando dois indivíduos apresentam padrões semelhantes de comunicação, o cérebro interpreta isso como um sinal de segurança.
              </p>
              <p className="text-zinc-900 font-bold">Como aplicar de forma natural:</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { t: "Ritmo", d: "Observe a velocidade com que a pessoa fala." },
                { t: "Linguagem", d: "Note o nível de formalidade utilizado." },
                { t: "Volume", d: "Ajuste sua voz para o volume do ambiente." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-950 text-white rounded-3xl space-y-4 text-center">
                  <div className="w-12 h-12 bg-emerald-500 text-zinc-950 rounded-xl mx-auto flex items-center justify-center font-black">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tighter">{item.t}</h4>
                  <p className="text-sm opacity-60">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="p-12 bg-emerald-50 rounded-[3rem] border-l-8 border-emerald-500">
              <p className="text-2xl font-bold text-emerald-900 leading-tight italic">
                "Ajuste levemente sua comunicação para se aproximar desses padrões. Isso cria um efeito sutil e poderoso de conexão."
              </p>
            </div>
          </div>
        </Page>

        {/* PAGE 12: CAPÍTULO 1 - TÉCNICAS DE ABERTURA */}
        <Page pageNumber={12} chapterTitle="Neuro-Conexão">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Aberturas de Impacto</h3>
            
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Uma das formas mais eficazes de criar conexão é iniciar uma fala com um ponto de interesse compartilhado. Isso ativa curiosidade e relevância imediata.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 my-10">
              <div className="p-10 bg-red-50 rounded-[2.5rem] border border-red-100 flex items-center gap-8">
                <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center font-black text-2xl shrink-0">❌</div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-red-400 mb-1">Evite o Comum</p>
                  <p className="text-2xl font-bold text-red-900 italic">“Eu queria apresentar uma ideia.”</p>
                </div>
              </div>
              <div className="p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex items-center gap-8">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center font-black text-2xl shrink-0">✅</div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-1">Use o Impacto</p>
                  <p className="text-2xl font-black text-emerald-900">“Eu percebi algo interessante que pode ajudar a gente a resolver esse problema.”</p>
                </div>
              </div>
            </div>

            <div className="p-10 bg-zinc-900 text-white rounded-[3rem] space-y-6">
              <h4 className="text-emerald-500 font-black uppercase text-xs tracking-widest">Exercício Prático</h4>
              <p className="text-xl font-medium leading-relaxed">Durante os próximos dois dias, pratique observar e ajustar sua comunicação em três interações diferentes. Anote suas percepções após cada interação.</p>
            </div>
          </div>
        </Page>

        {/* PAGE 13: CAPÍTULO 2 - COVER */}
        <ChapterCover 
          number="02" 
          title="Arquitetura da Fala" 
          subtitle="O framework universal para organizar qualquer ideia em segundos."
          pageNumber={13}
        />

        {/* PAGE 14: CAPÍTULO 2 - O CAOS MENTAL */}
        <Page pageNumber={14} chapterTitle="Arquitetura da Fala">
          <div className="space-y-12">
            <h3 className="text-5xl font-black uppercase tracking-tighter">O Caos Mental</h3>
            
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Um dos maiores motivos pelos quais as pessoas travam ao falar é a ausência de estrutura mental. Quando você tenta explicar algo sem estrutura, sua mente tenta acessar muitas informações ao mesmo tempo.
              </p>
              <p className="text-zinc-900 font-black">Isso gera confusão e o famoso "branco".</p>
              <p>
                A solução é usar uma arquitetura simples de comunicação que acompanha a forma como o cérebro humano processa informações.
              </p>
            </div>

            <div className="p-12 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-8">
              <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest text-center">A Estrutura Universal da Fala</h4>
              <div className="flex justify-between items-center px-10">
                {["Abertura", "Contexto", "Ideia", "Exemplo", "Conclusão"].map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-zinc-900 text-emerald-500 rounded-full flex items-center justify-center font-black">{i+1}</div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">{step}</span>
                    </div>
                    {i < 4 && <div className="h-px flex-1 bg-zinc-200 mx-4" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 15: CAPÍTULO 2 - DETALHAMENTO DA ESTRUTURA */}
        <Page pageNumber={15} chapterTitle="Arquitetura da Fala">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">As 5 Etapas da Clareza</h3>
            
            <div className="space-y-6">
              {[
                { t: "Abertura", d: "Prepara o ouvinte para o que virá.", ex: "“Eu tive uma ideia que pode melhorar esse processo.”" },
                { t: "Contexto", d: "Explica por que o assunto é relevante.", ex: "“Hoje a gente está gastando muito tempo nessa etapa.”" },
                { t: "Ideia Central", d: "Aqui você apresenta sua proposta principal.", ex: "“Acho que poderíamos automatizar essa parte.”" },
                { t: "Exemplo", d: "Torna ideias abstratas mais concretas.", ex: "“Por exemplo, um sistema poderia organizar essas informações automaticamente.”" },
                { t: "Conclusão", d: "Reforça o benefício final.", ex: "“Isso reduziria bastante o tempo que estamos gastando nisso.”" }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 p-8 bg-zinc-50 rounded-3xl border border-zinc-100 group hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-zinc-900 text-emerald-500 rounded-xl flex items-center justify-center shrink-0 font-black">{i+1}</div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-black uppercase tracking-tighter text-zinc-900">{item.t}</h4>
                    <p className="text-zinc-500 leading-relaxed">{item.d}</p>
                    <p className="text-emerald-700 font-bold italic">Ex: {item.ex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Page>

        {/* PAGE 16: CAPÍTULO 3 - COVER */}
        <ChapterCover 
          number="03" 
          title="Domínio do Medo" 
          subtitle="A biologia da ansiedade e como hackear o seu sistema nervoso."
          pageNumber={16}
        />

        {/* PAGE 17: CAPÍTULO 3 - A BIOLOGIA DO MEDO */}
        <Page pageNumber={17} chapterTitle="Domínio do Medo">
          <div className="space-y-12">
            <h3 className="text-5xl font-black uppercase tracking-tighter">A Biologia do Medo</h3>
            
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                O medo de falar em público não é fraqueza. Ele é resultado de um mecanismo evolutivo. Durante milhares de anos, ser rejeitado por um grupo significava risco real de sobrevivência.
              </p>
              <p>
                Quando você precisa falar diante de outras pessoas, o cérebro pode interpretar essa situação como ameaça, ativando o sistema de alerta.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 my-10">
              <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-6">
                <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">Sintomas Comuns</h4>
                <ul className="space-y-4 font-bold text-zinc-500 text-lg">
                  <li className="flex items-center gap-4"><Waves className="w-5 h-5 text-emerald-500" /> Aceleração cardíaca</li>
                  <li className="flex items-center gap-4"><Waves className="w-5 h-5 text-emerald-500" /> Respiração curta</li>
                  <li className="flex items-center gap-4"><Waves className="w-5 h-5 text-emerald-500" /> Tensão muscular</li>
                  <li className="flex items-center gap-4"><Waves className="w-5 h-5 text-emerald-500" /> Mente confusa</li>
                </ul>
              </div>
              <div className="p-10 bg-emerald-600 rounded-[3rem] text-white flex flex-col justify-center text-center space-y-4 shadow-xl">
                <Lock className="w-12 h-12 mx-auto" />
                <p className="text-2xl font-black leading-tight italic">"A boa notícia é que esses sintomas podem ser regulados."</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 18: CAPÍTULO 3 - RESPIRAÇÃO REGULADORA */}
        <Page pageNumber={18} chapterTitle="Domínio do Medo">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Respiração Reguladora</h3>
            
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                A forma mais rápida de acalmar o sistema nervoso é através da respiração controlada. Isso sinaliza para o cérebro que você não está em perigo real.
              </p>
            </div>

            <div className="p-12 bg-zinc-950 text-white rounded-[4rem] space-y-12 relative overflow-hidden">
              <Activity className="absolute top-0 right-0 p-12 opacity-10 w-64 h-64" />
              <div className="grid grid-cols-3 gap-8 relative z-10">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-black text-emerald-500">4s</div>
                  <p className="text-xs font-black uppercase tracking-widest opacity-60">Inspire pelo nariz</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="text-6xl font-black text-emerald-500">2s</div>
                  <p className="text-xs font-black uppercase tracking-widest opacity-60">Segure o ar</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="text-6xl font-black text-emerald-500">6s</div>
                  <p className="text-xs font-black uppercase tracking-widest opacity-60">Expire lentamente</p>
                </div>
              </div>
              <p className="text-center text-xl font-medium italic text-zinc-400">Repita esse ciclo por um minuto antes de falar.</p>
            </div>

            <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-6">
              <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">Exercício de Dessensibilização</h4>
              <p className="text-xl text-zinc-600 leading-relaxed">Durante 7 dias, pratique falar em voz alta por dois minutos sobre qualquer assunto. Isso reduz o bloqueio mental gradualmente.</p>
            </div>
          </div>
        </Page>

        {/* PAGE 19: CAPÍTULO 4 - COVER */}
        <ChapterCover 
          number="04" 
          title="Voz de Autoridade" 
          subtitle="O uso estratégico dos elementos vocais para transmitir segurança."
          pageNumber={19}
        />

        {/* PAGE 20: CAPÍTULO 4 - ELEMENTOS VOCAIS */}
        <Page pageNumber={20} chapterTitle="Voz de Autoridade">
          <div className="space-y-12">
            <h3 className="text-5xl font-black uppercase tracking-tighter">O Poder da Voz</h3>
            
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                A voz é uma das ferramentas mais poderosas da comunicação. Mesmo antes de entender suas palavras, as pessoas interpretam sinais como confiança, hesitação ou clareza.
              </p>
              <p>
                Esses sinais são transmitidos através de três elementos fundamentais:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 my-10">
              {[
                { t: "Tom", d: "Um tom firme e estável transmite segurança absoluta.", icon: Activity },
                { t: "Ritmo", d: "Falar muito rápido transmite ansiedade. Controle o tempo.", icon: Clock },
                { t: "Pausas", d: "Pausas criam impacto e ajudam o ouvinte a processar a informação.", icon: Waves }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-10 p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 group hover:bg-zinc-950 hover:text-white transition-all">
                  <div className="w-16 h-16 bg-emerald-500 text-zinc-950 rounded-2xl flex items-center justify-center shrink-0">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-2xl font-black uppercase tracking-tighter">{item.t}</h4>
                    <p className="text-lg opacity-60 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Page>

        {/* PAGE 21: CAPÍTULO 5 - COVER */}
        <ChapterCover 
          number="05" 
          title="Linguagem Invisível" 
          subtitle="O impacto silencioso da sua presença física."
          pageNumber={21}
        />

        {/* PAGE 22: CAPÍTULO 5 - POSTURA E OLHAR */}
        <Page pageNumber={22} chapterTitle="Linguagem Invisível">
          <div className="space-y-12">
            <h3 className="text-5xl font-black uppercase tracking-tighter">Presença Corporal</h3>
            
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Grande parte da comunicação acontece sem palavras. Postura, gestos e expressões faciais influenciam como as pessoas interpretam sua mensagem.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 my-10">
              <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-6">
                <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">A Postura</h4>
                <p className="text-lg text-zinc-500 leading-relaxed">Uma postura aberta comunica confiança. Evite ombros curvados ou braços cruzados. Prefira coluna ereta e ombros relaxados.</p>
              </div>
              <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-6">
                <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">O Contato Visual</h4>
                <p className="text-lg text-zinc-500 leading-relaxed">O contato visual transmite presença e honestidade. Evite olhar constantemente para baixo ou para os lados.</p>
              </div>
            </div>

            <div className="p-12 bg-zinc-950 text-white rounded-[3rem] space-y-6 text-center">
              <UserCheck className="w-12 h-12 text-emerald-500 mx-auto" />
              <p className="text-2xl font-black italic">"Seu corpo fala antes da sua boca."</p>
            </div>
          </div>
        </Page>

        {/* PAGE 23: CAPÍTULO 6 - COVER */}
        <ChapterCover 
          number="06" 
          title="Persuasão Ética" 
          subtitle="Como mover pessoas através da clareza e do benefício."
          pageNumber={23}
        />

        {/* PAGE 24: CAPÍTULO 6 - O FRAMEWORK PERSUASIVO */}
        <Page pageNumber={24} chapterTitle="Persuasão Ética">
          <div className="space-y-12">
            <h3 className="text-5xl font-black uppercase tracking-tighter">A Arte de Convencer</h3>
            
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Persuadir significa comunicar ideias de forma clara e convincente. Uma mensagem persuasiva possui quatro elementos fundamentais.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 my-10">
              {[
                { t: "Situação", d: "Descreva o cenário atual.", ex: "“Hoje a gente perde muito tempo nesse processo.”" },
                { t: "Problema", d: "Destaque a dor ou o obstáculo.", ex: "“Isso acaba atrasando outras tarefas importantes.”" },
                { t: "Solução", d: "Apresente sua proposta.", ex: "“Se automatizarmos essa etapa, podemos resolver isso.”" },
                { t: "Benefício", d: "Mostre o ganho final.", ex: "“Assim ganhamos mais tempo para focar no que importa.”" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
                  <div className="w-12 h-12 bg-zinc-900 text-emerald-500 rounded-xl flex items-center justify-center shrink-0 font-black">{i+1}</div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-black uppercase tracking-tighter text-zinc-900">{item.t}</h4>
                    <p className="text-zinc-500 leading-relaxed">{item.d}</p>
                    <p className="text-emerald-700 font-bold italic">Ex: {item.ex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Page>

        {/* PAGE 25: BÔNUS - REUNIÕES ONLINE */}
        <Page pageNumber={25} chapterTitle="Bônus">
          <div className="space-y-12">
            <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Bônus 01 <br/>
              <span className="text-emerald-600">Reuniões Online</span>
            </h2>

            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Reuniões virtuais exigem atenção especial aos detalhes que o presencial perdoa.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 my-10">
              {[
                "Olhe para a câmera ao falar (não para a tela)",
                "Mantenha uma postura ereta e presença visível",
                "Fale de forma clara e ligeiramente mais pausada",
                "Certifique-se de que sua iluminação é frontal"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <Video className="w-6 h-6 text-emerald-600 shrink-0" />
                  <p className="font-bold text-zinc-800 text-lg">{item}</p>
                </div>
              ))}
            </div>

            <div className="p-10 bg-zinc-950 text-white rounded-[3rem] space-y-6">
              <h4 className="text-emerald-500 font-black uppercase text-xs tracking-widest">Checklist antes de falar</h4>
              <ul className="space-y-3 font-bold text-zinc-300">
                <li>✔ Qual é minha ideia principal?</li>
                <li>✔ Qual exemplo posso usar?</li>
                <li>✔ Qual conclusão quero transmitir?</li>
              </ul>
            </div>
          </div>
        </Page>

        {/* PAGE 26: BÔNUS - PROTOCOLO ANTI-BRANCO */}
        <Page pageNumber={26} chapterTitle="Bônus">
          <div className="space-y-12">
            <h2 className="text-6xl font-black uppercase tracking-tighter leading-[0.9]">
              Bônus 02 <br/>
              <span className="text-emerald-600">Protocolo Anti-Branco</span>
            </h2>

            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                O "branco" mental acontece quando o estresse bloqueia o acesso à memória. Se isso acontecer, siga este protocolo de emergência:
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 my-10">
              {[
                { t: "Respire", d: "Dê ao seu cérebro o oxigênio necessário." },
                { t: "Repita", d: "Repita a última ideia que você disse." },
                { t: "Reformule", d: "Diga: 'Deixa eu explicar isso de outra forma'." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500 text-zinc-950 rounded-full mx-auto flex items-center justify-center font-black">
                    {i+1}
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tighter">{item.t}</h4>
                  <p className="text-sm opacity-60">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="p-12 bg-emerald-600 rounded-[3rem] text-white text-center shadow-xl">
              <p className="text-2xl font-black italic">"O segredo é não entrar em pânico. O silêncio para o ouvinte parece reflexão, não esquecimento."</p>
            </div>
          </div>
        </Page>

        {/* PAGE 27: NEURO-CONEXÃO - ESTUDO DE CASO 01 */}
        <Page pageNumber={27} chapterTitle="Neuro-Conexão">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Estudo de Caso: O Networking de Alto Nível</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Imagine que você está em um evento de negócios. Você vê um potencial parceiro ou investidor. A maioria das pessoas comete o erro de "vomitar" informações sobre si mesmas.
              </p>
              <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-4">
                <p className="font-bold text-zinc-900">A Abordagem do Método:</p>
                <p>1. **Observação de Micro-Sinais:** Antes de falar, note a energia da pessoa. Ela está com pressa? Está relaxada?</p>
                <p>2. **O Gancho de Curiosidade:** Em vez de "Oi, eu sou o João", use "Eu vi que você comentou sobre X na palestra, achei um ponto de vista único".</p>
              </div>
              <p>
                Ao focar na pessoa e mostrar que você a observou, você ativa os **Neurônios Espelho**, criando uma sensação imediata de "nós" em vez de "eu vs você".
              </p>
            </div>
          </div>
        </Page>

        {/* PAGE 28: NEURO-CONEXÃO - O PODER DO SILÊNCIO */}
        <Page pageNumber={28} chapterTitle="Neuro-Conexão">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">O Poder do Silêncio Estratégico</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                O silêncio não é ausência de comunicação. É uma ferramenta de controle de atenção. Quando você faz uma pergunta e silencia, você obriga o cérebro do outro a trabalhar.
              </p>
              <div className="grid grid-cols-2 gap-8 my-10">
                <div className="p-10 bg-zinc-950 text-white rounded-[3rem] space-y-4">
                  <h4 className="text-emerald-500 font-black uppercase text-xs tracking-widest">A Pausa de Autoridade</h4>
                  <p className="text-lg">Faça uma afirmação forte e pare por 3 segundos. Isso permite que a ideia "assente" na mente do ouvinte.</p>
                </div>
                <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-4">
                  <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">A Pausa de Escuta</h4>
                  <p className="text-lg text-zinc-500">Após o outro falar, espere 2 segundos antes de responder. Isso mostra que você processou o que foi dito.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 29: ARQUITETURA DA FALA - STORYTELLING FRAMEWORK */}
        <Page pageNumber={29} chapterTitle="Arquitetura da Fala">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Storytelling: O Framework da Jornada</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Histórias são a forma mais antiga de transmitir conhecimento. O cérebro humano é programado para seguir narrativas. Use este mini-framework para contar histórias rápidas:
              </p>
              <div className="space-y-4">
                {[
                  { t: "O Status Quo", d: "Como as coisas eram antes." },
                  { t: "O Incidente", d: "O que mudou ou o problema que surgiu." },
                  { t: "A Luta", d: "O esforço para resolver." },
                  { t: "A Resolução", d: "O resultado final e o aprendizado." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <div className="w-10 h-10 bg-zinc-900 text-emerald-500 rounded-full flex items-center justify-center font-black shrink-0">{i+1}</div>
                    <div>
                      <h4 className="font-black text-zinc-900 uppercase text-sm tracking-widest">{item.t}</h4>
                      <p className="text-zinc-500 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 30: ARQUITETURA DA FALA - HANDLING OBJECTIONS */}
        <Page pageNumber={30} chapterTitle="Arquitetura da Fala">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Lidando com Objeções em Tempo Real</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Quando alguém te interrompe ou questiona, sua arquitetura mental não pode desmoronar. Use o método **A.R.C.** (Acknowledge, Respond, Connect):
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-2">
                  <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">1. Acknowledge (Reconhecer)</h4>
                  <p className="text-lg text-zinc-500">"Essa é uma excelente pergunta e faz todo sentido você pensar nisso."</p>
                </div>
                <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-2">
                  <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">2. Respond (Responder)</h4>
                  <p className="text-lg text-zinc-500">Dê a resposta técnica ou lógica de forma curta.</p>
                </div>
                <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-2">
                  <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">3. Connect (Conectar)</h4>
                  <p className="text-lg text-zinc-500">"Isso responde sua dúvida ou você gostaria de aprofundar em outro ponto?"</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 31: DOMÍNIO DO MEDO - A ESCADA DE EXPOSIÇÃO */}
        <Page pageNumber={31} chapterTitle="Domínio do Medo">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">A Escada de Exposição</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                O medo diminui com a exposição controlada. Não tente dar uma palestra para 1000 pessoas amanhã. Comece pequeno.
              </p>
              <div className="relative p-12 bg-zinc-950 text-white rounded-[4rem] overflow-hidden">
                <BarChart3 className="absolute top-0 right-0 p-12 opacity-10 w-64 h-64" />
                <div className="space-y-6 relative z-10">
                  <p className="text-emerald-500 font-black uppercase text-xs tracking-widest">Plano de 4 Semanas</p>
                  <div className="space-y-4">
                    <p>Semana 1: Falar em voz alta sozinho por 5 min/dia.</p>
                    <p>Semana 2: Fazer uma pergunta em uma reunião de equipe.</p>
                    <p>Semana 3: Puxar assunto com um desconhecido (ex: caixa do mercado).</p>
                    <p>Semana 4: Liderar uma pequena apresentação para 3-5 pessoas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 32: VOZ DE AUTORIDADE - SAÚDE VOCAL */}
        <Page pageNumber={32} chapterTitle="Voz de Autoridade">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Saúde e Aquecimento Vocal</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Sua voz é um instrumento físico. Se as cordas vocais estiverem tensas, sua autoridade será prejudicada por uma voz "fina" ou trêmula.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-4">
                  <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">Aquecimento Rápido</h4>
                  <p className="text-lg text-zinc-500">Faça o som de "Brrrrr" (vibração de lábios) por 30 segundos. Isso relaxa a musculatura da face.</p>
                </div>
                <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-4">
                  <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">Hidratação</h4>
                  <p className="text-lg text-zinc-500">Beba água em temperatura ambiente. Evite gelados ou café em excesso antes de falas longas.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 33: LINGUAGEM INVISÍVEL - PROXÊMICA */}
        <Page pageNumber={33} chapterTitle="Linguagem Invisível">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Proxêmica: O Uso do Espaço</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                A distância física entre você e o ouvinte comunica o nível de intimidade e autoridade.
              </p>
              <div className="space-y-6">
                <div className="flex gap-8 items-center">
                  <div className="w-24 h-24 rounded-full bg-zinc-100 flex items-center justify-center font-black text-zinc-400 shrink-0">1.2m+</div>
                  <div>
                    <h4 className="font-black text-zinc-900 uppercase text-sm tracking-widest">Zona Pública</h4>
                    <p className="text-zinc-500">Ideal para apresentações formais. Transmite respeito e autoridade profissional.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-center">
                  <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center font-black text-emerald-600 shrink-0">0.5m-1.2m</div>
                  <div>
                    <h4 className="font-black text-zinc-900 uppercase text-sm tracking-widest">Zona Social</h4>
                    <p className="text-zinc-500">Ideal para networking e conversas de corredor. Cria conexão sem invadir o espaço pessoal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 34: PERSUASÃO ÉTICA - A ESCADA DO SIM */}
        <Page pageNumber={34} chapterTitle="Persuasão Ética">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">A Escada do Sim (Yes-Ladder)</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                É muito mais difícil alguém dizer "sim" para um grande pedido se não tiver dito "sim" para pequenos pedidos antes.
              </p>
              <div className="p-12 bg-emerald-600 rounded-[3rem] text-white space-y-6 shadow-xl">
                <p className="text-2xl font-black italic">"Consiga 3 pequenos 'sim' antes de fazer sua proposta principal."</p>
                <div className="space-y-2 opacity-80">
                  <p>1. "Você concorda que esse problema é importante?" (Sim)</p>
                  <p>2. "Você gostaria de resolver isso de forma rápida?" (Sim)</p>
                  <p>3. "Faz sentido a gente olhar para uma solução nova?" (Sim)</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 35: PERSUASÃO ÉTICA - O PODER DO "PORQUÊ" */}
        <Page pageNumber={35} chapterTitle="Persuasão Ética">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">O Poder do "Porque"</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Estudos mostram que as pessoas são muito mais propensas a aceitar um pedido se você fornecer uma razão, mesmo que seja óbvia.
              </p>
              <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 text-center">
                <p className="text-3xl font-black text-zinc-900 leading-tight">
                  "Sempre anexe um motivo à sua solicitação."
                </p>
              </div>
              <p className="italic text-zinc-500 text-center">
                "Preciso que você revise isso **porque** queremos garantir que não haja erros antes do envio."
              </p>
            </div>
          </div>
        </Page>

        {/* PAGE 36: BÔNUS - COMUNICAÇÃO EM CONFLITOS */}
        <Page pageNumber={36} chapterTitle="Bônus">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Comunicação em Situações de Conflito</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Em um conflito, a emoção tende a assumir o controle. Use a técnica **S.T.O.P.** para manter a autoridade:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-zinc-950 text-white rounded-2xl">
                  <p className="font-black text-emerald-500">S - Silencie</p>
                  <p className="text-sm opacity-60">Não responda imediatamente.</p>
                </div>
                <div className="p-6 bg-zinc-950 text-white rounded-2xl">
                  <p className="font-black text-emerald-500">T - Tome Ar</p>
                  <p className="text-sm opacity-60">Respire fundo uma vez.</p>
                </div>
                <div className="p-6 bg-zinc-950 text-white rounded-2xl">
                  <p className="font-black text-emerald-500">O - Observe</p>
                  <p className="text-sm opacity-60">Note o que você está sentindo.</p>
                </div>
                <div className="p-6 bg-zinc-950 text-white rounded-2xl">
                  <p className="font-black text-emerald-500">P - Prossiga</p>
                  <p className="text-sm opacity-60">Responda com foco na solução.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 37: BÔNUS - O PODER DAS PERGUNTAS */}
        <Page pageNumber={37} chapterTitle="Bônus">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">O Poder das Perguntas Abertas</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Quem pergunta, lidera a conversa. Perguntas abertas (que não podem ser respondidas com sim ou não) forçam o outro a se abrir.
              </p>
              <div className="space-y-4">
                <p className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 font-bold">"Como você visualiza esse projeto daqui a 6 meses?"</p>
                <p className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 font-bold">"O que mais te preocupa nessa situação hoje?"</p>
                <p className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 font-bold">"Qual seria o cenário ideal para você?"</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 38: CAPÍTULO 7 - COVER (NEW CONTENT) */}
        <ChapterCover 
          number="07" 
          title="Mentalidade de Mestre" 
          subtitle="A psicologia interna que sustenta a comunicação externa."
          pageNumber={38}
        />

        {/* PAGE 39: MENTALIDADE - O CRÍTICO INTERNO */}
        <Page pageNumber={39} chapterTitle="Mentalidade">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Silenciando o Crítico Interno</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Sua maior barreira não é o público, é a voz na sua cabeça dizendo que você vai falhar.
              </p>
              <div className="p-12 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-6">
                <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">Reframing (Ressignificação)</h4>
                <p className="text-xl italic">Em vez de "Eu estou nervoso", diga "Eu estou entusiasmado". Fisicamente, as sensações são quase idênticas. A diferença é o rótulo que você dá.</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 40: MENTALIDADE - A LEI DA INTENÇÃO */}
        <Page pageNumber={40} chapterTitle="Mentalidade">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">A Lei da Intenção Pura</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Quando seu foco está em "como eu pareço", você fica ansioso. Quando seu foco está em "como eu posso ajudar", você fica confiante.
              </p>
              <div className="p-12 bg-emerald-600 rounded-[3rem] text-white text-center shadow-xl">
                <p className="text-3xl font-black italic">"Tire o foco de você e coloque no valor que você está entregando."</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 41: WORK SHEET FINAL - PLANO DE AÇÃO */}
        <Page pageNumber={41} chapterTitle="Plano de Ação">
          <div className="h-full flex flex-col space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Seu Plano de 30 Dias</h3>
            <div className="flex-1 border-2 border-dashed border-zinc-200 rounded-[3rem] p-12 space-y-8">
              <div className="space-y-4">
                <p className="font-black text-zinc-900">Dias 1-10: Foco em Neuro-Conexão</p>
                <div className="h-12 border-b border-zinc-100" />
              </div>
              <div className="space-y-4">
                <p className="font-black text-zinc-900">Dias 11-20: Foco em Arquitetura e Voz</p>
                <div className="h-12 border-b border-zinc-100" />
              </div>
              <div className="space-y-4">
                <p className="font-black text-zinc-900">Dias 21-30: Foco em Persuasão e Presença</p>
                <div className="h-12 border-b border-zinc-100" />
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 42: VOZ DE AUTORIDADE - VARIEDADE VOCAL */}
        <Page pageNumber={42} chapterTitle="Voz de Autoridade">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Variedade Vocal: O Fim da Monotonia</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Uma voz monótona é o caminho mais rápido para o desinteresse do ouvinte. Para manter a atenção, você deve variar três elementos:
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <h4 className="font-black text-zinc-900 uppercase text-sm tracking-widest">1. Pitch (Frequência)</h4>
                  <p className="text-zinc-500">Alterne entre tons mais graves para autoridade e tons levemente mais agudos para entusiasmo.</p>
                </div>
                <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <h4 className="font-black text-zinc-900 uppercase text-sm tracking-widest">2. Pace (Velocidade)</h4>
                  <p className="text-zinc-500">Acelere para transmitir energia e urgência. Desacelere para enfatizar pontos cruciais.</p>
                </div>
                <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <h4 className="font-black text-zinc-900 uppercase text-sm tracking-widest">3. Volume (Intensidade)</h4>
                  <p className="text-zinc-500">Fale um pouco mais alto para chamar a atenção. Fale mais baixo (quase um sussurro) para criar intimidade.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 43: VOZ DE AUTORIDADE - ARTICULAÇÃO */}
        <Page pageNumber={43} chapterTitle="Voz de Autoridade">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Articulação e Dicção</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Se as pessoas pedem para você repetir o que disse, você tem um problema de articulação. Articular bem significa dar forma a cada sílaba.
              </p>
              <div className="p-12 bg-zinc-950 text-white rounded-[3rem] space-y-6">
                <h4 className="text-emerald-500 font-black uppercase text-xs tracking-widest">O Exercício da Caneta</h4>
                <p className="text-xl italic">Coloque uma caneta (limpa) entre os dentes e leia um parágrafo em voz alta. Force a musculatura para ser entendido. Ao tirar a caneta, sua dicção estará instantaneamente mais clara.</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 44: LINGUAGEM INVISÍVEL - A REGRA 7-38-55 */}
        <Page pageNumber={44} chapterTitle="Linguagem Invisível">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">A Regra 7-38-55 de Mehrabian</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Em comunicações sobre sentimentos e atitudes, o impacto da sua mensagem é dividido assim:
              </p>
              <div className="flex flex-col gap-4 my-10">
                <div className="flex items-center gap-4">
                  <div className="w-20 font-black text-emerald-600 text-4xl">55%</div>
                  <div className="flex-1 h-8 bg-emerald-500 rounded-full" />
                  <span className="font-black uppercase text-xs tracking-widest">Linguagem Corporal</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 font-black text-zinc-400 text-4xl">38%</div>
                  <div className="w-[38%] h-8 bg-zinc-400 rounded-full" />
                  <span className="font-black uppercase text-xs tracking-widest">Tom de Voz</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 font-black text-zinc-200 text-4xl">07%</div>
                  <div className="w-[7%] h-8 bg-zinc-200 rounded-full" />
                  <span className="font-black uppercase text-xs tracking-widest">Palavras</span>
                </div>
              </div>
              <p className="text-sm italic text-zinc-400">Nota: Isso não significa que as palavras não importam, mas sim que se houver incongruência, o ouvinte acreditará no corpo e na voz.</p>
            </div>
          </div>
        </Page>

        {/* PAGE 45: LINGUAGEM INVISÍVEL - GESTOS DE PODER */}
        <Page pageNumber={45} chapterTitle="Linguagem Invisível">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Gestos de Poder e Confiança</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Suas mãos são extensões do seu pensamento. Use-as para ilustrar sua fala:
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-4">
                  <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">Palmas Abertas</h4>
                  <p className="text-lg text-zinc-500">Transmite honestidade e transparência. Mostra que você não tem nada a esconder.</p>
                </div>
                <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-4">
                  <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">O "Telhado" (Steeple)</h4>
                  <p className="text-lg text-zinc-500">Unir as pontas dos dedos em forma de telhado transmite extrema confiança e domínio do assunto.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 46: PERSUASÃO ÉTICA - PROVA SOCIAL */}
        <Page pageNumber={46} chapterTitle="Persuasão Ética">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">O Gatilho da Prova Social</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Nós tendemos a seguir o comportamento da maioria. Se você quer convencer alguém, mostre que outros já tomaram essa decisão.
              </p>
              <div className="p-12 bg-zinc-950 text-white rounded-[3rem] space-y-6">
                <Users className="w-12 h-12 text-emerald-500" />
                <p className="text-2xl font-black italic">"Mais de 500 alunos já aplicaram esse método com sucesso."</p>
                <p className="text-zinc-400">Ao citar números ou depoimentos, você reduz a percepção de risco do seu ouvinte.</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 47: PERSUASÃO ÉTICA - RECIPROCIDADE */}
        <Page pageNumber={47} chapterTitle="Persuasão Ética">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">A Lei da Reciprocidade</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Nós nos sentimos compelidos a retribuir favores. Na comunicação, isso significa entregar valor antes de pedir algo.
              </p>
              <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 space-y-4">
                <h4 className="text-emerald-800 font-black uppercase text-xs tracking-widest">Como aplicar:</h4>
                <p className="text-xl text-emerald-900 font-bold">Dê um elogio sincero, compartilhe uma informação útil ou ofereça ajuda genuína antes de fazer sua proposta.</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 48: BÔNUS - FALANDO EM PALCO */}
        <Page pageNumber={48} chapterTitle="Bônus">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Dominando o Palco</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                Se você precisar falar em um palco físico, o uso do espaço é crucial. Divida o palco em três áreas:
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <p className="font-black text-zinc-900">Centro</p>
                  <p className="text-xs text-zinc-400">Mensagens principais e conclusões.</p>
                </div>
                <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <p className="font-black text-zinc-900">Esquerda</p>
                  <p className="text-xs text-zinc-400">Histórias do passado ou problemas.</p>
                </div>
                <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <p className="font-black text-zinc-900">Direita</p>
                  <p className="text-xs text-zinc-400">Visão de futuro e soluções.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 49: BÔNUS - HANDLING Q&A */}
        <Page pageNumber={49} chapterTitle="Bônus">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Sessão de Perguntas e Respostas</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                O Q&A é onde sua autoridade é realmente testada. Nunca termine sua fala com uma pergunta. Termine com sua conclusão após a última pergunta.
              </p>
              <div className="p-10 bg-zinc-900 text-white rounded-[3rem] space-y-4">
                <h4 className="text-emerald-500 font-black uppercase text-xs tracking-widest">Dica Pro</h4>
                <p className="text-xl">"Sempre repita a pergunta para o público antes de responder. Isso garante que todos ouviram e te dá 5 segundos extras para pensar."</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 50: INSPIRATIONAL QUOTE */}
        <Page pageNumber={50} chapterTitle="Reflexão" className="bg-zinc-50 justify-center items-center text-center">
          <div className="max-w-xl space-y-12">
            <Quote className="w-16 h-16 text-emerald-600 mx-auto opacity-20" />
            <p className="text-4xl font-serif italic text-zinc-900 leading-tight">
              "A comunicação não é o que você diz, mas o que o outro compreende."
            </p>
            <div className="h-1 w-12 bg-emerald-500 mx-auto" />
            <p className="text-xs font-black uppercase tracking-widest text-zinc-400">Princípio Fundamental do Método</p>
          </div>
        </Page>

        {/* PAGE 51: WORKSHEET - NEURO-CONEXÃO */}
        <Page pageNumber={51} chapterTitle="Worksheets">
          <div className="h-full flex flex-col space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Worksheet 01: Auditoria de Conexão</h3>
            <div className="flex-1 border-2 border-dashed border-zinc-200 rounded-[3rem] p-12 space-y-10">
              <div className="space-y-4">
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">1. Qual é o seu maior desafio ao iniciar uma conversa?</p>
                <div className="h-20 border-b border-zinc-100" />
              </div>
              <div className="space-y-4">
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">2. Liste 3 pessoas que você admira pela comunicação e por quê:</p>
                <div className="h-32 border-b border-zinc-100" />
              </div>
              <div className="space-y-4">
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">3. Descreva uma situação onde você sentiu conexão imediata com alguém:</p>
                <div className="h-32 border-b border-zinc-100" />
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 52: WORKSHEET - ARQUITETURA DA FALA */}
        <Page pageNumber={52} chapterTitle="Worksheets">
          <div className="h-full flex flex-col space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Worksheet 02: Estruturando sua Ideia</h3>
            <div className="flex-1 border-2 border-dashed border-zinc-200 rounded-[3rem] p-12 space-y-8">
              <div className="space-y-2">
                <p className="font-black text-zinc-900 uppercase text-[10px] tracking-widest">Abertura (O Gancho)</p>
                <div className="h-12 border-b border-zinc-100" />
              </div>
              <div className="space-y-2">
                <p className="font-black text-zinc-900 uppercase text-[10px] tracking-widest">Contexto (O Porquê)</p>
                <div className="h-12 border-b border-zinc-100" />
              </div>
              <div className="space-y-2">
                <p className="font-black text-zinc-900 uppercase text-[10px] tracking-widest">Ideia Central (O Oquê)</p>
                <div className="h-12 border-b border-zinc-100" />
              </div>
              <div className="space-y-2">
                <p className="font-black text-zinc-900 uppercase text-[10px] tracking-widest">Exemplo (A Prova)</p>
                <div className="h-12 border-b border-zinc-100" />
              </div>
              <div className="space-y-2">
                <p className="font-black text-zinc-900 uppercase text-[10px] tracking-widest">Conclusão (O Chamado)</p>
                <div className="h-12 border-b border-zinc-100" />
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 53: PITFALLS - NEURO-CONEXÃO */}
        <Page pageNumber={53} chapterTitle="Erros Comuns">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Armadilhas da Conexão</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-10 bg-red-50 rounded-[3rem] border border-red-100 space-y-4">
                <h4 className="text-red-900 font-black uppercase text-xs tracking-widest">Erro 01: O Monólogo Narcisista</h4>
                <p className="text-red-800">Falar apenas de si mesmo e de suas conquistas. Isso destrói a conexão porque o cérebro do outro para de ver relevância.</p>
              </div>
              <div className="p-10 bg-red-50 rounded-[3rem] border border-red-100 space-y-4">
                <h4 className="text-red-900 font-black uppercase text-xs tracking-widest">Erro 02: Espelhamento Óbvio</h4>
                <p className="text-red-800">Imitar gestos de forma mecânica. Se for percebido, você será visto como manipulador ou estranho.</p>
              </div>
              <div className="p-10 bg-red-50 rounded-[3rem] border border-red-100 space-y-4">
                <h4 className="text-red-900 font-black uppercase text-xs tracking-widest">Erro 03: Falta de Contato Visual</h4>
                <p className="text-red-800">Olhar para o chão ou para o celular comunica desinteresse ou falta de confiança.</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 54: PITFALLS - ARQUITETURA DA FALA */}
        <Page pageNumber={54} chapterTitle="Erros Comuns">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Armadilhas da Estrutura</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-10 bg-red-50 rounded-[3rem] border border-red-100 space-y-4">
                <h4 className="text-red-900 font-black uppercase text-xs tracking-widest">Erro 01: O Labirinto de Detalhes</h4>
                <p className="text-red-800">Dar detalhes técnicos demais antes de explicar a ideia central. O ouvinte se perde e desiste de entender.</p>
              </div>
              <div className="p-10 bg-red-50 rounded-[3rem] border border-red-100 space-y-4">
                <h4 className="text-red-900 font-black uppercase text-xs tracking-widest">Erro 02: Conclusão sem Ação</h4>
                <p className="text-red-800">Terminar uma fala sem dizer claramente o que você espera que as pessoas façam a seguir.</p>
              </div>
              <div className="p-10 bg-red-50 rounded-[3rem] border border-red-100 space-y-4">
                <h4 className="text-red-900 font-black uppercase text-xs tracking-widest">Erro 03: Ignorar o Contexto</h4>
                <p className="text-red-800">Falar sobre algo sem explicar por que aquilo é importante para quem está ouvindo.</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 55: EXPERT TIPS - VOZ E CORPO */}
        <Page pageNumber={55} chapterTitle="Dicas de Especialista">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Segredos da Performance</h3>
            <div className="space-y-8">
              <div className="p-12 bg-zinc-950 text-white rounded-[3rem] space-y-6">
                <Lightbulb className="w-12 h-12 text-emerald-500" />
                <h4 className="text-2xl font-black uppercase tracking-tighter">A Regra do "Power Posing"</h4>
                <p className="text-zinc-400 leading-relaxed">Ficar em uma posição de poder (como a Mulher Maravilha) por 2 minutos antes de uma fala aumenta a testosterona e reduz o cortisol no sangue.</p>
              </div>
              <div className="p-12 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-6">
                <Mic2 className="w-12 h-12 text-emerald-600" />
                <h4 className="text-2xl font-black uppercase tracking-tighter">O Sorriso na Voz</h4>
                <p className="text-zinc-600 leading-relaxed">Sorrir levemente enquanto fala (mesmo ao telefone) altera a forma da sua boca e torna o tom de voz mais amigável e confiável.</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 56: GLOSSÁRIO DE TERMOS */}
        <Page pageNumber={56} chapterTitle="Recursos">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Glossário de Comunicação</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Rapport</p>
                <p className="text-sm text-zinc-500">Técnica de criar uma ligação de sintonia e confiança com outra pessoa.</p>
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Amígdala</p>
                <p className="text-sm text-zinc-500">Parte do cérebro responsável pelo processamento de reações emocionais, como o medo.</p>
              </div>
              <div className="space-y-4">
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Dicção</p>
                <p className="text-sm text-zinc-500">A maneira como as palavras são articuladas e pronunciadas.</p>
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Proxêmica</p>
                <p className="text-sm text-zinc-500">O estudo do uso do espaço físico na comunicação interpessoal.</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 57: TRANSITION TO DIGITAL */}
        <Page pageNumber={57} chapterTitle="Transição" className="bg-emerald-600 text-white justify-center items-center text-center">
          <div className="max-w-xl space-y-12">
            <Video className="w-20 h-20 text-white mx-auto" />
            <h2 className="text-5xl font-black uppercase tracking-tighter">A Nova Fronteira</h2>
            <p className="text-2xl font-medium text-emerald-100">Como adaptar o Método Falar Bem para o mundo digital e as telas.</p>
            <div className="h-1.5 w-24 bg-white mx-auto rounded-full" />
          </div>
        </Page>

        {/* PAGE 58: DIGITAL COMMUNICATION - VIDEO CALLS */}
        <Page pageNumber={58} chapterTitle="Comunicação Digital">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Domínio em Chamadas de Vídeo</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                No mundo digital, sua "presença" é limitada por uma moldura. Para projetar autoridade no Zoom ou Teams:
              </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <h4 className="font-black text-zinc-900 uppercase text-sm tracking-widest">1. Olhe para a Câmera, não para a Tela</h4>
                  <p className="text-zinc-500">O contato visual digital acontece quando você olha para o pequeno ponto da câmera. Isso cria a sensação de que você está olhando nos olhos do outro.</p>
                </div>
                <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <h4 className="font-black text-zinc-900 uppercase text-sm tracking-widest">2. Iluminação Frontal</h4>
                  <p className="text-zinc-500">Nunca fique de costas para uma janela. A luz deve vir de frente para que seu rosto seja visto com clareza.</p>
                </div>
                <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <h4 className="font-black text-zinc-900 uppercase text-sm tracking-widest">3. Enquadramento</h4>
                  <p className="text-zinc-500">Deixe um pequeno espaço acima da cabeça. Suas mãos devem aparecer ocasionalmente para transmitir confiança.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 59: DIGITAL COMMUNICATION - MESSAGING */}
        <Page pageNumber={59} chapterTitle="Comunicação Digital">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Mensagens Profissionais (WhatsApp/Slack)</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>
                A brevidade é a alma da inteligência digital. Evite o "Oi, tudo bem?" sem a mensagem em seguida.
              </p>
              <div className="p-12 bg-zinc-950 text-white rounded-[3rem] space-y-6">
                <h4 className="text-emerald-500 font-black uppercase text-xs tracking-widest">O Protocolo da Mensagem Única</h4>
                <p className="text-xl italic">"Olá [Nome], tudo bem? Estou te escrevendo para [Assunto]. Gostaria de saber [Pergunta/Ação]. Aguardo seu retorno."</p>
                <p className="text-zinc-400 text-sm">Isso respeita o tempo do outro e evita notificações desnecessárias.</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 60: 30-DAY ACTION PLAN - WEEK 1 */}
        <Page pageNumber={60} chapterTitle="Plano de Ação">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Semana 01: Consciência e Base</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>Seu objetivo nesta semana é observar e ajustar o básico.</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black shrink-0">01</div>
                  <p className="text-lg text-zinc-600"><span className="font-black text-zinc-900">Dias 1-3:</span> Foque no contato visual. Tente manter por 1 segundo a mais do que o habitual.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black shrink-0">02</div>
                  <p className="text-lg text-zinc-600"><span className="font-black text-zinc-900">Dias 4-7:</span> Elimine vícios de linguagem (né, tipo, então). Substitua por silêncio.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 61: 30-DAY ACTION PLAN - WEEK 2 */}
        <Page pageNumber={61} chapterTitle="Plano de Ação">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Semana 02: Estrutura e Clareza</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>Agora vamos focar em como você organiza o que diz.</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black shrink-0">03</div>
                  <p className="text-lg text-zinc-600"><span className="font-black text-zinc-900">Dias 8-10:</span> Use o Framework de 5 Etapas em todas as reuniões ou conversas importantes.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black shrink-0">04</div>
                  <p className="text-lg text-zinc-600"><span className="font-black text-zinc-900">Dias 11-14:</span> Pratique o Storytelling. Conte uma pequena história por dia para alguém.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 62: ADVANCED CASE STUDY - NEGOTIATION */}
        <Page pageNumber={62} chapterTitle="Estudos de Caso">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Caso: Negociação de Aumento</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>Como usar o Método Falar Bem para pedir um aumento:</p>
              <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-4">
                <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">A Estratégia</h4>
                <p className="text-lg text-zinc-500">1. Comece com a <span className="text-zinc-900 font-bold">Escada do Sim</span>: "Você concorda que meus resultados no último trimestre superaram as metas?"</p>
                <p className="text-lg text-zinc-500">2. Use <span className="text-zinc-900 font-bold">Dados e Provas</span>: "Entreguei X, Y e Z, gerando um retorno de R$ [Valor]."</p>
                <p className="text-lg text-zinc-500">3. Faça o <span className="text-zinc-900 font-bold">Pedido Direto</span>: "Com base nisso, gostaria de reajustar meu salário para [Valor]."</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 63: ADVANCED CASE STUDY - CONFLICT */}
        <Page pageNumber={63} chapterTitle="Estudos de Caso">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Caso: Feedback Difícil</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>Como dar um feedback negativo sem destruir o relacionamento:</p>
              <div className="p-10 bg-zinc-950 text-white rounded-[3rem] space-y-4">
                <h4 className="text-emerald-500 font-black uppercase text-xs tracking-widest">O Método Sanduíche 2.0</h4>
                <p className="text-lg text-zinc-400">1. <span className="text-white font-bold">Fato:</span> "Eu observei que o relatório foi entregue com 2 dias de atraso." (Sem julgamento)</p>
                <p className="text-lg text-zinc-400">2. <span className="text-white font-bold">Impacto:</span> "Isso causou um atraso na aprovação do cliente final."</p>
                <p className="text-lg text-zinc-400">3. <span className="text-white font-bold">Futuro:</span> "Como podemos garantir que isso não aconteça na próxima semana?"</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 64: RECOMMENDED READING */}
        <Page pageNumber={64} chapterTitle="Recursos">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Leituras Recomendadas</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-6 items-center p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <BookOpen className="w-10 h-10 text-emerald-600" />
                <div>
                  <p className="font-black text-zinc-900">Como Fazer Amigos e Influenciar Pessoas</p>
                  <p className="text-sm text-zinc-500">Dale Carnegie</p>
                </div>
              </div>
              <div className="flex gap-6 items-center p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <BookOpen className="w-10 h-10 text-emerald-600" />
                <div>
                  <p className="font-black text-zinc-900">As Armas da Persuasão</p>
                  <p className="text-sm text-zinc-500">Robert Cialdini</p>
                </div>
              </div>
              <div className="flex gap-6 items-center p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <BookOpen className="w-10 h-10 text-emerald-600" />
                <div>
                  <p className="font-black text-zinc-900">Ted Talks: O Guia Oficial do TED para Falar em Público</p>
                  <p className="text-sm text-zinc-500">Chris Anderson</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 65: TRANSITION TO ACTION PLAN */}
        <Page pageNumber={65} chapterTitle="Transição" className="bg-zinc-900 text-white justify-center items-center text-center">
          <div className="max-w-xl space-y-12">
            <Clock className="w-20 h-20 text-emerald-500 mx-auto" />
            <h2 className="text-5xl font-black uppercase tracking-tighter">O Próximo Passo</h2>
            <p className="text-2xl font-medium text-zinc-400">Seu plano de 30 dias para transformar conhecimento em maestria.</p>
            <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full" />
          </div>
        </Page>

        {/* PAGE 66: 30-DAY ACTION PLAN - WEEK 3 */}
        <Page pageNumber={66} chapterTitle="Plano de Ação">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Semana 03: Persuasão e Influência</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>Nesta semana, você começará a usar gatilhos mentais de forma consciente.</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black shrink-0">05</div>
                  <p className="text-lg text-zinc-600"><span className="font-black text-zinc-900">Dias 15-17:</span> Pratique a Reciprocidade. Faça algo útil por alguém antes de pedir um favor.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black shrink-0">06</div>
                  <p className="text-lg text-zinc-600"><span className="font-black text-zinc-900">Dias 18-21:</span> Use a Escada do Sim em uma negociação ou conversa de vendas.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 67: 30-DAY ACTION PLAN - WEEK 4 */}
        <Page pageNumber={67} chapterTitle="Plano de Ação">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Semana 04: Maestria e Refinamento</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>A semana final é para consolidar tudo o que você aprendeu.</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black shrink-0">07</div>
                  <p className="text-lg text-zinc-600"><span className="font-black text-zinc-900">Dias 22-25:</span> Grave-se falando por 2 minutos e analise sua voz e corpo usando os checklists deste eBook.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black shrink-0">08</div>
                  <p className="text-lg text-zinc-600"><span className="font-black text-zinc-900">Dias 26-30:</span> Desafio Final: Faça uma apresentação ou conduza uma reunião importante usando todas as técnicas.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 68: COMMUNICATION FOR LEADERSHIP - DELEGATION */}
        <Page pageNumber={68} chapterTitle="Liderança">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Delegando com Clareza</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>Líderes que não se comunicam bem acabam fazendo o trabalho de todos. Para delegar com sucesso:</p>
              <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-4">
                <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">O Protocolo de Delegação</h4>
                <p className="text-lg text-zinc-500">1. <span className="text-zinc-900 font-bold">O Quê:</span> Defina o resultado esperado, não apenas a tarefa.</p>
                <p className="text-lg text-zinc-500">2. <span className="text-zinc-900 font-bold">Por Quê:</span> Explique a importância daquela tarefa para o objetivo maior.</p>
                <p className="text-lg text-zinc-500">3. <span className="text-zinc-900 font-bold">Quando:</span> Estabeleça um prazo claro e inegociável.</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 69: PUBLIC SPEAKING FOR INTROVERTS */}
        <Page pageNumber={69} chapterTitle="Introvertidos">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">O Poder do Orador Introvertido</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>Você não precisa ser um extrovertido para ser um grande orador. Introvertidos têm vantagens únicas:</p>
              <div className="grid grid-cols-1 gap-6">
                <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <h4 className="font-black text-emerald-900 uppercase text-sm tracking-widest">1. Preparação Profunda</h4>
                  <p className="text-emerald-800">Introvertidos tendem a se preparar mais, o que gera conteúdos mais densos e valiosos.</p>
                </div>
                <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <h4 className="font-black text-emerald-900 uppercase text-sm tracking-widest">2. Escuta Ativa</h4>
                  <p className="text-emerald-800">A capacidade de ouvir permite que o introvertido responda de forma muito mais precisa às necessidades do público.</p>
                </div>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 70: TRANSITION TO LEADERSHIP */}
        <Page pageNumber={70} chapterTitle="Transição" className="bg-zinc-100 justify-center items-center text-center">
          <div className="max-w-xl space-y-12">
            <Users className="w-20 h-20 text-emerald-600 mx-auto" />
            <h2 className="text-5xl font-black uppercase tracking-tighter text-zinc-900">Liderança e Impacto</h2>
            <p className="text-2xl font-medium text-zinc-500">Como usar sua voz para guiar, inspirar e liderar equipes de alta performance.</p>
            <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full" />
          </div>
        </Page>

        {/* PAGE 71: MEETING SURVIVAL GUIDE - INTERRUPTING */}
        <Page pageNumber={71} chapterTitle="Reuniões">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Como Interromper com Elegância</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>Em reuniões dinâmicas, se você esperar o silêncio total, talvez nunca fale. Aprenda a entrar na conversa:</p>
              <div className="p-10 bg-zinc-950 text-white rounded-[3rem] space-y-4">
                <h4 className="text-emerald-500 font-black uppercase text-xs tracking-widest">A Técnica da "Ponte"</h4>
                <p className="text-lg text-zinc-400">1. <span className="text-white font-bold">Valide:</span> "Concordo com o ponto que você trouxe sobre X..."</p>
                <p className="text-lg text-zinc-400">2. <span className="text-white font-bold">Ponte:</span> "...e construindo sobre isso, gostaria de adicionar..."</p>
                <p className="text-lg text-zinc-400">3. <span className="text-white font-bold">Sua Ideia:</span> [Insira seu ponto aqui].</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 72: MEETING SURVIVAL GUIDE - HANDLING INTERRUPTIONS */}
        <Page pageNumber={72} chapterTitle="Reuniões">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Lidando com Interrupções</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>Se alguém te interromper, você deve retomar o controle sem parecer agressivo:</p>
              <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-4">
                <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">O "Escudo" Verbal</h4>
                <p className="text-lg text-zinc-500">"Só um segundo, [Nome], deixe-me apenas concluir este raciocínio e já te passo a palavra."</p>
                <p className="text-sm italic text-zinc-400">Mantenha o tom de voz calmo, mas firme. Não pare de falar imediatamente.</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 73: FINAL MASTERY CHECKLIST - PART 1 */}
        <Page pageNumber={73} chapterTitle="Checklist de Maestria">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Checklist: Antes de Falar</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="w-6 h-6 border-2 border-emerald-500 rounded-md" />
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Defini o objetivo central da minha fala?</p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="w-6 h-6 border-2 border-emerald-500 rounded-md" />
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Conheço as dores e desejos do meu público?</p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="w-6 h-6 border-2 border-emerald-500 rounded-md" />
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Minha postura está aberta e confiante?</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 74: FINAL MASTERY CHECKLIST - PART 2 */}
        <Page pageNumber={74} chapterTitle="Checklist de Maestria">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Checklist: Durante a Fala</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="w-6 h-6 border-2 border-emerald-500 rounded-md" />
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Estou mantendo contato visual com diferentes pessoas?</p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="w-6 h-6 border-2 border-emerald-500 rounded-md" />
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Estou usando pausas estratégicas para dar ênfase?</p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <div className="w-6 h-6 border-2 border-emerald-500 rounded-md" />
                <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Minha voz está variando em tom e velocidade?</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 75: SUCCESS CASE STUDIES - INTRO */}
        <Page pageNumber={75} chapterTitle="Casos de Sucesso">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Transformações Reais</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <p>O Método Falar Bem já transformou a vida de milhares de pessoas. Aqui estão alguns exemplos:</p>
              <div className="p-12 bg-zinc-950 text-white rounded-[3rem] space-y-6">
                <h4 className="text-emerald-500 font-black uppercase text-xs tracking-widest">Caso: O Executivo Silencioso</h4>
                <p className="text-xl italic">"João era um diretor técnico brilhante, mas suas ideias eram ignoradas em reuniões. Após aplicar o Método, ele foi promovido a VP em 6 meses."</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 76: SUCCESS CASE STUDIES - CASE 2 */}
        <Page pageNumber={76} chapterTitle="Casos de Sucesso">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">A Vendedora de Elite</h3>
            <div className="prose prose-zinc max-w-none space-y-8 text-2xl text-zinc-600 leading-relaxed">
              <div className="p-12 bg-zinc-50 rounded-[3rem] border border-zinc-100 space-y-6">
                <h4 className="text-zinc-900 font-black uppercase text-xs tracking-widest">Caso: Maria</h4>
                <p className="text-xl italic text-zinc-600">"Maria tinha medo de objeções. Ao aprender o Framework A.R.C., ela triplicou sua taxa de conversão e se tornou a top performer da empresa."</p>
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 78: NOTES PAGE */}
        <Page pageNumber={78} chapterTitle="Notas">
          <div className="h-full flex flex-col space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Suas Notas e Insights</h3>
            <div className="flex-1 border-2 border-dashed border-zinc-200 rounded-[3rem] p-12">
              <div className="space-y-8">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="h-8 border-b border-zinc-100" />
                ))}
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 79: ADDITIONAL RESOURCES */}
        <Page pageNumber={79} chapterTitle="Recursos">
          <div className="space-y-12">
            <h3 className="text-4xl font-black uppercase tracking-tighter">Continue sua Evolução</h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 flex items-center justify-between">
                <div className="space-y-2">
                  <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Siga no Instagram</p>
                  <p className="text-emerald-600 font-bold">@institutofalarbem</p>
                </div>
                <Instagram className="w-10 h-10 text-zinc-400" />
              </div>
              <div className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 flex items-center justify-between">
                <div className="space-y-2">
                  <p className="font-black text-zinc-900 uppercase text-xs tracking-widest">Visite nosso Site</p>
                  <p className="text-emerald-600 font-bold">www.falarbem.com.br</p>
                </div>
                <Globe className="w-10 h-10 text-zinc-400" />
              </div>
            </div>
          </div>
        </Page>

        {/* PAGE 80: FINAL LEGAL NOTICE */}
        <Page pageNumber={80} chapterTitle="Legal" className="justify-center items-center text-center">
          <div className="max-w-2xl space-y-12">
            <ShieldCheck className="w-16 h-16 text-zinc-300 mx-auto" />
            <div className="prose prose-zinc max-w-none text-sm text-zinc-400 leading-relaxed">
              <p className="font-black uppercase tracking-widest">Aviso de Direitos Autorais</p>
              <p>
                Este material é protegido pelas leis de direitos autorais. Nenhuma parte deste conteúdo pode ser reproduzida, distribuída ou transmitida em qualquer formato sem autorização prévia e expressa do Instituto Falar Bem.
              </p>
              <p>© 2026 Instituto Falar Bem — Todos os direitos reservados.</p>
            </div>
          </div>
        </Page>

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
          .break-after-page {
            page-break-after: always !important;
          }
          @page {
            size: A4;
            margin: 0;
          }
          .w-\\[210mm\\] {
            width: 210mm !important;
            height: 297mm !important;
            margin: 0 !important;
            box-shadow: none !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
        
        body {
          background-color: #f4f4f5;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #f4f4f5;
        }
        ::-webkit-scrollbar-thumb {
          background: #d4d4d8;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #10b981;
        }
      `}} />
    </div>
  );
}
