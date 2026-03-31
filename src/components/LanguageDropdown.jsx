"use client";

import React, { useContext } from "react";
import { LangContext } from "../context/LangProvider";

const LanguageDropdown = ({
  languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" }
  ],
  className = "",
  style = {},
  ...props
}) => {
  const { lang, setLang } = useContext(LangContext);

  const handleChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      className={`react-i18n-dropdown ${className}`}
      style={style}
      {...props}
    >
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageDropdown;
