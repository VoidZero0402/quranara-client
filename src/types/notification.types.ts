import { TYPES } from "@/constants/notifications";

export type Type = (typeof TYPES)[keyof typeof TYPES];

export type Notification = {
    _id: string;
    title: string;
    description: string;
    type: Type;
    createdAt: number;
};
