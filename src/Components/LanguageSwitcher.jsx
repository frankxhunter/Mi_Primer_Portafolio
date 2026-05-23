import React from "react";
import i18n from "../i18n";
import "./LanguageSwitcher.css";

export function LanguageSwitcher() {
  const [locale, setLocaleState] = React.useState(i18n.detectLocale());

  function changeLocale(l) {
    if (l === locale) return;
    i18n.setLocale(l);
    setLocaleState(l);
    i18n.initI18n().then(result => {
      if (result && result.messages && result.messages.meta && result.messages.meta.title) {
        document.title = result.messages.meta.title;
      }
    }).finally(() => {
      window.location.reload();
    });
  }

  return (
    <div className="lang-switcher" role="navigation" aria-label="Language switcher">
      <button
        className={"lang-btn" + (locale === "en" ? " active" : "")}
        onClick={() => changeLocale("en")}
        aria-pressed={locale === "en"}
        title="English"
      >
        <span className="flag">🇬🇧</span>
        <span className="label">EN</span>
      </button>
      <button
        className={"lang-btn" + (locale === "es" ? " active" : "")}
        onClick={() => changeLocale("es")}
        aria-pressed={locale === "es"}
        title="Español"
      >
        <span className="flag">🇪🇸</span>
        <span className="label">ES</span>
      </button>
    </div>
  );
}

export default LanguageSwitcher;
