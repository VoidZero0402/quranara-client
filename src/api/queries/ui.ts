import Quranara from "../clients/Quranara";

import { ui } from "../cache/tags";

import { Response } from "@/types/response.types";
import { Menus, ManagementPanelDatas } from "@/types/ui.types";

export function getMenus(): Promise<Response<Menus>> {
    return Quranara.get("/ui/menus", {
        cache: "force-cache",
        next: {
            tags: [ui.menus],
        },
    });
}

export function getManagementPanelDatas(cookie: string): Promise<Response<ManagementPanelDatas>> {
    return Quranara.get("/ui/m-panel", {
        headers: {
            cookie,
        },
    });
}
