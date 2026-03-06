import { getRouteMetadata } from "@/app/metadata";
import ItinerariosPageClient from "./ItinerariosPageClient";
export const metadata = getRouteMetadata("itinerarios", "es");
export default function ItinerariosPage() { return <ItinerariosPageClient />; }
