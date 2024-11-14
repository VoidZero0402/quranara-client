import Quranara from "../clients/Quranara";

type SignupProps = {
    phone: string;
    email: string;
    fullname: string;
    password: string;
    otp: string;
};

export function signup(data: SignupProps) {
    return Quranara.post("/auth/signup", {
        body: JSON.stringify(data),
    });
}

type SendOtpProps = { phone: string };

export function sendOtp(data: SendOtpProps) {
    return Quranara.post("/auth/send-otp", {
        body: JSON.stringify(data),
    });
}

type LoginWithOtpProps = { phone: string; otp: string };

export function loginWithOtp(data: LoginWithOtpProps) {
    return Quranara.post("/auth/login/with-otp", {
        body: JSON.stringify(data),
    });
}

type LoginWithEmailProps = { email: string; password: string };

export function loginWithEmail(data: LoginWithEmailProps) {
    return Quranara.post("/auth/login/with-email", {
        body: JSON.stringify(data),
    });
}

export function logout() {
    return Quranara.get("/auth/logout");
}
