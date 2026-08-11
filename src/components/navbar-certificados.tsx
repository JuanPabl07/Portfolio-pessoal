'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Início', href: '/#inicio' },
  { name: 'Sobre', href: '/#sobre' },
  { name: 'Habilidades', href: '/#habilidades' },
  { name: 'Trabalhos', href: '/#trabalhos' },
  { name: 'Contato', href: '/#contato' },
];

export function NavbarCertificados() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/#inicio" className="hero-gradient-text text-2xl font-black tracking-[-0.05em]">Juan Pablo.</Link>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => <Link key={item.name} href={item.href} className="text-sm text-slate-400 transition-colors hover:text-cyan-300">{item.name}</Link>)}
          <a href="/cv/Curriculo-Juan-Pablo.pdf" download="Curriculo-Juan-Pablo.pdf" className="rounded-full border border-purple-400/40 px-4 py-2 text-sm text-slate-200 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/10">Currículo</a>
        </div>
        <button type="button" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setIsOpen((value) => !value)} className="text-slate-300 md:hidden">
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {isOpen && <div className="flex flex-col gap-4 border-t border-white/10 bg-[#050816]/95 px-6 py-5 md:hidden">
        {navItems.map((item) => <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-slate-300 transition-colors hover:text-cyan-300">{item.name}</Link>)}
        <a href="/cv/Curriculo-Juan-Pablo.pdf" download="Curriculo-Juan-Pablo.pdf" className="text-slate-300">Baixar currículo</a>
      </div>}
    </nav>
  );
}
