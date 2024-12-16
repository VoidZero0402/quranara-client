"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import { getDatatableItemsPerPage, updateSetting } from "@/libs/cookies";
import { showToast } from "@/libs/toast";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "./Modal";

import Button from "../ui/Button";
import ItemsPerPage from "../ui/datatable/ItemsPerPage";

import GearWheel from "../svgs/GearWheel";

import { Entities } from "@/types/entities.types";

type DataTableSettingModalProps = ModalInstanceProps & { entity: Entities };

function DataTableSettingModal({ isOpen, onClose, entity }: DataTableSettingModalProps) {
    const router = useRouter();
    const [pages, setPages] = useState(getDatatableItemsPerPage(entity));

    const onChangePages = useCallback(
        (pages: number) => () => {
            setPages(pages);
        },
        []
    );

    const saveChanges = () => {
        updateSetting("datatable", entity, { pages });
        showToast("success", "ذخیره تغییرات", "ذخیره تغییرات جدول با موفقیت انجام شد");
        onClose();
        router.refresh();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <GearWheel />
                    تنظیمات جدول
                </div>
            </ModalHeader>
            <ModalBody className="space-y-4 min-h-72">
                <ItemsPerPage pages={pages} onChange={onChangePages} />
            </ModalBody>
            <ModalFooter className="flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full" onClick={saveChanges}>
                    ذخیره تغییرات
                </Button>
                <Button size="lg" variant="neutral-base" className="w-full" onClick={onClose}>
                    انصراف از تغییرات
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default DataTableSettingModal;
