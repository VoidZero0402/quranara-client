"use client";

import useSignupStore from "@/store/signup";

import SignupOtpWrapper from "@/components/specific/auth/signup/SignupOtpWrapper"; 
import SignupWrapper from "@/components/specific/auth/signup/SignupWrapper";

function Signup() {
    const { isOtp } = useSignupStore();

    return <main className="flex-center h-screen p-4">{isOtp ? <SignupOtpWrapper /> : <SignupWrapper />}</main>;
}

export default Signup;
