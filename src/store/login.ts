import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

import { sendOtp } from "@/api/mutations/auth";
import { SendOtpStatusOptions } from "@/api/errors/auth";

import { PHASE } from "@/constants/auth";

import { LoginWithOtpFormSchemaType } from "@/validators/auth";

import { statusHandler } from "@/libs/responses";

type LoginStore = {
    isOtp: boolean;
    user: LoginWithOtpFormSchemaType;
    TTL: number;
    resetTTL: string;
    setTTL: (ttl: number) => void;
    getOtp: (phone: string, data?: LoginWithOtpFormSchemaType) => Promise<void>;
    back: () => void;
};

const useLoginStore = create<LoginStore>((set) => ({
    isOtp: false,
    user: {
        phone: "",
    },
    TTL: 120,
    resetTTL: uuidv4(),
    setTTL: (ttl: number) => set({ TTL: ttl }),
    getOtp: async (phone: string, data?: LoginWithOtpFormSchemaType) => {
        const response = await sendOtp({ phone, phase: PHASE.LOGIN });

        statusHandler(response, SendOtpStatusOptions);

        if (response.status === 409) {
            set({ TTL: response.data.ttl as number, resetTTL: uuidv4() });
        } else {
            set({ TTL: 120, resetTTL: uuidv4() });
        }

        if ((response.status === 200 || response.status === 409) && data) {
            set({ user: data, isOtp: true });
        }
    },
    back: () => set({ isOtp: false }),
}));

export default useLoginStore;
