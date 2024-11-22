import { PopulatedSession } from "./session.types";

export type Topic = {
    _id: string;
    title: string;
    order: number;
    sessions: PopulatedSession[];
};
