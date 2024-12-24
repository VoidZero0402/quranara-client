"use client";

import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { FILTER__STATUSES } from "@/constants/questions";
import { ALL } from "@/constants/global";

import { updateURLSearchParams } from "@/libs/funcs";

import StatusFilter from "@/components/specific/management-panel/questions/StatusFilter";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import Button from "@/components/ui/Button";

import Filter from "@/components/svgs/Filter";

function FilterQuestionsModal({ isOpen, onClose }: ModalInstanceProps) {
    const router = useRouter();

    const searchParams = useSearchParams();

    const statusParams = searchParams.get("status") ?? ALL;

    const [status, setStatus] = useState<string>(FILTER__STATUSES.includes(statusParams) ? statusParams : ALL);

    const onChange = useCallback(
        (status: string) => () => {
            setStatus(status);
        },
        []
    );

    const applyFilters = () => {
        onClose();
        const url = updateURLSearchParams("status", status === ALL ? "" : status);
        router.push(url, { scroll: false });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Filter />
                    فیلتر پرسش‌ها
                </div>
            </ModalHeader>
            <ModalBody className="min-h-72">
                <StatusFilter status={status} onChange={onChange} />
            </ModalBody>
            <ModalFooter className="flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full" onClick={applyFilters}>
                    اعمال فیلترها
                </Button>
                <Button size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از تغییرات
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default FilterQuestionsModal;
