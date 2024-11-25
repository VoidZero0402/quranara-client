"use client";

import useSignupStore from "@/store/signup";

import SignupOtpWrapper from "@/components/specific/auth/wrapper/SignupOtpWrapper";
import SignupWrapper from "@/components/specific/auth/wrapper/SignupWrapper";

function Signup() {
    const { isOtp } = useSignupStore();

    return <main className="flex-center h-screen p-4">{isOtp ? <SignupOtpWrapper /> : <SignupWrapper />}</main>;
}

export default Signup;
