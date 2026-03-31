"use client";

import Cookies from "js-cookie";

export function getClientLang(defaultLang = "en") {
  const lang = (typeof window !== "undefined" ? Cookies.get("lang") : null) || defaultLang;
  const dir = lang === "ar" ? "rtl" : "ltr";
  
  return { lang, dir };
}
