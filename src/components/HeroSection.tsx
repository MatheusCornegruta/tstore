import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../assets/Logo_TStore.png'; 
import camisetasLacoste from "../assets/casa_blanca_peitas.jpg";
import casaBlancaPeitas from "../assets/camisetas_lacoste.jpg";
import bagsLv from "../assets/casa_blanca_peitas_carosel.jpg";


const carouselImages = [
  {
    id: 1,
    title: "Lacoste Collection",
    subtitle: "Elegância Atemporal",
    image: camisetasLacoste
  },
  {
    id: 2,
    title: "Casa Blanca",
    subtitle: "Peitas Exclusivas",
    image: casaBlancaPeitas
  },
  {
    id: 3,
    title: "Louis Vuitton",
    subtitle: "Bags Premium",
    image: bagsLv
  }
];


export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {carouselImages.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <div className={`text-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          
          <div className="mb-8">
            <img 
              src={logo} 
              alt="TStore Logo" 
              className="mx-auto mb-6 w-48 md:w-64 object-cover rounded-full border-4 border-gold drop-shadow-[0_4px_12px_rgba(212,175,55,0.5)]"
            />
            <div className="h-1 w-32 mx-auto bg-gold gradient-gold" />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {carouselImages[currentSlide].title}
          </h2>
          <p className="text-lg md:text-xl text-gold font-semibold mb-8">
            {carouselImages[currentSlide].subtitle}
          </p>

          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gold text-black font-bold rounded-none hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-gold">
              EXPLORAR COLEÇÃO
            </button>
            <button className="px-8 py-4 border-2 border-gold text-gold font-bold rounded-none hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-105">
              NOSSA HISTÓRIA
            </button>
          </div>
        </div>

        {/* Botões do carrossel */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-gold/80 transition-all duration-300 group"
        >
          <ChevronLeft className="w-8 h-8 text-gold group-hover:text-black" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-gold/80 transition-all duration-300 group"
        >
          <ChevronRight className="w-8 h-8 text-gold group-hover:text-black" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all duration-300 ${
                index === currentSlide ? 'w-12 bg-gold' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
