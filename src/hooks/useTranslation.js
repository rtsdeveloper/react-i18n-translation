"use client";

import { useContext } from "react";
import { LangContext } from "../context/LangProvider";

const useTranslation = (localLangFiles) => {
      const { lang, translations } = useContext(LangContext);
      
      // Fallback natively to local arguments to prevent breaking older code
      const activeTranslations = localLangFiles || translations || {};

      const t = (key) => {
            return activeTranslations[lang]?.[key] || activeTranslations["en"]?.[key] || key;
      };

      return { t };
};

export default useTranslation;
