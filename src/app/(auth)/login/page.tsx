"use client";

import { useState } from "react";

import LoginWrapper from "@/components/specific/auth/wrapper/LoginWrapper";
import OtpWrapper from "@/components/specific/auth/wrapper/SignupOtpWrapper";

function Login() {
    const [isOtp, setIsOtp] = useState<boolean>(false);

    return <main className="flex-center h-screen p-4">{isOtp ? <OtpWrapper /> : <LoginWrapper />}</main>;
}

export default Login;
