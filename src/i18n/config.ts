import type { Lang } from "./translations";

export const LANG_STORAGE_KEY = "pucontour-lang";
export const LANG_COOKIE_KEY = "pucontour-lang";

export function isLang(value: string | undefined | null): value is Lang {
  return value === "es" || value === "en";
}
