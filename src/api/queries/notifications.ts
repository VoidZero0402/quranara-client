import Quranara from "../clients/Quranara";

import { PaginationQuerySchemaType } from "@/validators/pagination";

import { Response, Pagination } from "@/types/response.types";
import { Notification } from "@/types/notification.types";
import { convertToQueryString } from "@/libs/funcs";

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
    const queryString = convertToQueryString(query);
    const url = `/notifications/all?${queryString}`;

    return Quranara.get(url);
}
