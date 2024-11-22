import { ATTACHED_FILE_TYPES } from "@/constants/files";

export type AttachedType = (typeof ATTACHED_FILE_TYPES)[keyof typeof ATTACHED_FILE_TYPES];
