"use client";

import { useForm } from "react-hook-form";

import { SignupShcemaType } from "@/validators/auth";

import TextField from "@/components/form/TextField";
import Button from "@/components/ui/Button";

import UserRounded from "@/components/svgs/UserRounded";
import SmartPhone from "@/components/svgs/SmartPhone";
import Lock from "@/components/svgs/Lock";

function SignupForm() {
    const { control, handleSubmit } = useForm<SignupShcemaType>({
        defaultValues: {
            phone: "",
            fullname: "",
            password: "",
            otp: "",
        },
    });

    return (
        <div className="flex flex-col gap-y-4">
            <TextField control={control} name="fullname" label="نام و نام خانوادگی" placeholder="نام کاملت رو اینجا وارد کن">
                <UserRounded />
            </TextField>
            <TextField control={control} name="phone" label="شماره موبایل" placeholder="شماره موبایلت رو اینجا وارد کن" regex={/\d/}>
                <SmartPhone />
            </TextField>
            <TextField control={control} name="password" type="password" label="رمز عبور" placeholder="رمز عبورت رو اینجا وارد کن" caption="دقت کن رمز عبورت باید  حداقل ۷ کاراکتر داشته باشه">
                <Lock />
            </TextField>
            <Button size="lg" className="w-full mt-4">
                ادامه و تکمیل ثبت نام
            </Button>
        </div>
    );
}

export default SignupForm;
