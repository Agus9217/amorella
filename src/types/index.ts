export interface Treatment {
  id: string;
  title: string;
  category: 'esencial' | 'glow' | 'renovacion' | 'tono' | 'antiage' | 'diagnostico';
  tag: string;
  image?: string;
  description: string;
  duration: string;
  detailedProtocol: string[];
  recommendedFor: string;
  aftercare: string[];
  keyActives: string[];
  hasCustomGradient?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  iconName?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  quote: string;
  text: string;
  rating: number;
  treatmentName?: string;
  date?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface QuizAnswer {
  skinType?: string;
  concern?: string;
  sensitivity?: string;
  timing?: string;
}
