import React from 'react';
import { MessageCircle, ArrowDown, User, Sparkles, Heart, CalendarCheck, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenQuiz }) => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#fcfaf7] via-[#faf5ef] to-[#fcfaf7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Texto */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Badge Pequeño / Texto Superior */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e7ded3] shadow-xs">
              <span className="text-[#c5a089] text-xs">✦</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7a5a45]">
                Atención personalizada en Morón
              </span>
            </div>

            {/* Título Principal Editorial */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1e1a17] font-normal tracking-tight leading-[1.12]">
              Realzá tu <span className="italic font-normal text-[#7a5a45]">belleza natural</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg text-[#4a433d] max-w-xl font-light leading-relaxed">
              Tratamientos faciales pensados para cuidar tu piel, resaltar tu bienestar y acompañarte con una atención profesional y personalizada.
            </p>

            {/* Dos Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href={getWhatsAppUrl('Hola Estética Amorella, deseo consultar por un turno para tratamiento facial.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#c5a089] hover:bg-[#b48f78] text-white font-medium text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <MessageCircle className="w-5 h-5 fill-white transition-transform group-hover:scale-110" />
                <span>Consultar por WhatsApp</span>
              </a>

              <a
                href="#tratamientos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#f6f2ec] text-[#1e1a17] border border-[#e7ded3] font-medium text-xs uppercase tracking-widest shadow-xs hover:shadow-sm transition-all duration-300"
              >
                <span>Ver tratamientos</span>
                <ArrowDown className="w-4 h-4 text-[#7a5a45]" />
              </a>
            </div>

            {/* 4 Mini Indicadores de Confianza */}
            <div className="w-full pt-8 mt-4 border-t border-[#e7ded3]/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#f9f3ef] flex items-center justify-center text-[#7a5a45] shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#1e1a17] leading-tight">
                  Atención personalizada
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#f9f3ef] flex items-center justify-center text-[#7a5a45] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#1e1a17] leading-tight">
                  Tratamientos faciales
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#f9f3ef] flex items-center justify-center text-[#7a5a45] shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#1e1a17] leading-tight">
                  Bienestar y cuidado
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#f9f3ef] flex items-center justify-center text-[#7a5a45] shrink-0">
                  <CalendarCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-[#1e1a17] leading-tight">
                  Turnos por WhatsApp
                </span>
              </div>
            </div>

          </div>

          {/* Columna Imagen Hero */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Aura cálida de fondo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#eeddd3]/60 to-[#c5a089]/20 rounded-3xl blur-2xl -z-10"></div>
              
              {/* Contenedor con la Fotografía Principal */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwOZh8xg0DTGlA2AUzcR6InI61ah3WAOvhUo-MnaS2XUXuCcso1VagAuU9E60LjUwSPJQc1F-IqHBui8zXGuzCfi3o3GrhNMMX8i5BSaZh_2BzsXEIIsFMQfYdj8XbTC_CGN_j81P8hiGarVepPC6KxUhIomONPTHVoQ8b1HtBP5hvnJSa6CgxapyulxyZNOX7Z5s5vPmNmmoYGc9n8I9op1qYM0Uk0ChLvA1l2PkrWio24Xoh4HGQ"
                  alt="Tratamiento facial estético en Amorella"
                  className="w-full h-[450px] lg:h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Badge flotante de certificación / calidez */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-[#e7ded3]/80 flex items-center gap-4 transition-all duration-300 hover:bg-white">
                  <div className="w-12 h-12 rounded-xl bg-[#f9f3ef] text-[#7a5a45] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-editorial text-base text-[#1e1a17] font-medium">
                      Experiencia Boutique
                    </span>
                    <span className="text-xs text-[#7c7268]">
                      Diagnóstico previo sin costo adicional
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
