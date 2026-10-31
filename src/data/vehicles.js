import { CarFront, Bus } from "lucide-react";

export const vehicles = [
  {
    slug: "comfort-sedan",
    name: "Comfort Sedan",
    detail: "Perfect for city rides and small families",
    passengers: "4 Passengers",
    luggage: "2 Bags",
    price: 12,
    priceLabel: "₹12/km",
    icon: CarFront,
    tone: "green",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
    description:
      "Enjoy a comfortable journey with our premium sedan. Ideal for airport transfers, business meetings and family travel.",
    features: ["Air Conditioning", "Comfortable Seats", "Music System", "Professional Driver"],
  },
  {
    slug: "premium-suv",
    name: "Premium SUV",
    detail: "Extra space and comfort for family trips",
    passengers: "6 Passengers",
    luggage: "4 Bags",
    price: 16,
    priceLabel: "₹16/km",
    icon: CarFront,
    tone: "blue",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Travel in style with a spacious SUV. A great choice for long-distance journeys and family holidays.",
    features: ["Premium Interior", "Air Conditioning", "Extra Luggage Space", "Professional Driver"],
  },
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    detail: "Spacious group travel for tours and events",
    passengers: "9–17 Passengers",
    luggage: "8–12 Bags",
    price: 22,
    priceLabel: "₹22/km",
    icon: Bus,
    tone: "peach",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=85",
    description:
      "Perfect for group tours, family functions, corporate outings and weekend trips.",
    features: ["Pushback Seats", "Air Conditioning", "Large Luggage Space", "Music System"],
  },
  {
    slug: "luxury-coach",
    name: "Luxury Coach",
    detail: "Premium transportation for large groups",
    passengers: "20–45 Passengers",
    luggage: "Large Luggage Storage",
    price: 35,
    priceLabel: "₹35/km",
    icon: Bus,
    tone: "purple",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85",
    description:
      "A comfortable coach experience for corporate travel, educational tours and large group journeys.",
    features: ["Reclining Seats", "Air Conditioning", "Large Luggage Storage", "Comfortable Interiors"],
  },
];