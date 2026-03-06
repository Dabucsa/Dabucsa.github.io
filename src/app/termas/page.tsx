import { getRouteMetadata } from "@/app/metadata";
import { getServerLang } from "@/i18n/server";
import TermasPageClient from "./TermasPageClient";

export async function generateMetadata() {
  const lang = await getServerLang();
  return getRouteMetadata("termas", lang);
}

export default function TermasPage() {
  return <TermasPageClient />;
}
