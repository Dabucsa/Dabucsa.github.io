import { getRouteMetadata } from "@/app/metadata";
import HomePageClient from "@/app/HomePageClient";
import { getServerLang } from "@/i18n/server";

export async function generateMetadata() {
  const lang = await getServerLang();
  return getRouteMetadata("home", lang);
}

export default function HomePage() {
  return <HomePageClient />;
}
