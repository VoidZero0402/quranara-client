"use server";

import { cookies } from "next/headers";

async function getCookie(key: string) {
    try {
        const cookie = (await cookies()).get(key)?.value;

        const value = cookie && JSON.parse(cookie);

        return { value };
    } catch (err) {
        return { error: err, status: 500 };
    }
}

export default getCookie;
