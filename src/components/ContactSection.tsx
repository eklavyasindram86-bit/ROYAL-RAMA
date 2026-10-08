import React, { useState } from 'react';
import { FAQS } from '../data/hotelData';
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, CheckCircle, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Suite Reservation & Availability',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#17110D] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Form & Concierge Inquiries */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#C89A55] font-semibold mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Private Concierge Desk</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl text-[#F4EBDD] font-normal leading-[1.12] mb-4">
              Inquire With Our Head Majordomo
            </h2>

            <p className="text-sm sm:text-base text-[#C9B9A1] font-light leading-relaxed mb-8">
              Whether arranging a customized in-suite tasting banquet, private Rolls-Royce airport greeting, or bespoke residence booking, our concierge brigade is available 24 hours a day.
            </p>

            {isSent ? (
              <div className="bg-[#241811] border border-[#C89A55]/50 p-8 rounded-sm text-center">
                <CheckCircle className="w-12 h-12 text-[#D8B878] mx-auto mb-4" />
                <h3 className="font-editorial text-2xl text-[#F4EBDD] mb-2">
                  Inquiry Received
                </h3>
                <p className="text-xs text-[#C9B9A1] max-w-md mx-auto mb-6">
                  Thank you, {formData.name}. Our Head Concierge will review your requirements and respond via {formData.email} within 30 minutes.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-5 py-2 text-xs uppercase tracking-wider text-[#17110D] bg-[#C89A55] rounded-sm font-semibold cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#C9B9A1] mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Lady Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-[#201712] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#F4EBDD] placeholder:text-[#968878] focus:outline-none focus:border-[#C89A55] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#C9B9A1] mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="eleanor@vance.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-[#201712] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#F4EBDD] placeholder:text-[#968878] focus:outline-none focus:border-[#C89A55] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#C9B9A1] mb-1.5 font-medium">
                      Direct Telephone
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (800) 845-7262"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#201712] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#F4EBDD] placeholder:text-[#968878] focus:outline-none focus:border-[#C89A55] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#C9B9A1] mb-1.5 font-medium">
                      Inquiry Nature
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#201712] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#F4EBDD] focus:outline-none focus:border-[#C89A55] transition-colors"
                    >
                      <option value="Suite Reservation & Availability">Suite Reservation & Availability</option>
                      <option value="Private In-Room Dining & Banquet">Private In-Room Dining & Banquet</option>
                      <option value="Airport Rolls-Royce Chauffeur">Airport Rolls-Royce Chauffeur</option>
                      <option value="VIP Extended Stay / Buyout">VIP Extended Stay / Buyout</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#C9B9A1] mb-1.5 font-medium">
                    Personal Requests & Itinerary Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Specify preferred room temperature, celebratory champagne requests, dietary restrictions, or arrival specifics..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#201712] border border-white/10 rounded-sm px-4 py-3 text-sm text-[#F4EBDD] placeholder:text-[#968878] focus:outline-none focus:border-[#C89A55] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#17110D] bg-gradient-to-r from-[#C89A55] to-[#D8B878] hover:from-[#D8B878] hover:to-[#F4EBDD] transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-black/40"
                >
                  <Send className="w-4 h-4 text-[#17110D]" />
                  <span>Transmit Request to Concierge</span>
                </button>
              </form>
            )}

            {/* Direct Contact Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/[0.08]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C89A55] mt-1 shrink-0" />
                <div className="text-xs">
                  <span className="text-[#F4EBDD] font-medium block">The Estate Grounds</span>
                  <span className="text-[#C9B9A1]/80">88 Royal Boulevard, Riviera</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C89A55] mt-1 shrink-0" />
                <div className="text-xs">
                  <span className="text-[#F4EBDD] font-medium block">24/7 Telephone</span>
                  <a href="tel:+18008457262" className="text-[#D8B878] hover:underline tabular-nums">
                    +1 (800) 845-RAMA
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C89A55] mt-1 shrink-0" />
                <div className="text-xs">
                  <span className="text-[#F4EBDD] font-medium block">Direct Dispatch</span>
                  <a href="mailto:concierge@royalrama.com" className="text-[#C9B9A1] hover:text-[#F4EBDD]">
                    concierge@royalrama.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C89A55] mt-1 shrink-0" />
                <div className="text-xs">
                  <span className="text-[#F4EBDD] font-medium block">Butler & Dining Desk</span>
                  <span className="text-[#C9B9A1]/80">Continuous 24 Hours / 365 Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions Accordion */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#C89A55] font-semibold mb-3">
                <span>Guest Clarifications</span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#F4EBDD] font-normal mb-6">
                Curated Frequently Asked Inquiries
              </h3>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-[#C89A55]/20 bg-[#241811]/50 rounded-sm overflow-hidden transition-colors hover:border-[#C89A55]/40"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <span className="text-sm sm:text-base font-editorial text-[#F4EBDD]">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#C89A55] shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#C9B9A1] font-light leading-relaxed border-t border-white/[0.04] pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Subtle VIP Guarantee note */}
            <div className="mt-8 p-5 bg-[#201712] border-l-2 border-[#C89A55] text-xs text-[#C9B9A1]">
              <strong className="text-[#F4EBDD] block mb-1">Discretion & VIP Privacy Assurance</strong>
              All guest itineraries and personal room service preferences are managed under strict nondisclosure and encrypted concierge communication standards.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
