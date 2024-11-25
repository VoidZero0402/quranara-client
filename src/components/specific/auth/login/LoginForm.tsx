"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useLoginStore from "@/store/login";

import { LoginWithOtpFormSchema, LoginWithOtpFormSchemaType } from "@/validators/auth";

import Button from "@/components/ui/Button";

import SmartPhone from "@/components/svgs/SmartPhone";
import NumericField from "@/components/form/NumericField";

function LoginForm() {
    const { user, submit, getOtp } = useLoginStore();

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<LoginWithOtpFormSchemaType>({
        defaultValues: user,
        resolver: zodResolver(LoginWithOtpFormSchema),
    });

    const submitHandler = async (data: LoginWithOtpFormSchemaType) => {
        await getOtp(data.phone);
        submit(data);
    };

    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(submitHandler)}>
            <NumericField control={control} name="phone" label="شماره موبایل" placeholder="شماره موبایلت رو اینجا وارد کن">
                <SmartPhone />
            </NumericField>
            <Button size="lg" className="w-full h-14 mt-4" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "در حال ارسال کد تایید" : "ادامه و ورود"}
            </Button>
        </form>
    );
}

export default LoginForm;
