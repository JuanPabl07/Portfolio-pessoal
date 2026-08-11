
'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Importando o componente de acordeão

// Lista de imagens de certificados com os nomes corretos
const certificados = [
  { src: '/images/certificados/c-bradesco.jpg', title: 'Certificado Bradesco', alt: 'Certificado Bradesco' },
  { src: '/images/certificados/c-harvard.jpg', title: 'Certificado Harvard CS50', alt: 'Certificado Harvard CS50' },
  { src: '/images/certificados/c-udemy.jpg', title: 'Desenvolvimento Web completo', alt: 'Desenvolvimento Web completo - Udemy' },
  { src: '/images/certificados/c1.jpg', title: 'CSS Layout Code Challenges', alt: 'CSS Layout Code Challenges' },
  { src: '/images/certificados/c2.jpg', title: 'Full Stack Web Development With Flask', alt: 'Full Stack Web Development With Flask' },
  { src: '/images/certificados/c3.jpg', title: 'Succeeding Web Development: Full Stack and Front End', alt: 'Succeeding Web Development: Full Stack and Front End' },
  { src: '/images/certificados/c4.jpg', title: 'User experience for Web Design', alt: 'User experience for Web Design' },
  { src: '/images/certificados/c5.jpg', title: 'Web Programming Foundations', alt: 'Web Programming Foundations' },
  { src: '/images/certificados/c6.jpg', title: 'HTML Essential Training', alt: 'HTML Essential Training' },
  { src: '/images/certificados/c7.jpg', title: 'UX Foundations: Accessibility', alt: 'UX Foundations: Accessibility' },
  { src: '/images/certificados/c8.jpg', title: 'JavaScript Essential training', alt: 'JavaScript Essential training' },
  { src: '/images/certificados/c9.jpg', title: 'Search Techniques for Web Developers', alt: 'Search Techniques for Web Developers' },
  { src: '/images/certificados/c10.jpg', title: 'Learning GittHub', alt: 'Learning GittHub' }, // Corrigido de GittHub para GitHub se for o caso, mantendo como usuário digitou por ora
  { src: '/images/certificados/c11.jpg', title: 'Responsive Layout', alt: 'Responsive Layout' },
  { src: '/images/certificados/c12.jpg', title: 'Become a Front-End Web Developer', alt: 'Become a Front-End Web Developer' },
  { src: '/images/certificados/c13.jpg', title: 'Learning React.js', alt: 'Learning React.js' },
];

// Prepara slides para o Lightbox
const slides = certificados.map(({ src, title }) => ({ src, title }));

export function CertificadosSection() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="certificados" className="container mx-auto px-4 py-16 md:py-24 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Certificados</h2>
      <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10">
        Minhas qualificações e aprendizados contínuos, comprovando meu comprometimento com a excelência e atualização constante.
      </p>
      <Accordion type="single" collapsible className="w-full bg-gray-800/30 rounded-lg p-4 md:p-6 backdrop-blur-sm">
        {certificados.map((certificado, i) => (
          <AccordionItem value={`item-${i}`} key={i} className="border-gray-700">
            <AccordionTrigger className="text-indigo-300 hover:text-cyan-400 text-base md:text-lg">
              {certificado.title}
            </AccordionTrigger>
            <AccordionContent>
              <div 
                className="relative w-full h-72 md:h-96 cursor-pointer group overflow-hidden rounded-md shadow-lg mt-2 mb-4"
                onClick={() => setIndex(i)} // Abre o lightbox no índice clicado
              >
                <Image
                  src={certificado.src}
                  alt={certificado.alt}
                  layout="fill"
                  objectFit="contain" // 'contain' para mostrar todo o certificado
                  className="transition-transform duration-500 ease-in-out group-hover:scale-105 p-2"
                  unoptimized // Imagens estáticas
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .85)" } }}
      />
    </section>
  );
}

