export default function Location() {
  return (
    <section id="standort" className="bg-[#080808] py-20 md:py-[120px] px-6 md:px-[60px]">
      <div className="flex items-center gap-3 mb-5 reveal">
        <div className="w-[30px] h-[1px] bg-[#C8102E] shrink-0"></div>
        <span className="font-sans text-[11px] tracking-[4px] uppercase text-[#C8102E] font-medium">
          Standort
        </span>
      </div>
      <h2 className="font-serif text-[clamp(36px,4vw,64px)] font-light leading-[1.1] text-[#F8F5F0] mb-4 reveal">
        Mitten in München.<br />
        <em className="text-[#C8102E] not-italic">Bestens erreichbar.</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mt-[60px]">
        <div className="flex flex-col gap-7 reveal">
          <div className="flex gap-5 items-start">
            <div className="w-11 h-11 min-w-[44px] border border-[#C8102E]/30 rounded flex items-center justify-center text-[#C8102E] text-lg bg-[#C8102E]/5">
              📍
            </div>
            <div>
              <div className="font-sans text-[11px] tracking-[2px] uppercase text-[#C8102E] mb-1">
                Adresse
              </div>
              <div className="font-sans text-[15px] leading-[1.6] text-[#F8F5F0]">
                Hubertusstraße 1<br />
                82110 Germering (München West)
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="w-11 h-11 min-w-[44px] border border-[#C8102E]/30 rounded flex items-center justify-center text-[#C8102E] text-lg bg-[#C8102E]/5">
              🕐
            </div>
            <div>
              <div className="font-sans text-[11px] tracking-[2px] uppercase text-[#C8102E] mb-1">
                Öffnungszeiten
              </div>
              <div className="font-sans text-[15px] leading-[1.6] text-[#F8F5F0]">
                Mo–Fr: 09:00 – 18:00 Uhr<br />
                Sa: nach Vereinbarung
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="w-11 h-11 min-w-[44px] border border-[#C8102E]/30 rounded flex items-center justify-center text-[#C8102E] text-lg bg-[#C8102E]/5">
              ✉
            </div>
            <div>
              <div className="font-sans text-[11px] tracking-[2px] uppercase text-[#C8102E] mb-1">
                Kontakt
              </div>
              <div className="font-sans text-[15px] leading-[1.6] text-[#F8F5F0]">
                <a href="mailto:info@aesthetics-academy.de" className="text-[#F8F5F0] hover:text-[#C8102E] transition-colors">
                  info@aesthetics-academy.de
                </a>
                <br />
                <a href="tel:+4989121914445" className="text-[#F8F5F0] hover:text-[#C8102E] transition-colors">
                  089 12191445
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-start">
            <div className="w-11 h-11 min-w-[44px] border border-[#C8102E]/30 rounded flex items-center justify-center text-[#C8102E] text-lg bg-[#C8102E]/5">
              🚆
            </div>
            <div>
              <div className="font-sans text-[11px] tracking-[2px] uppercase text-[#C8102E] mb-1">
                Anfahrt
              </div>
              <div className="font-sans text-[15px] leading-[1.6] text-[#F8F5F0]">
                S-Bahn S8: 15 Min. vom Hauptbahnhof<br />
                Kostenfreie Parkplätze vor Ort<br />
                Bus: Linie 864, Halt Germering Mitte
              </div>
            </div>
          </div>
          <a
            href="https://maps.google.com?q=Hubertusstraße+1,+82110+Germering"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-2 inline-block bg-[#C8102E] hover:bg-[#9E0C24] text-[#F8F5F0] px-9 py-4 rounded-sm font-sans text-xs font-medium tracking-[2px] uppercase transition-colors hover:-translate-y-[1px]"
          >
            In Google Maps öffnen
          </a>
        </div>
        <div className="bg-[#1a1a1a] border border-[#F8F5F0]/10 rounded-lg overflow-hidden h-[420px] reveal rd1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2663.5!2d11.3694!3d48.1351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9b3c3c3c3%3A0x1!2sHubertusstra%C3%9Fe+1%2C+82110+Germering!5e0!3m2!1sde!2sde!4v1"
            allowFullScreen
            loading="lazy"
            title="Aesthetics Academy Standort"
            className="w-full h-full border-none block"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
