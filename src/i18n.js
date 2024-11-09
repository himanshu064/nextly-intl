import { notFound } from "next/navigation";
import { locales } from "./config";

export default async function getRequestConfig({ locale }) {
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
}
