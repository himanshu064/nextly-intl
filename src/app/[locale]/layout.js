// import localFont from "next/font/local";
// import {
//   getMessages,
//   getTranslations,
//   unstable_setRequestLocale,
// } from "next-intl/server";
// import { NextIntlClientProvider } from "next-intl";
// import "../globals.css";
// import { locales } from "@/config";

// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export function generateStaticParams() {
//   return locales?.map((locale) => ({ locale }));
// }

// export async function generateMetadata({ params }) {
//   const { locale } = params;
//   const t = await getTranslations({ locale, namespace: "LocaleLayout" });
//   return {
//     title: t("title"),
//     description: t("description"),
//   };
// }

// export default async function RootLayout({ children, params: { locale } }) {
//   const messages = await getMessages();
//   return (
//     <html lang={locale}>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <NextIntlClientProvider messages={messages}>
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { locales } from "@/config";
import "../globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales?.map((locale) => ({ locale }));
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
  const messages = await getMessages();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">
            <Navbar />
            <div>{children}</div>
            <Footer />
            <PopupWidget />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
