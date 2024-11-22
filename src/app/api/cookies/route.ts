import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    try {
        const key = request.nextUrl.searchParams.get("key") as string;

        const cookie = (await cookies()).get(key)?.value;

        const value = cookie && JSON.parse(cookie);

        return NextResponse.json({ value });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
