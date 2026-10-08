import React, { useState } from 'react';
import { IN_ROOM_DINING_MENU } from '../data/hotelData';
import { InRoomMenuItem } from '../types/hotel';
import { X, Utensils, Clock, Check, Phone } from 'lucide-react';

interface RoomServiceMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserveStayWithDining: () => void;
}

export const RoomServiceMenuModal: React.FC<RoomServiceMenuModalProps> = ({
  isOpen,
  onClose,
  onReserveStayWithDining,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [orderedItemIds, setOrderedItemIds] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories = ['All', 'Breakfast', 'Epicurean Mains', 'All-Day Dining', 'Late Night', 'Sommelier Cellar'];

  const filteredItems = activeCategory === 'All'
    ? IN_ROOM_DINING_MENU
    : IN_ROOM_DINING_MENU.filter((item) => item.category === activeCategory);

  const handleOrderSimulate = (item: InRoomMenuItem) => {
    setOrderedItemIds((prev) => [...prev, item.id]);
    setToastMessage(`"${item.name}" added to your in-suite cloche request.`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#17110D] border border-[#C89A55]/30 rounded-sm shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#201712] border-b border-[#C89A55]/20 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#C89A55] font-semibold mb-1">
              <Utensils className="w-3.5 h-3.5" />
              <span>24/7 In-Suite Epicurean Service</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#F4EBDD]">
              The Royal In-Room Dining Carte
            </h3>
            <p className="text-xs text-[#C9B9A1] font-light mt-1">
              Prepared to order by our master brigade. Delivered beneath polished sterling silver cloches.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#C9B9A1] hover:text-[#F4EBDD] border border-white/10 rounded-sm cursor-pointer"
            aria-label="Close menu modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="p-4 bg-[#17110D] border-b border-white/[0.08] overflow-x-auto flex gap-2 shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#C89A55] to-[#D8B878] text-[#17110D] font-semibold'
                  : 'text-[#C9B9A1] hover:text-[#F4EBDD] hover:bg-[#241811]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Toast alert */}
        {toastMessage && (
          <div className="bg-[#241811] border-b border-[#C89A55]/40 py-2 px-6 text-xs text-[#D8B878] flex items-center justify-between">
            <span>{toastMessage}</span>
            <span className="text-[10px] text-[#C9B9A1]">Butler dispatched</span>
          </div>
        )}

        {/* Menu Items List */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => {
              const isAdded = orderedItemIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="p-5 bg-[#201712]/60 border border-white/[0.06] hover:border-[#C89A55]/30 rounded-sm flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h4 className="font-editorial text-xl text-[#F4EBDD]">
                        {item.name}
                      </h4>
                      <span className="font-editorial text-lg text-[#D8B878] font-bold tabular-nums shrink-0">
                        ${item.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#C9B9A1] font-light leading-relaxed mb-3">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-3 text-[11px] text-[#C9B9A1]/70 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C89A55]" />
                        <span>~{item.prepTimeMinutes} mins prep</span>
                      </div>
                      {item.tags && item.tags.length > 0 && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#D8B878]">{item.tags.join(' / ')}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleOrderSimulate(item)}
                    className={`w-full py-2 px-3 text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isAdded
                        ? 'bg-[#241811] text-[#D8B878] border border-[#C89A55]/50'
                        : 'bg-[#17110D] text-[#C9B9A1] hover:text-[#F4EBDD] hover:border-[#C89A55]/40 border border-white/10'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#C89A55]" />
                        <span>Added to In-Room Tray</span>
                      </>
                    ) : (
                      <span>Request For In-Suite Tray</span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#201712] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#C9B9A1]">
            <Phone className="w-4 h-4 text-[#C89A55]" />
            <span>In-suite phone: Dial Ext. 1 to converse with your floor butler</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 text-xs uppercase tracking-wider text-[#C9B9A1] hover:text-[#F4EBDD] border border-white/10 rounded-sm cursor-pointer"
            >
              Close Menu
            </button>
            <button
              onClick={() => {
                onClose();
                onReserveStayWithDining();
              }}
              className="py-2.5 px-5 text-xs font-semibold uppercase tracking-wider text-[#17110D] bg-gradient-to-r from-[#C89A55] to-[#D8B878] rounded-sm cursor-pointer shadow-md"
            >
              Reserve Stay With Dining
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
