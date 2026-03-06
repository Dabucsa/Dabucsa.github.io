import { getRouteMetadata } from "@/app/metadata";
import { getServerLang } from "@/i18n/server";
import CulturaPageClient from "./CulturaPageClient";
export async function generateMetadata() { const lang = await getServerLang(); return getRouteMetadata("cultura", lang); }
export default function CulturaPage() { return <CulturaPageClient />; }
