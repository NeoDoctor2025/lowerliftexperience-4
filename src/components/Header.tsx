import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const getScrollTarget = (item: string) => {
    switch (item) {
      case 'Professores': return 'cirurgiões';
      case 'Depoimentos': return 'testimonials';
      case 'Inscreva-se': return 'investimento';
      default: return item.toLowerCase();
    }
  };

  return (
    <header role="banner" className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg border-b border-gold/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="font-playfair text-xl sm:text-2xl font-bold text-gold">
            LowerLift<span className="text-off-white">®</span>
          </div>
          
          <nav className="hidden lg:flex space-x-6 xl:space-x-8" role="navigation" aria-label="Menu principal">
            {['Sobre', 'Metodologia', 'Professores', 'Depoimentos', 'Inscreva-se'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(getScrollTarget(item))}
                className={`font-montserrat text-sm xl:text-base transition-colors duration-200 ${
                  item === 'Inscreva-se' 
                    ? 'text-gold hover:text-yellow-400 font-semibold' 
                    : 'text-off-white hover:text-gold'
                }`}
                aria-label={`Ir para seção ${item}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('investimento')}
            className="hidden lg:block bg-gradient-to-r from-gold to-yellow-600 text-navy px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-montserrat font-semibold text-sm xl:text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Garanta sua Vaga
          </button>

          <button
            className="lg:hidden text-off-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-gold/20 shadow-lg" role="navigation" aria-label="Menu mobile">
            <div className="px-4 py-4 space-y-2">
              {['Sobre', 'Metodologia', 'Professores', 'Depoimentos', 'Inscreva-se'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(getScrollTarget(item))}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-montserrat transition-colors duration-200 ${
                    item === 'Inscreva-se' 
                      ? 'text-gold hover:text-yellow-400 font-semibold hover:bg-gold/10' 
                      : 'text-off-white hover:text-gold hover:bg-white/10'
                  }`}
                  aria-label={`Ir para seção ${item}`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('investimento')}
                className="w-full mt-4 bg-gradient-to-r from-gold to-yellow-600 text-navy px-4 py-3 rounded-lg font-montserrat font-semibold text-center hover:shadow-lg transition-all duration-300"
              >
                Garanta sua Vaga
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;