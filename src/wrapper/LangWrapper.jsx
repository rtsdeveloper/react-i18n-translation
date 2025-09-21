import React from "react";
import { LangProvider } from "../context/LangProvider";

const LangWrapper = ({ children, initialLang }) => {
      return <LangProvider initialLang={initialLang}>{children}</LangProvider>;
};

export default LangWrapper;
