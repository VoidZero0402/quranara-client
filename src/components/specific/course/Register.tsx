"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { addToCart } from "@/api/mutations/cart";
import { AddToCartStatusOptions } from "@/api/errors/cart";

import { statusHandler } from "@/libs/responses";

import useToggleState from "@/hooks/useToggleState";

const UnauthorizedModal = dynamic(() => import("@/components/modal/UnauthorizedModal"), { ssr: false });

import Button from "@/components/ui/Button";

import AcademicCap from "@/components/svgs/AcademicCap";

type RegisterProps = { _id: string };

function Register({ _id }: RegisterProps) {
    const router = useRouter();

    const { isOpen: isOpenUnauthorizedModal, open: openUnauthorizedModal, close: closeUnauthorizedModal } = useToggleState();

    const { mutate: register, isPending } = useMutation({
        mutationKey: [`register-course-${_id}`],
        mutationFn: () => addToCart({ course: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, AddToCartStatusOptions);

                if (data.status === 401) {
                    openUnauthorizedModal();
                } else if (data.status === 200 || data.status === 409) {
                    router.push("/panel/cart");
                }
            }
        },
    });

    return (
        <>
            <Button size="lg" className="w-full h-14" disabled={isPending} onClick={register as any}>
                <AcademicCap />
                ثبت‌نام و دسترسی به دوره
            </Button>
            <UnauthorizedModal isOpen={isOpenUnauthorizedModal} onClose={closeUnauthorizedModal} />
        </>
    );
}

export default Register;
