export default function Footer() {
  return (
    <footer className="bg-[#111] border-t border-[#F8F5F0]/10" role="contentinfo">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-6 md:p-[60px]">
        <div className="lg:col-span-1.5">
          <a href="#hero" className="font-serif text-xl font-light tracking-[2px] uppercase text-[#F8F5F0] block mb-4">
            Aesthetics <span className="text-[#C8102E]">Academy</span>
          </a>
          <p className="font-sans text-[13px] leading-[1.7] text-[#F8F5F0]/50 max-w-[220px] mb-6">
            Die All-in-One Beauty Academy im Großraum München. Von der Schulung zur Selbstständigkeit.
          </p>
          <div className="flex gap-2.5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#F8F5F0]/10 rounded flex items-center justify-center text-[#F8F5F0]/50 text-[11px] font-sans font-semibold transition-all duration-300 hover:border-[#C8102E] hover:text-[#C8102E]" aria-label="Instagram">
              In
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#F8F5F0]/10 rounded flex items-center justify-center text-[#F8F5F0]/50 text-[11px] font-sans font-semibold transition-all duration-300 hover:border-[#C8102E] hover:text-[#C8102E]" aria-label="TikTok">
              Tt
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-[#F8F5F0]/10 rounded flex items-center justify-center text-[#F8F5F0]/50 text-[11px] font-sans font-semibold transition-all duration-300 hover:border-[#C8102E] hover:text-[#C8102E]" aria-label="Facebook">
              Fb
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-sans text-[11px] tracking-[3px] uppercase text-[#C8102E] font-medium mb-5">
            Kurse
          </h4>
          <ul className="flex flex-col gap-2.5">
            {['Wimpernverlängerungen', 'PMU', 'Microneedling', 'Morpheus RF-Needling', 'Laser NISV', 'Bodyforming', 'Gesichtsbehandlung', 'Carbon Peeling'].map((item, idx) => (
              <li key={idx}>
                <a href="#kurse" className="font-sans text-[13px] text-[#F8F5F0]/50 hover:text-[#F8F5F0] transition-colors leading-[1.5]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-[11px] tracking-[3px] uppercase text-[#C8102E] font-medium mb-5">
            Leistungen
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#marketing" className="font-sans text-[13px] text-[#F8F5F0]/50 hover:text-[#F8F5F0] transition-colors leading-[1.5]">Marketing Starter</a></li>
            <li><a href="#marketing" className="font-sans text-[13px] text-[#F8F5F0]/50 hover:text-[#F8F5F0] transition-colors leading-[1.5]">Marketing Professional</a></li>
            <li><a href="#marketing" className="font-sans text-[13px] text-[#F8F5F0]/50 hover:text-[#F8F5F0] transition-colors leading-[1.5]">Marketing Growth</a></li>
            <li><a href="#leistungen" className="font-sans text-[13px] text-[#F8F5F0]/50 hover:text-[#F8F5F0] transition-colors leading-[1.5]">Gründungsberatung</a></li>
            <li><a href="#leistungen" className="font-sans text-[13px] text-[#F8F5F0]/50 hover:text-[#F8F5F0] transition-colors leading-[1.5]">Versicherungen (Allianz)</a></li>
            <li><a href="#leistungen" className="font-sans text-[13px] text-[#F8F5F0]/50 hover:text-[#F8F5F0] transition-colors leading-[1.5]">Beauty Geräte (ATM)</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-[11px] tracking-[3px] uppercase text-[#C8102E] font-medium mb-5">
            Info
          </h4>
          <ul className="flex flex-col gap-2.5">
            <li><a href="#standort" className="font-sans text-[13px] text-[#F8F5F0]/50 hover:text-[#F8F5F0] transition-colors leading-[1.5]">Standort & Anfahrt</a></li>
            <li><a href="#kontakt" className="font-sans text-[13px] text-[#F8F5F0]/50 hover:text-[#F8F5F0] transition-colors leading-[1.5]">Kontakt</a></li>
            <li><a href="#" className="font-sans text-[13px] text-[#F8F5F0]/50 hover:text-[#F8F5F0] transition-colors leading-[1.5]">Impressum</a></li>
            <li><a href="#" className="font-sans text-[13px] text-[#F8F5F0]/50 hover:text-[#F8F5F0] transition-colors leading-[1.5]">Datenschutz</a></li>
            <li><a href="#" className="font-sans text-[13px] text-[#F8F5F0]/50 hover:text-[#F8F5F0] transition-colors leading-[1.5]">AGB</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-[#111] border-t border-[#F8F5F0]/[0.06] px-6 md:px-[60px] py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
        <p className="font-sans text-[12px] text-[#F8F5F0]/30">
          © {new Date().getFullYear()} Aesthetics Academy München. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-6">
          <a href="#" className="font-sans text-[12px] text-[#F8F5F0]/30 hover:text-[#F8F5F0]/60 transition-colors">Impressum</a>
          <a href="#" className="font-sans text-[12px] text-[#F8F5F0]/30 hover:text-[#F8F5F0]/60 transition-colors">Datenschutz</a>
          <a href="#" className="font-sans text-[12px] text-[#F8F5F0]/30 hover:text-[#F8F5F0]/60 transition-colors">AGB</a>
        </div>
      </div>
    </footer>
  );
}
