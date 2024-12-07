"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { changePassword } from "@/api/mutations/me";
import { ChangePasswordStatusOptions } from "@/api/errors/me";

import { ChangePasswordSchema, ChangePasswordSchemaType } from "@/validators/me";

import { statusHandler } from "@/libs/responses";

import TextField from "../../TextField";

import Button from "@/components/ui/Button";

import Lock from "@/components/svgs/Lock";

function ChangePasswordForm() {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isDirty },
        reset,
    } = useForm<ChangePasswordSchemaType>({
        defaultValues: {
            past: "",
            new: "",
        },
        resolver: zodResolver(ChangePasswordSchema),
    });

    const submitHandler = async (data: ChangePasswordSchemaType) => {
        const res = await changePassword(data);
        statusHandler(res, ChangePasswordStatusOptions);

        if (res.status === 200) {
            reset();
        }
    };

    return (
        <form className="space-y-8" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="past" type="password" label="رمز عبور فعلی" placeholder="رمز عبور فعلیت رو وارد کن" inputClassName="dark:bg-gray-850">
                <Lock />
            </TextField>
            <TextField control={control} name="new" type="password" label="رمز عبور جدید" placeholder="رمز عبور جدیدت رو وارد کن" inputClassName="dark:bg-gray-850">
                <Lock />
            </TextField>
            <Button size="lg" className="h-14" disabled={!isDirty || isSubmitting}>
                {isSubmitting ? "در حال تغییر رمز عبور" : "تغییر رمز عبور"}
            </Button>
        </form>
    );
}

export default ChangePasswordForm;
