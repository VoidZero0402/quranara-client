export const REFERENCES = {
    BLOG: "BLOG",
    TV: "TV",
    COURSE: "COURSE",
    DISCUSSION: "DISCUSSION",
} as const;

export const FILTER__SOURCES = Object.keys(REFERENCES);

export const RefrencesText = {
    [REFERENCES.BLOG]: "مقالات",
    [REFERENCES.COURSE]: "دوره‌ها",
    [REFERENCES.TV]: "آموزش‌ها",
    [REFERENCES.DISCUSSION]: "بحث و گفتگو",
};
