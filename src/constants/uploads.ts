export const TYPES = ["image/jpeg", "image/png", "image/webp", "audio/mpeg", "audio/wav", "application/pdf", "application/zip", "application/x-compressed", "application/x-zip-compressed", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

export const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export type UploadType = "image/jpeg" | "image/png" | "image/webp" | "audio/mpeg" | "audio/wav" | "application/pdf" | "application/zip" | "application/x-compressed" | "application/x-zip-compressed" | "application/msword" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

export type UploadFileType = "IMAGE" | "AUDIO" | "ZIP";

export const MAX_FILE_SIZE = 5242880;
