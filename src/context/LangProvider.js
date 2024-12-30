"use client";
import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const LangContext = createContext();

export const LangProvider = ({ children, initialLang }) => {
      const [lang, setLang] = useState(initialLang);

      useEffect(() => {
            (() => {
                  Cookies.set("lang", lang, { expires: 7 });
            })()
      }, [lang]);

      const direction = lang === "ar" ? "rtl" : "ltr";

      return (
            <LangContext.Provider value={{ lang, setLang, direction }}>
                  <div dir={direction}>{children}</div>
            </LangContext.Provider>
      );
};
