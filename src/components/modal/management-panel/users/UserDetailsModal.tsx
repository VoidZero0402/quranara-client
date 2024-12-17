"use client";

import { formatDate } from "@/libs/funcs";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";

import UserRounded from "@/components/svgs/UserRounded";

import { User } from "@/types/user.types";

type UserDetailsModalProps = ModalInstanceProps & { user: User };

function UserDetailsModal({ isOpen, onClose, user }: UserDetailsModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <UserRounded />
                    جزئیات حساب کاربر
                </div>
            </ModalHeader>
            <ModalBody className="min-h-72">{user && <Details {...user} />}</ModalBody>
            <ModalFooter>
                <Button size="lg" variant="filled-primary" className="w-full" onClick={onClose}>
                    متوجه شدم
                </Button>
            </ModalFooter>
        </Modal>
    );
}

function Details({ phone, username, fullname, profile, createdAt, age, city }: User) {
    return (
        <div className="space-y-4">
            <div className="flex gap-x-2">
                <div className="relative">
                    <Avatar src={profile ?? undefined} className="size-14 rounded-full" />
                    <div className="absolute left-1 bottom-1 size-2 bg-teal-500 rounded-full">
                        <div className="size-full bg-teal-500 rounded-full animate-ping"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2">
                    <span className="font-pelak-medium text-gray-800 dark:text-gray-200">{username}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{phone}</span>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 text-gray-800 dark:text-gray-200 gray-light rounded-xl">
                    <span className="font-pelak-medium">شماره موبایل</span>
                    <span>{phone}</span>
                </div>
                <div className="flex items-center justify-between p-4 text-gray-800 dark:text-gray-200 gray-light rounded-xl">
                    <span className="font-pelak-medium">نام کامل</span>
                    <span>{fullname}</span>
                </div>
                <div className="flex items-center justify-between p-4 text-gray-800 dark:text-gray-200 gray-light rounded-xl">
                    <span className="font-pelak-medium">نام کاربری</span>
                    <span>{username}</span>
                </div>
                <div className="flex items-center justify-between p-4 text-gray-800 dark:text-gray-200 gray-light rounded-xl">
                    <span className="font-pelak-medium">تاریخ عضویت</span>
                    <span>{formatDate(new Date(createdAt ?? Date.now()))}</span>
                </div>
                <div className="flex items-center justify-between p-4 text-gray-800 dark:text-gray-200 gray-light rounded-xl">
                    <span className="font-pelak-medium">سن کاربر</span>
                    <span>{age ? `${age} ساله` : "مشخص نشده"}</span>
                </div>
                <div className="flex items-center justify-between p-4 text-gray-800 dark:text-gray-200 gray-light rounded-xl">
                    <span className="font-pelak-medium">محل زندگی</span>
                    <span>{city ?? "مشخص نشده"}</span>
                </div>
            </div>
        </div>
    );
}

export default UserDetailsModal;
