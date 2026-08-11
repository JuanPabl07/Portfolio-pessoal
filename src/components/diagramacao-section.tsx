import { ArrowUpRight, BookOpen, Check, Eye, Layers3, Sparkles } from 'lucide-react';

const editorialPillars = [
  {
    icon: Eye,
    title: 'Olhar de direção',
    text: 'Cada imagem entra em cena com intenção: enquadramento, respiro, ritmo e continuidade.',
  },
  {
    icon: Layers3,
    title: 'Composição precisa',
    text: 'Organizo páginas e sequências para que a história avance com leveza, equilíbrio e emoção.',
  },
  {
    icon: Check,
    title: 'Cuidado na revisão',
    text: 'A prévia é revisada com atenção aos detalhes antes de seguir para a produção do álbum.',
  },
];

const albumTypes = ['Pocket Books', 'Table Books', 'Scrapbooks', 'capas em linho', 'capas janela', 'gravação personalizada'];

export function DiagramacaoSection() {
  return (
    <section id="diagramacao" className="editorial-section relative mx-auto my-12 max-w-7xl scroll-mt-20 overflow-hidden rounded-[2rem] px-6 py-20 md:px-12 md:py-28">
      <div className="editorial-section__grain" aria-hidden="true" />
      <div className="editorial-section__glow editorial-section__glow--one" aria-hidden="true" />
      <div className="editorial-section__glow editorial-section__glow--two" aria-hidden="true" />

      <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <div className="section-kicker editorial-kicker"><span>02.1</span><span>outra dimensão do meu trabalho</span></div>
          <div className="editorial-mark"><BookOpen size={15} /><span>design editorial // composição de memórias</span></div>
          <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.06em] text-[#f8f3eb] md:text-7xl">
            Também transformo fotografias em <span className="editorial-highlight">histórias para folhear.</span>
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#d8d0c4]">
            Além de desenvolver experiências digitais, atuo como diagramador na <strong className="text-white">Flavia Nasser</strong>, empresa reconhecida por seus álbuns personalizados e acabamentos artesanais. Meu trabalho é organizar imagens, páginas e ritmo visual para que cada álbum conte uma história com presença, equilíbrio e cuidado.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#aa9e91]">
            Essa dupla atuação une duas habilidades que parecem distantes, mas conversam o tempo todo: a precisão estrutural do código e a sensibilidade necessária para editar memórias em produtos como Pocket Books, Table Books e Scrapbooks.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {albumTypes.map((type) => <span key={type} className="editorial-tag">{type}</span>)}
          </div>
          <a href="https://flavianasser.com.br" target="_blank" rel="noopener noreferrer" className="editorial-link group mt-10">
            <span>Conhecer a Flavia Nasser</span>
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="editorial-book-wrap" aria-label="Representação visual de um álbum aberto">
          <div className="editorial-book__shadow" aria-hidden="true" />
          <div className="editorial-book">
            <div className="editorial-book__cover editorial-book__cover--left"><span>FN</span></div>
            <div className="editorial-book__page editorial-book__page--left">
              <div className="editorial-photo editorial-photo--one" />
              <span className="editorial-line editorial-line--short" />
              <span className="editorial-line" />
            </div>
            <div className="editorial-book__gutter" aria-hidden="true" />
            <div className="editorial-book__page editorial-book__page--right">
              <div className="editorial-photo editorial-photo--two" />
              <div className="editorial-photo editorial-photo--three" />
              <span className="editorial-line editorial-line--tiny" />
            </div>
            <div className="editorial-book__cover editorial-book__cover--right" aria-hidden="true" />
          </div>
          <div className="editorial-book__caption"><Sparkles size={14} /><span>cada página tem um pulso</span></div>
        </div>
      </div>

      <div className="relative z-10 mt-16 grid gap-3 border-t border-[#f8f3eb]/15 pt-8 md:grid-cols-3">
        {editorialPillars.map(({ icon: Icon, title, text }) => (
          <div key={title} className="editorial-pillar">
            <Icon size={18} className="text-[#e5b878]" />
            <div><h3>{title}</h3><p>{text}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
