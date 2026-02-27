export default function Marquee() {
  const items = [
    'Wimpernverlängerungen',
    'PMU',
    'Microneedling',
    'Morpheus RF',
    'Laser NISV',
    'Bodyforming',
    'Gesichtsbehandlung',
    'Carbon Peeling',
    'AUVIM Marketing',
    'Gründungsberatung',
    'ATM Beauty Geräte',
    'Allianz Versicherung',
  ];

  return (
    <div className="bg-[#111] border-y border-[#F8F5F0]/10 py-4 overflow-hidden" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-10 font-sans text-xs tracking-[3px] uppercase text-[#F8F5F0]/50 whitespace-nowrap"
          >
            <div className="w-1 h-1 bg-[#C8102E] rounded-full shrink-0"></div>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
