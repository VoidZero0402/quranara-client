"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useSignupStore from "@/store/signup";

import { SignupFormSchema, SignupFormSchemaType } from "@/validators/auth";

import TextField from "@/components/form/TextField";
import NumericField from "@/components/form/NumericField";
import Button from "@/components/ui/Button";

import UserRounded from "@/components/svgs/UserRounded";
import SmartPhone from "@/components/svgs/SmartPhone";
import Lock from "@/components/svgs/Lock";

function SignupForm() {
    const { user, getOtp } = useSignupStore();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SignupFormSchemaType>({
        defaultValues: user,
        resolver: zodResolver(SignupFormSchema),
    });

    const submitHandler = async (data: SignupFormSchemaType) => {
        await getOtp(data.phone, data);
    };

    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(submitHandler)}>
            <TextField control={control} name="fullname" label="نام و نام خانوادگی" placeholder="نام کاملت رو اینجا وارد کن">
                <UserRounded />
            </TextField>
            <NumericField control={control} name="phone" label="شماره موبایل" placeholder="شماره موبایلت رو اینجا وارد کن">
                <SmartPhone />
            </NumericField>
            <TextField control={control} name="password" type="password" label="رمز عبور" placeholder="رمز عبورت رو اینجا وارد کن" caption="دقت کن رمز عبورت باید  حداقل ۷ کاراکتر داشته باشه">
                <Lock />
            </TextField>
            <Button size="lg" className="w-full h-14 mt-4" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "در حال ارسال کد تایید" : "ادامه و تکمیل ثبت نام"}
            </Button>
        </form>
    );
}

export default SignupForm;
