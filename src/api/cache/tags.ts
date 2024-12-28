export const blog = {
    default: "last-blogs",

    getOne(slug: string) {
        return `blog-${slug}`;
    },

    getRelated(slug: string) {
        return `blog-${slug}-related`;
    },

    getComments(slug: string) {
        return `blog-${slug}-comments`;
    },
};

export const courses = {
    default: "last-courses",

    summary: "courses-summary",

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

export const category = {
    default: "category",
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
    default: "last-tv",

    getOne(slug: string) {
        return `tv-${slug}`;
    },

    getRelated(slug: string) {
        return `tv-${slug}-related`;
    },

    getComments(slug: string) {
        return `tv-${slug}-comments`;
    },
};

export const ui = {
    menus: "menus",
};
