import { cookies } from "next/headers";
import type { Lang } from "./translations";
import { LANG_COOKIE_KEY, isLang } from "./config";

export async function getServerLang(): Promise<Lang> {
  const cookieStore = await cookies();
  const lang = cookieStore.get(LANG_COOKIE_KEY)?.value;
  return isLang(lang) ? lang : "es";
}
