"use client";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "./Modal";

import Button from "../ui/Button";
import ItemsPerPage from "../ui/datatable/ItemsPerPage";

import GearWheel from "../svgs/GearWheel";

type DataTableSettingModalProps = ModalInstanceProps & { entity: string };

function DataTableSettingModal({ isOpen, onClose, entity }: DataTableSettingModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <GearWheel />
                    تنظیمات جدول
                </div>
            </ModalHeader>
            <ModalBody className="space-y-4 min-h-72">
                <ItemsPerPage />
            </ModalBody>
            <ModalFooter className="flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full">
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
