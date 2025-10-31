import { Heart, Sparkles, Target } from 'lucide-react';
import ceoImage from "../assets/CEO_Theus.jpg";


export default function CEOSection() {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold to-gold/30 blur-2xl opacity-30" />
              <img
                src={ceoImage}
                alt="CEO Theus"
                className="relative w-full h-[600px] object-cover border-4 border-gold shadow-gold rounded-xl"
              />

              <div className="absolute -bottom-6 -right-6 bg-gold text-black p-6 shadow-gold">
                <p className="text-3xl font-black">Matheus</p>
                <p className="text-sm font-semibold">CEO & Fundador</p>
              </div>
            </div>
          </div>

          <div className="slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-gold" />
              <h2 className="text-5xl md:text-6xl font-black text-white">
                A HISTÓRIA DE <span className="text-gold glow-gold">PAIXÃO</span>
              </h2>
            </div>

            <div className="h-1 w-24 bg-gold gradient-gold mb-8" />

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p className="text-xl font-semibold text-white">
                Aos 20 anos, nasceu a visão: transformar o modo de se vestir em algo versátil.
              </p>

              <p>
                Desde cedo, surgiu a ideia de transformar o modo de se vestir em algo <span className="text-gold font-semibold">versátil e contemporâneo.</span>
                Inspirada pelas vitrines e pela cultura urbana, a marca valoriza cada detalhe para entregar estilo com qualidade no dia a dia.
              </p>

              

              <div className="bg-gradient-to-r from-gold/10 to-transparent p-6 border-l-4 border-gold my-8">
                <p className="text-xl italic text-white font-semibold">
                  "Toda pessoa merece se sentir bem no que veste — acessível, com qualidade e estilo."
                </p>
              </div>

              <p>
                Assim nasceu a <span className="text-gold font-black text-xl">TStore</span> —
                uma loja criada não apenas para vender roupas, mas para elevar a autoestima,
                democratizar o acesso ao luxo e provar que <span className="text-gold font-semibold">
                todos merecem se vestir bem</span>.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-[#1A1A1A] p-6 border-l-4 border-gold">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-6 h-6 text-gold" />
                    <h4 className="text-white font-bold text-lg">Paixão</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Moda como forma de expressão e autoestima</p>
                </div>
                <div className="bg-[#1A1A1A] p-6 border-l-4 border-gold">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-6 h-6 text-gold" />
                    <h4 className="text-white font-bold text-lg">Propósito</h4>
                  </div>
                  <p className="text-gray-400 text-sm">Tornar o luxo acessível para todos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
