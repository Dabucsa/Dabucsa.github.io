import { getRouteMetadata } from "@/app/metadata";
import InfoPageClient from "./InfoPageClient";

export const metadata = getRouteMetadata("info", "es");

export default function InfoPage() {
  return <InfoPageClient />;
}
