// middleware.js
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const middleware = createMiddleware(routing);

export default async function customMiddleware(request) {
  const response = await middleware(request);
  const localeCookie = request.cookies.get("locale");

  if (!localeCookie) {
    const defaultLocale = "en";
    response.cookies.set("locale", defaultLocale, { path: "/" });
  }

  return response;
}

export const config = {
  matcher: ["/", "/pathnames"],
};
