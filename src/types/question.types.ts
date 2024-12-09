import { STATUS } from "@/constants/questions";

import { PopulatedUser } from "./user.types";
import { Session } from "./session.types";
import { AttachedType } from "./attached.types";

export type Status = (typeof STATUS)[keyof typeof STATUS];

export type QuestionMessage = {
    content: string;
    user: PopulatedUser;
    attached?: {
        type: AttachedType;
        url: string;
    };
    createdAt: Date
};

type QuestionSession = Pick<Session, "_id" | "slug">;

export type Question = {
    _id: string;
    title: string;
    user: PopulatedUser;
    session: QuestionSession;
    status: Status;
    messages: QuestionMessage[];
};

export type LimitedQuestion = Omit<Question, "messages">

export type QuestionWithFirstMessage = LimitedQuestion & { message: QuestionMessage }