import { create } from "zustand";

import { sendOtp } from "@/api/mutations/auth";
import { SendOtpStatusOptions } from "@/api/errors/auth";

import { SignupFormSchemaType } from "@/validators/auth";

import { statusHandler } from "@/libs/responses";

type SignupStore = {
    isOtp: boolean;
    user: SignupFormSchemaType;
    TTL: number;
    resetTTL: string;
    setTTL: (ttl: number) => void;
    getOtp: (phone: string) => Promise<void>;
    submit: (data: SignupFormSchemaType) => void;
    back: () => void;
};

const useSignupStore = create<SignupStore>((set, get) => ({
    isOtp: false,
    user: {
        phone: "",
        fullname: "",
        password: "",
    },
    TTL: 120,
    resetTTL: crypto.randomUUID(),
    setTTL: (ttl: number) => set({ TTL: ttl }),
    getOtp: async (phone: string) => {
        const response = await sendOtp({ phone });

        statusHandler(response, SendOtpStatusOptions);

        if (response.status === 409) {
            set({ TTL: response.data.ttl as number, resetTTL: crypto.randomUUID() });
        } else {
            set({ TTL: 120, resetTTL: crypto.randomUUID() });
        }
    },
    submit: (data: SignupFormSchemaType) => set({ user: data, isOtp: true }),
    back: () => set({ isOtp: false }),
}));

export default useSignupStore;
