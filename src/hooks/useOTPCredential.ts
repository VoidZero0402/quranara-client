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

                    console.log("Otp Credential Code =>", credential.code);

                    set(credential.code);
                } catch {}
            };

            fetchOtp();
        }
    }, []);
}

export default useOTPCredential;
