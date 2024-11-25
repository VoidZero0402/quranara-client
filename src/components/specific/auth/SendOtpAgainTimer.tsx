import useCountdown from "@/hooks/useCountdown";

type SendOtpAgainTimerProps = { seconds: number; onEndCountdown: () => void; reset: string };

function SendOtpAgainTimer({ seconds, onEndCountdown, reset }: SendOtpAgainTimerProps) {
    const count = useCountdown(seconds, onEndCountdown, reset);

    return (
        <span className="font-pelak-medium text-xs xs:text-sm text-gray-600 dark:text-gray-400">
            {count !== 0 && (
                <>
                    <span>{count}</span> ثانیه تا درخواست دوباره
                </>
            )}
        </span>
    );
}

export default SendOtpAgainTimer;
