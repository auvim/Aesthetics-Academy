export default function Marketing() {
  const packages = [
    {
      name: 'Starter',
      sub: 'Für den perfekten ersten Eindruck',
      features: [
        { text: 'Logo Design (3 Varianten)', included: true },
        { text: 'Visitenkarten Design', included: true },
        { text: 'Flyer (DIN A5, beidseitig)', included: true },
        { text: 'Einrichtung Social Media Profile', included: true },
        { text: 'Webseite', included: false },
        { text: 'Paid Ads Betreuung', included: false },
        { text: 'Monatliches Management', included: false },
      ],
      highlight: false,
    },
    {
      name: 'Professional',
      sub: 'Die komplette digitale Präsenz',
      badge: 'Beliebtestes Paket',
      features: [
        { text: 'Logo Design (5 Varianten)', included: true },
        { text: 'Visitenkarten & Flyer', included: true },
        { text: 'Professionelle Website (5 Seiten)', included: true },
        { text: 'Social Media Setup & Content Plan', included: true },
        { text: '2 Monate Social Media Betreuung', included: true },
        { text: 'Meta Ads Setup (Instagram & Facebook)', included: true },
        { text: 'Monatliches Management', included: false },
      ],
      highlight: true,
    },
    {
      name: 'Growth',
      sub: 'Für nachhaltiges Wachstum',
      features: [
        { text: 'Alles aus Professional', included: true },
        { text: 'Monatliches Social Media Management', included: true },
        { text: 'Monatliche Paid Ads (Meta + Google)', included: true },
        { text: 'Monatliches Reporting & Analyse', included: true },
        { text: 'TikTok Content Strategie', included: true },
        { text: 'Quartals-Strategie-Meeting', included: true },
        { text: 'Dedicated Account Manager', included: true },
      ],
      highlight: false,
    },
  ];

  return (
    <section id="marketing" className="bg-[#111] py-20 md:py-[120px] px-6 md:px-[60px]">
      <div className="flex items-center gap-3 mb-5 reveal">
        <div className="w-[30px] h-[1px] bg-[#C8102E] shrink-0"></div>
        <span className="font-sans text-[11px] tracking-[4px] uppercase text-[#C8102E] font-medium">
          Marketing Pakete
        </span>
      </div>
      <h2 className="font-serif text-[clamp(36px,4vw,64px)] font-light leading-[1.1] text-[#F8F5F0] mb-4 reveal">
        Deine Marke.<br />
        <em className="text-[#C8102E] not-italic">Dein Auftritt.</em> Fertig.
      </h2>
      <p className="font-sans text-[15px] leading-[1.8] text-[#F8F5F0]/60 max-w-[560px] reveal">
        Umgesetzt von unserem Partner <strong className="text-[#F8F5F0] font-medium">AUVIM</strong> – ob du gerade startest oder wachsen willst, wir haben das richtige Paket.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[60px]">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`bg-[#1a1a1a] border border-[#F8F5F0]/10 rounded-lg p-9 md:p-12 relative transition-transform duration-300 hover:-translate-y-1 reveal
              ${pkg.highlight ? 'border-[#C8102E] bg-gradient-to-br from-[#1a0808] to-[#1a1a1a] rd1' : idx === 2 ? 'rd2' : ''}
            `}
          >
            {pkg.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8102E] text-[#F8F5F0] text-[10px] tracking-[2px] uppercase px-4 py-1 rounded-full whitespace-nowrap font-sans">
                {pkg.badge}
              </div>
            )}
            <h3 className="font-serif text-[28px] font-light text-[#F8F5F0] mb-2">
              {pkg.name}
            </h3>
            <p className="font-sans text-[13px] text-[#F8F5F0]/50 mb-8 pb-8 border-b border-[#F8F5F0]/10">
              {pkg.sub}
            </p>
            <ul className="flex flex-col gap-3 mb-9">
              {pkg.features.map((feature, fIdx) => (
                <li
                  key={fIdx}
                  className={`flex items-start gap-2.5 font-sans text-sm leading-[1.5] ${feature.included ? 'text-[#F8F5F0]/70' : 'text-[#F8F5F0]/35'}`}
                >
                  <span className={`shrink-0 ${feature.included ? 'text-[#C8102E] font-semibold' : 'text-[#F8F5F0]/50'}`}>
                    {feature.included ? '✓' : '–'}
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className={`block text-center p-3.5 border rounded-sm font-sans text-xs tracking-[2px] uppercase transition-all duration-300
                ${pkg.highlight 
                  ? 'bg-[#C8102E] border-[#C8102E] text-[#F8F5F0] hover:bg-[#9E0C24] hover:border-[#9E0C24]' 
                  : 'border-[#F8F5F0]/15 text-[#F8F5F0]/60 hover:bg-[#C8102E] hover:border-[#C8102E] hover:text-[#F8F5F0]'
                }
              `}
            >
              Paket anfragen
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
