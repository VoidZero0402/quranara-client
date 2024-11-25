"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { loginWithPassword } from "@/api/mutations/auth";
import { LoginWithPasswordStatusOptions } from "@/api/errors/auth";

import { LoginWithPasswordchema, LoginWithPasswordchemaType } from "@/validators/auth";

import { statusHandler } from "@/libs/responses";

import TextField from "@/components/form/TextField";
import NumericField from "@/components/form/NumericField";
import Button from "@/components/ui/Button";

import SmartPhone from "@/components/svgs/SmartPhone";
import Lock from "@/components/svgs/Lock";

function LoginWithPasswordForm() {
    const { control, handleSubmit } = useForm<LoginWithPasswordchemaType>({
        defaultValues: {
            phone: "",
            password: "",
        },
        resolver: zodResolver(LoginWithPasswordchema),
    });

    const router = useRouter();

    const { mutate, isPending } = useMutation({
        mutationFn: loginWithPassword,
        onSettled(data) {
            if (data) {
                statusHandler(data, LoginWithPasswordStatusOptions);
            }

            if (data?.status === 200) router.replace("/panel");
        },
    });

    return (
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(mutate as SubmitHandler<LoginWithPasswordchemaType>)}>
            <NumericField control={control} name="phone" label="شماره موبایل" placeholder="شماره موبایلت رو اینجا وارد کن">
                <SmartPhone />
            </NumericField>
            <TextField control={control} name="password" type="password" label="رمز عبور" placeholder="رمز عبورت رو اینجا وارد کن" caption="دقت کن رمز عبورت باید  حداقل ۷ کاراکتر داشته باشه">
                <Lock />
            </TextField>
            <Button size="lg" className="w-full h-14 mt-4" type="submit" disabled={isPending}>
                {isPending ? "در حال ورود" : "ورود به قرآن‌آرا"}
            </Button>
        </form>
    );
}

export default LoginWithPasswordForm;
