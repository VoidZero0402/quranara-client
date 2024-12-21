import { CookieUser } from "@/types/user.types";

export async function getCookieUser(): Promise<CookieUser | undefined> {
    const response = await fetch("/api/cookies?key=_user");
    const { value } = await response.json();
    return value;
}
