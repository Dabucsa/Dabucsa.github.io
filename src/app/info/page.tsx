import { getRouteMetadata } from "@/app/metadata";
import { getServerLang } from "@/i18n/server";
import InfoPageClient from "./InfoPageClient";

export async function generateMetadata() {
  const lang = await getServerLang();
  return getRouteMetadata("info", lang);
}

export default function InfoPage() {
  return <InfoPageClient />;
}
