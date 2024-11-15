import Quranara from "../clients/Quranara";
import { CreateTopicSchemaType, UpdateTopicSchemaType, UpdateTopicOrderSchemaType } from "@/validators/topics";

type TopicsMutationsWithidParams = { topicId: string };

export function createTopic(data: CreateTopicSchemaType) {
    return Quranara.post("/topics", {
        body: JSON.stringify(data),
    });
}

export function updateTopic(params: TopicsMutationsWithidParams, data: UpdateTopicSchemaType) {
    const url = `/topics/${params.topicId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}

export function updateTopicOrder(params: TopicsMutationsWithidParams, data: UpdateTopicOrderSchemaType) {
    const url = `/topics/${params.topicId}/order`;

    return Quranara.patch(url, {
        body: JSON.stringify(data),
    });
}
