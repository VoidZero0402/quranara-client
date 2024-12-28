import Quranara from "../clients/Quranara";

import { PaginationQuerySchemaType } from "@/validators/pagination";

import { Response, Pagination } from "@/types/response.types";
import { Notification } from "@/types/notification.types";

export function getUnseenNotifications(): Promise<Response<{ notifications: Notification[] }>> {
    return Quranara.get("/notifications/unseen");
}

export function getLastUnseenNotification(cookie: string): Promise<Response<{ notification?: Notification }>> {
    return Quranara.get("/notifications/unseen/last", {
        headers: {
            cookie,
        },
    });
}

export function getSeenNotifications(): Promise<Response<{ notifications: Notification[] }>> {
    return Quranara.get("/notifications/seen");
}

export function getNotificationsCount(): Promise<Response<{ count: number }>> {
    return Quranara.get("/notifications/count");
}

export function getAllNotifications(query: PaginationQuerySchemaType): Promise<Response<{ notifications: Notification[]; pagination: Pagination }>> {
    return Quranara.get("/notifications/all", {
        query,
    });
}
