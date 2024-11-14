// i18n.js
import { locales, defaultLocale } from "./config";

export default async function getRequestConfig({ locale }) {
  // If locale is not provided, attempt to read from cookies or request context
  if (!locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
}
