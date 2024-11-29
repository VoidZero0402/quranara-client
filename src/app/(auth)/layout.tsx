import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Quranara from "@/api/clients/Quranara";

async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const allCookies = (await cookies()).toString();
    const { data } = await Quranara.get("/auth/me", { headers: { cookie: allCookies } });
    
    if (data) {
        redirect("/");
    }

    return children;
}

export default AuthLayout;
