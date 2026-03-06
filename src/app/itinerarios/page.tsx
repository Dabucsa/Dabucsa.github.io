import { getRouteMetadata } from "@/app/metadata";
import { getServerLang } from "@/i18n/server";
import ItinerariosPageClient from "./ItinerariosPageClient";
export async function generateMetadata() { const lang = await getServerLang(); return getRouteMetadata("itinerarios", lang); }
export default function ItinerariosPage() { return <ItinerariosPageClient />; }
