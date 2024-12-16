import { getCookie, setCookie } from "cookies-next";

import { Entities } from "@/types/entities.types";
import { DataTable, Page } from "@/types/setting.types";

export function getSetting(): Record<string, any> {
    const cookie = getCookie("setting") as string | undefined;

    const setting = cookie ? JSON.parse(cookie) : {};

    return setting;
}

export function updateSetting(prop: string, key: string, value: any): void {
    const setting = getSetting();

    if (!setting[prop]) {
        setting[prop] = {};
    }

    setting[prop][key] = value;

    const expires = new Date();

    expires.setFullYear(expires.getFullYear() + 5);

    setCookie("setting", JSON.stringify(setting), {
        path: "/",
        sameSite: "lax",
        expires,
    });
}

export function getDatatableItemsPerPage(entity: Entities, initial = 5) {
    const setting = getSetting();

    const datatable = setting.datatable as DataTable | undefined;

    const page = datatable && (datatable[entity] as Page);

    return page?.pages ?? initial;
}
