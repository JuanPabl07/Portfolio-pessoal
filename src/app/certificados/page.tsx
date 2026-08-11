import { NavbarCertificados } from '@/components/navbar-certificados';
import { Footer } from '@/components/footer';
import { CertificadosSection } from '@/components/certificados-section';
import ParticlesBackground from '@/components/particles-background';

export const metadata = {
  title: 'Certificados | Juan Pablo - Desenvolvedor Web & Designer Criativo',
  description: 'Confira os certificados e qualificações de Juan Pablo, desenvolvedor web e designer criativo comprometido com a excelência e atualização constante.',
  keywords: 'certificados, qualificações, desenvolvimento web, design, Juan Pablo, portfolio',
}

export default function Certificados() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <NavbarCertificados />

      <main className="flex-grow">
        {/* Seção Hero com padrão geométrico e partículas */}
        <section className="relative container mx-auto px-4 py-20 md:py-32 text-center flex flex-col items-center justify-center min-h-[40vh] scroll-mt-20 overflow-hidden">
          {/* Aplica o padrão de fundo */}
          <div className="absolute inset-0 hero-pattern z-0"></div>
          {/* Adiciona as partículas animadas por cima do padrão */}
          <ParticlesBackground />
          {/* Conteúdo da seção Hero sobre o padrão e partículas */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in-up">
              Meus Certificados
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
              Qualificações e aprendizados contínuos
            </p>
          </div>
        </section>

        {/* Seção Certificados */}
        <CertificadosSection />
      </main>

      <Footer />
    </div>
  );
}
