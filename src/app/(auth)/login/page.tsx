"use client";

import { useState } from "react";

import LoginWrapper from "@/components/specific/auth/login/LoginWrapper";

function Login() {
    const [isOtp, setIsOtp] = useState<boolean>(false);

    return <main className="flex-center h-screen p-4">{isOtp ? <div /> : <LoginWrapper />}</main>;
}

export default Login;
