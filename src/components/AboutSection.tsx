import { Store, Award, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-[#1A1A1A] to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            SOBRE A <span className="text-gold glow-gold">TStore</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gold gradient-gold mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais do que uma loja, somos um movimento que democratiza o acesso ao estilo premium
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#1A1A1A] p-8 border-2 border-transparent hover:border-gold transition-all duration-500 transform hover:scale-105 hover:shadow-gold group">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gold/10 rounded-full group-hover:bg-gold transition-all duration-300">
                <Store className="w-12 h-12 text-gold" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Nossa Essência</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Especializada em roupas premium das marcas mais desejadas do mercado: Lacoste, Tommy Hilfiger, Calvin Klein e muito mais.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8 border-2 border-transparent hover:border-gold transition-all duration-500 transform hover:scale-105 hover:shadow-gold group">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gold/10 rounded-full group-hover:bg-gold transition-all duration-300">
                <Award className="w-12 h-12 text-gold" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Qualidade Garantida</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Cada peça é cuidadosamente selecionada para garantir autenticidade, qualidade superior e durabilidade.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8 border-2 border-transparent hover:border-gold transition-all duration-500 transform hover:scale-105 hover:shadow-gold group">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gold/10 rounded-full group-hover:bg-gold transition-all duration-300">
                <TrendingUp className="w-12 h-12 text-gold" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Estilo Acessível</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Tornamos o luxo acessível, permitindo que todos experimentem a confiança de vestir marcas premium.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 p-12 border-l-4 border-gold">
          <h3 className="text-3xl font-bold text-white mb-6">Nossos Diferenciais</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gold mt-2 flex-shrink-0" />
              <p className="text-gray-300 text-lg">
                <span className="font-bold text-gold">Curadoria Exclusiva:</span> Seleção criteriosa de peças que combinam tendência e atemporalidade
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gold mt-2 flex-shrink-0" />
              <p className="text-gray-300 text-lg">
                <span className="font-bold text-gold">Atendimento Premium:</span> Experiência personalizada do primeiro contato à entrega
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gold mt-2 flex-shrink-0" />
              <p className="text-gray-300 text-lg">
                <span className="font-bold text-gold">Marcas Icônicas:</span> Portfolio com as grifes mais desejadas do mercado fashion
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gold mt-2 flex-shrink-0" />
              <p className="text-gray-300 text-lg">
                <span className="font-bold text-gold">Preços Justos:</span> Luxo acessível sem abrir mão da qualidade e autenticidade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
