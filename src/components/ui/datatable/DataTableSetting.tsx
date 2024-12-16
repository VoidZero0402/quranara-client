"use client";

import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

const DataTableSettingModal = dynamic(() => import("@/components/modal/DataTableSettingModal"), { ssr: false })

import Button from "../Button";

import GearWheel from "@/components/svgs/GearWheel";

import { Entities } from "@/types/entities.types";

type DataTableSettingProps = { entity: Entities };

function DataTableSetting({ entity }: DataTableSettingProps) {
    const { isOpen, close, open } = useToggleState();

    return (
        <>
            <Button size="lg" variant="neutral-base" className="w-full sm:w-max" onClick={open}>
                <GearWheel />
                تنظیمات جدول
            </Button>
            <DataTableSettingModal isOpen={isOpen} onClose={close} entity={entity} />
        </>
    );
}

export default DataTableSetting;
