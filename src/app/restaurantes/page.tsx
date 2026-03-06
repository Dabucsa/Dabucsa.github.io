import { getRouteMetadata } from "@/app/metadata";
import RestaurantesPageClient from "./RestaurantesPageClient";

export const metadata = getRouteMetadata("restaurantes", "es");

export default function RestaurantesPage() {
  return <RestaurantesPageClient />;
}
