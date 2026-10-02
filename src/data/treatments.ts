import { Treatment } from '../types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'limpieza-profunda',
    title: 'Limpieza facial profunda',
    category: 'esencial',
    tag: 'Protocolo Esencial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBb7YuVCytdStIknQ6W7-DCux2i0C0LDWFDrZtEMRSaN_SDXBZ-A7L72XePwSVN7iYrACK0qlBIGgPeNPnqvS3SVYfef4eHGD9JZ0MQ07W9CI2IL9KSNwN9DbdRgZKWaWWmeAvL7hMuBHTACZ6NTexud4O4yIgFEhOVTuQs8h4BsrOrEeobeW_S2JP1inpc7kPEVKlYdV8SkMSLqZwhpRwPEwwegON_cpncbGYc_dGNeeon37hAaT9',
    description: 'Higiene profunda meticulosa, extracción suave no invasiva de impurezas, descongestión con activos botánicos e hidratación de balance cutáneo.',
    duration: '60 - 75 min',
    detailedProtocol: [
      'Doble higiene oleosa y gel dermocosmético según biotipo',
      'Exfoliación mecánica suave o enzimática para desqueratinizar',
      'Desincrustación y extracción manual meticulosa sin marcas',
      'Altafrecuencia descongestiva y bactericida',
      'Máscara calmante y descongestiva con manzanilla y caléndula',
      'Sellado dérmico con hidratación profunda y fotoprotector SPF 50+'
    ],
    recommendedFor: 'Pieles con comedones, poros dilatados, impurezas o que no realizan una limpieza profesional hace más de 30 días.',
    keyActives: ['Ácido Hialurónico', 'Extracto de Manzanilla', 'Niacinamida', 'Centella Asiática'],
    aftercare: [
      'Evitar maquillaje pesado durante las primeras 12 horas',
      'No exponerse al sol directo sin protector solar',
      'Hidratar abundantemente y usar limpiador suave'
    ]
  },
  {
    id: 'hidratacion-profunda',
    title: 'Hidratación profunda',
    category: 'glow',
    tag: 'Shock Glow',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwOZh8xg0DTGlA2AUzcR6InI61ah3WAOvhUo-MnaS2XUXuCcso1VagAuU9E60LjUwSPJQc1F-IqHBui8zXGuzCfi3o3GrhNMMX8i5BSaZh_2BzsXEIIsFMQfYdj8XbTC_CGN_j81P8hiGarVepPC6KxUhIomONPTHVoQ8b1HtBP5hvnJSa6CgxapyulxyZNOX7Z5s5vPmNmmoYGc9n8I9op1qYM0Uk0ChLvA1l2PkrWio24Xoh4HGQ',
    description: 'Revitalización celular intensa y aporte de luminosidad radiante mediante sueros bioactivos concentrados, ácido hialurónico y velo reconfortante.',
    duration: '60 min',
    detailedProtocol: [
      'Limpieza suave con emulsión reconstituyente de lípidos',
      'Tónico equilibrante hidratante botánico',
      'Aporte de sueros bioactivos y ácido hialurónico multimolecular',
      'Masaje facial modelador y drenante relajante',
      'Velo de colágeno hidrolizado o máscara hidroplástica calmante',
      'Finalización con crema turgente selladora y FPS 50+'
    ],
    recommendedFor: 'Pieles deshidratadas, opacas, tirantes, expuestas al aire acondicionado o antes de eventos importantes para un brillo inmediato.',
    keyActives: ['Ácido Hialurónico Multimolecular', 'Vitamina E', 'Pantenol (B5)', 'Ceramidas'],
    aftercare: [
      'Mantener consumo regular de agua',
      'Reaplicar protector solar cada 3 horas',
      'Disfrutar del efecto glow inmediato'
    ]
  },
  {
    id: 'peeling-quimico-biologico',
    title: 'Peeling químico & biológico',
    category: 'renovacion',
    tag: 'Renovación Cutánea',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6NdVSDa5F632Sg6dmibUOegTUhio7YN1OI6OZmZbQUrckT5k-bBA2xFtnaPG6fM2orPjUXskJfYqa7tJj3EdTDwhPtTA37dDXLF8BkURACTTlQ8GQRFVz0TJne1FeJ_g-4reKVWDz_Eq62q5jaJtZttXS-l5Bt_r8AAzMb-y6z62jV6iIojxTC7kGPw9tLLEYZ6PSpXTnZGXPUSURY7xEghxXbRvj9bRLl0fstLM8JHwCBOeF9Gal',
    description: 'Estimulación de renovación celular controlada con ácidos nobles seleccionados para afinar poros, alisar la textura y despertar un brillo sedoso.',
    duration: '50 min',
    detailedProtocol: [
      'Evaluación y desengrase controlado de la superficie cutánea',
      'Aplicación cronometrada de alfahidroxiácidos o enzimas biológicas nobles',
      'Neutralización delicada y monitoreo constante de reactividad',
      'Brumización calmante termal y suero reparador post-peeling',
      'Máscara criogénica descongestiva de efecto frío',
      'Sellado con pantalla protectora solar total'
    ],
    recommendedFor: 'Pieles con engrosamiento, poros dilatados, textura irregular, marcas superficiales o falta de luminosidad.',
    keyActives: ['Ácido Mandélico', 'Ácido Láctico', 'Enzimas de Papaya y Piña', 'Aloe Vera'],
    aftercare: [
      'Uso obligatorio y estricto de protector solar FPS 50+',
      'Evitar exfoliantes físicos y ácidos en casa por 5 días',
      'No realizar baños de inmersión ni sauna por 48 horas'
    ]
  },
  {
    id: 'tratamientos-despigmentantes',
    title: 'Tratamientos despigmentantes',
    category: 'tono',
    tag: 'Claridad & Luminosidad',
    hasCustomGradient: true,
    gradientFrom: '#f9f3ef',
    gradientTo: '#f6f2ec',
    iconName: 'wb_sunny',
    description: 'Unificación progresiva y delicada del tono de la tez, atenuando manchas solares, melasma y secuelas post-inflamatorias mediante activos gentiles.',
    duration: 'Plan por sesiones',
    detailedProtocol: [
      'Diagnóstico de profundidad de la pigmentación dérmica/epidérmica',
      'Preparación de barrera y detoxificación dérmica',
      'Aplicación de cóctel despigmentante inhibidor de la tirosinasa',
      'Tratamiento localizado en manchas de alta densidad',
      'Máscara blanqueadora con extracto de regaliz y niacinamida pura',
      'Pauta domiciliaria y plan de fotoprotección preventiva'
    ],
    recommendedFor: 'Melasma, lentigos solares, manchas post-acné y fotoenvejecimiento con tono desparejo.',
    keyActives: ['Ácido Kójico', 'Ácido Tranexámico', 'Niacinamida 5%', 'Extracto de Gayuba'],
    aftercare: [
      'Fotoprotección estricta física y química cada 2 horas',
      'Evitar exposición solar directa en horas pico',
      'Seguir la rutina domiciliaria despigmentante recetada'
    ]
  },
  {
    id: 'tratamientos-antiage-firmeza',
    title: 'Tratamientos antiage & firmeza',
    category: 'antiage',
    tag: 'Firmeza & Turgencia',
    hasCustomGradient: true,
    gradientFrom: '#f6f2ec',
    gradientTo: '#eee5db',
    iconName: 'auto_awesome',
    description: 'Estimulación no invasiva de síntesis de colágeno y elastina. Redensifica el tejido dérmico, tonifica el óvalo facial y disminuye líneas de expresión.',
    duration: '75 min',
    detailedProtocol: [
      'Higiene biocompatible nutritiva',
      'Activación de microcirculación mediante maniobras de masaje miofascial',
      'Aparatología noble / radiofrecuencia resistiva atérmica y péptidos tensores',
      'Infusión de colágeno marino y oligoelementos',
      'Máscara oclusiva tensora de efecto reafirmante',
      'Finalización con sérum redensificador en cuello, escote y rostro'
    ],
    recommendedFor: 'Pieles maduras, flacidez del óvalo facial, pérdida de elasticidad, líneas finas y falta de tono muscular.',
    keyActives: ['Péptidos Biomiméticos', 'Colágeno Marino', 'Ácido Hialurónico Reticulado', 'Silicio Orgánico'],
    aftercare: [
      'Mantener hidratación dérmica y masajes ascendentes suaves en casa',
      'Uso diario de antioxidantes (Vitamina C / Resveratrol)',
      'Constancia en sesiones para optimizar la neocolagénesis'
    ]
  },
  {
    id: 'evaluacion-personalizada',
    title: 'Evaluación personalizada',
    category: 'diagnostico',
    tag: 'Diagnóstico Facial Amorella',
    hasCustomGradient: true,
    gradientFrom: '#f4ece5',
    gradientTo: '#f9f3ef',
    iconName: 'psychology_alt',
    description: 'Análisis facial integral previo para recomendar con total precisión el tratamiento que tu piel necesita, combinando asesoría en hábitos y rutina diaria.',
    duration: '40 min',
    detailedProtocol: [
      'Entrevista y anamnesis sobre estilo de vida, rutina actual y expectativas',
      'Observación táctil y visual bajo luz de aumento dérmica',
      'Evaluación del manto hidrolipídico, sensibilidad y reactividad',
      'Diseño de la hoja de ruta personalizada y plan de sesiones a medida',
      'Recomendación de orden de pasos de skincare para el hogar',
      'Mini preparación calmante de bienvenida para la piel'
    ],
    recommendedFor: 'Cualquier persona que visite Amorella por primera vez o no esté segura de qué tratamiento requiere su piel.',
    keyActives: ['Dermocosmética Sensorial', 'Agua Termal Descongestiva', 'Emulsión Calmante'],
    aftercare: [
      'Recibirás por WhatsApp tu ficha de recomendaciones personalizada',
      'Coordinación de tu primer protocolo en el horario más conveniente'
    ]
  }
];
