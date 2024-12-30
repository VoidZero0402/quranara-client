import { PopulatedSession } from "./session.types";

export type Topic = {
    _id: string;
    title: string;
    order: number;
    course: string;
    sessions: PopulatedSession[];
};

export type LimitedTopic = Omit<Topic, "sessions">;
