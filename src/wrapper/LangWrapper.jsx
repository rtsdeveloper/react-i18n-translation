"use client";

import React from "react";
import { LangProvider } from "../context/LangProvider";

const LangWrapper = ({ children, initialLang, translations }) => {
  return <LangProvider initialLang={initialLang} translations={translations}>{children}</LangProvider>;
};

export default LangWrapper;
