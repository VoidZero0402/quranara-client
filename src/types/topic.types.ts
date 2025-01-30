import { PopulatedSession } from "./session.types";

export type Topic = {
    _id: string;
    title: string;
    order: number;
    course: string;
    sessions: PopulatedSession[];
    meta: {
        count: number;
        time: {
            hours: number;
            minutes: number;
        };
    };
};

export type LimitedTopic = Omit<Topic, "sessions" | "meta">;
