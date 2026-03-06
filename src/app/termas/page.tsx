import { getRouteMetadata } from "@/app/metadata";
import TermasPageClient from "./TermasPageClient";

export const metadata = getRouteMetadata("termas", "es");

export default function TermasPage() {
  return <TermasPageClient />;
}
