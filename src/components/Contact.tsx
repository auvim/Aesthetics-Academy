import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="kontakt" className="bg-gradient-to-br from-[#0f0505] to-[#080808] border-t border-[#C8102E]/20 py-20 md:py-[120px] px-6 md:px-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div className="reveal">
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light leading-[1.1] text-[#F8F5F0] mb-6">
            Bereit für deine<br />
            <em className="text-[#C8102E] not-italic">nächste Stufe?</em>
          </h2>
          <p className="font-sans text-[15px] leading-[1.8] text-[#F8F5F0]/60 max-w-[400px] mb-10">
            Schreib uns, ruf an oder komm vorbei. Wir beraten dich unverbindlich und finden den Kurs oder das Paket, das perfekt zu dir passt.
          </p>
          <div className="flex flex-col gap-4">
            <a href="mailto:info@aesthetics-academy.de" className="flex items-center gap-3.5 text-[#F8F5F0]/60 hover:text-[#F8F5F0] font-sans text-sm transition-colors group">
              <div className="w-9 h-9 min-w-[36px] border border-[#C8102E]/30 rounded flex items-center justify-center text-[#C8102E] text-sm bg-[#C8102E]/5 transition-all duration-300 font-sans font-semibold group-hover:bg-[#C8102E] group-hover:text-[#F8F5F0] group-hover:border-[#C8102E]">
                ✉
              </div>
              info@aesthetics-academy.de
            </a>
            <a href="tel:+4989121914445" className="flex items-center gap-3.5 text-[#F8F5F0]/60 hover:text-[#F8F5F0] font-sans text-sm transition-colors group">
              <div className="w-9 h-9 min-w-[36px] border border-[#C8102E]/30 rounded flex items-center justify-center text-[#C8102E] text-sm bg-[#C8102E]/5 transition-all duration-300 font-sans font-semibold group-hover:bg-[#C8102E] group-hover:text-[#F8F5F0] group-hover:border-[#C8102E]">
                ☎
              </div>
              089 12191445
            </a>
            <a href="https://instagram.com/aestheticsacademy.de" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 text-[#F8F5F0]/60 hover:text-[#F8F5F0] font-sans text-sm transition-colors group">
              <div className="w-9 h-9 min-w-[36px] border border-[#C8102E]/30 rounded flex items-center justify-center text-[#C8102E] text-sm bg-[#C8102E]/5 transition-all duration-300 font-sans font-semibold group-hover:bg-[#C8102E] group-hover:text-[#F8F5F0] group-hover:border-[#C8102E]">
                In
              </div>
              @aestheticsacademy.de
            </a>
            <a href="https://tiktok.com/@aestheticsacademy.de" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 text-[#F8F5F0]/60 hover:text-[#F8F5F0] font-sans text-sm transition-colors group">
              <div className="w-9 h-9 min-w-[36px] border border-[#C8102E]/30 rounded flex items-center justify-center text-[#C8102E] text-sm bg-[#C8102E]/5 transition-all duration-300 font-sans font-semibold group-hover:bg-[#C8102E] group-hover:text-[#F8F5F0] group-hover:border-[#C8102E]">
                Tt
              </div>
              @aestheticsacademy.de
            </a>
          </div>
        </div>

        <div className="reveal rd2">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fn" className="font-sans text-[11px] tracking-[2px] uppercase text-[#F8F5F0]/50">Vorname</label>
                <input type="text" id="fn" placeholder="Maria" required autoComplete="given-name" className="bg-[#111] border border-[#F8F5F0]/10 rounded-sm px-[18px] py-3.5 text-[#F8F5F0] font-sans text-sm font-light outline-none transition-colors duration-300 w-full focus:border-[#C8102E]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="ln" className="font-sans text-[11px] tracking-[2px] uppercase text-[#F8F5F0]/50">Nachname</label>
                <input type="text" id="ln" placeholder="Müller" required autoComplete="family-name" className="bg-[#111] border border-[#F8F5F0]/10 rounded-sm px-[18px] py-3.5 text-[#F8F5F0] font-sans text-sm font-light outline-none transition-colors duration-300 w-full focus:border-[#C8102E]" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="em" className="font-sans text-[11px] tracking-[2px] uppercase text-[#F8F5F0]/50">E-Mail</label>
              <input type="email" id="em" placeholder="maria@beispiel.de" required autoComplete="email" className="bg-[#111] border border-[#F8F5F0]/10 rounded-sm px-[18px] py-3.5 text-[#F8F5F0] font-sans text-sm font-light outline-none transition-colors duration-300 w-full focus:border-[#C8102E]" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="ph" className="font-sans text-[11px] tracking-[2px] uppercase text-[#F8F5F0]/50">Telefon</label>
              <input type="tel" id="ph" placeholder="089 12191445" autoComplete="tel" className="bg-[#111] border border-[#F8F5F0]/10 rounded-sm px-[18px] py-3.5 text-[#F8F5F0] font-sans text-sm font-light outline-none transition-colors duration-300 w-full focus:border-[#C8102E]" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="int" className="font-sans text-[11px] tracking-[2px] uppercase text-[#F8F5F0]/50">Interesse</label>
              <select id="int" required defaultValue="" className="bg-[#111] border border-[#F8F5F0]/10 rounded-sm px-[18px] py-3.5 text-[#F8F5F0] font-sans text-sm font-light outline-none transition-colors duration-300 w-full focus:border-[#C8102E] appearance-none">
                <option value="" disabled>Kurs oder Paket auswählen...</option>
                <optgroup label="Beauty Kurse">
                  <option>Wimpernverlängerungen</option>
                  <option>PMU – Permanent Make-up</option>
                  <option>Microneedling</option>
                  <option>Morpheus RF-Needling</option>
                  <option>Laser NISV</option>
                  <option>Bodyforming</option>
                  <option>Gesichtsbehandlung</option>
                  <option>Carbon Peeling</option>
                </optgroup>
                <optgroup label="Marketing Pakete">
                  <option>Starter Paket</option>
                  <option>Professional Paket</option>
                  <option>Growth Paket</option>
                </optgroup>
                <optgroup label="Sonstiges">
                  <option>Gründungsberatung</option>
                  <option>Versicherungsberatung (Allianz)</option>
                  <option>Beauty Geräte (ATM Beauty)</option>
                  <option>Allgemeine Anfrage</option>
                </optgroup>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="msg" className="font-sans text-[11px] tracking-[2px] uppercase text-[#F8F5F0]/50">Nachricht (optional)</label>
              <textarea id="msg" placeholder="Erzähl uns kurz von dir und deinen Zielen..." className="bg-[#111] border border-[#F8F5F0]/10 rounded-sm px-[18px] py-3.5 text-[#F8F5F0] font-sans text-sm font-light outline-none transition-colors duration-300 w-full focus:border-[#C8102E] min-h-[120px] resize-y"></textarea>
            </div>
            <button
              type="submit"
              className={`w-full py-[18px] rounded-sm font-sans text-[13px] font-medium tracking-[2px] uppercase cursor-pointer transition-colors duration-300 border-none ${
                submitted ? 'bg-[#1a7a1a] text-[#F8F5F0]' : 'bg-[#C8102E] text-[#F8F5F0] hover:bg-[#9E0C24]'
              }`}
            >
              {submitted ? '✓ Anfrage gesendet!' : 'Unverbindlich anfragen →'}
            </button>
            <p className="font-sans text-[11px] text-[#F8F5F0]/30 text-center">
              Wir melden uns innerhalb von 24 Stunden. Keine Spam-Mails.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
