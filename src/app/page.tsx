import { getRouteMetadata } from "@/app/metadata";
import HomePageClient from "@/app/HomePageClient";

export const metadata = getRouteMetadata("home", "es");

export default function HomePage() {
  return <HomePageClient />;
}
