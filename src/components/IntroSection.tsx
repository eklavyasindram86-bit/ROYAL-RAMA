import React from 'react';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

interface IntroSectionProps {
  onLearnMore: () => void;
  onOpenBooking: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onLearnMore, onOpenBooking }) => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-[#17110D] relative overflow-hidden">
      {/* Decorative ambient radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C89A55]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Heading with Decorative Rule */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C89A55] font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Royal Philosophy</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F4EBDD] font-normal leading-[1.12] mb-6">
              Palatial Serenity. <br />
              <span className="italic text-[#D8B878]">Bespoke</span> Room Service.
            </h2>

            <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#C89A55] to-transparent mb-8"></div>

            <div className="p-5 border border-[#C89A55]/20 bg-[#241811]/40 rounded-sm">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-[#C89A55]" />
                <span className="text-xs uppercase tracking-wider text-[#F4EBDD] font-medium">
                  Forbes Travel Guide · 5-Star Honor
                </span>
              </div>
              <p className="text-xs text-[#C9B9A1] leading-relaxed">
                Recognized for the third consecutive year for excellence in guest privacy, in-suite culinary execution, and 24-hour majordomo hospitality.
              </p>
            </div>
          </div>

          {/* Right Column: Descriptive Content & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#C9B9A1] text-base sm:text-lg font-light leading-relaxed">
            <p className="text-[#F4EBDD] text-lg sm:text-xl font-normal leading-relaxed border-l-2 border-[#C89A55]/60 pl-5">
              At Royal Rama, luxury is not merely an aesthetic; it is an intuitive standard of living where your every desire is fulfilled before it is voiced.
            </p>

            <p>
              Nestled along the quiet waterfront promenade, each suite has been meticulously crafted with acoustically insulated walnut walls, hand-finished bronze hardware, Italian marble bathrooms, and panoramic floor-to-ceiling glass. 
            </p>

            <p>
              Our signature 24-hour in-room dining brigade delivers Michelin-caliber gastronomy directly to your suite beneath polished sterling silver cloches. Whether savoring imperial caviar at midnight, a sunrise espresso on your private terrace, or an artisanal multi-course banquet, experience hospitality that redefines five-star elegance.
            </p>

            {/* Quick Action Link */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.16em] text-[#D8B878] hover:text-[#F4EBDD] font-semibold transition-colors cursor-pointer"
              >
                <span>Reserve An Exclusive Experience</span>
                <ArrowRight className="w-4 h-4 text-[#C89A55] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onLearnMore}
                className="text-xs uppercase tracking-[0.16em] text-[#C9B9A1]/80 hover:text-[#C9B9A1] transition-colors cursor-pointer"
              >
                Explore Room Amenities →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
