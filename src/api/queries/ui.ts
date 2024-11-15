import Quranara from "../clients/Quranara";

export function getMenus() {
    return Quranara.get("/ui/menus");
}
