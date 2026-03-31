# react-i18n-translation

`react-i18n-translation` is a lightweight React library designed for internationalization and translation management in React applications. It provides a simple and efficient way to handle multilingual content in React.js and Next.js projects.

---

## **Features**

- Easy integration with React.js and Next.js.
- Compatible with Next.js 13+ App Router (Server & Client Components).
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

### **ReactJS Setup**

Wrap your main.js file with the `LangWrapper` to manage the language context:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { LangWrapper, getClientLang } from "react-i18n-translation";
import { langFiles } from "./translation/langFiles"; // 1. Import your translations!
import App from "./App";

// Reads the cookie naturally on the client, returning "en" or "ar" and text direction
const { lang, dir } = getClientLang();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 2. Pass them globally to the wrapper!
  <LangWrapper initialLang={lang} translations={langFiles}>
    <App />
  </LangWrapper>
);
```

---

### **Next.js (App Router) Setup**

In Next.js 13+ with the App Router (`app/layout.jsx`), you can rely on the newly added server-side helper `getServerLang` to keep your root layout perfectly clean, ensuring your page is natively rendered in the correct language for hydration and SEO.

```jsx
import { LangWrapper } from "react-i18n-translation";
import { getServerLang } from "react-i18n-translation/next";
import { langFiles } from "@/translation/langFiles"; // 1. Import your translations!

export default async function RootLayout({ children }) {
  // Reads the cookie naturally on the server via Next 15+ Async API
  const { lang, dir } = await getServerLang();

  return (
    <html lang={lang} dir={dir}>
      <body>
        {/* 2. Pass them globally to the wrapper! */}
        <LangWrapper initialLang={lang} translations={langFiles}>
          {children}
        </LangWrapper>
      </body>
    </html>
  );
}
```

---

### **Language Dropdown**

The library provides a built-in, out-of-the-box dropdown component that automatically connects to the context. You can easily pass in your custom supported languages and fully customize it with CSS classes (like Tailwind) or inline styles!

```jsx
import React from "react";
import { LanguageDropdown } from "react-i18n-translation";

const App = () => {
  return (
    <div>
      <LanguageDropdown 
        // 1. Pass your languages 
        languages={[
          { code: "en", label: "English" },
          { code: "ar", label: "Arabic" },
          { code: "de", label: "German" }
        ]}
        // 2. Add your custom classes for beautiful CSS styling
        className="my-custom-dropdown tailwind-class-here"
        // 3. Or use inline styles!
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default App;
```

---

### **Using Translations**

Fetch translations using the `useTranslation` hook.

```jsx
import React from "react";
import { useTranslation, LanguageDropdown } from "react-i18n-translation";

const App = () => {
  // 3. Just call the hook smoothly anywhere in your app with zero arguments!
  const { t } = useTranslation();

  return (
    <div>
      <LanguageDropdown />
      <h1>{t("welcome")}</h1>
      <p>{t("goodbye")}</p>
    </div>
  );
};

export default App;
```

---

### **Next.js Considerations: Server vs Client Components**

By default, the `useTranslation()` hook internally uses React Context, which means it **must run in a Client Component**. 

**1. Translating inside Client Components:**
Simply add `"use client";` to the top of the file and use the hook normally (No props needed!).

```jsx
"use client";
import { useTranslation } from "react-i18n-translation";

export default function Dashboard() {
  const { t } = useTranslation();
  return <h1>{t("welcome")}</h1>;
}
```

**2. Translating inside Server Components (Async):**
If you want to keep a component entirely on the server for maximum SEO, you cannot use hooks. Instead, pull the language natively from `getServerLang()`!

```jsx
import { getServerLang } from "react-i18n-translation/next";
import { langFiles } from "@/translation/langFiles"; // Import JSON

export default async function ServerProfile() {
  // Next 15+ uses async for cookies
  const { lang } = await getServerLang(); 
  
  // Directly pull the string using raw javascript!
  const title = langFiles[lang]?.["profileTitle"] || "Profile";

  return <h1>{title}</h1>;
}
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

Wraps the application and provides language context globally.

| Prop         | Type   | Default | Description           |
|--------------|--------|---------|-----------------------|
| `initialLang` | string | `"en"` | Initial language to set. |
| `translations`| object | `{}`   | The global object containing all language JSON files. |

### **useTranslation**

A hook to natively fetch translations without needing to import JSON files separately.

| Function | Description                              |
|----------|------------------------------------------|
| `t(key)` | Returns the translated string for the dynamically active language. |

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