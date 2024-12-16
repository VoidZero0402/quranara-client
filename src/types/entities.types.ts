import { ENTITIES } from "@/constants/entities";

export type Entities = (typeof ENTITIES)[keyof typeof ENTITIES];
