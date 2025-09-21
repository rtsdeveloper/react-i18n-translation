"use client";
import React from "react";
import { LangProvider } from "../context/LangProvider.jsx";

const LangWrapper = ({ children, initialLang }) => {
      return <LangProvider initialLang={initialLang}>{children}</LangProvider>;
};

export default LangWrapper;
