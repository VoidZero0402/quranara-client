"use client";

import { memo, useState } from "react";
import toast from "react-hot-toast";

import { getPreSignedURL } from "@/api/queries/uploads";
import { getPreSignedURLStatusOptions } from "@/api/errors/uploads";

import { IMAGE_TYPES, UploadType, MAX_FILE_SIZE } from "@/constants/uploads";

import { statusHandler } from "@/libs/responses";

import Toast from "./Toast";
import Spinner from "./Spinner";

import Upload from "../svgs/Upload";
import CheckCircle from "../svgs/CheckCircle";
import XMark from "../svgs/XMark";

type ImageUploaderProps = { entity: string; isUploaded: boolean; onUpload: (url: string) => void; onCancel: () => void } & React.ComponentProps<"div">;

function ImageUploader({ entity, className = "", isUploaded, onUpload, onCancel }: ImageUploaderProps) {
    const [isUploading, setIsUploading] = useState(false);

    const uploadHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];

            if (!IMAGE_TYPES.includes(file.type)) {
                return toast.custom((t) => <Toast t={t} status="error" text="فرمت نامعتبر" caption={`فرمت ${entity} آپلودی شما معتبر نیست`} />);
            }

            if (file.size > MAX_FILE_SIZE) {
                return toast.custom((t) => <Toast t={t} status="error" text="خطای اندازه فایل" caption={`${entity} حداکثر می‌تواند ۵ مگابایت باشد`} />);
            }

            setIsUploading(true);

            const res = await getPreSignedURL({ type: file.type as UploadType, filename: file.name });

            statusHandler(res, getPreSignedURLStatusOptions);

            if (res.success) {
                const upload = await fetch(res.data.url, {
                    method: "PUT",
                    headers: {
                        "Content-Type": file.type,
                    },
                    body: file,
                });

                if (upload.status === 200) {
                    onUpload(`${process.env.NEXT_PUBLIC_AWS_URL}/${res.data.filename}`);
                }
            }

            setIsUploading(false);
        }
    };

    return (
        <div className={className}>
            {isUploaded ? (
                <div className="flex items-center justify-between gap-x-4 p-4 h-14 bg-teal-50 dark:bg-teal-500/10 text-teal-500 rounded-xl">
                    <span className="flex-center gap-x-2 font-pelak-medium">
                        <CheckCircle />
                        آپلود موفقیت آمیز
                    </span>
                    <div onClick={onCancel} className="cursor-pointer">
                        <XMark />
                    </div>
                </div>
            ) : (
                <div>
                    <input type="file" id="uploader" className="hidden" onChange={uploadHandler} />

                    {isUploading ? (
                        <div className="flex-center gap-x-1 py-3 px-5 h-14 font-pelak-medium blue-light rounded-xl cursor-pointer select-none transition-colors">
                            <Spinner show />
                            در حال آپلود {entity}
                        </div>
                    ) : (
                        <label htmlFor="uploader" className="flex-center gap-x-1 py-3 px-5 h-14 font-pelak-medium text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-500/10 hover:bg-gray-200 dark:hover:bg-gray-500/15 rounded-xl cursor-pointer select-none transition-colors">
                            <Upload />
                            آپلود {entity}
                        </label>
                    )}
                </div>
            )}
        </div>
    );
}

export default memo(ImageUploader);
