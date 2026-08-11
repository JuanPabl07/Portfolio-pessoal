'use client';

import { ArrowUpRight, Globe2 } from 'lucide-react';

const siteLinks = [
  { name: 'Blur Jalecos', url: 'https://blurjalecos.netlify.app/' },
  { name: 'Maestro Desentupidora', url: 'http://maestrodesentupidora.com' },
  { name: 'Impérios Controle de Pragas', url: 'http://Imperioscontroledepragas.com' },
  { name: 'MDN Içamentos', url: 'http://Mdnicamentos.com.br' },
  { name: 'Wilson Rosendo Advocacia', url: 'http://wilsonrosendoadv.com.br' },
  { name: 'Betel Desentupidora', url: 'http://beteldesentupidora.com' },
];

export function TrabalhosSection() {
  return (
    <section id="trabalhos" className="work-section relative mx-auto my-20 max-w-7xl scroll-mt-20 px-4 py-16 md:px-8 md:py-24">
      <div className="section-kicker"><span>03</span><span>provas de execução</span></div>
      <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white md:text-6xl">Meus trabalhos<span className="text-cyan-300">.</span></h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">Sites publicados e experiências desenvolvidas para transformar presença digital em resultado.</p>
        </div>
        <div className="work-section__status"><Globe2 size={16} /><span>projetos publicados</span></div>
      </div>

      <div className="work-links-block !border-t-0 !pt-0">
        <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500"><span className="h-px w-8 bg-purple-300/70" /> sites publicados</div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {siteLinks.map((site, index) => (
            <a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer" className="site-link-card group">
              <span className="site-link-card__index">0{index + 1}</span>
              <span className="site-link-card__name">{site.name}</span>
              <ArrowUpRight size={18} className="site-link-card__arrow transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
