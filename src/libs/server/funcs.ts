"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { CookieUser } from "@/types/user.types";

export async function getUserFromCookies(): Promise<CookieUser | undefined> {
    const cookie = (await cookies()).get("_user")?.value;
    const value = cookie && JSON.parse(cookie);

    return value;
}

export async function getCookieUser(): Promise<CookieUser> {
    const cookie = (await cookies()).get("_user")?.value;

    if (!cookie) {
        redirect("/");
    }

    const value: CookieUser = JSON.parse(cookie);

    return value;
}
