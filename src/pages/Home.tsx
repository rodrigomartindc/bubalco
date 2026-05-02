import Hero from '../components/Hero';
import About from '../components/About';
import NuestroTrabajo from '../components/NuestroTrabajo';
import MapsBlock from '../components/MapsBlock';
import Donations from '../components/Donations';
import BioparqueBlock from '../components/BioparqueBlock';

export default function Home() {
  return (
    <div className="home-slides md:contents">
      <Hero />
      <About />
      <NuestroTrabajo />
      <MapsBlock />
      <Donations />
      <BioparqueBlock />
    </div>
  );
}
