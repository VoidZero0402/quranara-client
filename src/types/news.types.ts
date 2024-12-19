export type News = {
    _id: string;
    cover: string;
    title: string;
    description: string;
    shown: boolean;
    link?: {
        text: string;
        url: string;
    };
    createdAt: number
};
