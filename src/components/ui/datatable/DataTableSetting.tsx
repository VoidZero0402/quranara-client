"use client";

import useToggleState from "@/hooks/useToggleState";

import DataTableSettingModal from "@/components/modal/DataTableSettingModal";

import Button from "../Button";

import GearWheel from "@/components/svgs/GearWheel";

type DataTableSettingProps = { entity: string };

function DataTableSetting({ entity }: DataTableSettingProps) {
    const { isOpen, close, open } = useToggleState();

    return (
        <>
            <Button size="lg" variant="neutral-base" onClick={open}>
                <GearWheel />
                تنظیمات جدول
            </Button>
            <DataTableSettingModal isOpen={isOpen} onClose={close} entity={entity} />
        </>
    );
}

export default DataTableSetting;
