"use client";

import useSignupStore from "@/store/signup";

import SignupOtpForm from "@/components/form/template/auth/signup/SignupOtpForm";

import SignupSendOtpAgain from "./SignupSendOtpAgain";

import Button from "@/components/ui/Button";

import ArrowLeft from "@/components/svgs/ArrowLeft";

function SignupOtpWrapper() {
    const { user, back } = useSignupStore();

    return (
        <div className="space-y-8 p-8 sm:p-12 max-w-[480px] w-full bg-white dark:bg-gray-850 rounded-2xl sm:rounded-3xl shadow-xl shadow-gray-100 dark:shadow-none">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="font-pelak-medium text-lg text-gray-800 dark:text-gray-200">تایید کد پیامک شده</span>
                    <Button size="circle" rounded="full" variant="neutral-base" onClick={back}>
                        <ArrowLeft />
                    </Button>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-400">
                    کد تایید به شماره <span className="font-pelak-medium">{user.phone}</span> ارسال شد
                </p>
            </div>
            <SignupOtpForm />
            <SignupSendOtpAgain />
        </div>
    );
}

export default SignupOtpWrapper;
