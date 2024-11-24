"use client";

import { useState } from "react";
import { useToggle } from "usehooks-ts";

import useCountdown from "@/hooks/useCountdown";

import Button from "@/components/ui/Button";

type SendOtpAgainTimerProps = { seconds: number; onEndCountdown: () => void };

function SendOtpAgain() {
    const [disabled, toggleDisabled] = useToggle(true);
    const [counter, setCounter] = useState(10);

    const sendAgain = () => {
        setCounter(180);
        toggleDisabled();
    };

    return (
        <div className="flex items-center justify-between">
            <SendOtpAgainTimer seconds={counter} onEndCountdown={toggleDisabled} />
            <Button size="sm" variant="neutral-base" onClick={sendAgain} disabled={disabled}>
                ارسال دوباره کد
            </Button>
        </div>
    );
}

function SendOtpAgainTimer({ seconds, onEndCountdown }: SendOtpAgainTimerProps) {
    const count = useCountdown(seconds, onEndCountdown);

    return (
        <span className="font-pelak-medium text-sm text-gray-600 dark:text-gray-400">
            {count !== 0 ? (
                <>
                    <span>{count}</span> ثانیه تا درخواست دوباره
                </>
            ) : (
                "می‌توانید دوباره درخواست بدهید"
            )}
        </span>
    );
}

export default SendOtpAgain;
