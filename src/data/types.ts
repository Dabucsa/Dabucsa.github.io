export type Category =
  | "restaurantes"
  | "termas"
  | "aventura"
  | "naturaleza"
  | "cultura"
  | "info";

export type ProfileType = "familia" | "aventura" | "pareja";
export type Weather = "indoor" | "outdoor" | "both";

export interface Place {
  id: string;
  name: string;
  category: Category;
  description: string;
  longDescription?: string;
  price: string;
  duration: string;
  emoji: string;
  mapUrl: string;
  tip?: string;
  bestFor: ProfileType[];
  weather: Weather;
  image?: string;
}

export interface ItineraryActivity {
  time: string;
  placeId: string;
  note?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: ItineraryActivity[];
}

export interface Itinerary {
  id: string;
  days: number;
  label: string;
  description: string;
  emoji: string;
  plan: ItineraryDay[];
}

export interface CategoryInfo {
  slug: Category;
  name: string;
  emoji: string;
  description: string;
  color: string;
}
