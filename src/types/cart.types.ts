import { Course } from "./course.types";

export type CartItem = Pick<Course, "_id" | "title" | "slug" | "description" | "cover" | "price" | "discount">;

export type Cart = {
    _id: string;
    items: CartItem[];
    totalPrice: number;
    discount: {
        price: number;
        percent: number;
    };
    payableAmount: number;
};
