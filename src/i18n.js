const DEFAULT_LOCALE = "en";

function detectLocale() {
  // prefer a user-chosen locale in localStorage
  try {
    const stored = typeof localStorage !== "undefined" ? localStorage.getItem("locale") : null;
    if (stored) return stored;
  } catch (e) {
    // ignore localStorage errors
  }

  if (typeof navigator === "undefined") return DEFAULT_LOCALE;
  const lang = navigator.language || navigator.userLanguage || "";
  if (lang.startsWith("es")) return "es";
  return "en";
}

// export detectLocale so components can synchronously read the current locale
export { detectLocale };

async function loadLocale(locale) {
  try {
    if (locale === "es") {
      const res = await import("./locales/es.json");
      return res.default;
    } else {
      const res = await import("./locales/en.json");
      return res.default;
    }
  } catch (e) {
    console.error("Failed to load locale", locale, e);
    const res = await import("./locales/en.json");
    return res.default;
  }
}

// Simple runtime i18n helper
export async function initI18n() {
  const locale = detectLocale();
  const messages = await loadLocale(locale);
  return { locale, messages };
}

export async function getMessages() {
  const { messages } = await initI18n();
  return messages;
}

export function setLocale(locale) {
  try {
    if (typeof localStorage !== "undefined") localStorage.setItem("locale", locale);
  } catch (e) {
    console.warn("Could not persist locale", e);
  }
}

export default { initI18n, getMessages, detectLocale, setLocale };
