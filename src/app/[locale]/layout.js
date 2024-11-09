import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { locales } from "@/config";
import "../globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = params;

  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <PopupWidget />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
