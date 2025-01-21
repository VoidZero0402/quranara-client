"use server";

import { NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { getMe } from "@/api/queries/auth";

import { CookieUser, Role } from "@/types/user.types";

export async function getCookiesUserFrom(): Promise<CookieUser | undefined> {
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

export async function isAuthenticated(req: NextRequest): Promise<boolean> {
    const user = req.cookies.get("_user")?.value;
    const session = req.cookies.get("_session")?.value;

    return !!user && !!session;
}

export async function authenticate(role?: Role): Promise<void> {
    const res = await getMe((await cookies()).toString());

    if (res.status !== 200) {
        redirect("/login");
    }

    if (role) {
        if (res.data.user.role !== role) {
            redirect("/login");
        }
    }
}