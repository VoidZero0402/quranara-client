import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { isAuthenticated } from "./libs/server/funcs";

export async function middleware(request: NextRequest) {
    if (!(await isAuthenticated(request))) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: ["/panel/:path*", "/management-panel/:path*"],
};
