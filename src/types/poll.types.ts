import { REFERENCES } from "@/constants/polls";

type Ref = (typeof REFERENCES)[keyof typeof REFERENCES];

type Option = { text: string; votes: number };

export type Poll = {
    identifier: string;
    title: string;
    description: string;
    ref: Ref;
    options: Option[];
};
