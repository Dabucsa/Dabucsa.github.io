import { getRouteMetadata } from "@/app/metadata";
import CulturaPageClient from "./CulturaPageClient";
export const metadata = getRouteMetadata("cultura", "es");
export default function CulturaPage() { return <CulturaPageClient />; }
