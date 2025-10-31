import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CEOSection from './components/CEOSection';
import MissionSection from './components/MissionSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <CEOSection />
      <MissionSection />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App;
