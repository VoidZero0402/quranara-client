"use client";

import { useForm } from "react-hook-form";

import TextArea from "../TextArea";

import Button from "@/components/ui/Button";

import Upload from "@/components/svgs/Upload";

function QuestionForm() {
    const { control } = useForm();

    return (
        <form className="space-y-4">
            <TextArea control={control} name="any" label="متن سوال شما" placeholder="سوال خود را بپرسید..." caption="بعد از پاسخ توسط مدرس، پاسخ سوال شما در همین صفحه و پنل کاربری شما قابل دسترس خواهد بود" />
            <div className="flex justify-between">
                <Button size="lg" variant="neutral-base">
                    <Upload />
                    آپلود فایل پیوست
                </Button>
                <Button size="lg">ثبت سوال جدید</Button>
            </div>
        </form>
    );
}

export default QuestionForm;
