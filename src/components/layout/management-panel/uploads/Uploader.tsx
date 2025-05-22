"use client";

import { useState, useRef, useTransition } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";

function Uploader() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isPendingUpload, startUpload] = useTransition();
    const [progress, setProgress] = useState(0);
    const [link, setLink] = useState("");

    const uploadFile = async () => {
        const file = inputRef.current?.files && inputRef.current.files[0];

        if (file) {
            const data = new FormData();
            data.append("file", file);

            startUpload(async () => {
                const res = await axios.post("https://quranara.com/api/uploads", data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    onUploadProgress: function (e) {
                        console.log(e.progress);
                        setProgress(Math.round((e.progress ?? 0) * 100));
                    },
                });

                if (res.status === 200) {
                    setLink(res.data.data.url);
                    toast("فایل با موفقیت آپلود شد");
                }

                setProgress(0);
            });
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <Button variant="filled-danger" rounded="base" onClick={uploadFile} disabled={isPendingUpload}>
                    {isPendingUpload ? "در حال آپلود" : "شروع آپلود"}
                </Button>
                <input type="file" placeholder="select file" ref={inputRef} />
                {!!progress && <span className="text-lg font-pelak-medium">{progress}%</span>}
            </div>
            {link && <div className="p-4 bg-gray-50 text-gray-700">{link}</div>}
        </div>
    );
}

export default Uploader;
