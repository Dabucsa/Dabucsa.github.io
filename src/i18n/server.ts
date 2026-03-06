import type { Lang } from "./translations";

/**
 * For static export, always return the default language.
 * Client-side language switching is handled entirely by the LanguageProvider
 * (React Context + localStorage). Metadata is statically generated in Spanish.
 */
export async function getServerLang(): Promise<Lang> {
  return "es";
}
