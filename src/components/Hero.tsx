import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreSuites: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreSuites }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-20 md:pb-28 overflow-hidden bg-[#17110D]">
      {/* Cinematic Background Image with Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_royal_rama_suite_1791493549814.jpg"
          alt="Royal Rama Presidential Luxury Suite with golden cove lighting"
          className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] transform scale-[1.01] transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Multi-layered dark luxury overlays for readability and warm amber glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17110D]/95 via-[#17110D]/75 to-[#17110D]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-transparent to-[#17110D]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,154,85,0.12),transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow Label with Clean Unboxed Typographic Separators */}
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] tracking-[0.25em] uppercase text-[#D8B878] font-medium mb-5">
            <span className="w-5 h-[1px] bg-[#C89A55]"></span>
            <span>Five-Star Sanctuary & 24/7 Room Services</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#C9B9A1]/80">Est. 1928</span>
          </div>

          {/* Hero Headline: Large Editorial Serif Typography matching reference */}
          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal leading-[1.04] text-[#F4EBDD] tracking-[-0.015em] mb-6 drop-shadow-sm">
            Experience <br />
            <span className="italic font-light text-[#D8B878]">Five-Star</span> Luxury
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-[#C9B9A1] font-light leading-relaxed max-w-xl mb-9">
            Unmatched comfort and palatial elegance tailored to perfection. Indulge in private master suites, silver-cloche in-room dining, and dedicated 24-hour butler hospitality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            {/* Primary CTA - Champagne Gold */}
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#17110D] bg-gradient-to-r from-[#C89A55] via-[#D8B878] to-[#C89A55] hover:brightness-110 transition-all duration-300 rounded-sm shadow-xl shadow-black/40 hover:shadow-[#C89A55]/20 flex items-center justify-center gap-3 cursor-pointer group transform hover:-translate-y-0.5"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4 text-[#17110D] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA - Transparent with subtle warm border */}
            <button
              onClick={onExploreSuites}
              className="px-7 py-4 text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-[#F4EBDD] bg-[#241811]/40 hover:bg-[#342218]/70 border border-[#C89A55]/30 hover:border-[#C89A55] transition-all duration-300 rounded-sm backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Signature Suites</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-[#C9B9A1]/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C89A55]" />
              <span>Guaranteed Best Direct Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C89A55]" />
              <span>Complimentary In-Suite Champagne Welcome</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C89A55]"></span>
              <span>Flexible 72-Hour Cancellation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
