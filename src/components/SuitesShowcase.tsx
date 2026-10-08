import React, { useState } from 'react';
import { SUITES } from '../data/hotelData';
import { Suite } from '../types/hotel';
import { Sparkles, Maximize2, Users, BedDouble, ArrowUpRight } from 'lucide-react';

interface SuitesShowcaseProps {
  onSelectSuite: (suite: Suite) => void;
  onBookSuite: (suite: Suite) => void;
}

export const SuitesShowcase: React.FC<SuitesShowcaseProps> = ({ onSelectSuite, onBookSuite }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Superior' | 'Executive' | 'Grand'>('All');

  const filteredSuites = activeFilter === 'All'
    ? SUITES
    : SUITES.filter((s) => s.category === activeFilter);

  return (
    <section id="suites" className="py-24 sm:py-32 bg-[#201712]/70 relative border-t border-b border-[#C89A55]/15">
      {/* Background warm grain texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#17110D] via-transparent to-[#17110D] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#C89A55] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Private Accommodations</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F4EBDD] font-normal leading-[1.1]">
              Signature Suites & Palatial Rooms
            </h2>
            <p className="text-sm sm:text-base text-[#C9B9A1] font-light mt-3 max-w-xl">
              Each private sanctuary features Italian marble baths, acoustically buffered wood suites, and seamless 24-hour in-room silver cloche dining.
            </p>
          </div>

          {/* Interactive Filter Controls (Functional Tabs adhering to Zero-Pill rule) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#17110D]/90 border border-[#C89A55]/20 rounded-sm self-start md:self-auto">
            {(['All', 'Superior', 'Executive', 'Grand'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all rounded-sm cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#C89A55] to-[#D8B878] text-[#17110D] font-semibold shadow-sm'
                    : 'text-[#C9B9A1] hover:text-[#F4EBDD] hover:bg-[#241811]'
                }`}
              >
                {filter === 'All' ? 'All Residences' : `${filter} Tiers`}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Luxury Suite Cards Grid matching the Reference Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {filteredSuites.map((suite) => (
            <div
              key={suite.id}
              className="group flex flex-col justify-between bg-[#241811]/70 border border-[#C89A55]/20 rounded-sm p-6 sm:p-7 card-luxury-hover transition-all"
            >
              {/* Top Text Block (matching reference structure) */}
              <div className="mb-6">
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#F4EBDD] font-normal mb-2 group-hover:text-[#D8B878] transition-colors">
                  {suite.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#C9B9A1] font-light leading-relaxed line-clamp-2">
                  {suite.tagline}
                </p>
              </div>

              {/* High-Quality Suite Photograph with Hover Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#17110D] mb-6 border border-white/[0.06]">
                <img
                  src={suite.image}
                  alt={suite.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17110D]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Quick inspect button */}
                <button
                  onClick={() => onSelectSuite(suite)}
                  className="absolute top-3 right-3 p-2 bg-[#17110D]/80 backdrop-blur-md text-[#F4EBDD] hover:text-[#C89A55] border border-[#C89A55]/30 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  title="View Suite Gallery & Specs"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Lower Card Information Block */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-[#C89A55] font-semibold mb-2">
                    <span>{suite.category} Residence</span>
                    <span className="text-[#C9B9A1]/70 font-normal">{suite.sizeSqFt} SQ FT</span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#C9B9A1] leading-relaxed mb-4 line-clamp-2">
                    {suite.description}
                  </p>

                  {/* Clean unboxed specifications with separators */}
                  <div className="flex items-center gap-3 text-xs text-[#C9B9A1]/80 mb-6 py-2 border-t border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="w-3.5 h-3.5 text-[#C89A55]" />
                      <span>{suite.bedType.split(' ')[0]} King</span>
                    </div>
                    <span aria-hidden="true" className="text-[#C89A55]/40">·</span>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#C89A55]" />
                      <span>Up to {suite.maxGuests} Guests</span>
                    </div>
                  </div>
                </div>

                {/* Actions: Primary Gold Price Button & Secondary Details */}
                <div className="flex items-center gap-3 pt-1">
                  <button
                    onClick={() => onBookSuite(suite)}
                    className="flex-1 py-3 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#17110D] bg-gradient-to-r from-[#C89A55] to-[#D8B878] hover:from-[#D8B878] hover:to-[#F4EBDD] transition-all rounded-sm text-center shadow-md shadow-black/40 cursor-pointer"
                  >
                    From ${suite.pricePerNight} / Night
                  </button>

                  <button
                    onClick={() => onSelectSuite(suite)}
                    className="p-3 text-[#C9B9A1] hover:text-[#F4EBDD] border border-white/10 hover:border-[#C89A55]/40 rounded-sm bg-[#17110D]/50 transition-colors cursor-pointer"
                    title="Suite Details"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#D8B878]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
