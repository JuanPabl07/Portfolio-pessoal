'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Award, Maximize2 } from 'lucide-react';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const certificados = [
  { src: '/images/certificados/c-bradesco.jpg', title: 'Certificado Bradesco', category: 'formação' },
  { src: '/images/certificados/c-harvard.jpg', title: 'Harvard CS50', category: 'computação' },
  { src: '/images/certificados/c-udemy.jpg', title: 'Desenvolvimento Web completo', category: 'desenvolvimento' },
  { src: '/images/certificados/c1.jpg', title: 'CSS Layout Code Challenges', category: 'interface' },
  { src: '/images/certificados/c2.jpg', title: 'Full Stack Web Development With Flask', category: 'back-end' },
  { src: '/images/certificados/c3.jpg', title: 'Full Stack and Front End', category: 'desenvolvimento' },
  { src: '/images/certificados/c4.jpg', title: 'User experience for Web Design', category: 'experiência' },
  { src: '/images/certificados/c5.jpg', title: 'Web Programming Foundations', category: 'fundamentos' },
  { src: '/images/certificados/c6.jpg', title: 'HTML Essential Training', category: 'fundamentos' },
];

const slides = certificados.map(({ src, title }) => ({ src, title }));

export function CertificadosHomeSection() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <section id="certificados-home" className="certificates-home relative mx-auto my-20 max-w-7xl scroll-mt-20 overflow-hidden rounded-[2rem] px-4 py-16 md:px-8 md:py-24">
      <div className="certificates-home__glow certificates-home__glow--one" aria-hidden="true" />
      <div className="certificates-home__glow certificates-home__glow--two" aria-hidden="true" />
      <div className="relative z-10">
        <div className="section-kicker certificates-home__kicker"><span>02.5</span><span>aprendizado contínuo</span></div>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="certificates-home__eyebrow"><Award size={15} /> repertório em construção</div>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">Conhecimento que vira produto<span className="text-cyan-300">.</span></h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">Uma seleção de diplomas e certificações que sustenta meu trabalho entre desenvolvimento, interfaces e experiências digitais.</p>
          </div>
          <Link href="/certificados" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-cyan-300 transition-colors hover:text-white">ver todos os certificados <ArrowUpRight size={17} /></Link>
        </div>

        <div className="certificates-home__grid">
          {certificados.map((certificado, index) => (
            <button key={certificado.title} type="button" className="certificate-preview group" onClick={() => setActiveIndex(index)} aria-label={`Abrir ${certificado.title}`}>
              <span className="certificate-preview__topline"><span>0{index + 1}</span><span>{certificado.category}</span></span>
              <span className="certificate-preview__image">
                <Image src={certificado.src} alt={certificado.title} fill sizes="(max-width: 768px) 90vw, 28vw" className="object-contain p-3 transition-transform duration-500 group-hover:scale-105" unoptimized />
                <span className="certificate-preview__zoom"><Maximize2 size={16} /></span>
              </span>
              <span className="certificate-preview__title">{certificado.title}</span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox open={activeIndex >= 0 && activeIndex < slides.length} index={activeIndex} close={() => setActiveIndex(-1)} slides={slides} styles={{ container: { backgroundColor: 'rgba(2, 6, 23, .94)' } }} />
    </section>
  );
}
