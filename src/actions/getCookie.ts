"use server";

import { cookies } from "next/headers";

import { CookieUser } from "@/types/users.types";

async function getCookie(key: string): Promise<CookieUser | undefined> {
    const allCookies = await cookies();

    const cookie = allCookies.get(key)?.value;

    if (cookie) {
        return JSON.parse(cookie);
    }
}

export default getCookie;
