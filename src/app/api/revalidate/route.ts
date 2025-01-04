import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

import { getMe } from "@/api/queries/auth";

import { ROLES } from "@/constants/roles";

export async function GET(request: NextRequest) {
    try {
        const res = await getMe((await cookies()).toString());

        if (res.data.user.role !== ROLES.MANAGER) {
            return NextResponse.json({ message: "you can not access to this action" }, { status: 403 });
        }

        const tags = request.nextUrl.searchParams.getAll("tag") as string[];

        for (const tag of tags) {
            revalidateTag(tag);
        }

        return NextResponse.json({ revalidate: true });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
