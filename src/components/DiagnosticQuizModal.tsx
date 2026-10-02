import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw, MessageCircle } from 'lucide-react';
import { TREATMENTS } from '../data/treatments';
import { Treatment } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface DiagnosticQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTreatment: (treatment: Treatment) => void;
}

export const DiagnosticQuizModal: React.FC<DiagnosticQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectTreatment,
}) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    skinType: '',
    goal: '',
    eventSoon: '',
  });

  if (!isOpen) return null;

  const handleSelectAnswer = (field: 'skinType' | 'goal' | 'eventSoon', value: string) => {
    const updated = { ...answers, [field]: value };
    setAnswers(updated);
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4); // results
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ skinType: '', goal: '', eventSoon: '' });
  };

  // Determine recommendation
  let recommendedTreatment: Treatment = TREATMENTS[0]; // default limpieza

  if (answers.goal === 'glow' || answers.eventSoon === 'si_evento' || answers.skinType === 'seca') {
    recommendedTreatment = TREATMENTS[1]; // Hidratacion profunda
  } else if (answers.goal === 'antiage') {
    recommendedTreatment = TREATMENTS[4]; // Antiage & firmeza
  } else if (answers.goal === 'manchas' || answers.skinType === 'manchas') {
    recommendedTreatment = TREATMENTS[3]; // Despigmentante
  } else if (answers.goal === 'renovacion' && answers.eventSoon !== 'si_evento') {
    recommendedTreatment = TREATMENTS[2]; // Peeling
  } else if (answers.goal === 'diagnostico' || answers.skinType === 'sensible') {
    recommendedTreatment = TREATMENTS[5]; // Evaluacion personalizada
  } else {
    recommendedTreatment = TREATMENTS[0]; // Limpieza profunda
  }

  const quizWhatsAppText = `Hola Estética Amorella! Realicé el test de piel en su web y me recomendó el tratamiento "${recommendedTreatment.title}".
• Sensación de piel: ${answers.skinType}
• Objetivo principal: ${answers.goal}
• Evento próximo: ${answers.eventSoon === 'si_evento' ? 'Sí' : 'No'}
¿Tienen disponibilidad en Morón para coordinar un turno?`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1e1a17]/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#e7ded3] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera */}
        <div className="p-6 sm:p-7 bg-[#f9f3ef] border-b border-[#e7ded3] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7a5a45] shadow-xs">
              <Sparkles className="w-4 h-4 text-[#c5a089]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#7a5a45]">
                Orientación Dermocosmética
              </span>
              <h3 className="font-editorial text-lg text-[#1e1a17] font-medium leading-tight">
                ¿Cuál es tu tratamiento ideal?
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar test"
            className="p-2 rounded-full hover:bg-white text-[#7c7268] hover:text-[#1e1a17] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Barra de Progreso */}
        {step <= 3 && (
          <div className="w-full bg-[#eee8df] h-1.5">
            <div
              className="bg-[#c5a089] h-1.5 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Contenido del paso */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#c5a089] uppercase tracking-wider">
                  Paso 1 de 3
                </span>
                <h4 className="font-editorial text-xl text-[#1e1a17]">
                  ¿Cómo sentís tu piel habitualmente?
                </h4>
                <p className="text-xs text-[#7c7268]">
                  Elegí la opción que mejor describa la sensación en tu rostro:
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {[
                  { id: 'grasa_mixta', label: 'Con brillo en zona T, puntos negros o poros visibles' },
                  { id: 'seca', label: 'Tirante, deshidratada o con falta de humectación y frescura' },
                  { id: 'sensible', label: 'Reactiva, se enrojece con facilidad o requiere activos gentiles' },
                  { id: 'manchas', label: 'Con tono desparejo, manchitas solares o apagada' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectAnswer('skinType', opt.id)}
                    className="w-full text-left p-4 rounded-2xl border border-[#e7ded3] hover:border-[#c5a089] hover:bg-[#f9f3ef] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-sm text-[#4a433d] group-hover:text-[#1e1a17]">
                      {opt.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#c5a089] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#c5a089] uppercase tracking-wider">
                  Paso 2 de 3
                </span>
                <h4 className="font-editorial text-xl text-[#1e1a17]">
                  ¿Cuál es tu principal objetivo para esta sesión?
                </h4>
                <p className="text-xs text-[#7c7268]">
                  Para priorizar los activos y la técnica en cabina:
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {[
                  { id: 'limpieza', label: 'Higiene profunda meticulosa, extraer impurezas sin lastimar' },
                  { id: 'glow', label: 'Revitalización y shock de hidratación glow inmediato' },
                  { id: 'renovacion', label: 'Alisar la textura, afinar poros y renovar la piel (peeling suave)' },
                  { id: 'antiage', label: 'Firmeza, turgencia y combatir líneas de expresión' },
                  { id: 'diagnostico', label: 'Prefiero que una profesional evalúe mi piel y decida en cabina' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectAnswer('goal', opt.id)}
                    className="w-full text-left p-4 rounded-2xl border border-[#e7ded3] hover:border-[#c5a089] hover:bg-[#f9f3ef] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-sm text-[#4a433d] group-hover:text-[#1e1a17]">
                      {opt.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#c5a089] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#c5a089] uppercase tracking-wider">
                  Paso 3 de 3
                </span>
                <h4 className="font-editorial text-xl text-[#1e1a17]">
                  ¿Tenés algún evento especial en las próximas 48 horas?
                </h4>
                <p className="text-xs text-[#7c7268]">
                  Nos ayuda a definir si aplicamos un protocolo flash glow o correctivo:
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {[
                  { id: 'si_evento', label: 'Sí, tengo un casamiento, fiesta o evento importante pronto' },
                  { id: 'no_evento', label: 'No, busco mi rutina de cuidado y mantenimiento habitual' },
                  { id: 'primera_vez', label: 'Es mi primera vez haciéndome un tratamiento facial' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectAnswer('eventSoon', opt.id)}
                    className="w-full text-left p-4 rounded-2xl border border-[#e7ded3] hover:border-[#c5a089] hover:bg-[#f9f3ef] transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-sm text-[#4a433d] group-hover:text-[#1e1a17]">
                      {opt.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#c5a089] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#f9f3ef] text-[#7a5a45] mx-auto flex items-center justify-center border border-[#e7ded3]">
                <Check className="w-8 h-8 text-[#c5a089]" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7a5a45]">
                  Recomendación Personalizada
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#1e1a17] mt-1 font-medium">
                  {recommendedTreatment.title}
                </h3>
                <p className="text-xs text-[#7c7268] mt-1">
                  Tag: <span className="font-semibold text-[#1e1a17]">{recommendedTreatment.tag}</span> • {recommendedTreatment.duration}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f6f2ec]/80 border border-[#e7ded3] text-left text-xs sm:text-sm text-[#4a433d] font-light leading-relaxed">
                {recommendedTreatment.description}
                <div className="mt-2 pt-2 border-t border-[#e7ded3]/60 font-normal text-[#7a5a45]">
                  ✦ ¿Por qué te lo sugerimos? Se adapta de forma óptima a las necesidades de tu tipo de piel para brindarte resultados visibles y descongestión inmediata.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={getWhatsAppUrl(quizWhatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#c5a089] hover:bg-[#b48f78] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Consultar por WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    onClose();
                    onSelectTreatment(recommendedTreatment);
                  }}
                  type="button"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white border border-[#e7ded3] text-[#1e1a17] hover:bg-[#f6f2ec] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Ver detalles completos
                </button>
              </div>

              <button
                onClick={resetQuiz}
                type="button"
                className="inline-flex items-center gap-1.5 text-xs text-[#7c7268] hover:text-[#1e1a17] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Volver a responder el test</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
