import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Utensils, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Suites & Rooms', href: '#suites' },
    { label: 'In-Room Services', href: '#services' },
    { label: 'Epicurean Dining', href: '#dining' },
    { label: 'Palatial Amenities', href: '#amenities' },
    { label: 'Heritage & Story', href: '#story' },
    { label: 'Concierge', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#17110D]/90 backdrop-blur-md border-b border-[#C89A55]/15 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-[#120D09]/85 via-[#17110D]/40 to-transparent py-5 border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single Text Element with refined diamond crest) */}
        <a
          href="#"
          className="group flex items-center gap-3.5 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C89A55]"
          aria-label="Royal Rama Luxury Hotel Home"
        >
          <div className="w-8 h-8 rotate-45 border border-[#C89A55]/70 flex items-center justify-center bg-[#241811]/60 group-hover:border-[#D8B878] transition-colors">
            <div className="w-3.5 h-3.5 -rotate-45 bg-gradient-to-br from-[#F4EBDD] to-[#C89A55]/90"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-2xl sm:text-[26px] tracking-[0.14em] text-[#F4EBDD] uppercase font-semibold leading-none group-hover:text-[#D8B878] transition-colors">
              Royal Rama
            </span>
            <span className="text-[9px] tracking-[0.28em] text-[#C9B9A1]/70 uppercase font-medium mt-1">
              Hotel & Room Services
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wider uppercase text-[#C9B9A1] font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#F4EBDD] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C89A55] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3.5">
          <button
            onClick={onOpenMenu}
            className="flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-wider text-[#C9B9A1] hover:text-[#F4EBDD] border border-white/10 hover:border-[#C89A55]/40 rounded-sm bg-[#241811]/40 transition-all cursor-pointer whitespace-nowrap"
            title="View In-Room Dining Menu"
          >
            <Utensils className="w-3.5 h-3.5 text-[#C89A55]" />
            <span className="hidden md:inline">Room Menu</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#17110D] bg-gradient-to-r from-[#C89A55] to-[#D8B878] hover:from-[#D8B878] hover:to-[#F4EBDD] transition-all duration-300 shadow-md shadow-[#C89A55]/20 hover:shadow-lg hover:shadow-[#C89A55]/30 cursor-pointer rounded-sm whitespace-nowrap transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Your Stay</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2.5">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#17110D] bg-[#C89A55] rounded-sm whitespace-nowrap"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F4EBDD] hover:text-[#C89A55] focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#17110D]/98 border-b border-[#C89A55]/20 px-6 py-6 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-editorial text-[#F4EBDD] hover:text-[#C89A55] tracking-wide transition-colors py-1.5 border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMenu();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs uppercase tracking-wider text-[#F4EBDD] border border-[#C89A55]/40 rounded-sm bg-[#241811]"
              >
                <Utensils className="w-4 h-4 text-[#C89A55]" />
                Explore In-Room Menu
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#17110D] bg-gradient-to-r from-[#C89A55] to-[#D8B878] rounded-sm shadow-md"
              >
                Reserve Your Stay
              </button>
              <a
                href="tel:+18008457262"
                className="flex items-center justify-center gap-2 text-xs text-[#C9B9A1] hover:text-[#F4EBDD] pt-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#C89A55]" />
                <span>Concierge: +1 (800) 845-RAMA</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
