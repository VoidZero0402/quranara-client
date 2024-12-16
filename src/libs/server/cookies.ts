"use server";

import { cookies } from "next/headers";

import { Entities } from "@/types/entities.types";
import { DataTable, Page } from "@/types/setting.types";

export async function getSetting(): Promise<Record<string, any>> {
    const cookie = (await cookies()).get("setting")?.value;

    const setting = cookie ? JSON.parse(cookie) : {};

    return setting;
}

export async function getDatatableItemsPerPage(entity: Entities, initial = 5) {
    const setting = await getSetting();

    const datatable = setting.datatable as DataTable | undefined;

    const page = datatable && (datatable[entity] as Page);

    return page?.pages ?? initial;
}
