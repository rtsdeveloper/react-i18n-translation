# react-i18n-translation

`react-i18n-translation` is a lightweight React library designed for internationalization and translation management in React applications. It provides a simple and efficient way to handle multilingual content in React and Next.js projects.

---

## **Features**

- Easy integration with React and Next.js.
- Lightweight and simple API.
- Dynamic language switching.
- Support for RTL (Right-to-Left) languages.

---

## **Installation**

Install the library using npm or yarn:

```bash
npm install react-i18n-translation
# or
yarn add react-i18n-translation
```

---

## **Usage**

### **NextJS Setup**

Wrap your application with the `LangWrapper` to manage the language context:

```jsx
import { cookies } from "next/headers";
import { LangWrapper } from "react-i18n-translation";

export const metadata = {
  title: "Lang Switcher",
  description: "An example app with language translation",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const initialLang = cookieStore.get("lang")?.value || "en";
  const dir = initialLang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={initialLang} dir={dir}>
      <body>
        <LangWrapper initialLang={initialLang}>{children}</LangWrapper>
      </body>
    </html>
  );
}
```

### **ReactJS Setup**

Wrap your application with the `LangWrapper` to manage the language context:

```jsx

import React from "react";
import ReactDOM from "react-dom/client";
import Cookies from 'js-cookie';
import { LangWrapper } from "react-i18n-translation";
import App from "./App";

const initialLang = Cookies.get('lang') || "en";
const dir = initialLang === "ar" ? "rtl" : "ltr";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LangWrapper initialLang={initialLang} dir={dir}>
    <App />
  </LangWrapper>
);
```

---

### **Language Dropdown**

A component that provides a dropdown for language selection. It automatically updates the language in the context.

```jsx
"use client";

import React, { useContext } from "react";
import { LangContext } from "react-i18n-translation";

const LanguageDropdown = () => {
  const { lang, setLang } = useContext(LangContext);

  const handleChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <select value={lang} onChange={handleChange}>
      <option value="en">English</option>
      <option value="ar">Arabic</option>
      <option value="de">German</option>
    </select>
  );
};

export default LanguageDropdown;
```

---

### **Using Translations**

Fetch translations using the `useTranslation` hook.

```jsx
import React from "react";
import { useTranslation } from "react-i18n-translation";
import { langFiles } from "@/translation/langFiles";
import en from "../translation/en.json";
import ar from "../translation/ar.json";

export const langFiles = { en, ar };

const Home = () => {
  const { t } = useTranslation(langFiles);

  return (
    <div>
      <LanguageDropdown />
      <h1>{t("welcome")}</h1>
      <p>{t("goodbye")}</p>
    </div>
  );
};

export default Home;
```

---

### **Translation Files**

Create JSON files for each language. For example:

#### en.json

```json
{
  "welcome": "Welcome",
  "goodbye": "Goodbye"
}
```

#### ar.json

```json
{
  "welcome": "أهلا بك",
  "goodbye": "مع السلامة"
}
```

### **langFiles Function**

```jsx
import en from "../translation/en.json";
import ar from "../translation/ar.json";

export const langFiles = { en, ar };
```

Include these files in your project and pass them to `langFiles` in `LangProvider`.

---

## **API Reference**

### **LangProvider**

Wraps the application and provides language context.

| Prop         | Type   | Default | Description           |
|--------------|--------|---------|-----------------------|
| `initialLang` | string | `"en"` | Initial language to set. |

### **useTranslation**

A hook to fetch translations.

| Function | Description                              |
|----------|------------------------------------------|
| `t(key)` | Returns the translated string for the key. |

---

## **Peer Dependencies**

Ensure your project has the following dependencies installed:

- `react` (v17.0.0 or later)
- `react-dom` (v17.0.0 or later)

---

## **Contributing**

Contributions are welcome! If you find a bug or have a feature request, feel free to create an issue or submit a pull request.

---

## **License**

This project is licensed under the ISC License.

---

## **Author**

RTS_Dev