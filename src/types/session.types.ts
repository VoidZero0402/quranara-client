export type Session = {
    _id: string;
    title: string;
    slug: string;
    order: string;
    isPublic: string;
    video: string;
    time: string;
    seconds: string;
    attached?: string;
};

export type PopulatedSession = Pick<Session, "_id" | "title" | "slug" | "time" | "isPublic">;
