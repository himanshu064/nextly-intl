"use server";
import { cookies } from "next/headers";

export const getLocaleFromCookie = () => {
  if (typeof document !== "undefined") {
    const match = document.cookie.match(/locale=([^;]+)/);
    return match ? match[1] : "en";
  } else {
    const cookieStore = cookies();
    console.log(cookieStore.get("locale"), "cookieStore");

    const locale = cookieStore.get("locale")?.value || "en";
    return locale;
  }
};
