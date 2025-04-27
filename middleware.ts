import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n.config";

function getLocale(request: NextRequest): string | undefined {
  // Try to get the locale from the cookie
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;

  if (cookieLocale && i18n.languages.some((lang) => lang.id === cookieLocale)) {
    return cookieLocale;
  }

  // // If no locale is set in the cookie, use browser language
  // const negotiatorHeaders: Record<string, string> = {};
  // request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // const locales: string[] = i18n.languages.map((lang) => lang.id);

  // const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // const locale = matchLocale(languages, locales, i18n.base || "id");
  return "pt";
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = i18n.languages.some(
    (locale) =>
      pathname.startsWith(`/${locale.id}/`) || pathname === `/${locale.id}`
  );

  if (!pathnameHasLocale) {
    if (
      pathname.startsWith("/assets") ||
      pathname.match(/\.(jpeg|jpg|png|svg|gif|webp)$/)
    ) {
      return;
    }

    const locale = getLocale(request);

    // If the locale was not in the pathname, set the cookie
    const response = NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
    response.cookies.set("NEXT_LOCALE", locale ?? "", { path: "/" });

    return response;
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|admin|_next/image|favicon.ico|manifest.json).*)",
  ],
};
