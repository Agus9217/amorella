import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip con saludo cálido */}
      {showTooltip && (
        <div className="mb-2 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-[#e7ded3] flex items-center gap-2 max-w-xs animate-in slide-in-from-bottom-2">
          <div className="text-left">
            <p className="text-xs font-semibold text-[#1e1a17]">¿Buscás turno en Morón?</p>
            <p className="text-[11px] text-[#7c7268] font-light">Escribinos y te asesoramos online ✨</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Cerrar tooltip"
            className="text-[#7c7268] hover:text-[#1e1a17] p-1 rounded-full cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón Flotante */}
      <a
        href={getWhatsAppUrl('Hola Estética Amorella! Quisiera hacer una consulta sobre los tratamientos faciales.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
