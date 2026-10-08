import React from 'react';
import { Suite } from '../types/hotel';
import { X, Check, BedDouble, Users, Maximize, ArrowRight, BellRing, Sparkles } from 'lucide-react';

interface SuiteDetailModalProps {
  suite: Suite | null;
  onClose: () => void;
  onBookNow: (suite: Suite) => void;
}

export const SuiteDetailModal: React.FC<SuiteDetailModalProps> = ({
  suite,
  onClose,
  onBookNow,
}) => {
  if (!suite) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#17110D] border border-[#C89A55]/30 rounded-sm shadow-2xl overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#17110D]/80 backdrop-blur-md text-[#F4EBDD] hover:text-[#C89A55] border border-white/10 rounded-sm cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#120D09] overflow-hidden">
          <img
            src={suite.image}
            alt={suite.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-transparent to-transparent opacity-90" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[11px] tracking-[0.24em] uppercase text-[#C89A55] font-semibold block mb-1">
              {suite.category} Residence
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#F4EBDD]">
              {suite.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#241811]/60 border border-white/[0.06] rounded-sm text-xs">
            <div>
              <span className="text-[#C9B9A1]/70 block mb-0.5">Area Size</span>
              <div className="flex items-center gap-1.5 font-medium text-[#F4EBDD]">
                <Maximize className="w-3.5 h-3.5 text-[#C89A55]" />
                <span>{suite.sizeSqFt} Sq Ft</span>
              </div>
            </div>
            <div>
              <span className="text-[#C9B9A1]/70 block mb-0.5">Bedding</span>
              <div className="flex items-center gap-1.5 font-medium text-[#F4EBDD]">
                <BedDouble className="w-3.5 h-3.5 text-[#C89A55]" />
                <span>{suite.bedType}</span>
              </div>
            </div>
            <div>
              <span className="text-[#C9B9A1]/70 block mb-0.5">Capacity</span>
              <div className="flex items-center gap-1.5 font-medium text-[#F4EBDD]">
                <Users className="w-3.5 h-3.5 text-[#C89A55]" />
                <span>{suite.maxGuests} Guests</span>
              </div>
            </div>
            <div>
              <span className="text-[#C9B9A1]/70 block mb-0.5">Viewpoint</span>
              <span className="font-medium text-[#D8B878] truncate block">
                {suite.view}
              </span>
            </div>
          </div>

          {/* Long Description */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] text-[#C89A55] font-semibold mb-2">
              Residence Architecture & Ambience
            </h4>
            <p className="text-sm text-[#C9B9A1] font-light leading-relaxed">
              {suite.longDescription}
            </p>
          </div>

          {/* Key Inclusions & Room Service Perks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#F4EBDD] font-medium mb-3">
                <Sparkles className="w-4 h-4 text-[#C89A55]" />
                <span>Architectural Appointments</span>
              </div>
              <ul className="space-y-2 text-xs text-[#C9B9A1]">
                {suite.keyAmenities.map((amenity, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C89A55] shrink-0" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#F4EBDD] font-medium mb-3">
                <BellRing className="w-4 h-4 text-[#C89A55]" />
                <span>In-Room Hospitality & Dining</span>
              </div>
              <ul className="space-y-2 text-xs text-[#C9B9A1]">
                {suite.roomServicePerks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C89A55] shrink-0" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#C9B9A1] block">Direct Reservation Rate</span>
              <div className="font-editorial text-3xl text-[#D8B878] font-bold">
                ${suite.pricePerNight} <span className="text-sm font-normal text-[#C9B9A1]">/ Night</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="py-3 px-5 text-xs uppercase tracking-wider text-[#C9B9A1] hover:text-[#F4EBDD] border border-white/10 rounded-sm cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookNow(suite);
                }}
                className="flex-1 sm:flex-initial py-3.5 px-7 text-xs font-semibold uppercase tracking-[0.14em] text-[#17110D] bg-gradient-to-r from-[#C89A55] to-[#D8B878] hover:from-[#D8B878] hover:to-[#F4EBDD] transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Reserve This Suite</span>
                <ArrowRight className="w-4 h-4 text-[#17110D]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
