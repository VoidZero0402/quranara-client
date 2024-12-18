export const REFERENCES = {
    BLOG: "BLOG",
    TV: "TV",
    COURSE: "COURSE",
    DISCUSSION: "DISCUSSION",
} as const;

export const SOURCES = {
    ALL: "ALL",
    ...REFERENCES,
};

export const FILTER__SOURCES = Object.keys(SOURCES);
