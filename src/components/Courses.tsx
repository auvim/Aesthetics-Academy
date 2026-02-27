export default function Courses() {
  const courses = [
    {
      num: '01',
      name: 'Wimpernverlängerungen',
      desc: 'Von Classic bis Volume & Mega Volume – lerne alle Techniken für professionelle Lashdesigns. Ideal als Einstieg in die Beauty-Branche.',
      tag: 'Zertifikat inklusive',
      wide: true,
    },
    {
      num: '02',
      name: 'PMU – Permanent Make-up',
      desc: 'Microblading, Powder Brows, Lip Blush & mehr. PMU ist eine der gefragtesten Techniken – wir machen dich zur Expertin.',
      tag: 'Hohe Verdienstmöglichkeiten',
      wide: true,
    },
    {
      num: '03',
      name: 'Microneedling',
      desc: 'Modernste Skin-Rejuvenation-Technik für Anti-Aging und Hautverbesserung.',
      tag: 'Trending',
    },
    {
      num: '04',
      name: 'Morpheus RF-Needling',
      desc: 'Radiofrequenz-gestütztes Needling für maximale Hautverjüngung. Premium-Behandlung.',
      tag: 'Premium',
    },
    {
      num: '05',
      name: 'Laser NISV',
      desc: 'Nicht-invasive Lasertechnologie für Tattooentfernung, Haarentfernung und Hautverbesserung.',
      tag: 'Zertifiziert',
    },
    {
      num: '06',
      name: 'Bodyforming',
      desc: 'Körperstraffung und Konturierung mit modernsten Geräten. Ein echter Wachstumsmarkt.',
      tag: 'Wachstumsmarkt',
    },
    {
      num: '07',
      name: 'Gesichtsbehandlung',
      desc: 'Das Fundament jedes Beauty-Studios. Von Reinigung über Peeling bis zur Massage.',
      tag: 'Bestseller',
    },
    {
      num: '08',
      name: 'Carbon Peeling',
      desc: 'Der Hollywood-Glow in einer Behandlung. Spektakuläre Sofortergebnisse für anspruchsvolle Kunden.',
      tag: 'Hollywood Facial',
    },
  ];

  return (
    <section id="kurse" className="bg-[#080808] py-20 md:py-[120px] px-6 md:px-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-end mb-20 reveal">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-[30px] h-[1px] bg-[#C8102E] shrink-0"></div>
            <span className="font-sans text-[11px] tracking-[4px] uppercase text-[#C8102E] font-medium">
              Unsere Kurse
            </span>
          </div>
          <h2 className="font-serif text-[clamp(36px,4vw,60px)] font-light leading-[1.1] text-[#F8F5F0]">
            Lerne von den<br />
            <em className="text-[#C8102E] not-italic">Besten</em> der Branche.
          </h2>
        </div>
        <p className="font-sans text-[14px] leading-[1.8] text-[#F8F5F0]/60 pl-10 border-l border-[#F8F5F0]/10">
          Alle Kurse werden von zertifizierten Experten geleitet und mit modernsten Geräten durchgeführt. Du erhältst ein anerkanntes Zertifikat – dein Ticket in die Selbstständigkeit.<br /><br />
          <a href="#kontakt" className="text-[#C8102E] text-xs tracking-[2px] uppercase font-sans hover:text-[#9E0C24] transition-colors">
            Kursberatung anfragen →
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
        {courses.map((course, idx) => (
          <article
            key={idx}
            className={`bg-[#111] hover:bg-[#1a1a1a] p-8 md:p-10 border border-[#F8F5F0]/10 relative overflow-hidden cursor-pointer transition-colors duration-400 group reveal
              ${course.wide ? 'sm:col-span-2' : 'col-span-1'}
              ${idx % 4 === 1 ? 'rd1' : idx % 4 === 2 ? 'rd2' : idx % 4 === 3 ? 'rd3' : ''}
            `}
          >
            <div className={`font-serif font-light text-[#C8102E]/20 leading-none mb-5 transition-colors duration-400 group-hover:text-[#C8102E]/40 ${course.wide ? 'text-[72px]' : 'text-[56px]'}`}>
              {course.num}
            </div>
            <h3 className={`font-serif font-normal leading-[1.2] mb-3 text-[#F8F5F0] ${course.wide ? 'text-[28px]' : 'text-[22px]'}`}>
              {course.name}
            </h3>
            <p className="font-sans text-[13px] leading-[1.7] text-[#F8F5F0]/60 mb-6">
              {course.desc}
            </p>
            <span className="inline-flex items-center font-sans text-[10px] tracking-[2px] uppercase text-[#C8102E] px-3 py-1 border border-[#C8102E]/30 rounded-full">
              {course.tag}
            </span>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8102E] transition-all duration-400 group-hover:w-full"></div>
          </article>
        ))}
      </div>
    </section>
  );
}
