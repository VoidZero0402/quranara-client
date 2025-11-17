"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createUser } from "@/api/mutations/users";
import { CreateUserStatusOptions } from "@/api/errors/users";

import { statusHandler } from "@/libs/responses";

import { CreateUserSchema, CreateUserSchemaType } from "@/validators/users";

import TextField from "../../TextField";
import NumericField from "../../NumericField";

import Button from "@/components/ui/Button";

type CreateUserFormProps = { onClose: () => void };

function CreateUserForm({ onClose }: CreateUserFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<CreateUserSchemaType>({
        defaultValues: {
            phone: "",
            fullname: "",
            password: "",
        },
        resolver: zodResolver(CreateUserSchema),
    });

    const submitHandler = async (data: CreateUserSchemaType) => {
        const res = await createUser(data);

        statusHandler(res, CreateUserStatusOptions);

        if (res.status === 201) {
            reset();
            onClose();
            router.refresh();
        }
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="fullname" label="نام و نام خانوادگی" placeholder="نام کامل رو اینجا وارد کن" />
            <NumericField control={control} name="phone" label="شماره موبایل" placeholder="شماره موبایل رو اینجا وارد کن" />
            <TextField control={control} name="password" type="password" label="رمز عبور" placeholder="رمز عبور رو اینجا وارد کن" caption="دقت کن رمز عبورت باید  حداقل ۷ کاراکتر داشته باشه" />
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "در حال ساخت کاربر" : "ساخت کاربر جدید"}
                </Button>
                <Button type="button" size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از عملیات
                </Button>
            </div>
        </form>
    );
}

export default CreateUserForm;
