import { Event } from "../types/events";

export const events: Event[] = [
  {
    id: "1",
    value: "Wedding",
    title: "Wedding",
    date: "June 15, 2024 - 4:00 PM",
    location: "Botanical Gardens, Manhattan",
    description:
      "An enchanting outdoor wedding ceremony surrounded by blooming flowers and lush greenery. Perfect for couples who love nature and want a romantic, fairy-tale atmosphere.",
    category: "Wedding",
    price: "From $15,000",
    featured: true,
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
        alt: "Beautiful garden wedding setup",
      },
      {
        id: "2",
        url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop",
        alt: "Wedding ceremony in garden",
      },
      {
        id: "3",
        url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
        alt: "Outdoor wedding reception",
      },
    ],
  },
  {
    id: "2",
    title: "Corporate Annual Gala",
    value: "Corporate",
    date: "July 22, 2024 - 7:00 PM",
    location: "Grand Ballroom, Times Square",
    description:
      "A sophisticated corporate gala designed to impress. Featuring elegant decor, gourmet dining, and entertainment that will leave your guests talking for months.",
    category: "Corporate",
    price: "From $25,000",
    featured: false,
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Elegant corporate gala setup",
      },
    ],
  },
  {
    id: "3",
    value: "Birthday",
    title: "Luxury Birthday Celebration",
    date: "August 10, 2024 - 8:00 PM",
    location: "Rooftop Lounge, Brooklyn",
    description:
      "Celebrate in style with our luxury birthday packages. Custom themes, premium entertainment, and impeccable service make your special day truly unforgettable.",
    category: "Private Party",
    price: "From $8,000",
    featured: false,
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1714566927164-eb154801f2ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Luxury birthday party setup",
      }
    ],
  },
  {
    id: "4",
    value: "Anniversary",
    title: "Anniversary Celebration",
    date: "November 12, 2024 - 7:30 PM",
    location: "Waterfront Venue, Hudson River",
    description:
      "Celebrate your love story with a romantic anniversary event. Custom themes, intimate settings, and personalized touches that honor your journey together.",
    category: "Private Party",
    price: "From $12,000",
    featured: false,
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1657556677440-2e6732b5c351?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Romantic anniversary setup",
      },

    ],
  },
  {
    id: "5",
    value: "BabyShower",
    title: "Baby Shower Celebration",
    date: "August 5, 2024 - 11:00 AM",
    location: "Sunshine Banquet Hall",
    description:
      "A joyful baby shower event setup with themed decorations, floral designs, and photography services.",
    category: "Baby Shower",
    price: "From $3,000",
    featured: false,
    images: [
      {
        id: "1",
        url: "https://plus.unsplash.com/premium_photo-1726873405579-e5affcbd91a6?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Baby shower decoration",
      },
    ],
  },

  {
    id: "6",
    value: "PubertyFunction",
    title: "Puberty Ceremony",
    date: "October 20, 2024 - 10:00 AM",
    location: "Royal Heritage Hall",
    description:
      "Traditional puberty ceremony arrangements with cultural décor, flowers, and special stage setups.",
    category: "Puberty",
    price: "From $5,000",
    featured: false,
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1640355105827-2aa98e908a7b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Traditional ceremony decoration",
      },
    ],
  },
  {
    id: "7",
    value: "Garlands",
    title: "Garlands & Flower Decoration",
    date: "Available All Year",
    location: "Custom Locations",
    description:
      "Fresh and vibrant flower decorations, garlands, mandaps, and floral backdrops for all event types.",
    category: "Flowers",
    price: "From $500",
    featured: false,
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Flower garlands and décor",
      },
    ],
  },
  {
    id: "8",
    value: "Photography",
    title: "Event Photography",
    date: "Available On Request",
    location: "Any Event Location",
    description:
      "Professional photography and videography services for weddings, birthdays, baby showers, and other events.",
    category: "Photography",
    price: "From $1,000",
    featured: true,
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Event photography setup",
      },
    ],
  },
  {
    id: "9",
    value: "House Warming",
    title: "House Warming Ceremony",
    date: "November 17, 2024 - 9:00 AM",
    location: "Client’s Residence",
    description:
      "Traditional housewarming arrangements with décor, pooja setup, flowers, and welcoming theme designs.",
    category: "House Warming",
    price: "From $3,500",
    featured: false,
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1709805471116-26c5adf3012b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Housewarming décor",
      },
    ],
  },
  {
    id: "10",
    value: "DJ",
    title: "DJ & Music Setup",
    date: "Available On Request",
    location: "Event Venues",
    description:
      "High-quality DJ services with sound systems, lighting effects, and stage setups for parties and celebrations.",
    category: "DJ",
    price: "From $1,500",
    featured: false,
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1541126274323-dbac58d14741?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "DJ music setup",
      },
    ],
  },
  {
    id: "11",
    value: "Baby Naming Ceremony",
    title: "Baby Naming Ceremony",
    date: "December 5, 2024 - 10:00 AM",
    location: "Cultural Community Hall",
    description:
      "Beautiful naming ceremony setup with flowers, stage décor, and thematic arrangements.",
    category: "Baby Ceremony",
    price: "From $2,500",
    featured: false,
    images: [
      {
        id: "1",
        url: "https://plus.unsplash.com/premium_photo-1711639991929-94e9703256f0?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Naming ceremony décor",
      },
    ],
  },
  {
    id: "12",
    value: "Light Decoration",
    title: "Lighting Decoration",
    date: "Available All Year",
    location: "Any Venue",
    description:
      "Professional lighting setup for indoor and outdoor events, including LED, fairy lights, and ambience lighting.",
    category: "Lighting",
    price: "From $600",
    featured: false,
    images: [
      {
        id: "1",
        url: "https://plus.unsplash.com/premium_photo-1661767829579-1b8dd07d3c1a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Event lighting",
      },
    ],
  },
  {
    id: "13",
    value: "Awning (Shaamiyaana) Tents",
    title: "Awning & Shaamiyaana Tents",
    date: "Available On Request",
    location: "Any Outdoor Location",
    description:
      "High-quality awning and Shaamiyaana tents for outdoor functions, weddings, and ceremonies.",
    category: "Tents",
    price: "From $2,000",
    featured: false,
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=800&h=600&fit=crop",
        alt: "Event tent setup",
      },
    ],
  },
];
