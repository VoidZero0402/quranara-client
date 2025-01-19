import { Course } from "./course.types";
import { Topic } from "./topic.types";

export type Session = {
    _id: string;
    title: string;
    slug: string;
    order: string;
    isPublic: boolean;
    video: string;
    content: string;
    time: string;
    seconds: string;
    attached?: string;
    topic: Topic;
    course: Pick<Course, "_id" | "title" | "slug" | "description" | "cover">;
};

export type PopulatedSession = Pick<Session, "_id" | "title" | "slug" | "time" | "isPublic" | "order" | "video" | "content" | "attached">;
