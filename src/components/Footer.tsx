import React from 'react';
import { Phone, Mail, MapPin, Award, Shield, Instagram, Facebook, Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenMenu }) => {
  return (
    <footer className="bg-[#120D09] text-[#C9B9A1] border-t border-[#C89A55]/20 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rotate-45 border border-[#C89A55]/70 flex items-center justify-center bg-[#241811]/60">
                <div className="w-3.5 h-3.5 -rotate-45 bg-gradient-to-br from-[#F4EBDD] to-[#C89A55]/90"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-2xl tracking-[0.14em] text-[#F4EBDD] uppercase font-semibold">
                  Royal Rama
                </span>
                <span className="text-[9px] tracking-[0.28em] text-[#C9B9A1]/70 uppercase font-medium mt-0.5">
                  Hotel & Room Services
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C9B9A1] font-light leading-relaxed max-w-sm">
              An iconic waterfront estate dedicated to five-star hospitality, architectural grandeur, and round-the-clock bespoke in-room dining services.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#instagram"
                className="w-8 h-8 rounded-sm border border-white/10 hover:border-[#C89A55] flex items-center justify-center text-[#C9B9A1] hover:text-[#F4EBDD] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                className="w-8 h-8 rounded-sm border border-white/10 hover:border-[#C89A55] flex items-center justify-center text-[#C9B9A1] hover:text-[#F4EBDD] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                className="w-8 h-8 rounded-sm border border-white/10 hover:border-[#C89A55] flex items-center justify-center text-[#C9B9A1] hover:text-[#F4EBDD] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3">
              <div className="inline-flex items-center gap-2 text-[11px] text-[#D8B878] tracking-wider uppercase">
                <Award className="w-3.5 h-3.5 text-[#C89A55]" />
                <span>Forbes 5-Star · Condé Nast Gold List</span>
              </div>
            </div>
          </div>

          {/* Nav Links Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#F4EBDD] font-semibold">
              The Estate
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#suites" className="hover:text-[#F4EBDD] transition-colors">
                  Signature Suites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F4EBDD] transition-colors">
                  In-Room Services
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#F4EBDD] transition-colors">
                  Epicurean Carte
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#F4EBDD] transition-colors">
                  Palatial Amenities
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#F4EBDD] transition-colors">
                  Heritage & Philosophy
                </a>
              </li>
            </ul>
          </div>

          {/* Hospitality & Room Services Column (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#F4EBDD] font-semibold">
              Room Services & Concierge
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={onOpenMenu}
                  className="hover:text-[#F4EBDD] transition-colors text-left cursor-pointer"
                >
                  24/7 Silver Cloche Dining
                </button>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#F4EBDD] transition-colors">
                  Dedicated Butler & Majordomo
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#F4EBDD] transition-colors">
                  Private Rolls-Royce Chauffeur
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#F4EBDD] transition-colors">
                  In-Suite Spa & Ayurvedic Care
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F4EBDD] transition-colors">
                  Sommelier Cellar Pairings
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#F4EBDD] font-semibold">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89A55] mt-0.5 shrink-0" />
                <span>88 Royal Boulevard, Riviera Estate Grounds</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C89A55] shrink-0" />
                <a href="tel:+18008457262" className="text-[#D8B878] hover:underline tabular-nums">
                  +1 (800) 845-RAMA
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C89A55] shrink-0" />
                <a href="mailto:concierge@royalrama.com" className="hover:text-[#F4EBDD]">
                  concierge@royalrama.com
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#17110D] bg-gradient-to-r from-[#C89A55] to-[#D8B878] hover:brightness-110 rounded-sm cursor-pointer"
                >
                  Reserve Your Stay
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C9B9A1]/60">
          <div>
            © 2026 Royal Rama Luxury Hotel & Room Services. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#F4EBDD] transition-colors">
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a href="#terms" className="hover:text-[#F4EBDD] transition-colors">
              Terms of Stay
            </a>
            <span aria-hidden="true">·</span>
            <a href="#cookies" className="hover:text-[#F4EBDD] transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
