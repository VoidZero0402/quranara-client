"use client";

import Link from "next/link";

import SignupForm from "@/components/specific/auth/SignupForm";
import OtpForm from "@/components/specific/auth/OtpForm";
import SendOtpAgain from "@/components/specific/auth/SendOtpAgain";

import Button from "@/components/ui/Button";

import ArrowRight from "@/components/svgs/ArrowRight";
import ArrowLeft from "@/components/svgs/ArrowLeft";

function Signup() {
    return (
        <main className="flex-center h-screen p-4">
            <div className="space-y-8 p-8 sm:p-8 bg-white dark:bg-gray-850 rounded-3xl shadow-xl shadow-gray-100 dark:shadow-none">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="font-pelak-medium text-lg text-gray-800 dark:text-gray-200">تایید کد پیامک شده</span>
                        <Button size="circle" rounded="full" variant="neutral-base">
                            <ArrowLeft />
                        </Button>
                    </div>
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        کد تایید به شماره <span className="font-pelak-medium">0987602912</span> ارسال شد
                    </p>
                </div>

                <OtpForm onSubmit={() => {}} />
                <SendOtpAgain />
            </div>
        </main>
    );
}

export default Signup;
