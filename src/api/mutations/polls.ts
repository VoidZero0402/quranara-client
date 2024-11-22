import Quranara from "../clients/Quranara";
import { CreatePollSchemaType, UpdatePollSchemaType, VoutePollSchemaType } from "@/validators/polls";

type PollsMutationsWithIdParams = { pollId: string };

export function createPoll(data: CreatePollSchemaType) {
    return Quranara.post("/polls", {
        body: JSON.stringify(data),
    });
}

export function updatePoll(params: PollsMutationsWithIdParams, data: UpdatePollSchemaType) {
    const url = `/polls/${params.pollId}`;

    return Quranara.put(url, {
        body: JSON.stringify(data),
    });
}

export function removePoll(params: PollsMutationsWithIdParams) {
    const url = `/polls/${params.pollId}`;

    return Quranara.delete(url);
}

export function voutePoll(params: PollsMutationsWithIdParams, data: VoutePollSchemaType) {
    const url = `/polls/${params.pollId}/voute`;

    return Quranara.patch(url, {
        body: JSON.stringify(data),
    });
}
