/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfoStrip } from './components/InfoStrip';
import { IntroSection } from './components/IntroSection';
import { SuitesShowcase } from './components/SuitesShowcase';
import { InRoomDiningEditorial } from './components/InRoomDiningEditorial';
import { VisualBreak } from './components/VisualBreak';
import { AmenitiesSection } from './components/AmenitiesSection';
import { BookingEngine } from './components/BookingEngine';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SuiteDetailModal } from './components/SuiteDetailModal';
import { RoomServiceMenuModal } from './components/RoomServiceMenuModal';
import { Suite } from './types/hotel';

export default function App() {
  const [selectedSuiteForDetail, setSelectedSuiteForDetail] = useState<Suite | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeBookingSuiteId, setActiveBookingSuiteId] = useState<string>('superior-suite');

  const scrollToBooking = (suiteId?: string) => {
    if (suiteId) {
      setActiveBookingSuiteId(suiteId);
    }
    const element = document.getElementById('booking');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToSuites = () => {
    const element = document.getElementById('suites');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#17110D] text-[#F4EBDD] font-sans selection:bg-[#C89A55]/30 selection:text-[#F4EBDD]">
      {/* 1. Header / Navigation Bar */}
      <Navbar
        onOpenBooking={() => scrollToBooking()}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onExploreSuites={scrollToSuites}
        />

        {/* 3. Hero Information Strip (Overlapping Bottom of Hero) */}
        <InfoStrip
          onOpenBooking={() => scrollToBooking()}
          onOpenMenu={() => setIsMenuOpen(true)}
        />

        {/* 4. Introduction & Value Proposition */}
        <IntroSection
          onLearnMore={scrollToSuites}
          onOpenBooking={() => scrollToBooking()}
        />

        {/* 5. 3-Column Luxury Suites Showcase (Matching Reference Design) */}
        <SuitesShowcase
          onSelectSuite={(suite) => setSelectedSuiteForDetail(suite)}
          onBookSuite={(suite) => scrollToBooking(suite.id)}
        />

        {/* 6. Asymmetric Editorial Room Service & In-Room Dining Showcase */}
        <InRoomDiningEditorial
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenBooking={() => scrollToBooking()}
        />

        {/* 7. Full-Width Cinematic Visual Break */}
        <VisualBreak onOpenBooking={() => scrollToBooking()} />

        {/* 8. Palatial Differentiators & Amenities */}
        <AmenitiesSection />

        {/* 9. Interactive Room & Service Reservation Console */}
        <BookingEngine
          initialSuiteId={activeBookingSuiteId}
        />

        {/* 10. Guest Testimonials & Accolades */}
        <TestimonialsSection />

        {/* 11. Concierge Inquiries & Curated FAQ Accordion */}
        <ContactSection />
      </main>

      {/* 12. Multi-Column Luxury Footer */}
      <Footer
        onOpenBooking={() => scrollToBooking()}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Interactive Suite Detail Modal */}
      <SuiteDetailModal
        suite={selectedSuiteForDetail}
        onClose={() => setSelectedSuiteForDetail(null)}
        onBookNow={(suite) => {
          setSelectedSuiteForDetail(null);
          scrollToBooking(suite.id);
        }}
      />

      {/* Interactive In-Room Dining Carte Modal */}
      <RoomServiceMenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onReserveStayWithDining={() => {
          setIsMenuOpen(false);
          scrollToBooking();
        }}
      />
    </div>
  );
}
