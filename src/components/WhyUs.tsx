export default function WhyUs() {
  const reasons = [
    {
      icon: '🎯',
      title: 'Praxisorientiert',
      desc: 'Bei uns lernst du, was wirklich gefragt ist. Kein Theorie-Überfluss – du gehst aus jedem Kurs mit echten, anwendbaren Fähigkeiten raus.',
    },
    {
      icon: '🏆',
      title: 'Zertifiziert & anerkannt',
      desc: 'Unsere Zertifikate sind in der Branche anerkannt. Du kannst direkt nach dem Kurs mit Kunden arbeiten – keine Wartezeit.',
    },
    {
      icon: '🚀',
      title: 'All-in-One Support',
      desc: 'Die einzige Academy, die dich nicht allein lässt. Marketing, Versicherung, Geräte, Gründung – wir lösen alle Probleme.',
    },
    {
      icon: '📍',
      title: 'Top Lage München',
      desc: 'Moderne Schulungsräume in Germering – 15 Minuten vom Münchner Hauptbahnhof, kostenfreie Parkplätze, S8-Anbindung.',
    },
    {
      icon: '💎',
      title: 'Kleine Gruppen',
      desc: 'Maximale Aufmerksamkeit für jeden Teilnehmer. In kleinen Gruppen lernst du mehr, schneller und baust echte Connections auf.',
    },
    {
      icon: '🤝',
      title: 'Starke Partner',
      desc: 'Allianz, ATM Beauty, AUVIM und weitere – du profitierst von Konditionen und Expertise, die du allein nie bekommen würdest.',
    },
  ];

  return (
    <section id="warum" className="bg-[#080808] py-20 md:py-[120px] px-6 md:px-[60px]">
      <div className="text-center max-w-[700px] mx-auto mb-20 reveal">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-[30px] h-[1px] bg-[#C8102E] shrink-0"></div>
          <span className="font-sans text-[11px] tracking-[4px] uppercase text-[#C8102E] font-medium">
            Warum Aesthetics Academy
          </span>
        </div>
        <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-light leading-[1.1] text-[#F8F5F0]">
          Kein Kurs wie jeder andere.<br />
          <em className="text-[#C8102E] not-italic">Erfahrung macht den Unterschied.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className={`bg-[#080808] p-10 md:p-12 border border-[#F8F5F0]/10 relative overflow-hidden transition-colors duration-400 hover:border-[#C8102E]/30 group reveal
              ${idx % 3 === 1 ? 'rd1' : idx % 3 === 2 ? 'rd2' : ''}
            `}
          >
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-[#C8102E] transition-all duration-400 group-hover:h-full"></div>
            <span className="text-4xl mb-5 block">{reason.icon}</span>
            <h3 className="font-serif text-2xl font-normal text-[#F8F5F0] mb-3">
              {reason.title}
            </h3>
            <p className="font-sans text-sm leading-[1.8] text-[#F8F5F0]/60">
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
