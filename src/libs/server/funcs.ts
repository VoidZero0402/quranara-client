"use server";

import { NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { getMe } from "@/api/queries/auth";

import { User, Role } from "@/types/user.types";

export async function getUser(): Promise<User> {
    const res = await getMe((await cookies()).toString());

    if (res.status !== 200) {
        redirect("/");
    }

    return res.data.user;
}

export async function getCurrentUser(): Promise<User | null> {
    const res = await getMe((await cookies()).toString());

    if (res.status !== 200) {
        return null;
    }

    return res.data.user;
}

export async function isAuthenticated(req: NextRequest): Promise<boolean> {
    const session = req.cookies.get("_session")?.value;
    const authKey = req.cookies.get("_auth_key")?.value;

    return !!session && !!authKey;
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
