import React, { useState } from 'react';
import { SUITES, SERVICE_ADDONS } from '../data/hotelData';
import { Suite } from '../types/hotel';
import { Calendar, Users, CheckCircle2, Sparkles, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

interface BookingEngineProps {
  initialSuiteId?: string;
  onSuccessConfirmation?: (details: any) => void;
}

export const BookingEngine: React.FC<BookingEngineProps> = ({
  initialSuiteId,
  onSuccessConfirmation,
}) => {
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>(
    initialSuiteId || 'superior-suite'
  );
  const [checkIn, setCheckIn] = useState<string>('2026-10-15');
  const [checkOut, setCheckOut] = useState<string>('2026-10-18');
  const [guests, setGuests] = useState<number>(2);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([
    'welcome-champagne',
    'breakfast-in-bed',
  ]);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [submittedReservation, setSubmittedReservation] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const selectedSuite = SUITES.find((s) => s.id === selectedSuiteId) || SUITES[0];

  // Calculate nights
  const calculateNights = () => {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = Math.abs(d2.getTime() - d1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 3;
    }
  };

  const nights = calculateNights();
  const roomCost = selectedSuite.pricePerNight * nights;
  const addOnsCost = selectedAddOnIds.reduce((total, id) => {
    const addon = SERVICE_ADDONS.find((a) => a.id === id);
    return total + (addon ? addon.price : 0);
  }, 0);
  const taxesAndService = Math.round((roomCost + addOnsCost) * 0.12);
  const totalAmount = roomCost + addOnsCost + taxesAndService;

  const toggleAddOn = (id: string) => {
    if (selectedAddOnIds.includes(id)) {
      setSelectedAddOnIds(selectedAddOnIds.filter((item) => item !== id));
    } else {
      setSelectedAddOnIds([...selectedAddOnIds, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const reservation = {
        confirmationCode: `RR-${Math.floor(100000 + Math.random() * 900000)}`,
        suite: selectedSuite,
        checkIn,
        checkOut,
        nights,
        guests,
        guestName: fullName,
        email,
        phone: phone || '+1 (555) 019-2834',
        specialRequests,
        addOns: selectedAddOnIds.map((id) => SERVICE_ADDONS.find((a) => a.id === id)?.name).filter(Boolean),
        totalAmount,
      };
      setSubmittedReservation(reservation);
      setIsSubmitting(false);
      if (onSuccessConfirmation) {
        onSuccessConfirmation(reservation);
      }
    }, 600);
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#201712]/90 relative border-t border-[#C89A55]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#C89A55] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Reservations</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#F4EBDD] font-normal leading-[1.1]">
            Reserve Your Stay & Room Service
          </h2>
          <p className="text-sm sm:text-base text-[#C9B9A1] font-light mt-3">
            Enjoy guaranteed best rates, flexible check-in, and personalized in-suite culinary arrangements.
          </p>
        </div>

        {submittedReservation ? (
          /* Confirmation State */
          <div className="bg-[#17110D] border border-[#C89A55]/40 rounded-sm p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C89A55]/15 border border-[#C89A55]/40 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#D8B878]" />
            </div>

            <span className="text-xs uppercase tracking-[0.28em] text-[#C89A55] font-semibold block mb-2">
              Reservation Confirmed
            </span>

            <h3 className="font-editorial text-3xl sm:text-4xl text-[#F4EBDD] mb-4">
              We Await Your Palatial Arrival
            </h3>

            <p className="text-sm text-[#C9B9A1] max-w-lg mx-auto mb-8 font-light">
              Dear {submittedReservation.guestName}, your reservation at Royal Rama has been secured under reference <strong className="text-[#F4EBDD] font-mono">{submittedReservation.confirmationCode}</strong>. A comprehensive itinerary and in-room preference guide has been dispatched to {submittedReservation.email}.
            </p>

            {/* Summary Details */}
            <div className="bg-[#241811]/70 border border-white/[0.08] p-6 rounded-sm text-left mb-8 space-y-3 text-xs sm:text-sm text-[#C9B9A1]">
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span>Selected Residence:</span>
                <span className="text-[#F4EBDD] font-medium">{submittedReservation.suite.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span>Dates of Stay:</span>
                <span className="text-[#F4EBDD]">{submittedReservation.checkIn} to {submittedReservation.checkOut} ({submittedReservation.nights} nights)</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span>Guests:</span>
                <span className="text-[#F4EBDD]">{submittedReservation.guests} Adults</span>
              </div>
              {submittedReservation.addOns.length > 0 && (
                <div className="flex justify-between border-b border-white/[0.06] pb-2">
                  <span>Room Service Inclusions:</span>
                  <span className="text-[#D8B878] text-right">{submittedReservation.addOns.join(', ')}</span>
                </div>
              )}
              <div className="flex justify-between pt-1 text-base font-editorial">
                <span className="text-[#F4EBDD]">Total Confirmed Amount:</span>
                <span className="text-[#D8B878] font-bold text-lg">${submittedReservation.totalAmount}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setSubmittedReservation(null)}
                className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#17110D] bg-gradient-to-r from-[#C89A55] to-[#D8B878] rounded-sm cursor-pointer hover:brightness-110"
              >
                Modify or Make Another Booking
              </button>
              <a
                href="tel:+18008457262"
                className="py-3 px-6 text-xs font-medium uppercase tracking-wider text-[#F4EBDD] border border-[#C89A55]/30 hover:border-[#C89A55] rounded-sm bg-[#241811]"
              >
                Call Butler Direct: +1 800 845-RAMA
              </a>
            </div>
          </div>
        ) : (
          /* Interactive Booking Form Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Form Input Controls */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
              {/* Step 1: Stay Dates & Suite Selection */}
              <div className="bg-[#17110D]/80 border border-[#C89A55]/20 p-6 sm:p-7 rounded-sm space-y-5">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B878]">
                    01. Select Residence & Stay Dates
                  </span>
                  <span className="text-xs text-[#C9B9A1]/60">Step 1 of 2</span>
                </div>

                {/* Suite Tier Selection Dropdown */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C9B9A1] font-medium mb-2">
                    Suite Residence
                  </label>
                  <select
                    value={selectedSuiteId}
                    onChange={(e) => setSelectedSuiteId(e.target.value)}
                    className="w-full bg-[#241811] border border-[#C89A55]/30 rounded-sm px-4 py-3 text-sm text-[#F4EBDD] focus:outline-none focus:border-[#D8B878] transition-colors"
                  >
                    {SUITES.map((suite) => (
                      <option key={suite.id} value={suite.id}>
                        {suite.name} — ${suite.pricePerNight} / night ({suite.sizeSqFt} sq ft)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9B9A1] font-medium mb-1.5">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#241811] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-[#F4EBDD] focus:outline-none focus:border-[#C89A55]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9B9A1] font-medium mb-1.5">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#241811] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-[#F4EBDD] focus:outline-none focus:border-[#C89A55]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9B9A1] font-medium mb-1.5">
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#241811] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-[#F4EBDD] focus:outline-none focus:border-[#C89A55]"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Bespoke Room Service Add-Ons */}
              <div className="bg-[#17110D]/80 border border-[#C89A55]/20 p-6 sm:p-7 rounded-sm space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B878]">
                    02. Bespoke In-Room Dining & Hospitality Upgrades
                  </span>
                  <span className="text-xs text-[#C9B9A1]/60">Optional Enhancements</span>
                </div>

                <div className="space-y-3">
                  {SERVICE_ADDONS.map((addon) => {
                    const isChecked = selectedAddOnIds.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-3.5 rounded-sm border cursor-pointer transition-all flex items-start justify-between gap-4 ${
                          isChecked
                            ? 'bg-[#241811] border-[#C89A55]/60'
                            : 'bg-[#17110D]/40 border-white/[0.06] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="mt-1 accent-[#C89A55] rounded-none cursor-pointer"
                          />
                          <div>
                            <span className="text-xs sm:text-sm font-medium text-[#F4EBDD] block">
                              {addon.name}
                            </span>
                            <span className="text-[11px] text-[#C9B9A1] font-light leading-snug block mt-0.5">
                              {addon.description}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#D8B878] shrink-0 font-semibold">
                          +${addon.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Guest Contact Details */}
              <div className="bg-[#17110D]/80 border border-[#C89A55]/20 p-6 sm:p-7 rounded-sm space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D8B878] block border-b border-white/[0.08] pb-3">
                  03. Guest & Contact Information
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9B9A1] font-medium mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lord Alistair Vance"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#241811] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-[#F4EBDD] focus:outline-none focus:border-[#C89A55]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9B9A1] font-medium mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="alistair@vance-holdings.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#241811] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-[#F4EBDD] focus:outline-none focus:border-[#C89A55]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9B9A1] font-medium mb-1.5">
                      Direct Mobile / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 234-5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#241811] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-[#F4EBDD] focus:outline-none focus:border-[#C89A55]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C9B9A1] font-medium mb-1.5">
                      Dietary & Room Service Preferences
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Champagne chilled, gluten-free pastry"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full bg-[#241811] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs sm:text-sm text-[#F4EBDD] focus:outline-none focus:border-[#C89A55]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#17110D] bg-gradient-to-r from-[#C89A55] via-[#D8B878] to-[#C89A55] hover:brightness-110 transition-all rounded-sm shadow-xl shadow-black/50 cursor-pointer flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <span>Securing Palatial Suite...</span>
                  ) : (
                    <>
                      <span>Confirm Reservation (${totalAmount})</span>
                      <ArrowRight className="w-4 h-4 text-[#17110D]" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Right 5 Columns: Sticky Price Summary & Selected Suite Card */}
            <div className="lg:col-span-5 bg-[#17110D] border border-[#C89A55]/30 rounded-sm p-6 sm:p-7 sticky top-24 shadow-2xl">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#C89A55] font-semibold block mb-3">
                Reservation Summary
              </span>

              {/* Selected Suite Preview Thumbnail */}
              <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-5 border border-white/[0.08]">
                <img
                  src={selectedSuite.image}
                  alt={selectedSuite.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div>
                    <span className="text-xs text-[#C89A55] tracking-wider uppercase font-semibold">
                      {selectedSuite.category}
                    </span>
                    <h4 className="text-base text-[#F4EBDD] font-editorial">
                      {selectedSuite.name}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[#D8B878] bg-[#17110D]/80 px-2 py-0.5 rounded-sm">
                    ${selectedSuite.pricePerNight} / nt
                  </span>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-xs text-[#C9B9A1] border-b border-white/[0.08] pb-5">
                <div className="flex justify-between">
                  <span>Stay Duration:</span>
                  <span className="text-[#F4EBDD] tabular-nums font-medium">{nights} Nights ({checkIn} → {checkOut})</span>
                </div>
                <div className="flex justify-between">
                  <span>Room Charge:</span>
                  <span className="text-[#F4EBDD] tabular-nums">${selectedSuite.pricePerNight} × {nights} = ${roomCost}</span>
                </div>
                {addOnsCost > 0 && (
                  <div className="flex justify-between text-[#D8B878]">
                    <span>Room Service Add-Ons:</span>
                    <span className="tabular-nums">+${addOnsCost}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Taxes & Luxury Hospitality (12%):</span>
                  <span className="text-[#F4EBDD] tabular-nums">${taxesAndService}</span>
                </div>
              </div>

              {/* Total */}
              <div className="pt-4 flex items-baseline justify-between mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C9B9A1] block">
                    Estimated Total
                  </span>
                  <span className="text-[11px] text-[#C9B9A1]/60">
                    Includes all in-suite amenities
                  </span>
                </div>
                <span className="font-editorial text-3xl sm:text-4xl text-[#D8B878] font-bold tabular-nums">
                  ${totalAmount}
                </span>
              </div>

              {/* Direct Booking Perks */}
              <div className="p-4 bg-[#241811]/60 border border-[#C89A55]/20 rounded-sm space-y-2 text-[11px] text-[#C9B9A1]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C89A55]" />
                  <span>Guaranteed Direct Best Rate & Zero Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C89A55]" />
                  <span>Free Cancellation up to 72 hours before arrival</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
