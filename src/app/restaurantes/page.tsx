import { getRouteMetadata } from "@/app/metadata";
import { getServerLang } from "@/i18n/server";
import RestaurantesPageClient from "./RestaurantesPageClient";

export async function generateMetadata() {
  const lang = await getServerLang();
  return getRouteMetadata("restaurantes", lang);
}

export default function RestaurantesPage() {
  return <RestaurantesPageClient />;
}
