"use server";

import { cookies } from "next/headers";

export async function setLocaleCookie(locale: string): Promise<void> {
  cookies().set("NEXT_LOCALE", locale, {
    path: "/",
  });
}
