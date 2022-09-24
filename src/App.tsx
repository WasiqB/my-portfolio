import { Blogs } from './components/blogs';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { HeroSection } from './components/hero-section';
import { Navbar } from './components/navbar';
import { Pricing } from './components/pricing';
import { Stats } from './components/stats';
import { Steps } from './components/steps';
import { Teams } from './components/teams';
import { Testimonials } from './components/testimonials';
import './styles.css';

export const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Stats />
      <Content />
      <Steps />
      <Blogs />
      <Testimonials />
      <Teams />
      <Pricing />
      <Footer />
    </div>
  );
};
