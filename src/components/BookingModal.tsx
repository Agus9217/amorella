import React, { useState } from 'react';
import { X, Calendar, Clock, User, Sparkles, MessageCircle, Check } from 'lucide-react';
import { TREATMENTS } from '../data/treatments';
import { Treatment } from '../types';
import { getBookingWhatsAppUrl } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatment?: Treatment | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatment,
}) => {
  const [selectedTreatment, setSelectedTreatment] = useState<string>(
    initialTreatment?.title || TREATMENTS[0].title
  );
  const [name, setName] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredShift, setPreferredShift] = useState('Tarde (14:00 a 18:00 hs)');
  const [notes, setNotes] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    const url = getBookingWhatsAppUrl({
      treatment: selectedTreatment,
      name,
      preferredDate,
      preferredShift,
      notes,
    });

    // Open WhatsApp in new tab
    window.open(url, '_blank');
    setIsConfirmed(true);

    setTimeout(() => {
      setIsConfirmed(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1e1a17]/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#e7ded3] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera */}
        <div className="p-6 sm:p-7 bg-[#f9f3ef] border-b border-[#e7ded3] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#7a5a45] shadow-xs">
              <Calendar className="w-4 h-4 text-[#c5a089]" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#7a5a45]">
                Atención Exclusiva en Morón
              </span>
              <h3 className="font-editorial text-lg text-[#1e1a17] font-medium leading-tight">
                Agendar Cita en Gabinete
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 rounded-full hover:bg-white text-[#7c7268] hover:text-[#1e1a17] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formulario */}
        <div className="p-6 sm:p-8">
          {isConfirmed ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#f9f3ef] text-[#7a5a45] mx-auto flex items-center justify-center border border-[#e7ded3]">
                <Check className="w-7 h-7 text-[#c5a089]" />
              </div>
              <h4 className="font-editorial text-2xl text-[#1e1a17]">¡Solicitud lista!</h4>
              <p className="text-xs text-[#7c7268] max-w-xs mx-auto">
                Se abrió WhatsApp con tu mensaje organizado para confirmar el horario con nuestra especialista.
              </p>
            </div>
          ) : (
            <form onSubmit={handleConfirm} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#4a433d] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#c5a089]" />
                  Tratamiento deseado
                </label>
                <select
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e7ded3] text-sm text-[#1e1a17] bg-white focus:outline-none focus:border-[#c5a089]"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title} ({t.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4a433d] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#c5a089]" />
                  Tu nombre y apellido
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Sofía Martínez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e7ded3] text-sm focus:outline-none focus:border-[#c5a089]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4a433d] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#c5a089]" />
                    Fecha sugerida
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-[#e7ded3] text-xs focus:outline-none focus:border-[#c5a089]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4a433d] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c5a089]" />
                    Franja horaria
                  </label>
                  <select
                    value={preferredShift}
                    onChange={(e) => setPreferredShift(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-[#e7ded3] text-xs bg-white focus:outline-none focus:border-[#c5a089]"
                  >
                    <option value="Mañana (10:00 a 13:00 hs)">Mañana (10:00 a 13:00 hs)</option>
                    <option value="Tarde (14:00 a 18:00 hs)">Tarde (14:00 a 18:00 hs)</option>
                    <option value="Sábado horario especial">Sábados (con turno previo)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4a433d] uppercase tracking-wider mb-1.5">
                  Comentario sobre tu piel o inquietud (opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej. Siento la piel seca, busco luminosidad para un evento..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-[#e7ded3] text-xs focus:outline-none focus:border-[#c5a089]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-[#c5a089] hover:bg-[#b48f78] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enviar solicitud por WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-[#7c7268] text-center pt-1 font-light">
                Gabinete privado en Morón Centro. Te confirmaremos la disponibilidad al instante.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
