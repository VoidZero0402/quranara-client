import { useEffect } from "react";

interface OTPRequestOptions extends CredentialRequestOptions {
    otp: {
        transport: string[];
    };
}

interface OTPCredential extends Credential {
    code: string;
}

function useOTPCredential(set: (code: string) => void) {
    useEffect(() => {
        if ("OTPCredential" in window) {
            const fetchOtp = async () => {
                try {
                    const options = {
                        otp: { transport: ["sms"] },
                    } as OTPRequestOptions;

                    const credential = (await navigator.credentials.get(options)) as OTPCredential;

                    set(credential.code);
                } catch {
                    console.error("Failed to fetch OTP. Please check your browser.");
                }
            };

            fetchOtp();
        }
    }, []);
}

export default useOTPCredential;
