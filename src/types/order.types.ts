import { STATUS } from "@/constants/orders";

import { Course } from "./course.types";

import { PopulatedUser } from "./user.types";

type OrderItem = Pick<Course, "_id" | "title" | "slug" | "description" | "cover" | "price" | "discount">;

type Status = (typeof STATUS)[keyof typeof STATUS];

export type Order = {
    user: PopulatedUser;
    items: OrderItem[];
    amount: number;
    status: Status;
    authority: string;
    shortId: string;
};
