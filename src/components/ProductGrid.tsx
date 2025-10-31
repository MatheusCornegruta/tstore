import { useState } from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import poloLacosteClassic from "../assets/polo_lacoste_classic.jpg";
import camisaTommyHilfiger from "../assets/camisa_tommy_hilfiger.jpg";
import calcaCalvinKlein from "../assets/calca_calvin_klein_slim.jpg";
import jaquetaLacoste from "../assets/jaqueta_lacoste_premium.jpg";
import sueterTommy from "../assets/sueter_tommy_listrado.jpg";
/*import bermudaLacoste from "../assets/bermuda_lacoste_sport.jpg";
import blazerCalvinKlein from "../assets/blazer_calvin_klein.jpg";
import camisetaTommyLogo from "../assets/camiseta_tommy_logo.jpg";
import moletomLacosteBlack from "../assets/moletom_lacoste_black.jpg";*/


const products = [
  {
    id: 1,
    name: "Polo Lacoste Classic",
    brand: "Lacoste",
    price: "R$ 299,90",
    category: "Camisas",
    image: poloLacosteClassic,
    rating: 5
  },
  {
    id: 2,
    name: "Camisa Tommy Hilfiger",
    brand: "Tommy Hilfiger",
    price: "R$ 349,90",
    category: "Camisas",
    image: camisaTommyHilfiger,
    rating: 5
  },
  {
    id: 3,
    name: "Calça Calvin Klein Slim",
    brand: "Calvin Klein",
    price: "R$ 449,90",
    category: "Calças",
    image: calcaCalvinKlein,
    rating: 5
  },
  {
    id: 4,
    name: "Jaqueta Lacoste Premium",
    brand: "Lacoste",
    price: "R$ 699,90",
    category: "Jaquetas",
    image: jaquetaLacoste,
    rating: 5
  },
  {
    id: 5,
    name: "Suéter Tommy Listrado",
    brand: "Tommy Hilfiger",
    price: "R$ 399,90",
    category: "Suéteres",
    image: sueterTommy,
    rating: 5
  },
  /*{
    id: 6,
    name: "Bermuda Lacoste Sport",
    brand: "Lacoste",
    price: "R$ 279,90",
    category: "Bermudas",
    image: bermudaLacoste,
    rating: 5
  },
  {
    id: 7,
    name: "Blazer Calvin Klein",
    brand: "Calvin Klein",
    price: "R$ 899,90",
    category: "Blazers",
    image: blazerCalvinKlein,
    rating: 5
  },
  {
    id: 8,
    name: "Camiseta Tommy Logo",
    brand: "Tommy Hilfiger",
    price: "R$ 189,90",
    category: "Camisetas",
    image: camisetaTommyLogo,
    rating: 5
  },
  {
    id: 9,
    name: "Moletom Lacoste Black",
    brand: "Lacoste",
    price: "R$ 549,90",
    category: "Moletons",
    image: moletomLacosteBlack,
    rating: 5
  }*/
];


const categories = ['Todos', 'Casa Blanca', 'Lacoste'/*, 'Jaquetas', 'Suéteres', 'Bermudas', 'Blazers', 'Camisetas', 'Moletons'];*/];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            VITRINE <span className="text-gold glow-gold">PREMIUM</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gold gradient-gold mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore nossa seleção exclusiva de peças das marcas mais desejadas do mercado
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-bold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold text-black shadow-gold'
                  : 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#1A1A1A] overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
                />

                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center fade-in">
                    <button className="px-8 py-4 bg-gold text-black font-bold flex items-center gap-3 transform hover:scale-105 transition-all duration-300 shadow-gold">
                      <ShoppingBag className="w-5 h-5" />
                      VER DETALHES
                    </button>
                  </div>
                )}

                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-gold text-black px-4 py-2 text-sm font-bold">
                    {product.brand}
                  </span>
                </div>
              </div>

              <div className="p-6 border-2 border-transparent group-hover:border-gold transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-all duration-300">
                  {product.name}
                </h3>

                <p className="text-gray-400 text-sm mb-4">{product.category}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-gold">{product.price}</span>
                  <div className="w-10 h-10 bg-gold/10 group-hover:bg-gold flex items-center justify-center transition-all duration-300">
                    <ShoppingBag className="w-5 h-5 text-gold group-hover:text-black transition-all duration-300" />
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left" />
              <div className="absolute bottom-0 right-0 w-1 h-full bg-gold transform scale-y-0 group-hover:scale-y-100 transition-all duration-500 origin-bottom" />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-12 py-5 bg-transparent border-2 border-gold text-gold font-bold text-lg hover:bg-gold hover:text-black transition-all duration-300 transform hover:scale-105">
            VER CATÁLOGO COMPLETO
          </button>
        </div>
      </div>
    </section>
  );
}
