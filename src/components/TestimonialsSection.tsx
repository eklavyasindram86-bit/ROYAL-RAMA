import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/hotelData';
import { Quote, ChevronLeft, ChevronRight, Star, Award } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#17110D] relative border-b border-[#C89A55]/15 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#C89A55]/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
        {/* Accolade Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#C89A55] font-semibold mb-6">
          <Award className="w-4 h-4" />
          <span>Guest Chronicles & Distinctions</span>
        </div>

        {/* Big Decorative Quotation Mark */}
        <div className="w-12 h-12 mx-auto mb-8 rounded-full bg-[#241811] border border-[#C89A55]/30 flex items-center justify-center">
          <Quote className="w-5 h-5 text-[#D8B878]" />
        </div>

        {/* Testimonial Quote in Large Editorial Serif Typography */}
        <blockquote className="font-editorial text-2xl sm:text-3xl md:text-4xl text-[#F4EBDD] font-normal leading-relaxed italic max-w-4xl mx-auto mb-8 min-h-[140px] flex items-center justify-center">
          "{current.quote}"
        </blockquote>

        {/* Rating Stars */}
        <div className="flex items-center justify-center gap-1.5 mb-4">
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#C89A55] text-[#C89A55]" />
          ))}
        </div>

        {/* Clean Unboxed Metadata with Typographic Separators */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#C9B9A1] font-medium mb-10">
          <span className="text-[#F4EBDD] font-semibold">{current.author}</span>
          <span aria-hidden="true" className="text-[#C89A55]">·</span>
          <span>{current.title}</span>
          <span aria-hidden="true" className="text-[#C89A55]">·</span>
          <span className="text-[#D8B878]">{current.source}</span>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-sm border border-white/10 hover:border-[#C89A55]/60 bg-[#241811]/60 flex items-center justify-center text-[#C9B9A1] hover:text-[#F4EBDD] transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === i ? 'w-6 bg-[#C89A55]' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-sm border border-white/10 hover:border-[#C89A55]/60 bg-[#241811]/60 flex items-center justify-center text-[#C9B9A1] hover:text-[#F4EBDD] transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
