"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useMutation } from "@tanstack/react-query";

import { news } from "@/api/cache/tags";

import { shownNews, unshownNews } from "@/api/mutations/news";
import { ShownNewsStatusOptions, UnshownNewsStatusOptions } from "@/api/errors/news";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import useToggleState from "@/hooks/useToggleState";

import { ENTITIES } from "@/constants/entities";

import NewsRow from "@/components/specific/management-panel/datatable-rows/NewsRow";

const RemoveNewsModal = dynamic(() => import("@/components/modal/management-panel/news/RemoveNewsModal"), { ssr: false });
const PreviewNewsModal = dynamic(() => import("@/components/modal/management-panel/news/PreviewNewsModal"), { ssr: false });

import DataTable, { DataTableBody, Column } from "@/components/ui/datatable/DataTable";

const columns: Column[] = [
    {
        key: "cover",
        text: "کاور خبر",
    },
    {
        key: "title",
        text: "عنوان",
    },
    {
        key: "shown",
        text: "وضعیت نمایش",
    },
    {
        key: "createdAt",
        text: "تاریخ ایجاد",
    },
    {
        key: "actions",
        text: "گزینه‌های پیشرفته",
    },
];

import { News } from "@/types/news.types";
import { Pagination } from "@/types/response.types";

type NewsDataTableProps = {
    newses: News[];
    pagination: Pagination;
};

function NewsDataTable({ newses, pagination }: NewsDataTableProps) {
    const router = useRouter();

    const { isOpen: isOpenPreviewModal, open: openPreviewModal, close: closePreviewModal, props: previewModalProps } = useToggleState<{ news: News }>();
    const { isOpen: isOpenRemoveModal, open: openRemoveModal, close: closeRemoveModal, props: removeModalProps } = useToggleState<{ news: Pick<News, "_id" | "title"> }>();

    const onPreview = useCallback((news: News) => {
        openPreviewModal({ news });
    }, []);

    const onRemove = useCallback((news: Pick<News, "_id" | "title">) => {
        openRemoveModal({ news });
    }, []);

    const { mutate: shown } = useMutation({
        mutationFn: (_id: string) => shownNews({ newsId: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, ShownNewsStatusOptions);

                if (data.success) {
                    revalidate(news.default);
                    router.refresh();
                }
            }
        },
    });

    const { mutate: unshown } = useMutation({
        mutationFn: (_id: string) => unshownNews({ newsId: _id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, UnshownNewsStatusOptions);

                if (data.success) {
                    revalidate(news.default);
                    router.refresh();
                }
            }
        },
    });

    return (
        <section>
            <DataTable entity={ENTITIES.NEWS} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {newses.map((news) => (
                        <NewsRow key={news._id} news={news} onPreview={onPreview} onRemove={onRemove} onShown={shown} onUnshown={unshown} />
                    ))}
                </DataTableBody>
            </DataTable>
            <RemoveNewsModal isOpen={isOpenRemoveModal} onClose={closeRemoveModal} {...removeModalProps} />
            <PreviewNewsModal isOpen={isOpenPreviewModal} onClose={closePreviewModal} {...previewModalProps} />
        </section>
    );
}

export default NewsDataTable;
