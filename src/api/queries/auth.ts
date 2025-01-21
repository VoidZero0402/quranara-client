import Quranara from "../clients/Quranara";

import { Response } from "@/types/response.types";
import { User } from "@/types/user.types";

export function getMe(cookie?: string): Promise<Response<{ user: User }>> {
    return Quranara.get("/auth/me", {
        headers: {
            ...(cookie && { cookie }),
        },
    });
}
