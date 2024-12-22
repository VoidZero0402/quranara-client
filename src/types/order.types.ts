import { STATUS } from "@/constants/orders";

import { Course } from "./course.types";

import { User } from "./user.types";

type PopulatedUser = Pick<User, "_id" | "username" | "phone" | "profile">;

export type OrderItem = Pick<Course, "_id" | "title" | "slug" | "description" | "cover" | "price" | "discount">;

type Status = (typeof STATUS)[keyof typeof STATUS];

export type Order = {
    _id: string;
    user: PopulatedUser;
    items: OrderItem[];
    amount: number;
    status: Status;
    authority: string;
    shortId: string;
    createdAt: number;
    updatedAt: number;
};
