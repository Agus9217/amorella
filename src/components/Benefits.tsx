import React from 'react';
import { UserCheck, Sparkles, Shield, HeartHandshake } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: UserCheck,
      title: 'Atención personalizada',
      description: 'Evaluamos minuciosamente tu biotipo y estado cutáneo para diseñar un protocolo específico y exclusivo para vos.'
    },
    {
      icon: Sparkles,
      title: 'Tratamientos faciales',
      description: 'Técnicas avanzadas no invasivas que devuelven luminosidad, hidratación profunda y frescura natural a tu rostro.'
    },
    {
      icon: Shield,
      title: 'Cuidado profesional',
      description: 'Máxima rigurosidad, activos de pureza dermatológica y aparatología noble para respetar tu barrera dérmica.'
    },
    {
      icon: HeartHandshake,
      title: 'Bienestar y confianza',
      description: 'Un santuario privado y silencioso en Morón para desconectarte del estrés diario y regalarte un momento único de calma.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-[#f6f2ec]/60 border-y border-[#e7ded3]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7a5a45]">
            Por qué elegir Amorella
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#1e1a17] mt-2 font-normal">
            El arte de cuidar tu piel con dedicación
          </h2>
          <p className="text-sm sm:text-base text-[#7c7268] mt-3 font-light">
            Combinamos técnicas no invasivas, dermocosmética premium y un ambiente calmo para lograr resultados visibles y confort integral.
          </p>
        </div>

        {/* 4 Beneficios en Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-[#e7ded3]/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col gap-4 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#f9f3ef] text-[#7a5a45] flex items-center justify-center group-hover:bg-[#c5a089] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-editorial text-xl text-[#1e1a17] font-medium mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4a433d] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
