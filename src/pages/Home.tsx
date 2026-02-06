import Hero from '../components/Hero';
import About from '../components/About';
import Impact from '../components/Impact';
import Location from '../components/Location';
import Donations from '../components/Donations';
import FooterSlide from '../components/FooterSlide';

export default function Home() {
  return (
    <div className="home-slides md:contents">
      <Hero />
      <About />
      <Impact />
      <Location />
      <Donations />
      <FooterSlide />
    </div>
  );
}
