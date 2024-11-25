import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid';

import { sendOtp } from "@/api/mutations/auth";
import { SendOtpStatusOptions } from "@/api/errors/auth";

import { LoginWithOtpFormSchemaType } from "@/validators/auth";

import { statusHandler } from "@/libs/responses";

type LoginStore = {
    isOtp: boolean;
    user: LoginWithOtpFormSchemaType;
    TTL: number;
    resetTTL: string;
    setTTL: (ttl: number) => void;
    getOtp: (phone: string) => Promise<void>;
    submit: (data: LoginWithOtpFormSchemaType) => void;
    back: () => void;
};

const useLoginStore = create<LoginStore>((set, get) => ({
    isOtp: false,
    user: {
        phone: "",
    },
    TTL: 120,
    resetTTL: uuidv4(),
    setTTL: (ttl: number) => set({ TTL: ttl }),
    getOtp: async (phone: string) => {
        const response = await sendOtp({ phone });

        statusHandler(response, SendOtpStatusOptions);

        if (response.status === 409) {
            set({ TTL: response.data.ttl as number, resetTTL: uuidv4() });
        } else {
            set({ TTL: 120, resetTTL: uuidv4() });
        }
    },
    submit: (data: LoginWithOtpFormSchemaType) => set({ user: data, isOtp: true }),
    back: () => set({ isOtp: false }),
}));

export default useLoginStore;
