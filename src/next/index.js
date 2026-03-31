import { cookies } from "next/headers";

export async function getServerLang(defaultLang = "en") {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || defaultLang;
  const dir = lang === "ar" ? "rtl" : "ltr";
  
  return { lang, dir };
}
