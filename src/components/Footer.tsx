import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';


const siteName = import.meta.env.VITE_PUBLIC_SITE_NAME ?? 'TStore';
export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t-2 border-gold/30">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-5xl font-black text-gold gradient-gold bg-clip-text mb-4">
              TStore
            </h3>
            <div className="h-1 w-16 bg-gold mb-6" />
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Democratizando o acesso à moda premium. Estilo, qualidade e autoestima
              para todos que buscam se expressar através da moda.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-gold/10 hover:bg-gold flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-6 h-6 text-gold group-hover:text-black transition-all duration-300" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gold/10 hover:bg-gold flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="w-6 h-6 text-gold group-hover:text-black transition-all duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-all duration-300">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-all duration-300">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-all duration-300">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-all duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-gray-400">contato@tstore.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-gray-400">São Paulo - SP, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 TStore Store. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-gold text-sm transition-all duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-gold text-sm transition-all duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gold py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-black font-bold">
              Projeto autoral desenvolvido por <strong>Matheus Cornegruta</strong> — para fins de estudo e portfólio.
          </p>
        </div>
      </div>
    </footer>
  );
}
