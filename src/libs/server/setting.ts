"use server";

import { cookies } from "next/headers";

export async function getSetting(): Promise<Record<string, any>> {
    const cookie = (await cookies()).get("setting")?.value;

    const setting = cookie ? JSON.parse(cookie) : {};

    return setting;
}
