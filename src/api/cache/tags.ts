export const blog = {
    default: "blogs",

    getOne(slug: string) {
        return `blog-${slug}`;
    },

    getComments(slug: string) {
        return `blog-${slug}-comments`;
    },
};

export const courses = {
    default: "courses",

    getOne(slug: string) {
        return `course-${slug}`;
    },

    getComments(slug: string) {
        return `course-${slug}-comments`;
    },

    getTopics(slug: string) {
        return `course-${slug}-topics`;
    },
};

export const news = {
    default: "news",
};

export const polls = {
    getOne(id: string) {
        return `poll-${id}`;
    },
};

export const tv = {
    default: "tv",

    getOne(slug: string) {
        return `tv-${slug}`;
    },

    getComments(slug: string) {
        return `tv-${slug}-comments`;
    },
};

export const ui = {
    menus: "menus",
};

