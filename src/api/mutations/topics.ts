import Quranara from "../clients/Quranara";

import { CreateTopicSchemaType, UpdateTopicSchemaType, UpdateTopicOrderSchemaType } from "@/validators/topics";

import { MessageResponse } from "@/types/response.types";

type TopicsMutationsWithidParams = { topicId: string };

export function createTopic(data: CreateTopicSchemaType): MessageResponse {
    return Quranara.post("/topics", {
        body: JSON.stringify(data),
    });
}

export function updateTopic(params: TopicsMutationsWithidParams, data: UpdateTopicSchemaType): MessageResponse {
    const url = `/topics/${params.topicId}`;

    return Quranara.patch(url, {
        body: JSON.stringify(data),
    });
}

export function updateTopicOrder(params: TopicsMutationsWithidParams, data: UpdateTopicOrderSchemaType): MessageResponse {
    const url = `/topics/${params.topicId}/order`;

    return Quranara.patch(url, {
        body: JSON.stringify(data),
    });
}
