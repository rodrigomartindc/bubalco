import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import HeroFull from '../components/HeroFull';
import About from '../components/About';
import NuestroTrabajo from '../components/NuestroTrabajo';
import MapsBlock from '../components/MapsBlock';
import Donations from '../components/Donations';
import BioparqueBlock from '../components/BioparqueBlock';
import FooterSlide from '../components/FooterSlide';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handle = () => setIsDesktop(mq.matches);
    handle();
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);

  useEffect(() => {
    const shouldEnable = isDesktop;

    document.documentElement.classList.toggle('desktop-home-snap', shouldEnable);
    document.body.classList.toggle('desktop-home-snap', shouldEnable);

    return () => {
      document.documentElement.classList.remove('desktop-home-snap');
      document.body.classList.remove('desktop-home-snap');
    };
  }, [isDesktop]);

  return (
    <>
      <div className="home-slides md:contents">
        {isDesktop && <Hero />}
        <HeroFull />
        <About />
        <NuestroTrabajo />
        <MapsBlock />
        <Donations />
        <FooterSlide />
      </div>
      {isDesktop && (
        <BioparqueBlock />
      )}
    </>
  );
}
