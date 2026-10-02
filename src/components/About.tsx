import React from 'react';
import { Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[#f6f2ec]/60 border-t border-[#e7ded3]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Imagen del Espacio Boutique */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqarEYUx0k4q2bouwauphC71Dr9_grLFUWYIoVZuLSM8uj8BoLIs--0L8qzC94U2ZHP1bsLGbw2oDbonVKELtzJS8ECvT8_yVuWFj9VcFkQxqVB3Of2BB1lspM15d3ajKn7CRNcDMktGRtUXH8xg6Z_fXmJ_ODOckXmaNd11Tpb5FngNRfHo1NnmXHcxO8OEFbDQGL91II5p4uXil6MzQNOoDgA58JTJ0BRJk-ZVSJGofmfxQpFuaJ"
                alt="Consultorio boutique de Estética Amorella en Morón"
                className="w-full h-[450px] lg:h-[500px] object-cover object-center"
              />
            </div>
            
            <div className="hidden sm:flex absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white shadow-xl border border-[#e7ded3]/80 flex-col gap-1 max-w-[250px]">
              <span className="font-editorial text-lg text-[#7a5a45] font-medium">
                Espacio Sereno
              </span>
              <span className="text-xs text-[#7c7268] leading-relaxed">
                Diseñado para desconectar del ritmo diario de la ciudad.
              </span>
            </div>
          </div>

          {/* Contenido Institucional */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a5a45]">
                Nuestra Filosofía
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1e1a17] font-normal tracking-tight">
                Cada piel merece un cuidado único
              </h2>
            </div>

            {/* Texto verbatim solicitado */}
            <p className="text-base sm:text-lg text-[#1e1a17] font-light leading-relaxed">
              En Amorella creemos que cada persona necesita una atención cercana y personalizada. Nuestro objetivo es brindar tratamientos faciales pensados para acompañar el bienestar, el cuidado de la piel y la confianza de cada clienta.
            </p>

            <p className="text-sm text-[#4a433d] font-light leading-relaxed">
              No creemos en soluciones universales ni en procedimientos invasivos que alteren tus rasgos. Trabajamos con calidez y dedicación para potenciar tu belleza auténtica, en un gabinete pensado para que disfrutes de tu momento.
            </p>

            {/* Puntos de valor con checkmarks elegantes */}
            <div className="flex flex-col gap-3.5 pt-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f9f3ef] text-[#7a5a45] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-sm font-medium text-[#1e1a17]">
                  Espacio privado, calmo e íntimo con atención exclusiva 1 a 1.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f9f3ef] text-[#7a5a45] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-sm font-medium text-[#1e1a17]">
                  Diagnóstico facial profundo, sin apuros ni recetas genéricas.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f9f3ef] text-[#7a5a45] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-sm font-medium text-[#1e1a17]">
                  Protocolos formulados específicamente para cada biotipo cutáneo.
                </span>
              </div>
            </div>

            {/* Firma de Marca */}
            <div className="pt-4 flex items-center gap-4">
              <div className="h-px w-12 bg-[#c5a089]"></div>
              <span className="font-editorial text-lg italic text-[#7a5a45]">
                Equipo Estética Amorella
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
