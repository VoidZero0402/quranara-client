"use client";

import { useState, useRef } from "react";

import Button from "@/components/ui/Button";

type OtpFormProps = { onSubmit: (otp: string) => void };

function OtpForm({ onSubmit }: OtpFormProps) {
    const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;

        if (!/^[0-9]*$/.test(value)) return;

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

    const handleSubmit = () => {
        onSubmit(otp.join(""));
    };

    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-2" onPaste={handlePaste}>
                {Array.from({ length: 5 }).map((_, index) => {
                    return (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={otp[index]}
                            ref={(el) => {
                                inputsRef.current[index] = el;
                            }}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="bg-gray-50 dark:bg-gray-800 size-16 p-2 font-pelak-medium text-2xl text-center text-blue-500 dark:text-blue-400 border border-transparent focus:border-gray-200 dark:focus:border-gray-700 rounded-2xl transition-all duration-300"
                        />
                    );
                })}
            </div>
            <Button size="lg" rounded="lg" className="w-full mt-4" onClick={handleSubmit}>
                ثبت کد تایید
            </Button>
        </div>
    );
}

export default OtpForm;
