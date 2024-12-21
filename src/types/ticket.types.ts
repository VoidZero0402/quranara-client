import { STATUS, TYPE } from "@/constants/tickets";

import { Course } from "./course.types";
import { User } from "./user.types";
import { AttachedType } from "./attached.types";

export type Status = (typeof STATUS)[keyof typeof STATUS];
type TicketType = (typeof TYPE)[keyof typeof TYPE];

type TicketCourse = Pick<Course, "_id" | "title">;

export type TicketMessage = {
    content: string;
    user: PopulatedUser;
    attached?: {
        type: AttachedType;
        url: string;
    };
    createdAt: number
};

type PopulatedUser = Pick<User, "_id" | "username" | "role" | "profile">

export type Ticket = {
    _id: string;
    title: string;
    description: string;
    user: PopulatedUser;
    course?: TicketCourse;
    status: Status;
    type: TicketType;
    shortId: string;
    messages: TicketMessage[];
    createdAt: number
    updatedAt: number
};

export type LimitedTicket = Omit<Ticket, "messages">