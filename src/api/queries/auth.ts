import Quranara from "../clients/Quranara";

export function getMe() {
    return Quranara.get("/auth/me");
}
