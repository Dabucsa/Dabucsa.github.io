import { getRouteMetadata } from "@/app/metadata";
import NaturalezaPageClient from "./NaturalezaPageClient";
export const metadata = getRouteMetadata("naturaleza", "es");
export default function NaturalezaPage() { return <NaturalezaPageClient />; }
