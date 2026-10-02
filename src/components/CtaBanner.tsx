import React from 'react';
import { MessageCircle, CheckCircle, MapPin, Lock } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const CtaBanner: React.FC = () => {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#fcfaf7]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl p-10 sm:p-16 bg-gradient-to-br from-white via-[#f9f3ef] to-[#f4ebe3] border border-[#e7ded3] shadow-xl text-center flex flex-col items-center gap-6 overflow-hidden">
          
          {/* Destellos sutiles de fondo */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#c5a089]/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#eeddd3]/60 blur-3xl pointer-events-none"></div>

          {/* Ícono de Marca */}
          <div className="w-16 h-16 rounded-full bg-white shadow-xs flex items-center justify-center border border-[#e7ded3]/80">
            <MessageCircle className="w-8 h-8 text-[#7a5a45]" />
          </div>

          {/* Título y Texto */}
          <div className="max-w-2xl flex flex-col gap-3">
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1e1a17] font-normal tracking-tight">
              ¿Querés consultar por tu tratamiento ideal?
            </h2>
            <p className="text-base sm:text-lg text-[#4a433d] font-light leading-relaxed">
              Escribinos por WhatsApp y te ayudamos a encontrar la mejor opción para vos.
            </p>
          </div>

          {/* Botón Principal */}
          <a
            href={getWhatsAppUrl('Hola Estética Amorella, deseo consultar por mi tratamiento ideal.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#c5a089] hover:bg-[#b48f78] text-white font-medium text-sm tracking-widest uppercase shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <MessageCircle className="w-5 h-5 fill-white transition-transform group-hover:scale-110" />
            <span>Hablar por WhatsApp</span>
          </a>

          {/* Indicadores de confianza de agenda */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-xs text-[#7c7268]">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#c5a089]" />
              Respuesta personalizada rápida
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#c5a089]" />
              Morón Centro
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#c5a089]" />
              Atención exclusiva con turno previo
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
