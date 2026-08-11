import { ArrowDown, ArrowUpRight, Check, Code2, Layers3, MousePointer2, Palette, Sparkles, Zap } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TrabalhosSection } from '@/components/trabalhos-section';
import ParticlesBackground from '@/components/particles-background';
import { CursorCompanion } from '@/components/cursor-companion';
import { DiagramacaoSection } from '@/components/diagramacao-section';
import { CertificadosHomeSection } from '@/components/certificados-home-section';

const skills = [
  { name: 'HTML5 & CSS3', detail: 'interfaces sólidas', color: 'blue' },
  { name: 'JavaScript', detail: 'interações vivas', color: 'yellow' },
  { name: 'React & Next.js', detail: 'produtos escaláveis', color: 'cyan' },
  { name: 'Node.js', detail: 'back-end inteligente', color: 'green' },
  { name: 'Tailwind CSS', detail: 'design systems', color: 'purple' },
  { name: 'Figma', detail: 'ideias em protótipos', color: 'pink' },
];

const stats = [
  { value: '03+', label: 'anos criando na web' },
  { value: '20+', label: 'projetos publicados' },
  { value: '∞', label: 'possibilidades digitais' },
];

export default function Home() {
  return (
    <div className="portfolio-shell flex min-h-screen flex-col overflow-hidden bg-[#050816] text-gray-100 selection:bg-cyan-300 selection:text-slate-950">
      <Navbar />
      <CursorCompanion />

      <main className="flex-grow">
        <section id="inicio" className="hero-stage relative isolate min-h-screen overflow-hidden scroll-mt-20">
          <div className="hero-stage__grid absolute inset-0" aria-hidden="true" />
          <div className="hero-stage__glow hero-stage__glow--one" aria-hidden="true" />
          <div className="hero-stage__glow hero-stage__glow--two" aria-hidden="true" />
          <ParticlesBackground />

          <div className="container relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-20 pt-32 md:px-8 lg:pt-28">
            <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
              <div className="max-w-3xl">
                <div className="eyebrow-chip animate-fade-in-up">
                  <span className="eyebrow-chip__dot" />
                  <span>portfólio // experiência digital</span>
                </div>

                <p className="mt-8 text-sm font-medium uppercase tracking-[0.32em] text-cyan-300/80 animate-fade-in-up animation-delay-100">
                  Olá, eu sou Juan Pablo
                </p>
                <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl lg:text-[6.8rem] animate-fade-in-up animation-delay-200">
                  Código que
                  <span className="hero-gradient-text block">parece impossível.</span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl animate-fade-in-up animation-delay-400">
                  Desenvolvedor Web e Designer Criativo. Transformo ideias em experiências digitais rápidas, expressivas e impossíveis de ignorar.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in-up animation-delay-600">
                  <a href="#trabalhos" className="magnetic-button magnetic-button--primary group">
                    <span>Explorar meus trabalhos</span>
                    <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={19} />
                  </a>
                  <a href="#contato" className="magnetic-button magnetic-button--ghost group">
                    <span>Vamos criar algo?</span>
                    <Sparkles className="text-cyan-300 transition-transform duration-300 group-hover:rotate-12" size={18} />
                  </a>
                </div>

                <div className="mt-14 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="stat-block">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-console-wrap relative mx-auto w-full max-w-xl lg:ml-auto">
                <div className="hero-console__label"><MousePointer2 size={14} /> interface em movimento</div>
                <div className="hero-console">
                  <div className="hero-console__topbar">
                    <div className="flex gap-2"><span /><span /><span /></div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">juan_pablo.exe</span>
                    <Code2 size={15} className="text-cyan-300" />
                  </div>
                  <div className="hero-console__body font-mono">
                    <p className="text-slate-500"><span className="text-pink-300">const</span> future = <span className="text-amber-200">{'{'}</span></p>
                    <p className="pl-5 text-slate-300"><span className="text-cyan-200">design</span>: <span className="text-emerald-300">&quot;intencional&quot;</span>,</p>
                    <p className="pl-5 text-slate-300"><span className="text-cyan-200">motion</span>: <span className="text-emerald-300">true</span>,</p>
                    <p className="pl-5 text-slate-300"><span className="text-cyan-200">ideas</span>: <span className="text-emerald-300">&quot;sem limite&quot;</span>,</p>
                    <p className="text-amber-200">{' };'}</p>
                    <div className="my-6 h-px bg-white/10" />
                    <p className="text-slate-500"><span className="text-pink-300">return</span> <span className="text-cyan-200">buildExperience</span><span className="text-white">(future);</span><span className="terminal-cursor" /></p>
                  </div>
                  <div className="hero-console__status"><span className="status-pulse" /> sistema criativo online <span className="ml-auto text-slate-600">v.2025</span></div>
                </div>
                <div className="hero-console__float hero-console__float--top"><Zap size={16} /> interação primeiro</div>
                <div className="hero-console__float hero-console__float--bottom"><Layers3 size={16} /> beleza + função</div>
              </div>
            </div>
          </div>

          <a href="#sobre" className="hero-scroll-cue" aria-label="Rolar para a seção Sobre">
            <span>scroll para descobrir</span>
            <ArrowDown size={16} />
          </a>
        </section>

        <div className="section-divider section-divider--cyan" aria-hidden="true"><span /></div>

        <section id="sobre" className="content-section relative mx-auto max-w-7xl scroll-mt-20 px-4 py-24 md:px-8 md:py-36">
          <div className="section-kicker"><span>01</span><span>sobre o criador</span></div>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">A tecnologia pode ser funcional e <span className="text-cyan-300">inesperada.</span></p>
            </div>
            <div className="space-y-7 text-lg leading-relaxed text-slate-300">
              <p>Sou apaixonado por tecnologia, design e pela sensação de ver uma ideia ganhar vida na tela. Meu trabalho une desenvolvimento front-end, back-end e direção visual para criar soluções que fazem sentido para pessoas reais.</p>
              <p>Não entrego apenas páginas. Construo presença, movimento e experiências que comunicam valor antes mesmo da primeira conversa.</p>
              <div className="grid gap-3 pt-4 sm:grid-cols-2">
                {['Pensamento de produto', 'Design com intenção', 'Código escalável', 'Detalhes que conectam'].map((item) => (
                  <div key={item} className="feature-line"><Check size={16} className="text-cyan-300" /><span>{item}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider section-divider--purple" aria-hidden="true"><span /></div>

        <DiagramacaoSection />

        <div className="section-divider section-divider--gold" aria-hidden="true"><span /></div>

        <section id="habilidades" className="content-section relative mx-auto max-w-7xl scroll-mt-20 px-4 py-24 md:px-8 md:py-36">
          <div className="section-kicker"><span>02</span><span>ferramentas do ofício</span></div>
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">Habilidades para tirar ideias do papel.</h2>
            <p className="max-w-sm text-slate-400">Uma stack escolhida para equilibrar velocidade, personalidade e qualidade de entrega.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className={`skill-card skill-card--${skill.color}`}>
                <span className="skill-card__index">0{index + 1}</span>
                <Palette size={21} className="mb-12 text-white/70" />
                <h3>{skill.name}</h3>
                <p>{skill.detail}</p>
                <ArrowUpRight size={18} className="skill-card__arrow" />
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider section-divider--pink" aria-hidden="true"><span /></div>

        <CertificadosHomeSection />

        <div className="section-divider section-divider--purple" aria-hidden="true"><span /></div>

        <TrabalhosSection />

        <section id="contato" className="contact-stage relative mx-auto my-20 max-w-7xl scroll-mt-20 overflow-hidden rounded-[2rem] px-6 py-20 md:px-16 md:py-28">
          <div className="contact-stage__orb contact-stage__orb--one" aria-hidden="true" />
          <div className="contact-stage__orb contact-stage__orb--two" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl">
            <div className="section-kicker"><span>03</span><span>próximo projeto</span></div>
            <h2 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-8xl">Sua ideia pode ser a próxima experiência.</h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">Vamos conversar sobre algo que precisa ser visto, sentido e lembrado. A primeira interação começa aqui.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="https://wa.me/+5511987787415" target="_blank" rel="noopener noreferrer" className="magnetic-button magnetic-button--primary group"><span>Chamar no WhatsApp</span><ArrowUpRight size={19} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
              <a href="mailto:juanpablo.tech@gmail.com" className="magnetic-button magnetic-button--ghost"><span>Enviar um e-mail</span><ArrowUpRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
