"use client";

import { useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { signup } from "@/api/mutations/auth";
import { SignupStatusOptions } from "@/api/errors/auth";

import useSignupStore from "@/store/signup";

import { statusHandler } from "@/libs/responses";
import { persianToEnglish } from "@/libs/funcs";

import useInvalidateQueries from "@/hooks/useInvalidateQueries";

import Button from "@/components/ui/Button";

function SignupOtpForm() {
    const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const searchParams = useSearchParams();

    const { user } = useSignupStore();

    const router = useRouter();

    const invalidate = useInvalidateQueries(["get-me-user", "check-course-access"]);

    const { mutate, isPending } = useMutation({
        mutationFn: signup,
        async onSettled(data) {
            if (data) {
                statusHandler(data, SignupStatusOptions);

                if (data.status === 201) {
                    invalidate();
                    router.replace(searchParams.get("callback") || "/");
                }
            }
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;

        const values = [...otp];
        values[index] = value;
        setOtp(values);

        if (value && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index < 4) {
            inputsRef.current[index + 1]?.focus();
        }

        if (e.key === "ArrowLeft" && index < 4) {
            inputsRef.current[index + 1]?.focus();
        }

        if (e.key === "ArrowRight" && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
        e.preventDefault();

        const pastedData = e.clipboardData.getData("text").slice(0, 5);

        const splitted = pastedData.split("");

        const values = [...otp];

        for (let i = 0; i < 5; i++) {
            values[i] = splitted[5 - 1 - i];
        }

        setOtp(values);

        inputsRef.current[5 - Math.min(pastedData.length, 5)]?.focus();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const code = persianToEnglish([...otp].reverse().join(""));

        mutate({ ...user, otp: code });
    };

    return (
        <form className="flex flex-col items-center gap-y-2" onSubmit={handleSubmit}>
            <div className="flex gap-x-2" onPaste={handlePaste}>
                {Array.from({ length: 5 }).map((_, index) => {
                    return (
                        <input
                            key={index}
                            type="number"
                            maxLength={1}
                            pattern="/0-9\u06F0-\u06F9/"
                            value={otp[index]}
                            ref={(el) => {
                                inputsRef.current[index] = el;
                            }}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="bg-gray-50 dark:bg-gray-800 w-full aspect-square xs:size-16 p-2 font-pelak-medium text-2xl text-center text-blue-500 dark:text-blue-400 border border-transparent focus:border-gray-200 dark:focus:border-gray-700 rounded-2xl transition-all duration-300"
                        />
                    );
                })}
            </div>
            <Button size="lg" rounded="lg" className="w-full h-14 mt-4" disabled={isPending}>
                {isPending ? "در حال ورود" : "ثبت کد تایید"}
            </Button>
        </form>
    );
}

export default SignupOtpForm;
