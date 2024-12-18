"use client";

import { useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { SOURCES, FILTER__SOURCES } from "@/constants/categories";

import { updateURLSearchParams } from "@/libs/funcs";

import SourceFilter from "@/components/specific/management-panel/categories/SourceFilter";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import Button from "@/components/ui/Button";

import Filter from "@/components/svgs/Filter";

function FilterCategoriesModal({ isOpen, onClose }: ModalInstanceProps) {
    const router = useRouter();

    const searchParams = useSearchParams();

    const sourceParams = searchParams.get("source") ?? SOURCES.ALL;

    const [source, setSource] = useState<string>(FILTER__SOURCES.includes(sourceParams) ? sourceParams : SOURCES.ALL);

    const onChange = useCallback(
        (source: string) => () => {
            setSource(source);
        },
        []
    );

    const applyFilters = () => {
        onClose();
        const url = updateURLSearchParams("source", source);
        router.push(url, { scroll: false });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Filter />
                    فیلتر دسته‌بندی ها
                </div>
            </ModalHeader>
            <ModalBody className="min-h-72">
                <SourceFilter source={source} onChange={onChange} />
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

export default FilterCategoriesModal;
