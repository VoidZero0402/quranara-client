type MenuCourse = {
    _id: string;
    title: string;
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
