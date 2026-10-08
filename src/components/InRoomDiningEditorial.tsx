import React from 'react';
import { ArrowRight, UtensilsCrossed, Clock, Sparkles } from 'lucide-react';

interface InRoomDiningEditorialProps {
  onOpenMenu: () => void;
  onOpenBooking: () => void;
}

export const InRoomDiningEditorial: React.FC<InRoomDiningEditorialProps> = ({
  onOpenMenu,
  onOpenBooking,
}) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#17110D] relative overflow-hidden">
      {/* Subtle radial ambient highlight */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C89A55]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Text matching Reference structure */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#C89A55] font-semibold mb-3">
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>24/7 Culinary Room Services</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F4EBDD] font-normal leading-[1.1] mb-6">
              Discover Refined <br />
              <span className="italic text-[#D8B878]">In-Room</span> Dining
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#C9B9A1] font-light leading-relaxed mb-8">
              <p>
                Experience the art of private hospitality without stepping beyond your suite. Our dedicated culinary brigade brings the sophistication of a Michelin-starred dining room straight to your bedside or private terrace.
              </p>
              <p>
                Each creation arrives beneath polished sterling silver cloches, accompanied by crystal stemware, fine linens, and tableside sommelier wine pours. From sunrise brioche French toast to midnight caviar service, every craving is met with impeccable precision.
              </p>
            </div>

            {/* Quick Service Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8 pt-4 border-t border-white/[0.08]">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C89A55] mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#F4EBDD] font-medium">Sub-25 Minute Service</h4>
                  <p className="text-[11px] text-[#C9B9A1]/70 mt-0.5">Prompt delivery directly to your dining table</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#C89A55] mt-1 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#F4EBDD] font-medium">Sommelier Pairings</h4>
                  <p className="text-[11px] text-[#C9B9A1]/70 mt-0.5">Cellar vintages decanted upon arrival</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenMenu}
                className="py-3.5 px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#17110D] bg-gradient-to-r from-[#C89A55] to-[#D8B878] hover:from-[#D8B878] hover:to-[#F4EBDD] transition-all rounded-sm shadow-lg shadow-black/40 flex items-center gap-2.5 cursor-pointer"
              >
                <span>View In-Room Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenBooking}
                className="py-3.5 px-6 text-xs font-medium uppercase tracking-[0.14em] text-[#F4EBDD] hover:text-[#D8B878] border border-[#C89A55]/30 hover:border-[#C89A55] rounded-sm transition-colors cursor-pointer bg-[#241811]/40"
              >
                Reserve Stay With Dining
              </button>
            </div>
          </div>

          {/* Right Column: Two Vertical / Asymmetric Images matching Reference layout */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Image 1: In-Room Dining Tray (Primary) */}
            <div className="relative group overflow-hidden rounded-sm border border-[#C89A55]/25 bg-[#241811] shadow-2xl">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/src/assets/images/service_inroom_dining_1791493595171.jpg"
                  alt="24-hour luxury hotel in-room dining silver tray service"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-[#241811]/90 backdrop-blur-sm border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#C89A55] font-semibold block">
                    Breakfast In Bed
                  </span>
                  <span className="text-xs text-[#F4EBDD] font-medium font-editorial text-sm">
                    The Royal Morning Cloche Service
                  </span>
                </div>
                <button
                  onClick={onOpenMenu}
                  className="text-[11px] text-[#D8B878] hover:underline"
                >
                  Order
                </button>
              </div>
            </div>

            {/* Image 2: Penthouse Terrace / Ocean Vista (Staggered offset like reference) */}
            <div className="relative group overflow-hidden rounded-sm border border-[#C89A55]/25 bg-[#241811] shadow-2xl sm:translate-y-8">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/src/assets/images/suite_grand_penthouse_1791493585689.jpg"
                  alt="Panoramic sunset coastal terrace and penthouse suite"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-[#241811]/90 backdrop-blur-sm border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#C89A55] font-semibold block">
                    Private Terrace Dining
                  </span>
                  <span className="text-xs text-[#F4EBDD] font-medium font-editorial text-sm">
                    Sunset Aperitivo & Caviar Salon
                  </span>
                </div>
                <button
                  onClick={onOpenBooking}
                  className="text-[11px] text-[#D8B878] hover:underline"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
