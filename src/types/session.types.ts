import { TYPE } from "@/constants/sessions";
import { Course } from "./course.types";
import { Topic } from "./topic.types";

type SessionType = (typeof TYPE)[keyof typeof TYPE];

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
    type: SessionType;
    topic: Topic;
    course: Pick<Course, "_id" | "title" | "slug" | "description" | "cover">;
};

export type PopulatedSession = Pick<Session, "_id" | "title" | "slug" | "time" | "isPublic" | "order" | "video" | "content" | "attached" | "type">;
