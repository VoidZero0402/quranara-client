"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

import { getMe } from "@/api/queries/auth";

import { ROLES } from "@/constants/roles";

async function revalidateTags(tags: string[]) {
    try {
        const res = await getMe((await cookies()).toString());

        if (res.data.user.role !== ROLES.MANAGER) {
            return { message: "you can not access to this action", status: 403 };
        }

        for (const tag of tags) {
            revalidateTag(tag);
        }

        return { revalidate: true };
    } catch (err) {
        return { error: err, status: 500 };
    }
}

export default revalidateTags;
