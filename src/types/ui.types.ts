import { User } from "./user.types";
import { Order } from "./order.types";

type MenuCourse = {
    _id: string;
    title: string;
    description: string;
    slug: string;
};

type MenuBlogCategory = {
    _id: string;
    title: string;
    caption: string;
};

type MenuTvCategory = {
    _id: string;
    title: string;
    caption: string;
};

export type Menus = {
    courses: MenuCourse[];
    categories: {
        blog: MenuBlogCategory[];
        tv: MenuTvCategory[];
    };
};

export type ManagementPanelDatas = {
    usersCount: number;
    coursesCount: number;
    blogsCount: number;
    tvsCount: number;
    commentsCount: number;
    ticketsCount: number;
    questionsCount: number;
    lastUsers: User[];
    lastOrders: Order[];
};
