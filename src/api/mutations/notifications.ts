import Quranara from "../clients/Quranara";

import { CreateNotificationSchemaType, SendAllNotificationSchemaType, SendCourseRegistersNotificationSchemaType, SendOneNotificationSchemaType } from "@/validators/notifications";

import { MessageResponse } from "@/types/response.types";

type NotificationsMutationsWithIdParams = { notificationId: string };

export function seenNotification(params: NotificationsMutationsWithIdParams): MessageResponse {
    const url = `/notifications/${params.notificationId}/seen`;

    return Quranara.patch(url);
}

export function sendNotificationAll(data: SendAllNotificationSchemaType): MessageResponse {
    return Quranara.post("/notifications/send-all", {
        body: JSON.stringify(data),
    });
}

export function sendNotificationCourseRegisters(data: SendCourseRegistersNotificationSchemaType): MessageResponse {
    return Quranara.post("/notifications/send-course-registers", {
        body: JSON.stringify(data),
    });
}

export function sendNotificationOne(data: SendOneNotificationSchemaType): MessageResponse {
    return Quranara.post("/notifications/send-one", {
        body: JSON.stringify(data),
    });
}

export function updateNotification(params: NotificationsMutationsWithIdParams, data: CreateNotificationSchemaType): MessageResponse {
    const url = `/notifications/${params.notificationId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}

export function removeNotification(params: NotificationsMutationsWithIdParams): MessageResponse {
    const url = `/notifications/${params.notificationId}`;

    return Quranara.delete(url);
}
