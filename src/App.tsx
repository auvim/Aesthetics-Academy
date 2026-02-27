/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Courses from './components/Courses';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Marketing from './components/Marketing';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-800', 'ease-out');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F8F5F0] font-sans font-light selection:bg-[#C8102E] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Courses />
        <Services />
        <WhyUs />
        <Marketing />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
