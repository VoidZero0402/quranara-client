export type News = {
    _id: string;
    cover: string;
    title: string;
    description: string;
    link?: {
        text: string;
        url: string;
    };
};
