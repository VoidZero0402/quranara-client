import { MODE, TYPES } from "@/constants/notifications";

export type Type = (typeof TYPES)[keyof typeof TYPES];

export type Mode = (typeof MODE)[keyof typeof MODE]

export type Notification = {
    _id: string;
    identifier: string;
    title: string;
    description: string;
    type: Type;
    createdAt: number;
};
