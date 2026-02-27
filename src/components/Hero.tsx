export default function Hero() {
  return (
    <div id="hero" className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#080808] overflow-hidden">
      <div className="flex flex-col justify-center px-6 md:px-[60px] pt-[100px] md:pt-[140px] pb-[60px] md:pb-[80px] relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-[30px] h-[1px] bg-[#C8102E] shrink-0"></div>
          <span className="font-sans text-[11px] tracking-[4px] uppercase text-[#C8102E] font-medium">
            München West · Großraum München
          </span>
        </div>
        <h1 className="font-serif text-[clamp(46px,5vw,78px)] font-light leading-[1.05] mb-7 text-[#F8F5F0]">
          Deine Karriere<br />
          in der <em className="text-[#C8102E] not-italic">Beauty-</em><br />
          Welt beginnt hier.
        </h1>
        <p className="font-sans text-[15px] leading-[1.8] text-[#F8F5F0]/60 max-w-[400px] mb-12">
          Professionelle Schulungen, modernste Technik, echte Expertise. Wir begleiten dich von der ersten Zertifizierung bis zur erfolgreichen Selbstständigkeit.
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <a
            href="#kurse"
            className="inline-block bg-[#C8102E] hover:bg-[#9E0C24] text-[#F8F5F0] px-9 py-4 rounded-sm font-sans text-xs font-medium tracking-[2px] uppercase transition-colors hover:-translate-y-[1px]"
          >
            Kurse entdecken
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-[#F8F5F0]/60 hover:text-[#F8F5F0] font-sans text-[13px] transition-colors"
          >
            Beratungsgespräch →
          </a>
        </div>
        <div className="flex gap-6 md:gap-10 mt-10 md:mt-[60px] pt-10 border-t border-[#F8F5F0]/10">
          <div>
            <div className="font-serif text-[42px] font-light text-[#F8F5F0] leading-none">
              8<span className="text-[#C8102E]">+</span>
            </div>
            <div className="font-sans text-[11px] tracking-[2px] uppercase text-[#F8F5F0]/60 mt-1.5">
              Kurse
            </div>
          </div>
          <div>
            <div className="font-serif text-[42px] font-light text-[#F8F5F0] leading-none">
              1<span className="text-[#C8102E]">:1</span>
            </div>
            <div className="font-sans text-[11px] tracking-[2px] uppercase text-[#F8F5F0]/60 mt-1.5">
              Betreuung
            </div>
          </div>
          <div>
            <div className="font-serif text-[42px] font-light text-[#F8F5F0] leading-none">
              360<span className="text-[#C8102E]">°</span>
            </div>
            <div className="font-sans text-[11px] tracking-[2px] uppercase text-[#F8F5F0]/60 mt-1.5">
              All-in-One
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden min-h-[320px] md:min-h-screen">
        <img
          src="http://aesthetics-academy.de/wp-content/uploads/2026/02/Aethethics-Academy_Hero.jpeg"
          alt="Moderne Schulungsräume der Aesthetics Academy München"
          className="absolute inset-0 w-full h-full object-cover object-center z-[1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-[#080808]/85 to-transparent z-[2] pointer-events-none"></div>
        <div className="hidden md:block absolute top-0 bottom-0 left-0 w-[100px] bg-gradient-to-r from-[#080808] to-transparent z-[2] pointer-events-none"></div>
      </div>
    </div>
  );
}
