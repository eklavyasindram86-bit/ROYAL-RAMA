import React from 'react';
import { Clock, MapPin, BellRing, PhoneCall } from 'lucide-react';

interface InfoStripProps {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
}

export const InfoStrip: React.FC<InfoStripProps> = ({ onOpenBooking, onOpenMenu }) => {
  return (
    <div className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-5 sm:px-8">
      <div className="bg-[#241811]/90 backdrop-blur-md border border-[#C89A55]/25 rounded-sm shadow-2xl shadow-black/80 p-5 sm:p-6 lg:p-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 lg:divide-x divide-white/[0.08]">
          {/* Block 1: Check-in / Out */}
          <div className="flex items-center gap-4 pt-3 md:pt-0 first:pt-0">
            <div className="w-11 h-11 rounded-sm border border-[#C89A55]/40 bg-[#17110D]/60 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#D8B878]" />
            </div>
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C89A55]">
                Check-In / Out
              </span>
              <p className="text-sm sm:text-base font-medium text-[#F4EBDD] mt-0.5 font-editorial text-lg tracking-wide">
                3:00 PM / 12:00 PM
              </p>
              <span className="text-[11px] text-[#C9B9A1]/70">Express Digital Key & Valet</span>
            </div>
          </div>

          {/* Block 2: Location */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 lg:pl-8">
            <div className="w-11 h-11 rounded-sm border border-[#C89A55]/40 bg-[#17110D]/60 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#D8B878]" />
            </div>
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C89A55]">
                Estate & Location
              </span>
              <p className="text-sm sm:text-base font-medium text-[#F4EBDD] mt-0.5">
                88 Royal Boulevard, Riviera
              </p>
              <span className="text-[11px] text-[#C9B9A1]/70">Private Helipad & Marina Gate</span>
            </div>
          </div>

          {/* Block 3: Room Service */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 lg:pl-8">
            <div className="w-11 h-11 rounded-sm border border-[#C89A55]/40 bg-[#17110D]/60 flex items-center justify-center shrink-0">
              <BellRing className="w-5 h-5 text-[#D8B878]" />
            </div>
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C89A55]">
                24/7 Room Services
              </span>
              <button
                onClick={onOpenMenu}
                className="text-left text-sm sm:text-base font-medium text-[#F4EBDD] hover:text-[#D8B878] transition-colors mt-0.5 cursor-pointer block underline decoration-[#C89A55]/40 underline-offset-4"
              >
                Dial Ext. 1 · Silver Cloche Menu
              </button>
              <span className="text-[11px] text-[#C9B9A1]/70">Average delivery sub-25 mins</span>
            </div>
          </div>

          {/* Block 4: Customer Support & Concierge */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 lg:pl-8">
            <div className="w-11 h-11 rounded-sm border border-[#C89A55]/40 bg-[#17110D]/60 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5 text-[#D8B878]" />
            </div>
            <div>
              <span className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C89A55]">
                Customer Support
              </span>
              <a
                href="tel:+18008457262"
                className="text-sm sm:text-base font-medium text-[#F4EBDD] hover:text-[#D8B878] transition-colors mt-0.5 block tabular-nums"
              >
                +1 (800) 845-RAMA
              </a>
              <span className="text-[11px] text-[#C9B9A1]/70">VIP Concierge & Butler Desk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
