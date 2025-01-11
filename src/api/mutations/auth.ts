import Quranara from "../clients/Quranara";

import { SignupSchemaType, SendOtpSchemaType, LoginWithOtpSchemaType, LoginWithPasswordchemaType } from "@/validators/auth";

import { Response, MessageResponse } from "@/types/response.types";

export function signup(data: SignupSchemaType): Promise<Response<{ message: string }>> {
    return Quranara.post("/auth/signup", {
        body: JSON.stringify(data),
    });
}

export function sendOtp(data: SendOtpSchemaType): Promise<Response<{ message: string; ttl?: number }>> {
    return Quranara.post("/auth/send-otp", {
        body: JSON.stringify(data),
    });
}

export function loginWithOtp(data: LoginWithOtpSchemaType): Promise<Response<{ message: string; role: string }>> {
    return Quranara.post("/auth/login/with-otp", {
        body: JSON.stringify(data),
    });
}

export function loginWithPassword(data: LoginWithPasswordchemaType): Promise<Response<{ message: string; role: string }>> {
    return Quranara.post("/auth/login/with-password", {
        body: JSON.stringify(data),
    });
}

export function logout(): MessageResponse {
    return Quranara.get("/auth/logout");
}
