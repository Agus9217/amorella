/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Treatments } from './components/Treatments';
import { TreatmentModal } from './components/TreatmentModal';
import { DiagnosticQuizModal } from './components/DiagnosticQuizModal';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Treatment } from './types';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTreatment, setBookingTreatment] = useState<Treatment | null>(null);

  const handleOpenBooking = (treatment?: Treatment) => {
    setBookingTreatment(treatment || null);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#fcfaf7] text-[#1e1a17] relative">
      {/* 1. Header / Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero Principal */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* 3. Sección de Beneficios */}
        <Benefits />

        {/* 4. Sección de Tratamientos */}
        <Treatments
          onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* 5. Sección Sobre Amorella */}
        <About />

        {/* 6. Sección Galería & Resultados */}
        <Gallery />

        {/* 7. Comparador Antes y Después */}
        <BeforeAfterSlider />

        {/* 8. Opiniones de Nuestras Clientas */}
        <Testimonials />

        {/* 9. Preguntas Frecuentes */}
        <FAQ />

        {/* 10. CTA Final WhatsApp */}
        <CtaBanner />
      </main>

      {/* 11. Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Modales Interactivas */}
      {selectedTreatment && (
        <TreatmentModal
          treatment={selectedTreatment}
          onClose={() => setSelectedTreatment(null)}
          onBookAppointment={(treatment) => {
            setSelectedTreatment(null);
            handleOpenBooking(treatment);
          }}
        />
      )}

      {isQuizOpen && (
        <DiagnosticQuizModal
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
          onSelectTreatment={(treatment) => {
            setIsQuizOpen(false);
            setSelectedTreatment(treatment);
          }}
        />
      )}

      {isBookingOpen && (
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialTreatment={bookingTreatment}
        />
      )}
    </div>
  );
}
