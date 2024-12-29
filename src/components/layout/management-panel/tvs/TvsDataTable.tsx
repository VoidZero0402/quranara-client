"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { tv } from "@/api/cache/tags";
import { shownTv, unshownTv } from "@/api/mutations/tv";
import { ShownTvStatusOptions, UnshownTvStatusOptions } from "@/api/errors/tv";

import { revalidate } from "@/libs/revalidate";
import { statusHandler } from "@/libs/responses";

import { ENTITIES } from "@/constants/entities";

import TvRow from "@/components/specific/management-panel/datatable-rows/TvRow";

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

const columns: Column[] = [
    {
        key: "title",
        text: "عنوان",
    },
    {
        key: "category",
        text: "دسته‌بندی",
    },
    {
        key: "shown",
        text: "وضعیت نمایش",
    },
    {
        key: "likes",
        text: "پسندیدن",
    },
    {
        key: "updatedAt",
        text: "آخرین بروزرسانی",
    },
    {
        key: "actions",
        text: "گزینه‌های پیشرفته",
    },
];

import { LimitedTv } from "@/types/tv.types";
import { Pagination } from "@/types/response.types";

type TvsDataTableProps = {
    tvs: LimitedTv[];
    pagination: Pagination;
};

function TvsDataTable({ tvs, pagination }: TvsDataTableProps) {
    const router = useRouter();

    const { mutate: shown } = useMutation({
        mutationFn: (_id: string) => shownTv({ tvId: _id }),
        async onSettled(data) {
            if (data) {
                statusHandler(data, ShownTvStatusOptions);

                if (data.success) {
                    await revalidate(tv.default);
                    router.refresh();
                }
            }
        },
    });

    const { mutate: unshown } = useMutation({
        mutationFn: (_id: string) => unshownTv({ tvId: _id }),
        async onSettled(data) {
            if (data) {
                statusHandler(data, UnshownTvStatusOptions);

                if (data.success) {
                    await revalidate(tv.default);
                    router.refresh();
                }
            }
        },
    });

    return (
        <section>
            <DataTable entity={ENTITIES.TVS} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {tvs.map((tv) => (
                        <TvRow key={tv._id} tv={tv} onShown={shown} onUnshown={unshown} />
                    ))}
                </DataTableBody>
            </DataTable>
        </section>
    );
}

export default TvsDataTable;
