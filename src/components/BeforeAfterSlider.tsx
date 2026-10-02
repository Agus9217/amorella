import React, { useState } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="py-16 bg-[#faf5ef] border-t border-[#e7ded3]/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a5a45] inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a089]" />
            Efecto Glow &amp; Descongestión
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#1e1a17] mt-1 font-normal">
            La transformación en una sola sesión
          </h2>
          <p className="text-xs sm:text-sm text-[#7c7268] mt-2 font-light">
            Deslizá el control para ver la diferencia de textura, poros limpios y turgencia natural.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative mx-auto max-w-3xl h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white select-none">
          {/* Imagen "DESPUÉS" (Base completa) */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwOZh8xg0DTGlA2AUzcR6InI61ah3WAOvhUo-MnaS2XUXuCcso1VagAuU9E60LjUwSPJQc1F-IqHBui8zXGuzCfi3o3GrhNMMX8i5BSaZh_2BzsXEIIsFMQfYdj8XbTC_CGN_j81P8hiGarVepPC6KxUhIomONPTHVoQ8b1HtBP5hvnJSa6CgxapyulxyZNOX7Z5s5vPmNmmoYGc9n8I9op1qYM0Uk0ChLvA1l2PkrWio24Xoh4HGQ"
            alt="Piel después del tratamiento facial"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-xs text-xs font-bold uppercase tracking-wider text-[#7a5a45]">
            Después • Glow &amp; Calma
          </div>

          {/* Imagen "ANTES" (Recortada con clip-path según el slider) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBb7YuVCytdStIknQ6W7-DCux2i0C0LDWFDrZtEMRSaN_SDXBZ-A7L72XePwSVN7iYrACK0qlBIGgPeNPnqvS3SVYfef4eHGD9JZ0MQ07W9CI2IL9KSNwN9DbdRgZKWaWWmeAvL7hMuBHTACZ6NTexud4O4yIgFEhOVTuQs8h4BsrOrEeobeW_S2JP1inpc7kPEVKlYdV8SkMSLqZwhpRwPEwwegON_cpncbGYc_dGNeeon37hAaT9"
              alt="Piel antes del tratamiento"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: '100%', height: '100%', minWidth: '100%' }}
            />
            {/* Filtro sutil para simular tono mate / previo */}
            <div className="absolute inset-0 bg-[#1e1a17]/10" />
            <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-xs text-xs font-bold uppercase tracking-wider text-[#1e1a17]">
              Antes • Sin protocolo
            </div>
          </div>

          {/* Línea divisoria */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-20 flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 -ml-4.5 rounded-full bg-white shadow-xl border border-[#e7ded3] flex items-center justify-center text-[#7a5a45]">
              <MoveHorizontal className="w-5 h-5 text-[#c5a089]" />
            </div>
          </div>

          {/* Slider input transparente por encima */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            aria-label="Deslizar comparador antes y después"
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
        </div>

        <div className="mt-4 text-center">
          <span className="text-[11px] text-[#7c7268] tracking-wider uppercase">
            ← Arrastrá para comparar el resultado antes y después →
          </span>
        </div>
      </div>
    </section>
  );
};
