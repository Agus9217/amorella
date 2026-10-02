import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { LOGO_URL, getWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenQuiz }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fcfaf7]/95 backdrop-blur-md border-b border-[#e7ded3]/70 shadow-xs'
          : 'bg-[#fcfaf7]/90 backdrop-blur-sm border-b border-[#e7ded3]/40'
      }`}
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 h-[68px] sm:h-[72px] flex items-center justify-between gap-3 md:gap-6">
        
        {/* Zona 1: Identidad de Marca (Izquierda) */}
        <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-white shadow-xs border border-[#e7ded3]/70 p-1 flex items-center justify-center shrink-0">
            <img
              src={LOGO_URL}
              alt="Logo Estética Amorella"
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-[16px] sm:text-[19px] tracking-wide text-[#1e1a17] font-medium leading-tight group-hover:text-[#7a5a45] transition-colors whitespace-nowrap">
              Estética Amorella
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-[#7c7268] font-semibold whitespace-nowrap">
              Boutique Facial • Morón
            </span>
          </div>
        </a>

        {/* Zona 2: Navegación Central (5 enlaces limpios en una sola línea) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 whitespace-nowrap shrink">
          <a
            href="#inicio"
            className="text-xs xl:text-sm tracking-wider text-[#4a433d] hover:text-[#c5a089] font-medium transition-colors"
          >
            Inicio
          </a>
          <a
            href="#tratamientos"
            className="text-xs xl:text-sm tracking-wider text-[#4a433d] hover:text-[#c5a089] font-medium transition-colors"
          >
            Tratamientos
          </a>
          <a
            href="#nosotros"
            className="text-xs xl:text-sm tracking-wider text-[#4a433d] hover:text-[#c5a089] font-medium transition-colors"
          >
            Sobre Amorella
          </a>
          <a
            href="#galeria"
            className="text-xs xl:text-sm tracking-wider text-[#4a433d] hover:text-[#c5a089] font-medium transition-colors"
          >
            Resultados
          </a>
          <a
            href="#contacto"
            className="text-xs xl:text-sm tracking-wider text-[#4a433d] hover:text-[#c5a089] font-medium transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* Zona 3: WhatsApp CTA (solo desktop/tablet) y Toggle Móvil */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppUrl('Hola Estética Amorella, deseo consultar por un tratamiento facial.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar por WhatsApp"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c5a089] text-white font-medium text-xs tracking-wider uppercase hover:bg-[#b48f78] shadow-xs hover:shadow transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>Consultar por WhatsApp</span>
          </a>

          {/* Botón Menú Móvil - Siempre visible y cómodo en mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="lg:hidden p-2.5 rounded-xl text-[#1e1a17] bg-[#f6f2ec]/60 hover:bg-[#f6f2ec] active:bg-[#eee8df] border border-[#e7ded3]/60 transition-colors shrink-0 cursor-pointer flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#e7ded3] px-6 py-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-4 text-center">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-[#1e1a17] font-semibold py-2"
            >
              Inicio
            </a>
            <a
              href="#tratamientos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-[#7c7268] hover:text-[#1e1a17] py-2"
            >
              Tratamientos
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              type="button"
              className="text-sm uppercase tracking-widest text-[#7a5a45] font-semibold py-2"
            >
              ✦ Test Diagnóstico de Piel
            </button>
            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-[#7c7268] hover:text-[#1e1a17] py-2"
            >
              Sobre Amorella
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-[#7c7268] hover:text-[#1e1a17] py-2"
            >
              Resultados &amp; Galería
            </a>
            <a
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-[#7c7268] hover:text-[#1e1a17] py-2"
            >
              Testimonios
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-[#7c7268] hover:text-[#1e1a17] py-2"
            >
              Contacto
            </a>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full border border-[#c5a089] text-[#7a5a45] font-medium text-xs tracking-wider uppercase bg-[#f9f3ef]"
              >
                Agendar Cita en Morón
              </button>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-full bg-[#c5a089] text-white font-medium text-xs tracking-wider uppercase shadow-md hover:bg-[#b48f78] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
