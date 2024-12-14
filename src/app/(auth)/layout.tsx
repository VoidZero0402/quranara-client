import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getMe } from "@/api/queries/auth";

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
