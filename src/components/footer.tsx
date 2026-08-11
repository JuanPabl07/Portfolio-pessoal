import { ArrowUp, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/JuanPabl07', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: Linkedin },
  { label: 'Instagram', href: 'https://instagram.com/juanpablo.tech/', icon: Instagram },
  { label: 'E-mail', href: 'mailto:juanpablo.tech@gmail.com', icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#03050f] px-4 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="#inicio" className="hero-gradient-text text-2xl font-black tracking-[-0.05em]">Juan Pablo.</a>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">Experiências digitais com código, intenção e uma dose saudável de ousadia.</p>
        </div>
        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200">
                <Icon size={17} />
              </a>
            ))}
          </div>
          <a href="#inicio" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 transition-colors hover:text-cyan-300">Voltar ao topo <ArrowUp size={14} /></a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-600 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} Juan Pablo. Todos os direitos reservados.</span>
        <span>feito com curiosidade e muito café</span>
      </div>
    </footer>
  );
}
