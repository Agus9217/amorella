import React, { useState } from 'react';
import { Star, MessageSquarePlus, Check, X } from 'lucide-react';
import { INITIAL_TESTIMONIALS } from '../data/testimonials';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // New review form
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [quote, setQuote] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newTestimonial: Testimonial = {
      id: `t-${Date.now()}`,
      author: name,
      location: location || 'Morón',
      quote: quote || 'Una experiencia maravillosa en Amorella.',
      text: comment,
      rating: 5,
      date: 'Reciente'
    };

    setTestimonials([newTestimonial, ...testimonials]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setName('');
      setLocation('');
      setQuote('');
      setComment('');
    }, 1800);
  };

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-[#f6f2ec]/40 border-t border-[#e7ded3]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Encabezado */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a5a45]">
            Opiniones de Nuestras Clientas
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1e1a17] mt-2 font-normal">
            Voces que confían en Amorella
          </h2>
          <p className="text-base text-[#7c7268] mt-3 font-light">
            La experiencia vivida por quienes eligen regalárselo a su piel en Morón.
          </p>
        </div>

        {/* 3 Testimonios principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-[#e7ded3]/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-4">
                {/* 5 Estrellas */}
                <div className="flex items-center gap-1 text-[#c5a089]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#c5a089]" />
                  ))}
                </div>

                <p className="font-editorial text-lg text-[#1e1a17] italic font-normal leading-relaxed">
                  “{item.quote}”
                </p>

                <p className="text-sm text-[#4a433d] font-light leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="pt-4 border-t border-[#e7ded3]/50 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#1e1a17] uppercase tracking-wider">
                  {item.author}
                </span>
                <span className="text-[11px] text-[#7c7268]">{item.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botón para compartir experiencia */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setModalOpen(true)}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#e7ded3] hover:border-[#c5a089] text-[#7a5a45] text-xs font-medium uppercase tracking-wider transition-all shadow-xs hover:shadow cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#c5a089]" />
            <span>¿Ya visitaste Amorella? Compartí tu experiencia</span>
          </button>
        </div>

      </div>

      {/* Modal para Dejar Reseña */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1e1a17]/60 backdrop-blur-sm animate-in fade-in">
          <div
            className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#e7ded3]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-full text-[#7c7268] hover:text-[#1e1a17] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#f9f3ef] text-[#7a5a45] mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#c5a089]" />
                </div>
                <h4 className="font-editorial text-xl text-[#1e1a17]">¡Muchas gracias por tus palabras!</h4>
                <p className="text-xs text-[#7c7268]">Tu testimonio fue añadido con éxito a Amorella.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#7a5a45]">
                    Tu Opinión es Valiosa
                  </span>
                  <h3 className="font-editorial text-2xl text-[#1e1a17]">Contanos tu experiencia</h3>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4a433d] mb-1">Nombre</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Mariana L."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e7ded3] text-sm focus:outline-none focus:border-[#c5a089]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4a433d] mb-1">Localidad o Zona</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ej. Morón, Castelar, Haedo..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e7ded3] text-sm focus:outline-none focus:border-[#c5a089]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4a433d] mb-1">Frase destacada</label>
                  <input
                    type="text"
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="Ej. Increíble cómo cambió mi piel"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e7ded3] text-sm focus:outline-none focus:border-[#c5a089]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4a433d] mb-1">Comentario detallado</label>
                  <textarea
                    required
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="¿Qué sentiste durante y después de la sesión?"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e7ded3] text-sm focus:outline-none focus:border-[#c5a089]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#c5a089] hover:bg-[#b48f78] text-white font-medium text-xs tracking-wider uppercase transition-colors shadow-sm"
                >
                  Publicar testimonio
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
