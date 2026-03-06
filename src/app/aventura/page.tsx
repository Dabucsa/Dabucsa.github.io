import { getRouteMetadata } from "@/app/metadata";
import AventuraPageClient from "./AventuraPageClient";

export const metadata = getRouteMetadata("aventura", "es");

export default function AventuraPage() {
  return <AventuraPageClient />;
}
