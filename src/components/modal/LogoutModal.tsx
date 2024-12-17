"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { logout } from "@/api/mutations/auth";
import { LogoutStatusOptions } from "@/api/errors/auth";

import { statusHandler } from "@/libs/responses";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "./Modal";

import Button from "../ui/Button";

import HomeAngle from "../svgs/HomeAngle";

import LogoutIcon from "@/components/svgs/Logout";

function LogoutModal({ isOpen, onClose }: ModalInstanceProps) {
    const router = useRouter();

    const { mutate: handleLogout, isPending } = useMutation({
        mutationKey: ["logout-user"],
        mutationFn: logout,
        onSettled(data) {
            if (data) {
                statusHandler(data, LogoutStatusOptions);

                if (data.status === 200) {
                    onClose();
                    router.replace("/");
                }
            }
        },
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <LogoutIcon />
                    خروج از حساب کاربری
                </div>
            </ModalHeader>
            <ModalBody className="space-y-4">
                <div className="space-y-2">
                    <span className="font-pelak-semibold text-red-500 leading-8">از خروج از حساب کاربری خود اطمینان دارید؟</span>
                    <p className="text-gray-600 dark:text-gray-400 leading-8">با خروج از حساب کاربری خود، پنل کاربری شما در دسترس نخواهد بود و در صورت نیاز به دسترسی باید دوباره از بخش ورود به وبسایت اقدام کنید</p>
                </div>
            </ModalBody>
            <ModalFooter className="flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full" disabled={isPending} onClick={() => handleLogout()}>
                    <LogoutIcon />
                    {isPending ? "در حال خروج از حساب" : "خروج از حساب کاربری"}
                </Button>
                <Button size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    <HomeAngle />
                    بازگشت به پنل کاربری
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default LogoutModal;
