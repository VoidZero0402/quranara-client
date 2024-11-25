import Quranara from "../clients/Quranara";

import { SignupShcemaType, SendOtpSchemaType, LoginWithOtpSchemaType, LoginWithPasswordchemaType } from "@/validators/auth";

import { Response, MessageResponse } from "@/types/response.types";

export function signup(data: SignupShcemaType): Promise<Response<{ message: string; username: string }>> {
    return Quranara.post("/auth/signup", {
        body: JSON.stringify(data),
    });
}

export function sendOtp(data: SendOtpSchemaType): Promise<Response<{ message: string; ttl?: number }>> {
    return Quranara.post("/auth/send-otp", {
        body: JSON.stringify(data),
    });
}

export function loginWithOtp(data: LoginWithOtpSchemaType): Promise<Response<{ message: string; username: string }>> {
    return Quranara.post("/auth/login/with-otp", {
        body: JSON.stringify(data),
    });
}

export function loginWithEmail(data: LoginWithPasswordchemaType): Promise<Response<{ message: string; username: string }>> {
    return Quranara.post("/auth/login/with-password", {
        body: JSON.stringify(data),
    });
}

export function logout(): MessageResponse {
    return Quranara.get("/auth/logout");
}
