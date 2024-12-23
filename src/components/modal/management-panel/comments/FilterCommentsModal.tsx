"use client";

import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { SOURCE, FILTER__STATUSES, FILTER__SOURCES } from "@/constants/comments";
import { ALL } from "@/constants/global";

import { updateMultipleURLSearchParams } from "@/libs/funcs";

import SourceFilter from "@/components/specific/management-panel/comments/SourceFilter";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import Button from "@/components/ui/Button";

import Filter from "@/components/svgs/Filter";
import StatusFilter from "@/components/specific/management-panel/comments/StatusFilter";

function FilterCommentsModal({ isOpen, onClose }: ModalInstanceProps) {
    const router = useRouter();

    const searchParams = useSearchParams();

    const sourceParams = searchParams.get("source") ?? ALL;

    const [source, setSource] = useState<string>(FILTER__SOURCES.includes(sourceParams) ? sourceParams : SOURCE.COURSE);

    const statusParams = searchParams.get("status") ?? ALL;

    const [status, setStatus] = useState<string>(FILTER__STATUSES.includes(statusParams) ? statusParams : ALL);

    const onChangeSource = useCallback(
        (source: string) => () => {
            setSource(source);
        },
        []
    );

    const onChangeStatus = useCallback(
        (status: string) => () => {
            setStatus(status);
        },
        []
    );

    const applyFilters = () => {
        onClose();
        const url = updateMultipleURLSearchParams({ status: status === ALL ? "" : status, source });
        router.push(url, { scroll: false });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Filter />
                    فیلتر نظرات
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8 min-h-72">
                <SourceFilter source={source} onChange={onChangeSource} />
                <StatusFilter status={status} onChange={onChangeStatus} />
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

export default FilterCommentsModal;
