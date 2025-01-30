"use client";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "./Modal";

import Button from "../ui/Button";

import UserBlockRounded from "../svgs/UserBlockRounded";
import Link from "next/link";

function UnauthorizedModal({ isOpen, onClose }: ModalInstanceProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <UserBlockRounded />
                    ورود به حساب کاربری
                </div>
            </ModalHeader>
            <ModalBody className="space-y-4">
                <div className="space-y-2">
                    <span className="font-pelak-semibold text-blue-500 leading-8">لطفا ابتدا به حساب کاربری خود وارد شوید</span>
                    <p className="text-gray-600 dark:text-gray-400 leading-8">در صورتی که از قبل حساب کاربری دارید به حساب کاربری خود وارد شوید، در غیر این صورت ابتدا نیاز به ثبت‌نام دارید</p>
                </div>
            </ModalBody>
            <ModalFooter className="flex-col sm:flex-row gap-4">
                <Link href="/login" className="block w-full">
                    <Button size="lg" className="w-full">
                        ورود به حساب کاربری
                    </Button>
                </Link>
                <Link href="/signup" className="block w-full">
                    <Button size="lg" variant="neutral-base" className="w-full">
                        ثبت‌نام در قرآن‌آرا
                    </Button>
                </Link>
            </ModalFooter>
        </Modal>
    );
}

export default UnauthorizedModal;
