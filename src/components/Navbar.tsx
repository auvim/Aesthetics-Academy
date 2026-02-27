import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[99999] h-[72px] px-6 md:px-[60px] flex items-center justify-between transition-colors duration-400 ${
          scrolled ? 'bg-[#080808]/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <a href="#hero" className="font-serif text-xl font-light tracking-[3px] uppercase text-[#F8F5F0] whitespace-nowrap flex-shrink-0 leading-none">
          Aesthetics <span className="text-[#C8102E]">Academy</span>
        </a>
        
        <div className="hidden md:flex items-center gap-7">
          {['Kurse', 'Leistungen', 'Marketing', 'Standort'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#F8F5F0]/60 hover:text-[#F8F5F0] font-sans text-xs tracking-[1.5px] uppercase transition-colors relative group whitespace-nowrap leading-none"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C8102E] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-[#C8102E] hover:bg-[#9E0C24] text-[#F8F5F0] px-[18px] py-[9px] rounded-sm font-sans text-xs tracking-[1.5px] uppercase transition-colors whitespace-nowrap leading-none"
          >
            Jetzt Buchen
          </a>
        </div>

        <button
          className="md:hidden text-[#F8F5F0] p-1"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Menü öffnen"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#080808] z-[99998] flex-col items-center justify-center gap-9 transition-opacity duration-300 ${
          mobileMenuOpen ? 'flex opacity-100' : 'hidden opacity-0'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-[#F8F5F0] p-1"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Menü schließen"
        >
          <X size={32} />
        </button>
        {['Kurse', 'Leistungen', 'Marketing', 'Standort', 'Kontakt'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            className="font-serif text-4xl font-light text-[#F8F5F0] tracking-[2px] hover:text-[#C8102E] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}
