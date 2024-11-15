import Quranara from "../clients/Quranara";
import { SignupShcemaType, SendOtpSchemaType, LoginWithOtpSchemaType, LoginWithEmailSchemaType } from "@/validators/auth";

export function signup(data: SignupShcemaType) {
    return Quranara.post("/auth/signup", {
        body: JSON.stringify(data),
    });
}

export function sendOtp(data: SendOtpSchemaType) {
    return Quranara.post("/auth/send-otp", {
        body: JSON.stringify(data),
    });
}

export function loginWithOtp(data: LoginWithOtpSchemaType) {
    return Quranara.post("/auth/login/with-otp", {
        body: JSON.stringify(data),
    });
}

export function loginWithEmail(data: LoginWithEmailSchemaType) {
    return Quranara.post("/auth/login/with-email", {
        body: JSON.stringify(data),
    });
}

export function logout() {
    return Quranara.get("/auth/logout");
}
