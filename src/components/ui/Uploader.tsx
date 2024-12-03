"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { getPreSignedURL } from "@/api/queries/uploads";
import { getPreSignedURLStatusOptions } from "@/api/errors/uploads";

import { statusHandler } from "@/libs/responses";

import Toast from "./Toast";
import Spinner from "./Spinner";

import Upload from "../svgs/Upload";
import CheckCircle from "../svgs/CheckCircle";
import XMark from "../svgs/XMark";

const types = ["image/jpeg", "image/png", "image/webp", "audio/mpeg", "audio/wav", "application/pdf", "application/x-compressed", "application/x-zip-compressed"];

type UploadType = "image/jpeg" | "image/png" | "image/webp" | "audio/mpeg" | "audio/wav" | "application/pdf" | "application/x-compressed" | "application/x-zip-compressed";

type UploaderProps = { onUpload: (url: string | null) => void };

function Uploader({ onUpload }: UploaderProps) {
    const [isUploaded, setIsUploaded] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const uploadHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];

            if (!types.includes(file.type)) {
                return toast.custom((t) => <Toast t={t} status="error" text="فرمت نامعتبر" caption="فرمت فایل آپلودی شما معتبر نیست" />);
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
                    setIsUploaded(true);
                    onUpload(`${process.env.NEXT_PUBLIC_AWS_URL}/${res.data.filename}`);
                }
            }

            setIsUploading(false);
        }
    };

    const cancel = () => {
        setIsUploaded(false);
        onUpload(null);
    };

    return (
        <>
            {isUploaded ? (
                <div className="flex items-center gap-x-4 p-4 h-12 bg-teal-50 dark:bg-teal-500/10 text-teal-500 rounded-2xl">
                    <span className="flex-center gap-x-2 font-pelak-medium">
                        <CheckCircle />
                        پیوست شما با موفقیت اضافه شد
                    </span>
                    <div onClick={cancel} className="cursor-pointer">
                        <XMark />
                    </div>
                </div>
            ) : (
                <div>
                    <input type="file" id="uploader" className="hidden" onChange={uploadHandler} />

                    {isUploading ? (
                        <div className="flex-center gap-x-2 py-3 px-5 h-12 font-pelak-medium blue-light rounded-2xl cursor-pointer select-none transition-colors">
                            <Spinner show />
                            در حال آپلود فایل
                        </div>
                    ) : (
                        <label htmlFor="uploader" className="flex-center gap-x-1 py-3 px-5 h-12 font-pelak-medium text-gray-600 dark:text-gray-200 bg-gray-100 dark:bg-gray-500/10 hover:bg-gray-200 dark:hover:bg-gray-500/15 rounded-2xl cursor-pointer select-none transition-colors">
                            <Upload />
                            آپلود فایل پیوست
                        </label>
                    )}
                </div>
            )}
        </>
    );
}

export default Uploader;
