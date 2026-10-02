import React, { useState } from 'react';
import { X, ZoomIn, MapPin } from 'lucide-react';
import { SEAL_URL } from '../utils/whatsapp';

export const Gallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<{ src: string; caption: string } | null>(null);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#fcfaf7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a5a45]">
            Atmósfera &amp; Resultados
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1e1a17] mt-2 font-normal">
            Conocé Amorella
          </h2>
          <p className="text-base text-[#7c7268] mt-3 font-light">
            Una experiencia pensada para que te sientas bien, te veas bien y disfrutes de tu momento.
          </p>
        </div>

        {/* Mosaico Visual de 5 Elementos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Item 1: Espacio Central */}
          <div
            onClick={() =>
              setActivePhoto({
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqarEYUx0k4q2bouwauphC71Dr9_grLFUWYIoVZuLSM8uj8BoLIs--0L8qzC94U2ZHP1bsLGbw2oDbonVKELtzJS8ECvT8_yVuWFj9VcFkQxqVB3Of2BB1lspM15d3ajKn7CRNcDMktGRtUXH8xg6Z_fXmJ_ODOckXmaNd11Tpb5FngNRfHo1NnmXHcxO8OEFbDQGL91II5p4uXil6MzQNOoDgA58JTJ0BRJk-ZVSJGofmfxQpFuaJ',
                caption: 'El santuario en Morón — Un gabinete íntimo, cálido y diseñado para tu máxima relajación.'
              })
            }
            className="md:col-span-7 rounded-3xl overflow-hidden shadow-xs relative group h-72 md:h-96 bg-[#f6f2ec] cursor-pointer"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqarEYUx0k4q2bouwauphC71Dr9_grLFUWYIoVZuLSM8uj8BoLIs--0L8qzC94U2ZHP1bsLGbw2oDbonVKELtzJS8ECvT8_yVuWFj9VcFkQxqVB3Of2BB1lspM15d3ajKn7CRNcDMktGRtUXH8xg6Z_fXmJ_ODOckXmaNd11Tpb5FngNRfHo1NnmXHcxO8OEFbDQGL91II5p4uXil6MzQNOoDgA58JTJ0BRJk-ZVSJGofmfxQpFuaJ"
              alt="Sala de atención en Estética Amorella"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a17]/65 via-transparent to-transparent flex items-end justify-between p-6">
              <span className="text-white font-editorial text-xl font-light">
                El santuario en Morón
              </span>
              <span className="text-white/80 p-2 rounded-full bg-black/20 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Item 2: Piel Luminosa */}
          <div
            onClick={() =>
              setActivePhoto({
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwOZh8xg0DTGlA2AUzcR6InI61ah3WAOvhUo-MnaS2XUXuCcso1VagAuU9E60LjUwSPJQc1F-IqHBui8zXGuzCfi3o3GrhNMMX8i5BSaZh_2BzsXEIIsFMQfYdj8XbTC_CGN_j81P8hiGarVepPC6KxUhIomONPTHVoQ8b1HtBP5hvnJSa6CgxapyulxyZNOX7Z5s5vPmNmmoYGc9n8I9op1qYM0Uk0ChLvA1l2PkrWio24Xoh4HGQ',
                caption: 'Luminosidad y glow natural — Rostro revitalizado, turgente y profundamente hidratado.'
              })
            }
            className="md:col-span-5 rounded-3xl overflow-hidden shadow-xs relative group h-72 md:h-96 bg-[#f6f2ec] cursor-pointer"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwOZh8xg0DTGlA2AUzcR6InI61ah3WAOvhUo-MnaS2XUXuCcso1VagAuU9E60LjUwSPJQc1F-IqHBui8zXGuzCfi3o3GrhNMMX8i5BSaZh_2BzsXEIIsFMQfYdj8XbTC_CGN_j81P8hiGarVepPC6KxUhIomONPTHVoQ8b1HtBP5hvnJSa6CgxapyulxyZNOX7Z5s5vPmNmmoYGc9n8I9op1qYM0Uk0ChLvA1l2PkrWio24Xoh4HGQ"
              alt="Piel luminosa y cuidada en Amorella"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a17]/65 via-transparent to-transparent flex items-end justify-between p-6">
              <span className="text-white font-editorial text-xl font-light">
                Luminosidad y glow natural
              </span>
              <span className="text-white/80 p-2 rounded-full bg-black/20 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Item 3: Delicadeza Facial */}
          <div
            onClick={() =>
              setActivePhoto({
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBb7YuVCytdStIknQ6W7-DCux2i0C0LDWFDrZtEMRSaN_SDXBZ-A7L72XePwSVN7iYrACK0qlBIGgPeNPnqvS3SVYfef4eHGD9JZ0MQ07W9CI2IL9KSNwN9DbdRgZKWaWWmeAvL7hMuBHTACZ6NTexud4O4yIgFEhOVTuQs8h4BsrOrEeobeW_S2JP1inpc7kPEVKlYdV8SkMSLqZwhpRwPEwwegON_cpncbGYc_dGNeeon37hAaT9',
                caption: 'Tacto suave y cuidado — Extracción y limpieza con aparatología no agresiva y activos respetuosos.'
              })
            }
            className="md:col-span-5 rounded-3xl overflow-hidden shadow-xs relative group h-72 md:h-80 bg-[#f6f2ec] cursor-pointer"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBb7YuVCytdStIknQ6W7-DCux2i0C0LDWFDrZtEMRSaN_SDXBZ-A7L72XePwSVN7iYrACK0qlBIGgPeNPnqvS3SVYfef4eHGD9JZ0MQ07W9CI2IL9KSNwN9DbdRgZKWaWWmeAvL7hMuBHTACZ6NTexud4O4yIgFEhOVTuQs8h4BsrOrEeobeW_S2JP1inpc7kPEVKlYdV8SkMSLqZwhpRwPEwwegON_cpncbGYc_dGNeeon37hAaT9"
              alt="Tratamiento de higiene e hidratación suave"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a17]/65 via-transparent to-transparent flex items-end justify-between p-6">
              <span className="text-white font-editorial text-xl font-light">
                Tacto suave y cuidado
              </span>
              <span className="text-white/80 p-2 rounded-full bg-black/20 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Item 4: Procedimiento Especializado */}
          <div
            onClick={() =>
              setActivePhoto({
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6NdVSDa5F632Sg6dmibUOegTUhio7YN1OI6OZmZbQUrckT5k-bBA2xFtnaPG6fM2orPjUXskJfYqa7tJj3EdTDwhPtTA37dDXLF8BkURACTTlQ8GQRFVz0TJne1FeJ_g-4reKVWDz_Eq62q5jaJtZttXS-l5Bt_r8AAzMb-y6z62jV6iIojxTC7kGPw9tLLEYZ6PSpXTnZGXPUSURY7xEghxXbRvj9bRLl0fstLM8JHwCBOeF9Gal',
                caption: 'Técnica no invasiva — Renovación cutánea controlada con protocolos de alta pureza.'
              })
            }
            className="md:col-span-4 rounded-3xl overflow-hidden shadow-xs relative group h-72 md:h-80 bg-[#f6f2ec] cursor-pointer"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6NdVSDa5F632Sg6dmibUOegTUhio7YN1OI6OZmZbQUrckT5k-bBA2xFtnaPG6fM2orPjUXskJfYqa7tJj3EdTDwhPtTA37dDXLF8BkURACTTlQ8GQRFVz0TJne1FeJ_g-4reKVWDz_Eq62q5jaJtZttXS-l5Bt_r8AAzMb-y6z62jV6iIojxTC7kGPw9tLLEYZ6PSpXTnZGXPUSURY7xEghxXbRvj9bRLl0fstLM8JHwCBOeF9Gal"
              alt="Procedimiento estético profesional"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a17]/65 via-transparent to-transparent flex items-end justify-between p-6">
              <span className="text-white font-editorial text-xl font-light">
                Técnica no invasiva
              </span>
              <span className="text-white/80 p-2 rounded-full bg-black/20 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Item 5: Tarjeta de Sello & Detalle */}
          <div className="md:col-span-3 rounded-3xl bg-[#f9f3ef] p-8 flex flex-col justify-between border border-[#e7ded3]/70 shadow-xs">
            <div className="w-14 h-14 rounded-full bg-white p-2 shadow-xs flex items-center justify-center">
              <img
                src={SEAL_URL}
                alt="Sello Amorella"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <span className="font-editorial text-xl text-[#7a5a45] font-medium">
                Cuidado Consciente
              </span>
              <p className="text-xs text-[#4a433d] font-light leading-relaxed">
                Toallas tibias, aromas relajantes y la tranquilidad de estar en manos dedicadas.
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#7a5a45]">
              <MapPin className="w-3 h-3 text-[#c5a089]" />
              <span>Morón Centro</span>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1e1a17]/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activePhoto.src}
              alt={activePhoto.caption}
              className="w-full max-h-[75vh] object-cover"
            />
            <div className="p-5 bg-white border-t border-[#e7ded3]">
              <p className="font-editorial text-base text-[#1e1a17]">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
