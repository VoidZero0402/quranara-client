"use client";

import { useToggle } from "usehooks-ts";

import useSignupStore from "@/store/signup";

import SendOtpAgainTimer from "../SendOtpAgainTimer";

import Button from "@/components/ui/Button";

function SignupSendOtpAgain() {
    const { user, TTL, resetTTL, getOtp } = useSignupStore();
    const [disabled, toggleDisabled] = useToggle(true);

    const sendAgain = async () => {
        await getOtp(user.phone);
        toggleDisabled();
    };

    return (
        <div className="flex items-center justify-between">
            <SendOtpAgainTimer seconds={TTL} onEndCountdown={toggleDisabled} reset={resetTTL} />
            <Button size="sm" variant="neutral-base" onClick={sendAgain} disabled={disabled}>
                ارسال دوباره کد
            </Button>
        </div>
    );
}



export default SignupSendOtpAgain;
