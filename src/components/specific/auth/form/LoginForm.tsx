"use client";

import { useForm } from "react-hook-form";

import { LoginWithOtpSchemaType } from "@/validators/auth";

import TextField from "@/components/form/TextField";
import Button from "@/components/ui/Button";

import SmartPhone from "@/components/svgs/SmartPhone";

function LoginForm() {
    const { control, handleSubmit } = useForm<LoginWithOtpSchemaType>({
        defaultValues: {
            phone: "",
            otp: "",
        },
    });

    return (
        <div className="flex flex-col gap-y-4">
            <TextField control={control} name="phone" label="شماره موبایل" placeholder="شماره موبایلت رو اینجا وارد کن" regex={/\d/}>
                <SmartPhone />
            </TextField>
            <Button size="lg" className="w-full mt-4">
                ادامه و ورود
            </Button>
        </div>
    );
}

export default LoginForm;
