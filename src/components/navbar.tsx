
'use client'; // Add this directive for client-side interactivity

import Link from 'next/link';
import { useState } from 'react'; // Import useState for managing mobile menu state
import { Menu, X } from 'lucide-react'; // Import icons for menu toggle

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#inicio', type: 'link' },
    { name: 'Sobre', href: '#sobre', type: 'link' },
    { name: 'Habilidades', href: '#habilidades', type: 'link' },
    { name: 'Diagramação', href: '#diagramacao', type: 'link' },
    { name: 'Trabalhos', href: '#trabalhos', type: 'link' },
    { name: 'Certificados', href: '/certificados', type: 'link' },
    { name: 'Contato', href: '#contato', type: 'link' },
    { name: 'Currículo', href: '/cv/Curriculo-Juan-Pablo.pdf', type: 'download', downloadName: 'Curriculo-Juan-Pablo.pdf' }, // Added Currículo download link
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="#inicio" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" onClick={handleLinkClick}>
          Juan Pablo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => {
            if (item.type === 'download') {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  download={item.downloadName}
                  className="text-gray-300 hover:text-white transition duration-200 border border-purple-500 hover:bg-purple-500/20 px-3 py-1 rounded-md"
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link key={item.name} href={item.href} className="text-gray-300 hover:text-white transition duration-200">
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-300 hover:text-white focus:outline-none">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-sm absolute top-full left-0 right-0 shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => {
              if (item.type === 'download') {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    download={item.downloadName}
                    className="text-gray-300 hover:text-white transition duration-200 text-lg border border-purple-500 hover:bg-purple-500/20 px-4 py-2 rounded-md w-4/5 text-center"
                    onClick={handleLinkClick} // Close menu on link click
                  >
                    {item.name}
                  </a>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition duration-200 text-lg"
                  onClick={handleLinkClick} // Close menu on link click
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

