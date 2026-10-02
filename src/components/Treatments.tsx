import React, { useState } from 'react';
import { Treatment } from '../types';
import { TREATMENTS } from '../data/treatments';
import { Clock, ArrowRight, HelpCircle, Sun, Sparkles, Brain, Info } from 'lucide-react';
import { getTreatmentWhatsAppUrl } from '../utils/whatsapp';

interface TreatmentsProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenQuiz: () => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({ onSelectTreatment, onOpenQuiz }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'esencial' | 'glow' | 'antiage'>('all');

  const filteredTreatments = TREATMENTS.filter((t) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'esencial') return t.category === 'esencial' || t.category === 'renovacion';
    if (selectedFilter === 'glow') return t.category === 'glow' || t.category === 'tono';
    if (selectedFilter === 'antiage') return t.category === 'antiage' || t.category === 'diagnostico';
    return true;
  });

  return (
    <section id="tratamientos" className="py-20 lg:py-28 bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Título y Subtítulo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a5a45]">
              Protocolos a Medida
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1e1a17] mt-2 font-normal">
              Tratamientos pensados para vos
            </h2>
            <p className="text-base text-[#7c7268] mt-3 font-light">
              Una propuesta enfocada en el cuidado de tu piel, tu bienestar y tu belleza natural.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenQuiz}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#e7ded3] text-[#1e1a17] hover:bg-[#f6f2ec] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-[#c5a089]" />
              <span>¿Cuál es el ideal para mí?</span>
            </button>
          </div>
        </div>

        {/* Filtros de Categoría */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#e7ded3]/50">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-[#1e1a17] text-white shadow-xs'
                : 'bg-white text-[#7c7268] hover:text-[#1e1a17] border border-[#e7ded3]/60'
            }`}
          >
            Todos los tratamientos ({TREATMENTS.length})
          </button>
          <button
            onClick={() => setSelectedFilter('esencial')}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
              selectedFilter === 'esencial'
                ? 'bg-[#1e1a17] text-white shadow-xs'
                : 'bg-white text-[#7c7268] hover:text-[#1e1a17] border border-[#e7ded3]/60'
            }`}
          >
            Higiene &amp; Renovación
          </button>
          <button
            onClick={() => setSelectedFilter('glow')}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
              selectedFilter === 'glow'
                ? 'bg-[#1e1a17] text-white shadow-xs'
                : 'bg-white text-[#7c7268] hover:text-[#1e1a17] border border-[#e7ded3]/60'
            }`}
          >
            Hidratación &amp; Luminosidad
          </button>
          <button
            onClick={() => setSelectedFilter('antiage')}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
              selectedFilter === 'antiage'
                ? 'bg-[#1e1a17] text-white shadow-xs'
                : 'bg-white text-[#7c7268] hover:text-[#1e1a17] border border-[#e7ded3]/60'
            }`}
          >
            Firmeza &amp; Diagnóstico
          </button>
        </div>

        {/* 6 Cards de Tratamientos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => {
            const isCustomCard = treatment.hasCustomGradient;

            return (
              <div
                key={treatment.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#e7ded3]/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Cabecera de la Tarjeta: Imagen o Gradiente con Ícono */}
                {treatment.image ? (
                  <div className="h-60 overflow-hidden relative bg-[#f6f2ec]">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-semibold tracking-widest uppercase text-[#1e1a17] shadow-xs">
                      {treatment.tag}
                    </span>
                  </div>
                ) : (
                  <div
                    className="h-60 p-8 flex flex-col justify-between relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${treatment.gradientFrom || '#f9f3ef'}, ${treatment.gradientTo || '#f6f2ec'})`
                    }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#7a5a45]">
                      {treatment.iconName === 'wb_sunny' && <Sun className="w-6 h-6 text-[#c5a089]" />}
                      {treatment.iconName === 'auto_awesome' && <Sparkles className="w-6 h-6 text-[#c5a089]" />}
                      {treatment.iconName === 'psychology_alt' && <Brain className="w-6 h-6 text-[#c5a089]" />}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#7a5a45]">
                        {treatment.id === 'tratamientos-despigmentantes' && 'Tono Homogéneo'}
                        {treatment.id === 'tratamientos-antiage-firmeza' && 'Elasticidad Dérmica'}
                        {treatment.id === 'evaluacion-personalizada' && 'Primer Encuentro'}
                      </span>
                      <p className="font-editorial text-xl text-[#1e1a17] mt-1 font-medium">
                        {treatment.tag}
                      </p>
                    </div>
                  </div>
                )}

                {/* Contenido de la Tarjeta */}
                <div className="p-7 flex flex-col flex-1 justify-between gap-6">
                  <div>
                    <h3 className="font-editorial text-2xl text-[#1e1a17] group-hover:text-[#7a5a45] transition-colors font-medium">
                      {treatment.title}
                    </h3>
                    <p className="text-sm text-[#4a433d] font-light mt-2.5 leading-relaxed">
                      {treatment.description}
                    </p>

                    {/* Botón para ver protocolo detallado */}
                    <button
                      onClick={() => onSelectTreatment(treatment)}
                      type="button"
                      className="mt-3.5 inline-flex items-center gap-1.5 text-xs text-[#7a5a45] hover:text-[#c5a089] font-medium underline-offset-4 hover:underline cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Ver protocolo paso a paso y activos</span>
                    </button>
                  </div>

                  {/* Footer de Tarjeta con Duración y CTA */}
                  <div className="pt-4 border-t border-[#e7ded3]/50 flex items-center justify-between">
                    <span className="text-xs text-[#7c7268] flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#c5a089]" />
                      {treatment.duration}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={getTreatmentWhatsAppUrl(treatment.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f9f3ef] hover:bg-[#c5a089] hover:text-white text-[#7a5a45] font-semibold text-xs tracking-wider uppercase transition-all duration-300"
                      >
                        <span>Consultar</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
