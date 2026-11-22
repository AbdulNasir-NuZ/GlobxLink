"use client";

import { useEffect, useRef, useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "tr", name: "Türkçe" },
  { code: "fr", name: "Français" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];
const languageNames: Record<LanguageCode, string> = {
  en: "Language",
  tr: "Dil",
  fr: "Langue",
};

function isLanguageCode(value: string): value is LanguageCode {
  return languages.some((item) => item.code === value);
}

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const languageName = languageNames[language];

  useEffect(() => {
    const syncLanguage = () => {
      const select = document.getElementById("gxl-language");
      if (select instanceof HTMLSelectElement && isLanguageCode(select.value)) {
        setLanguage(select.value);
      }
    };
    syncLanguage();
    window.addEventListener("gxl-language-updated", syncLanguage);
    return () => window.removeEventListener("gxl-language-updated", syncLanguage);
  }, []);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function chooseLanguage(code: LanguageCode) {
    const select = document.getElementById("gxl-language");
    if (!(select instanceof HTMLSelectElement)) {
      throw new Error("Website language control is unavailable.");
    }
    select.value = code;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    setLanguage(code);
    setIsOpen(false);
  }

  return (
    <div className="gxl-lang" ref={rootRef}>
      <select
        aria-hidden="true"
        className="gxl-language"
        id="gxl-language"
        onChange={(event) => {
          if (isLanguageCode(event.currentTarget.value)) {
            setLanguage(event.currentTarget.value);
          }
        }}
        tabIndex={-1}
        value={language}
      >
        {languages.map((item) => (
          <option key={item.code} value={item.code}>{item.code.toUpperCase()}</option>
        ))}
      </select>
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`${languageName}: ${language.toUpperCase()}`}
        className="gxl-lang-btn"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <svg aria-hidden="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="16">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" />
        </svg>
        <span className="gxl-lang-code">{language.toUpperCase()}</span>
        <svg aria-hidden="true" className="gxl-lang-chev" fill="none" height="7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 12 8" width="10">
          <path d="m1 1 5 5 5-5" />
        </svg>
      </button>
      <ul aria-label={languageName} className="gxl-lang-menu" hidden={!isOpen} role="listbox">
        {languages.map((item) => (
          <li
            aria-selected={language === item.code}
            className="gxl-lang-opt"
            key={item.code}
            onClick={() => chooseLanguage(item.code)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                chooseLanguage(item.code);
              }
            }}
            role="option"
            tabIndex={0}
          >
            <b>{item.code.toUpperCase()}</b>
            <span>{item.name}</span>
            <i aria-hidden="true">
              <svg fill="none" height="16" stroke="#9fdcff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16" width="16">
                <path d="m3 8.5 3.2 3.2L13 4.8" />
              </svg>
            </i>
          </li>
        ))}
      </ul>
    </div>
  );
}
