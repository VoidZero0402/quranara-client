import { useEffect, useState } from "react";

function useCountdown(seconds: number, onEndCountdown?: () => void) {
    const [count, setCount] = useState<number>(seconds);

    useEffect(() => {
        setCount(seconds);

        const interval = setInterval(() => {
            setCount((count) => {
                if (count === 0) {
                    clearInterval(interval);
                    return count;
                }

                return count - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    useEffect(() => {
        if (count === 0 && onEndCountdown) {
            onEndCountdown();
        }
    }, [count]);

    return count;
}

export default useCountdown;
