import { cookies } from "next/headers";

export function getServerLang(defaultLang = "en") {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || defaultLang;
  const dir = lang === "ar" ? "rtl" : "ltr";
  
  return { lang, dir };
}
