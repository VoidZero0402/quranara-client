"use client";

import { useState } from "react";

import OtpWrapper from "@/components/specific/auth/wrapper/OtpWrapper";
import SignupWrapper from "@/components/specific/auth/wrapper/SignupWrapper";

function Signup() {
    const [isOtp, setIsOtp] = useState<boolean>(false);

    return <main className="flex-center h-screen p-4">{isOtp ? <OtpWrapper /> : <SignupWrapper />}</main>;
}

export default Signup;
