import { getRouteMetadata } from "@/app/metadata";
import { getServerLang } from "@/i18n/server";
import NaturalezaPageClient from "./NaturalezaPageClient";
export async function generateMetadata() { const lang = await getServerLang(); return getRouteMetadata("naturaleza", lang); }
export default function NaturalezaPage() { return <NaturalezaPageClient />; }
