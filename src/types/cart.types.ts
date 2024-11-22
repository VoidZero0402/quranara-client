import { Course } from "./course.types";

type CartItem = Pick<Course, "_id" | "title" | "slug" | "description" | "cover" | "price" | "discount">;

export type Cart = {
    _id: string;
    items: CartItem[];
    totalPrice: number;
    discount: number;
    payableAmount: number;
};
