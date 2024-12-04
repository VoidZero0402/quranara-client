"use server";

import { cookies } from "next/headers";

import { CookieUser } from "@/types/user.types";

export async function getUserFromCookies(): Promise<CookieUser | undefined> {
    const cookie = (await cookies()).get("_user")?.value;
    const value = cookie && JSON.parse(cookie);
    
    return value;
}
