import React from 'react';
import { MapPin, Clock, MessageCircle, Instagram, Calendar } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#f6f2ec]/80 border-t border-[#e7ded3] py-16 text-[#4a433d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Columna 1: Logo & Resumen */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white p-1 border border-[#e7ded3] shadow-xs flex items-center justify-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcljt_fqZ_BmgF1V1m7vb3DDmVHVY2X0Ui6dkZtwkSSxoQF8qf-xS60oFDNGSjWdc4V8uNf2FsrwkklHWS2rQI1mGsc1vBX28k_ZoNxP0M1E8QgfR_v35YMWo4JsiZqOib_hdz0tNAlcgrtkETlb_XUb48gObDt_lB5BK5W2ZpAQIciPgiPO_jGtHdWyn37ZrhxmLHrMFDwI_wfKwFwFQOn0cR-HZzv2BJJs3ql0twgmybxEx2ph1axDn8AQv-nJs1Hw"
                alt="Estética Amorella"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg text-[#1e1a17] font-medium leading-none">
                Estética Amorella
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#7c7268] font-semibold mt-1">
                Cuidado Facial • Morón
              </span>
            </div>
          </div>

          <p className="text-xs text-[#7c7268] font-light leading-relaxed pr-2">
            Espacio boutique dedicado al cuidado facial consciente, la armonía dérmica y el bienestar integral en Morón, Buenos Aires.
          </p>

          <div className="pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#7a5a45] hover:text-[#c5a089] hover:underline transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#c5a089]" />
              <span>@estetica.amorella</span>
            </a>
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1e1a17]">
            Navegación
          </span>
          <ul className="flex flex-col gap-2 text-xs text-[#7c7268]">
            <li>
              <a href="#inicio" className="hover:text-[#1e1a17] transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#beneficios" className="hover:text-[#1e1a17] transition-colors">
                Beneficios
              </a>
            </li>
            <li>
              <a href="#tratamientos" className="hover:text-[#1e1a17] transition-colors">
                Tratamientos Faciales
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-[#1e1a17] transition-colors">
                Sobre Amorella
              </a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-[#1e1a17] transition-colors">
                Galería y Resultados
              </a>
            </li>
            <li>
              <a href="#testimonios" className="hover:text-[#1e1a17] transition-colors">
                Testimonios de Clientas
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-[#1e1a17] transition-colors">
                Contacto directo
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Ubicación y Citas */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1e1a17]">
            Ubicación &amp; Turnos
          </span>
          <div className="flex flex-col gap-3 text-xs text-[#7c7268]">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#c5a089] shrink-0 mt-0.5" />
              <span>Morón Centro, Zona Oeste, Buenos Aires</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-[#c5a089] shrink-0 mt-0.5" />
              <span>Lunes a Sábados con cita previa exclusiva</span>
            </div>
            <div className="flex items-start gap-2">
              <MessageCircle className="w-4 h-4 text-[#c5a089] shrink-0 mt-0.5" />
              <a
                href={getWhatsAppUrl('Hola Estética Amorella, deseo consultar turnos disponibles.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7a5a45] font-semibold hover:underline"
              >
                Turnos vía WhatsApp (+54 9 11)
              </a>
            </div>
          </div>
        </div>

        {/* Columna 4: Atención Exclusiva */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1e1a17]">
            Atención Exclusiva
          </span>
          <p className="text-xs text-[#7c7268] font-light leading-relaxed">
            Cada cita es 100% personalizada y a gabinete cerrado para asegurar tu privacidad y confort.
          </p>
          <button
            onClick={onOpenBooking}
            type="button"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#e7ded3] text-[#1e1a17] hover:bg-[#f6f2ec] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#c5a089]" />
            <span>Agendar Turno</span>
          </button>
        </div>

      </div>

      {/* Barra Inferior */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-[#e7ded3]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7c7268]">
        <p>© 2025 Estética Amorella. Todos los derechos reservados. Morón, Buenos Aires.</p>
        <p className="font-editorial italic text-[#7a5a45]">
          Cuidado facial consciente • Belleza natural • Bienestar
        </p>
      </div>
    </footer>
  );
};
