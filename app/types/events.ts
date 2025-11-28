export interface EventImage {
  id: string;
  url: string;
  alt: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  price: string;
  images: EventImage[];
  featured: boolean;
}
