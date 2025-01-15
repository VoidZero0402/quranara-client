"use client";

import { Editor } from "@tiptap/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TiptapSetLinkSchema, TiptapSetLinkSchemaType } from "@/validators/editor";

import TextField from "../TextField";

import Button from "@/components/ui/Button";

type TiptapSetLinkFormProps = { editor: Editor; onClose: () => void };

function TiptapSetLinkForm({ editor, onClose }: TiptapSetLinkFormProps) {
    const { control, handleSubmit } = useForm<TiptapSetLinkSchemaType>({
        values: {
            link: editor?.getAttributes("link").href ?? "",
        },
        resolver: zodResolver(TiptapSetLinkSchema),
    });

    const submitHandler = (data: TiptapSetLinkSchemaType) => {
        editor.commands.setLink({ href: data.link });
        onClose();
    };

    const unsetLinkHandler = () => {
        editor.commands.unsetLink();
        onClose();
    };

    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
                e.stopPropagation();
                handleSubmit(submitHandler)(e);
            }}
        >
            <TextField name="link" control={control} label="لینک مورد نظر" placeholder="لطفا آدرس لینک را وارد کنید" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="w-full">
                    اعمال لینک جدید
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={unsetLinkHandler}>
                    حذف کلی لینک
                </Button>
            </div>
        </form>
    );
}

export default TiptapSetLinkForm;
