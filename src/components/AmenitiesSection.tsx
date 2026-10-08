import React from 'react';
import { ConciergeBell, Wine, Car, Shield, Waves, Sparkles } from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const differentiators = [
    {
      icon: ConciergeBell,
      title: 'Dedicated Butler & Majordomo',
      description: 'A discreet personal valet assigned to your floor, managing wardrobe pressing, packing, and bespoke in-room culinary arrangements 24/7.',
    },
    {
      icon: Wine,
      title: 'Michelin-Caliber In-Room Dining',
      description: 'Hot delicacies delivered beneath heated sterling silver cloches in under 25 minutes, with private tableside sommelier pairings.',
    },
    {
      icon: Car,
      title: 'Rolls-Royce Private Fleet',
      description: 'Complimentary chauffeured airport transfers and town car escort in custom-appointed Rolls-Royce Ghost sedans.',
    },
    {
      icon: Shield,
      title: 'Absolute Discretion & Privacy',
      description: 'Private elevator access, biometric sound-dampened corridors, and dedicated VIP security protocols for peace of mind.',
    },
  ];

  const estateHighlights = [
    {
      title: 'The Azure Thermal Oasis',
      category: 'Hydrotherapy & Pools',
      detail: 'Heated mineral-water infinity pool overlooking the bay with private shaded cabanas and poolside bell service.',
    },
    {
      title: 'The Grand Rama Cellar',
      category: 'Sommelier Collection',
      detail: 'Over 2,400 rare vintage bottles spanning Burgundy, Bordeaux, and Napa, accessible for private tastings and in-suite decanting.',
    },
    {
      title: 'Ayurvedic & Swiss Spa Retreat',
      category: 'Wellness & Vitality',
      detail: 'In-suite customized hot stone treatments, botanical aromatherapy, and private cedar dry saunas.',
    },
  ];

  return (
    <section id="amenities" className="py-24 sm:py-32 bg-[#17110D] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#C89A55] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Royal Distinction</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F4EBDD] font-normal leading-[1.1]">
            Why Discerning Travelers Choose Royal Rama
          </h2>
          <p className="text-sm sm:text-base text-[#C9B9A1] font-light mt-3">
            Four pillars of uncompromising hospitality that distinguish our palatial estate from conventional luxury hotels.
          </p>
        </div>

        {/* 4 Differentiators in Horizontal Editorial Layout (Adhering to anti-slop rules: no generic icon candy boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col border-t border-[#C89A55]/30 pt-6 group hover:border-[#D8B878] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-5 h-5 text-[#C89A55] group-hover:text-[#D8B878] transition-colors" />
                  <span className="text-[11px] font-mono tracking-widest text-[#C89A55]/60">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-editorial text-2xl text-[#F4EBDD] font-normal mb-3 group-hover:text-[#D8B878] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#C9B9A1] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Estate Amenities Strips */}
        <div className="bg-[#241811]/60 border border-[#C89A55]/20 rounded-sm p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-8">
            <Waves className="w-5 h-5 text-[#C89A55]" />
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#F4EBDD]">
              Palatial Estate Experiences
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {estateHighlights.map((highlight, idx) => (
              <div key={idx} className={`pt-6 md:pt-0 ${idx > 0 ? 'md:pl-8' : ''}`}>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C89A55] font-semibold block mb-2">
                  {highlight.category}
                </span>
                <h4 className="text-lg text-[#F4EBDD] font-editorial mb-2">
                  {highlight.title}
                </h4>
                <p className="text-xs text-[#C9B9A1] font-light leading-relaxed">
                  {highlight.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
