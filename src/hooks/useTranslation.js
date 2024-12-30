import { useContext } from "react";
import { LangContext } from "../context/LangProvider.jsx";

const useTranslation = (langFiles) => {
      const { lang } = useContext(LangContext);

      const t = (key) => {
            return langFiles[lang]?.[key] || langFiles["en"]?.[key] || key;
      };

      return { t };
};

export default useTranslation;
