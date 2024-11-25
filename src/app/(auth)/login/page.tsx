"use client";

import useLoginStore from "@/store/login";

import LoginWrapper from "@/components/specific/auth/login/LoginWrapper";
import LoginOtpWrapper from "@/components/specific/auth/login/LoginOtpWrapper";

function Login() {
    const { isOtp } = useLoginStore();

    return <main className="flex-center h-screen p-4">{isOtp ? <LoginOtpWrapper /> : <LoginWrapper />}</main>;
}

export default Login;
