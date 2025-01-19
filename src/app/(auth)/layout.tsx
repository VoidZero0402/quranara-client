import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getMe } from "@/api/queries/auth";

export const metadata: Metadata = {
    title: "ورود به حساب کاربری در قرآن‌آرا",
    description: "ثبت‌نام یا ورود به حساب کاربری",
};

async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { data } = await getMe((await cookies()).toString());

    if (data.user) {
        redirect("/");
    }

    return children;
}

export default AuthLayout;
