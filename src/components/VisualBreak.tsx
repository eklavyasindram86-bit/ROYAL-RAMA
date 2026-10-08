import React from 'react';
import { Sparkles, Calendar } from 'lucide-react';

interface VisualBreakProps {
  onOpenBooking: () => void;
}

export const VisualBreak: React.FC<VisualBreakProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-[#120D09]">
      {/* Background with Dark Luxe Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/suite_executive_room_1791493574444.jpg"
          alt="Palatial suite atmosphere at twilight"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.1] scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#17110D]/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-transparent to-[#17110D]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#17110D]/50 to-[#17110D]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#C89A55] font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Sovereign Standard</span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F4EBDD] font-normal leading-[1.12] mb-6 max-w-3xl mx-auto">
          Designed for people who expect <span className="italic text-[#D8B878]">nothing less</span> than perfection.
        </h2>

        <p className="text-sm sm:text-base text-[#C9B9A1] font-light max-w-xl mx-auto leading-relaxed mb-9">
          From the temperature of your bath upon arrival to the exact vintage of your midnight champagne, experience hospitality curated strictly to your rhythm.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#17110D] bg-gradient-to-r from-[#C89A55] to-[#D8B878] hover:from-[#D8B878] hover:to-[#F4EBDD] transition-all rounded-sm shadow-xl shadow-black/60 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Secure Your Reservation</span>
          </button>
        </div>
      </div>
    </section>
  );
};
