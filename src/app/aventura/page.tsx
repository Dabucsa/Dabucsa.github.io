import { getRouteMetadata } from "@/app/metadata";
import { getServerLang } from "@/i18n/server";
import AventuraPageClient from "./AventuraPageClient";

export async function generateMetadata() {
  const lang = await getServerLang();
  return getRouteMetadata("aventura", lang);
}

export default function AventuraPage() {
  return <AventuraPageClient />;
}
