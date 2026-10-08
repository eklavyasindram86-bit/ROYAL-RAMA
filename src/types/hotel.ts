export interface Suite {
  id: string;
  name: string;
  category: 'Superior' | 'Executive' | 'Grand' | 'Presidential';
  tagline: string;
  pricePerNight: number;
  sizeSqFt: number;
  maxGuests: number;
  bedType: string;
  view: string;
  description: string;
  longDescription: string;
  image: string;
  keyAmenities: string[];
  roomServicePerks: string[];
  rating: number;
  reviewsCount: number;
}

export interface InRoomMenuItem {
  id: string;
  category: 'Breakfast' | 'All-Day Dining' | 'Epicurean Mains' | 'Late Night' | 'Sommelier Cellar';
  name: string;
  description: string;
  price: number;
  prepTimeMinutes: number;
  tags?: string[];
}

export interface BookingFormState {
  checkIn: string;
  checkOut: string;
  suiteId: string;
  guests: number;
  fullName: string;
  email: string;
  phone: string;
  specialRequests: string;
  selectedAddOns: string[];
}

export interface ServiceAddOn {
  id: string;
  name: string;
  description: string;
  price: number;
}
