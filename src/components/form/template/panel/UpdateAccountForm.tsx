"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { updateAccount } from "@/api/mutations/me";
import { UpdateAccountStatusOptions } from "@/api/errors/me";

import { UpdateAccountSchema, UpdateAccountSchemaType } from "@/validators/me";

import { getTruthyValues } from "@/libs/funcs";
import { statusHandler } from "@/libs/responses";

import TextField from "../../TextField";
import NumericField from "../../NumericField";
import UnchangeableField from "../../UnchangeableField";

import ImageUploader from "@/components/ui/ImageUploader";
import Button from "@/components/ui/Button";

import SmartPhone from "@/components/svgs/SmartPhone";
import UserRounded from "@/components/svgs/UserRounded";
import HomeAngle from "@/components/svgs/HomeAngle";
import Calendar from "@/components/svgs/Calendar";
import UserSpeak from "@/components/svgs/UserSpeak";

import { CookieUser } from "@/types/user.types";

type UpdateAccountFormProps = { user: CookieUser };

function UpdateAccountForm({ user }: UpdateAccountFormProps) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isDirty },
        setValue,
        watch,
    } = useForm<UpdateAccountSchemaType>({
        defaultValues: {
            fullname: user.fullname,
            username: user.username,
            profile: "",
            age: (user?.age ?? "") as number,
            city: user?.city ?? "",
        },
        resolver: zodResolver(UpdateAccountSchema),
    });

    const submitHandler = async (data: UpdateAccountSchemaType) => {
        const body = getTruthyValues(data) as UpdateAccountSchemaType;

        const res = await updateAccount(body);

        statusHandler(res, UpdateAccountStatusOptions);

        if (res.status === 200) {
            router.refresh();
        }
    };

    const onUpload = useCallback((url: string) => {
        setValue("profile", url, {
            shouldDirty: true,
            shouldTouch: true,
        });
    }, []);

    const onCancelUpload = useCallback(() => {
        setValue("profile", "", {
            shouldDirty: true,
            shouldTouch: true,
        });
    }, []);

    const isUploaded = !!watch("profile");

    return (
        <form className="grid md:grid-cols-2 gap-8" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="fullname" label="نام و نام خانوادگی" placeholder="نام و نام خانوادگیت رو وارد کن" inputClassName="dark:bg-gray-850">
                <UserRounded />
            </TextField>
            <TextField control={control} name="username" label="نام کاربری" placeholder="نام کاربری خودت رو وارد کن" inputClassName="dark:bg-gray-850">
                <UserSpeak />
            </TextField>
            <NumericField control={control} name="age" label="سن شما" placeholder="سن خودت رو به عدد وارد کن" inputClassName="dark:bg-gray-850">
                <Calendar />
            </NumericField>
            <TextField control={control} name="city" label="شهر محل سکونت" placeholder="شهر محل سکونتت رو وارد کن" inputClassName="dark:bg-gray-850">
                <HomeAngle />
            </TextField>
            <UnchangeableField value={user.phone} label="شماره موبایل" filedClassName="dark:bg-gray-850">
                <SmartPhone />
            </UnchangeableField>
            <ImageUploader className="self-end" entity="تصویر پروفایل" isUploaded={isUploaded} onUpload={onUpload} onCancel={onCancelUpload} />
            <Button size="lg" type="submit" disabled={!isDirty || isSubmitting}>
                {isSubmitting ? "در حال بروزرسانی حساب کاربری" : "بروزرسانی حساب کاربری"}
            </Button>
        </form>
    );
}

export default UpdateAccountForm;
