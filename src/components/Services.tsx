export default function Services() {
  const services = [
    {
      icon: '✓',
      title: 'Beauty Schulungen',
      desc: '8 professionelle Kurse mit anerkanntem Zertifikat. Theorie & Praxis in modernen Räumen – inkl. Hands-on Training an echten Modellen.',
    },
    {
      icon: '★',
      title: 'Marketing mit AUVIM',
      desc: 'Gemeinsam mit unserem starken Partner AUVIM bieten wir dir professionelles Marketing – von der Strategie bis zur Umsetzung. Social Media, Ads, Branding und mehr aus einer Hand.',
    },
    {
      icon: '⊕',
      title: 'Gründungsberatung',
      desc: 'Gewerbeanmeldung, rechtliche Grundlagen, Preiskalkulation. Wir führen dich Schritt für Schritt durch den Bürokratiedschungel.',
    },
    {
      icon: '◉',
      title: 'Versicherungen via Allianz',
      desc: 'Als offizieller Partner der Allianz vermitteln wir dir die passende Berufsabsicherung für dein Beauty-Business – schnell und unkompliziert.',
    },
    {
      icon: '▲',
      title: 'Beauty Geräte via ATM Beauty',
      desc: 'Exklusive Sonderpreise auf professionelle Beauty-Geräte über unseren Partner ATM Beauty. Direkt loslegen, ohne Kompromisse bei der Qualität.',
    },
  ];

  const steps = [
    'Schulung buchen & Zertifikat erhalten',
    'Gewerbe anmelden mit unserer Hilfe',
    'Versicherung über Allianz abschließen',
    'Profi-Geräte zum Sonderpreis bestellen',
    'Marketing mit AUVIM starten & Kunden gewinnen',
  ];

  return (
    <section id="leistungen" className="bg-[#111] py-20 md:py-[120px] px-6 md:px-[60px] relative overflow-hidden">
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(200,16,46,0.06)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="flex items-center gap-3 mb-5 reveal">
        <div className="w-[30px] h-[1px] bg-[#C8102E] shrink-0"></div>
        <span className="font-sans text-[11px] tracking-[4px] uppercase text-[#C8102E] font-medium">
          Unser Ökosystem
        </span>
      </div>
      <h2 className="font-serif text-[clamp(36px,4vw,60px)] font-light leading-[1.1] text-[#F8F5F0] mb-4 reveal">
        Mehr als eine Academy.<br />
        Dein komplettes <em className="text-[#C8102E] not-italic">Starterpaket.</em>
      </h2>
      <p className="font-sans text-[15px] leading-[1.8] text-[#F8F5F0]/60 max-w-[560px] reveal">
        Von der ersten Schulung bis zur erfolgreichen Selbstständigkeit – wir begleiten dich durch jeden Schritt.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-[60px] items-start">
        <div>
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`py-6 border-b border-[#F8F5F0]/10 flex gap-5 items-start transition-all duration-300 hover:pl-2 reveal ${idx === 0 ? 'border-t' : ''} ${idx % 2 !== 0 ? 'rd1' : ''}`}
            >
              <div className="min-w-[40px] w-[40px] h-[40px] border border-[#C8102E]/50 rounded flex items-center justify-center text-[#C8102E] bg-[#C8102E]/10 text-lg shrink-0">
                {service.icon}
              </div>
              <div>
                <div className="font-sans text-[17px] font-medium text-[#F8F5F0] mb-1.5">
                  {service.title}
                </div>
                <div className="font-sans text-[13px] leading-[1.7] text-[#F8F5F0]/60">
                  {service.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#1a0808] to-[#1a1a1a] border border-[#C8102E]/20 rounded-xl p-8 md:p-12 reveal rd2">
          <div className="font-sans text-[10px] tracking-[3px] uppercase text-[#C8102E] mb-4">
            Dein Weg zur Selbstständigkeit
          </div>
          <div className="font-serif text-[28px] font-light text-[#F8F5F0] mb-8 leading-[1.3]">
            Von Null zur erfolgreichen Beauty-Unternehmerin
          </div>
          {steps.map((step, idx) => (
            <div key={idx} className={`flex items-center gap-4 py-4 border-b border-[#F8F5F0]/5 ${idx === steps.length - 1 ? 'border-none' : ''}`}>
              <div className="w-7 h-7 min-w-[28px] bg-[#C8102E] rounded-full flex items-center justify-center font-sans text-xs font-medium text-[#F8F5F0]">
                {idx + 1}
              </div>
              <div className="font-sans text-[14px] text-[#F8F5F0]/70">
                {step}
              </div>
              <div className="ml-auto text-[#C8102E]">✓</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
