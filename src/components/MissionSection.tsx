import { Eye, Flag, Zap } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#1A1A1A] via-black to-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-full h-full bg-gradient-to-br from-gold to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            NOSSA <span className="text-gold glow-gold">MISSÃO</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gold gradient-gold mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transformar vidas através do poder da moda premium acessível
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-black border-2 border-gold/30 group-hover:border-gold p-10 h-full transition-all duration-500 transform group-hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-5 bg-gold/10 group-hover:bg-gold transition-all duration-300">
                  <Flag className="w-12 h-12 text-gold group-hover:text-black transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-3xl font-black text-gold mb-4 text-center">MISSÃO</h3>
              <div className="h-1 w-16 bg-gold mx-auto mb-6" />
              <p className="text-gray-300 text-center leading-relaxed text-lg">
                <span className="font-bold text-white">Democratizar o acesso</span> a roupas premium,
                oferecendo marcas de luxo com preços justos, sem comprometer qualidade ou autenticidade.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-black border-2 border-gold/30 group-hover:border-gold p-10 h-full transition-all duration-500 transform group-hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-5 bg-gold/10 group-hover:bg-gold transition-all duration-300">
                  <Eye className="w-12 h-12 text-gold group-hover:text-black transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-3xl font-black text-gold mb-4 text-center">VISÃO</h3>
              <div className="h-1 w-16 bg-gold mx-auto mb-6" />
              <p className="text-gray-300 text-center leading-relaxed text-lg">
                <span className="font-bold text-white">Ser referência nacional</span> em moda premium acessível,
                reconhecida por elevar a autoestima e transformar a relação das pessoas com o luxo.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-black border-2 border-gold/30 group-hover:border-gold p-10 h-full transition-all duration-500 transform group-hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-5 bg-gold/10 group-hover:bg-gold transition-all duration-300">
                  <Zap className="w-12 h-12 text-gold group-hover:text-black transition-all duration-300" />
                </div>
              </div>
              <h3 className="text-3xl font-black text-gold mb-4 text-center">VALORES</h3>
              <div className="h-1 w-16 bg-gold mx-auto mb-6" />
              <p className="text-gray-300 text-center leading-relaxed text-lg">
                <span className="font-bold text-white">Autenticidade, qualidade e inclusão.</span> Acreditamos
                que todos merecem se sentir confiantes e estilosos, independente da origem.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-black via-gold/5 to-black border-y-2 border-gold/30 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8">
              NOSSO <span className="text-gold glow-gold">COMPROMISSO</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gold mt-2 flex-shrink-0 rotate-45" />
                  <p className="text-gray-300 text-lg">
                    <span className="font-bold text-gold">Elevar a autoestima</span> através do poder transformador da moda
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gold mt-2 flex-shrink-0 rotate-45" />
                  <p className="text-gray-300 text-lg">
                    <span className="font-bold text-gold">Garantir autenticidade</span> em cada peça comercializada
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gold mt-2 flex-shrink-0 rotate-45" />
                  <p className="text-gray-300 text-lg">
                    <span className="font-bold text-gold">Oferecer experiência premium</span> do atendimento à entrega
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gold mt-2 flex-shrink-0 rotate-45" />
                  <p className="text-gray-300 text-lg">
                    <span className="font-bold text-gold">Democratizar o luxo</span> sem comprometer a qualidade
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gold mt-2 flex-shrink-0 rotate-45" />
                  <p className="text-gray-300 text-lg">
                    <span className="font-bold text-gold">Criar conexões genuínas</span> com nossos clientes
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gold mt-2 flex-shrink-0 rotate-45" />
                  <p className="text-gray-300 text-lg">
                    <span className="font-bold text-gold">Inspirar confiança</span> e estilo em cada pessoa
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gold/10 border-2 border-gold">
              <p className="text-2xl font-bold text-white italic">
                "Acreditamos que a moda premium não é um privilégio, é um direito de quem deseja se expressar com autenticidade e confiança."
              </p>
              <p className="text-gold font-bold mt-4 text-lg">— Theus, CEO & Fundador TStore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
