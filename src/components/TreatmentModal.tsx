import React from 'react';
import { Treatment } from '../types';
import { X, Clock, CheckCircle2, Sparkles, Shield, ArrowRight, MessageCircle } from 'lucide-react';
import { getTreatmentWhatsAppUrl } from '../utils/whatsapp';

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookAppointment: (treatment: Treatment) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBookAppointment,
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1e1a17]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#e7ded3] overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del Modal */}
        <div className="relative p-6 sm:p-8 bg-[#f9f3ef] border-b border-[#e7ded3] flex items-start justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#7a5a45] text-[10px] font-bold tracking-widest uppercase shadow-xs mb-2">
              {treatment.tag}
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#1e1a17] font-medium">
              {treatment.title}
            </h2>
            <div className="flex items-center gap-2 mt-2 text-xs text-[#7c7268]">
              <Clock className="w-3.5 h-3.5 text-[#c5a089]" />
              <span>Duración estimada: {treatment.duration}</span>
              <span>•</span>
              <span>Atención exclusiva 1 a 1 en Morón</span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="p-2 rounded-full hover:bg-white text-[#7c7268] hover:text-[#1e1a17] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cuerpo con Scroll */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#4a433d]">
          {/* Descripción general */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-[#7a5a45] mb-2">
              Propósito del Protocolo
            </h3>
            <p className="text-sm font-light leading-relaxed">
              {treatment.description}
            </p>
          </div>

          {/* Indicado para */}
          <div className="p-4 rounded-2xl bg-[#f6f2ec]/70 border border-[#e7ded3]/60">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#1e1a17] mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a089]" />
              ¿Para quién está indicado?
            </h4>
            <p className="text-xs sm:text-sm text-[#4a433d] font-light leading-relaxed">
              {treatment.recommendedFor}
            </p>
          </div>

          {/* Protocolo Paso a Paso */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-[#7a5a45] mb-3">
              Protocolo Paso a Paso en Cabina
            </h3>
            <div className="space-y-2.5">
              {treatment.detailedProtocol.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f9f3ef] text-[#7a5a45] font-semibold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-sm text-[#4a433d] font-light leading-snug">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Activos Destacados */}
          {treatment.keyActives && treatment.keyActives.length > 0 && (
            <div>
              <h3 className="text-xs uppercase font-bold tracking-widest text-[#7a5a45] mb-2.5">
                Activos y Dermocosmética
              </h3>
              <div className="flex flex-wrap gap-2">
                {treatment.keyActives.map((active, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white border border-[#e7ded3] text-xs text-[#1e1a17] font-medium"
                  >
                    ✦ {active}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Cuidados Posteriores */}
          {treatment.aftercare && treatment.aftercare.length > 0 && (
            <div>
              <h3 className="text-xs uppercase font-bold tracking-widest text-[#7a5a45] mb-2.5 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#c5a089]" />
                Cuidados Posteriores Sugeridos
              </h3>
              <ul className="space-y-1.5">
                {treatment.aftercare.map((care, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#7c7268]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a089] shrink-0 mt-0.5" />
                    <span>{care}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer del Modal */}
        <div className="p-6 bg-[#fcfaf7] border-t border-[#e7ded3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onBookAppointment(treatment);
            }}
            type="button"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white border border-[#c5a089] text-[#7a5a45] hover:bg-[#f6f2ec] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Agendar con formulario
          </button>

          <a
            href={getTreatmentWhatsAppUrl(treatment.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#c5a089] hover:bg-[#b48f78] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consultar por WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
