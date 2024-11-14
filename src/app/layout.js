import { cookies } from "next/headers"; // Import the cookies utility
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { defaultLocale } from "@/config";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const cookieStore = cookies();
  const locale = cookieStore.get("locale")?.value || defaultLocale;
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
