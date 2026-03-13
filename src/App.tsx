/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  Info
} from 'lucide-react';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 selection:bg-emerald-500/30">
      {/* Print Button - Hidden during print */}
      <div className="fixed top-6 right-6 z-50 print:hidden">
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-full shadow-lg transition-all active:scale-95 group"
        >
          <Printer className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          IMPRIMIR GUIA ENTREGÁVEL (PDF)
        </button>
      </div>

      {/* PDF Container */}
      <div className="max-w-[210mm] mx-auto bg-white text-zinc-900 shadow-2xl print:shadow-none">
        
        {/* PAGE 1: COVER */}
        <section className="relative h-[297mm] w-[210mm] overflow-hidden flex flex-col items-center justify-between p-16 bg-zinc-950 text-white page-break-after-always">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 text-center space-y-4">
            <div className="inline-block px-4 py-1 border border-emerald-500/50 rounded-full text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">
              Guia Digital de Implementação Imediata
            </div>
            <h1 className="text-6xl font-black leading-tight tracking-tighter">
              MÉTODO <br />
              <span className="text-emerald-500">FALAR BEM</span>
            </h1>
            <p className="text-xl text-zinc-400 font-medium max-w-md mx-auto">
              O manual prático para dominar a oratória e a influência através da neurociência.
            </p>
          </div>

          <div className="relative z-10 w-full max-w-sm aspect-[3/4] bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden flex items-center justify-center group">
            <img 
              src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800" 
              alt="Comunicação e Liderança"
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-20 text-center p-8">
              <Brain className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
              <div className="text-2xl font-bold tracking-tight uppercase">Manual de Implementação</div>
              <div className="text-emerald-500 text-sm font-mono mt-2 tracking-widest">CONTEÚDO EXCLUSIVO</div>
            </div>
          </div>

          <div className="relative z-10 w-full text-center space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Autoria</p>
              <p className="text-2xl font-serif italic text-emerald-500">Instituto Falar Bem</p>
            </div>

            <div className="pt-8 border-t border-zinc-800 w-full max-w-xs mx-auto space-y-4">
              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
                <ShieldCheck className="w-3 h-3" />
                Aviso de Direitos Autorais
              </div>
              <p className="text-[9px] text-zinc-500 leading-relaxed">
                Este material é o entregável oficial do Método Falar Bem. A reprodução ou distribuição sem autorização do Instituto Falar Bem é estritamente proibida.
              </p>
              <div className="flex items-center justify-center gap-1 text-[9px] text-zinc-500 font-mono">
                <Copyright className="w-3 h-3" />
                2026 Instituto Falar Bem. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </section>

        {/* PAGE 2: PILAR 1 - NEURO-CONEXÃO */}
        <section className="h-[297mm] w-[210mm] p-16 flex flex-col page-break-after-always">
          <header className="flex justify-between items-end border-b-2 border-zinc-100 pb-6 mb-10">
            <div>
              <p className="text-emerald-600 font-bold text-xs tracking-widest uppercase">Módulo 01</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase">Neuro-Conexão</h2>
            </div>
            <p className="text-zinc-400 font-mono text-sm">01 / 08</p>
          </header>

          <div className="flex-1 space-y-8">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-xl font-bold text-emerald-600 mb-4">O Conceito: Neurônios-Espelho</h3>
              <p className="text-zinc-600 leading-relaxed">
                A conexão humana não é mágica, é biológica. Nosso cérebro possui células chamadas neurônios-espelho que "refletem" o estado emocional de quem está à nossa frente. Para conectar, você deve primeiro liderar o estado emocional.
              </p>
            </div>

            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 space-y-6">
              <h4 className="font-bold text-zinc-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                Técnicas de Implementação
              </h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="font-mono text-emerald-500 font-bold">01</div>
                  <div>
                    <p className="font-bold text-zinc-800">A Regra dos 3 Segundos</p>
                    <p className="text-sm text-zinc-600">Ao iniciar uma conversa, mantenha contato visual por exatos 3 segundos antes de desviar ou começar a falar. Isso sinaliza segurança ao cérebro reptiliano do outro.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="font-mono text-emerald-500 font-bold">02</div>
                  <div>
                    <p className="font-bold text-zinc-800">Sincronia de Respiração</p>
                    <p className="text-sm text-zinc-600">Observe sutilmente o ritmo respiratório do seu interlocutor e tente igualar o seu ao dele por 30 segundos. Isso cria uma sensação subconsciente de "somos iguais".</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-emerald-50 rounded-xl border-l-4 border-emerald-500">
              <p className="text-xs font-black text-emerald-700 uppercase tracking-widest mb-2">Exercício Prático</p>
              <p className="text-sm text-emerald-900 italic">
                "Hoje, em sua próxima interação, foque exclusivamente em sorrir com os olhos (Duchenne Smile) antes de dizer 'bom dia'. Observe como a resposta do outro muda instantaneamente."
              </p>
            </div>
          </div>

          <footer className="mt-auto pt-8 border-t border-zinc-100 flex justify-between text-[10px] text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Entregável</span>
            <span>Página 02</span>
          </footer>
        </section>

        {/* PAGE 3: PILAR 2 - ARQUITETURA DA FALA */}
        <section className="h-[297mm] w-[210mm] p-16 flex flex-col page-break-after-always">
          <header className="flex justify-between items-end border-b-2 border-zinc-100 pb-6 mb-10">
            <div>
              <p className="text-emerald-600 font-bold text-xs tracking-widest uppercase">Módulo 02</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase">Arquitetura da Fala</h2>
            </div>
            <p className="text-zinc-400 font-mono text-sm">02 / 08</p>
          </header>

          <div className="flex-1 space-y-8">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-xl font-bold text-emerald-600 mb-4">O Método P.R.E.P.</h3>
              <p className="text-zinc-600 leading-relaxed">
                Para nunca mais se perder em seus pensamentos, utilize a estrutura P.R.E.P. Ela é a forma mais rápida de organizar qualquer resposta ou apresentação de improviso.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100">
                <span className="text-3xl font-black text-emerald-500 opacity-30">P</span>
                <p className="font-bold text-zinc-900">Ponto Principal</p>
                <p className="text-xs text-zinc-500 mt-1">Diga sua ideia central de forma direta.</p>
              </div>
              <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100">
                <span className="text-3xl font-black text-emerald-500 opacity-30">R</span>
                <p className="font-bold text-zinc-900">Razão</p>
                <p className="text-xs text-zinc-500 mt-1">Explique o 'porquê' daquela ideia.</p>
              </div>
              <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100">
                <span className="text-3xl font-black text-emerald-500 opacity-30">E</span>
                <p className="font-bold text-zinc-900">Exemplo</p>
                <p className="text-xs text-zinc-500 mt-1">Dê um fato, história ou dado real.</p>
              </div>
              <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100">
                <span className="text-3xl font-black text-emerald-500 opacity-30">P</span>
                <p className="font-bold text-zinc-900">Ponto (Reforço)</p>
                <p className="text-xs text-zinc-500 mt-1">Reafirme seu ponto inicial com força.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-zinc-900 flex items-center gap-2">
                <Info className="w-5 h-5 text-emerald-500" />
                Dica de Ouro: A Regra de Três
              </h4>
              <p className="text-sm text-zinc-600 leading-relaxed">
                O cérebro humano processa informações em grupos de três com muito mais eficiência. Ao listar benefícios ou passos, use sempre 3 itens. Menos parece incompleto, mais parece confuso.
              </p>
            </div>

            <div className="p-6 bg-zinc-900 rounded-xl text-white">
              <p className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-2">Treinamento de Campo</p>
              <p className="text-sm italic">
                "Escreva agora um parágrafo sobre seu trabalho usando o P.R.E.P. Leia em voz alta e sinta a clareza da mensagem."
              </p>
            </div>
          </div>

          <footer className="mt-auto pt-8 border-t border-zinc-100 flex justify-between text-[10px] text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Entregável</span>
            <span>Página 03</span>
          </footer>
        </section>

        {/* PAGE 4: PILAR 3 - DOMÍNIO DO MEDO */}
        <section className="h-[297mm] w-[210mm] p-16 flex flex-col page-break-after-always">
          <header className="flex justify-between items-end border-b-2 border-zinc-100 pb-6 mb-10">
            <div>
              <p className="text-emerald-600 font-bold text-xs tracking-widest uppercase">Módulo 03</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase">Domínio do Medo</h2>
            </div>
            <p className="text-zinc-400 font-mono text-sm">03 / 08</p>
          </header>

          <div className="flex-1 space-y-8">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-xl font-bold text-emerald-600 mb-4">Biofeedback: Hackeando a Ansiedade</h3>
              <p className="text-zinc-600 leading-relaxed">
                O medo de falar em público ativa o sistema de "luta ou fuga". Para desativá-lo, precisamos enviar sinais físicos ao cérebro de que estamos seguros.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 border-2 border-emerald-100 rounded-2xl bg-emerald-50/30">
                <h4 className="font-bold text-emerald-900 mb-2">Técnica 4-7-8 (O Calmante Natural)</h4>
                <ul className="text-sm text-emerald-800 space-y-2">
                  <li className="flex gap-2"><strong>4s:</strong> Inspire pelo nariz profundamente.</li>
                  <li className="flex gap-2"><strong>7s:</strong> Segure o ar nos pulmões.</li>
                  <li className="flex gap-2"><strong>8s:</strong> Solte o ar lentamente pela boca fazendo um som de 'shhh'.</li>
                </ul>
                <p className="text-[10px] text-emerald-600 mt-4 font-bold uppercase">Repita 4 vezes antes de qualquer apresentação.</p>
              </div>

              <div className="p-6 border border-zinc-100 rounded-2xl bg-zinc-50">
                <h4 className="font-bold text-zinc-900 mb-2">Power Posing (Postura de Poder)</h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Fique de pé, mãos na cintura, pernas levemente afastadas e queixo erguido por 2 minutos. Estudos mostram que isso reduz o cortisol (hormônio do estresse) e aumenta a testosterona (hormônio da confiança).
                </p>
              </div>
            </div>

            <div className="bg-zinc-950 p-8 rounded-2xl text-center">
              <Zap className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
              <p className="text-white font-bold">Mentalidade de Atleta</p>
              <p className="text-zinc-500 text-xs mt-2">
                Não diga "estou nervoso". Diga "estou animado". O corpo sente a mesma coisa, mas o rótulo que você dá muda como seu cérebro processa a adrenalina.
              </p>
            </div>
          </div>

          <footer className="mt-auto pt-8 border-t border-zinc-100 flex justify-between text-[10px] text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Entregável</span>
            <span>Página 04</span>
          </footer>
        </section>

        {/* PAGE 5: PILAR 4 - VOZ DE AUTORIDADE */}
        <section className="h-[297mm] w-[210mm] p-16 flex flex-col page-break-after-always">
          <header className="flex justify-between items-end border-b-2 border-zinc-100 pb-6 mb-10">
            <div>
              <p className="text-emerald-600 font-bold text-xs tracking-widest uppercase">Módulo 04</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase">Voz de Autoridade</h2>
            </div>
            <p className="text-zinc-400 font-mono text-sm">04 / 08</p>
          </header>

          <div className="flex-1 space-y-8">
            <div className="prose prose-zinc max-w-none">
              <h3 className="text-xl font-bold text-emerald-600 mb-4">A Ressonância do Peito</h3>
              <p className="text-zinc-600 leading-relaxed">
                Vozes agudas e nasais são percebidas como inseguras. Para projetar autoridade, você deve buscar a ressonância torácica.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-6 items-start p-6 bg-zinc-50 rounded-2xl">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black font-black shrink-0">1</div>
                <div>
                  <p className="font-bold text-zinc-900">O Ponto de Apoio</p>
                  <p className="text-sm text-zinc-600 mt-1">Coloque a mão no peito. Fale "HMMMM" em um tom baixo até sentir a vibração na palma da mão. Esse é o seu tom de autoridade.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start p-6 bg-zinc-50 rounded-2xl">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black font-black shrink-0">2</div>
                <div>
                  <p className="font-bold text-zinc-900">A Pausa Dramática</p>
                  <p className="text-sm text-zinc-600 mt-1">O silêncio é a ferramenta mais poderosa da oratória. Faça uma pausa de 2 segundos após uma pergunta ou afirmação importante. Isso força o cérebro do público a processar a informação.</p>
                </div>
              </div>
            </div>

            <div className="p-8 border-2 border-dashed border-zinc-200 rounded-2xl text-center space-y-4">
              <Mic2 className="w-8 h-8 text-zinc-300 mx-auto" />
              <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Treino de Dicção</p>
              <p className="text-zinc-800 font-medium italic">
                "O tempo perguntou ao tempo quanto tempo o tempo tem."
              </p>
              <p className="text-[10px] text-zinc-500">Repita 5 vezes, aumentando a velocidade sem perder a clareza das sílabas.</p>
            </div>
          </div>

          <footer className="mt-auto pt-8 border-t border-zinc-100 flex justify-between text-[10px] text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Entregável</span>
            <span>Página 05</span>
          </footer>
        </section>

        {/* PAGE 6: PILAR 5 & 6 - LINGUAGEM E PERSUASÃO */}
        <section className="h-[297mm] w-[210mm] p-16 flex flex-col page-break-after-always">
          <header className="flex justify-between items-end border-b-2 border-zinc-100 pb-6 mb-10">
            <div>
              <p className="text-emerald-600 font-bold text-xs tracking-widest uppercase">Módulo 05 & 06</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase">Influência Total</h2>
            </div>
            <p className="text-zinc-400 font-mono text-sm">06 / 08</p>
          </header>

          <div className="flex-1 space-y-12">
            {/* Pilar 5 Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                <Eye className="w-6 h-6 text-emerald-500" />
                Linguagem Invisível: O Triângulo do Olhar
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Para projetar autoridade sem agressividade, foque seu olhar no triângulo formado pelos dois olhos e o centro da testa do interlocutor. Para criar empatia, foque no triângulo formado pelos olhos e a boca.
              </p>
              <div className="flex gap-4 pt-2">
                <div className="flex-1 p-3 bg-zinc-50 rounded-lg text-center border border-zinc-100">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase">Mãos Abertas</p>
                  <p className="text-xs text-zinc-700 mt-1">Sinalizam honestidade.</p>
                </div>
                <div className="flex-1 p-3 bg-zinc-50 rounded-lg text-center border border-zinc-100">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase">Inclinação</p>
                  <p className="text-xs text-zinc-700 mt-1">Sinaliza interesse real.</p>
                </div>
              </div>
            </div>

            {/* Pilar 6 Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
                <Target className="w-6 h-6 text-emerald-500" />
                Persuasão: O Gatilho do "Porque"
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Estudos de Harvard mostram que as pessoas aceitam pedidos com 94% mais facilidade se você usar a palavra "porque", mesmo que a razão seja óbvia.
              </p>
              <div className="bg-emerald-950 p-6 rounded-2xl text-white space-y-3">
                <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">Fórmula da Persuasão</p>
                <p className="text-lg font-bold">[Pedido] + PORQUE + [Benefício do Outro]</p>
                <p className="text-xs text-emerald-200/60 italic">Ex: "Poderia me enviar esse relatório hoje? Porque assim consigo garantir que sua ideia seja apresentada na reunião de amanhã."</p>
              </div>
            </div>
          </div>

          <footer className="mt-auto pt-8 border-t border-zinc-100 flex justify-between text-[10px] text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Entregável</span>
            <span>Página 06</span>
          </footer>
        </section>

        {/* PAGE 7: BÔNUS 1 & 2 - PRÁTICA */}
        <section className="h-[297mm] w-[210mm] p-16 flex flex-col page-break-after-always bg-zinc-50">
          <header className="flex justify-between items-end border-b-2 border-emerald-200 pb-6 mb-10">
            <div>
              <p className="text-emerald-600 font-bold text-xs tracking-widest uppercase">Implementação Extra</p>
              <h2 className="text-3xl font-black text-zinc-900 uppercase">Guias de Suporte</h2>
            </div>
            <p className="text-zinc-400 font-mono text-sm">07 / 08</p>
          </header>

          <div className="flex-1 space-y-10">
            {/* Bonus 1 Deliverable */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Video className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-zinc-900">Mestre das Reuniões Online</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-zinc-100">
                  <p className="font-bold text-xs text-emerald-600 uppercase">Enquadramento</p>
                  <p className="text-xs text-zinc-500 mt-1">Olhos na linha do terço superior da tela. Nunca olhe para baixo para a câmera.</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-zinc-100">
                  <p className="font-bold text-xs text-emerald-600 uppercase">Iluminação</p>
                  <p className="text-xs text-zinc-500 mt-1">Luz sempre de frente. Luz atrás cria silhueta e esconde suas expressões.</p>
                </div>
              </div>
            </div>

            {/* Bonus 2 Deliverable */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-zinc-900">Protocolo Anti-Branco</h3>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 space-y-4">
                <p className="text-sm text-zinc-600 font-medium">Se o "branco" vier, siga estes 3 passos:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 rounded bg-zinc-900 text-white flex items-center justify-center text-[10px] font-bold">1</div>
                    <span><strong>Repita a última frase:</strong> Isso dá tempo ao seu cérebro de reconectar o próximo link.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 rounded bg-zinc-900 text-white flex items-center justify-center text-[10px] font-bold">2</div>
                    <span><strong>Faça uma pergunta ao público:</strong> "Faz sentido até aqui?" (Ganha 5-10 segundos).</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 rounded bg-zinc-900 text-white flex items-center justify-center text-[10px] font-bold">3</div>
                    <span><strong>Pule para o próximo ponto:</strong> Nunca peça desculpas pelo branco. Apenas siga.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-auto pt-8 border-t border-emerald-100 flex justify-between text-[10px] text-zinc-400 font-bold tracking-widest uppercase">
            <span>Método Falar Bem - Entregável</span>
            <span>Página 07</span>
          </footer>
        </section>

        {/* PAGE 8: CONCLUSION */}
        <section className="h-[297mm] w-[210mm] p-16 flex flex-col justify-center items-center text-center space-y-12 bg-zinc-950 text-white">
          <div className="w-24 h-1 bg-emerald-500 mb-8" />
          
          <div className="space-y-6 max-w-lg">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Sua Jornada Começa Agora</h2>
            <p className="text-zinc-400 leading-relaxed">
              Você agora possui as ferramentas. Mas lembre-se: a oratória é um músculo. O conhecimento sem prática é apenas entretenimento.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Use este guia como seu manual de consulta rápida. Revise as técnicas antes de reuniões importantes e pratique os exercícios diariamente.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Com admiração,</p>
            <p className="text-3xl font-serif italic text-emerald-500">Instituto Falar Bem</p>
          </div>

          <div className="pt-24 space-y-4">
            <div className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
              © 2026 Todos os direitos reservados.
            </div>
            <div className="flex justify-center gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
            </div>
          </div>

          <div className="absolute bottom-16 w-full px-16 flex justify-between items-center text-[9px] text-zinc-800 font-bold uppercase tracking-widest">
            <span>Guia de Implementação</span>
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
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #18181b;
        }
        ::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #10b981;
        }
      `}} />
    </div>
  );
}
