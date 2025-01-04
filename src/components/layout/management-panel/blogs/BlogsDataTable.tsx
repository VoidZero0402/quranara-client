"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { blog } from "@/api/cache/tags";
import { shownBlog, unshownBlog } from "@/api/mutations/blog";
import { ShownBlogStatusOptions, UnshownBlogStatusOptions } from "@/api/errors/blog";

import { revalidate } from "@/libs/revalidate";
import { statusHandler } from "@/libs/responses";

import { ENTITIES } from "@/constants/entities";

import BlogRow from "@/components/specific/management-panel/datatable-rows/BlogRow";

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

import { LimitedBlog, BlogIdentifiers } from "@/types/blog.types";
import { Pagination } from "@/types/response.types";

type BlogsDataTableProps = {
    blogs: LimitedBlog[];
    pagination: Pagination;
};

function BlogsDataTable({ blogs, pagination }: BlogsDataTableProps) {
    const router = useRouter();

    const { mutate: shown } = useMutation({
        mutationFn: (blog: BlogIdentifiers) => shownBlog({ blogId: blog._id }),
        async onSettled(data,  _, variables) {
            if (data) {
                statusHandler(data, ShownBlogStatusOptions);

                if (data.success) {
                    await revalidate(blog.default, blog.getOne(variables.slug));
                    router.refresh();
                }
            }
        },
    });

    const { mutate: unshown } = useMutation({
        mutationFn: (blog: BlogIdentifiers) => unshownBlog({ blogId: blog._id }),
        async onSettled(data,  _, variables) {
            if (data) {
                statusHandler(data, UnshownBlogStatusOptions);

                if (data.success) {
                    await revalidate(blog.default, blog.getOne(variables.slug));
                    router.refresh();
                }
            }
        },
    });

    return (
        <section>
            <DataTable entity={ENTITIES.BLOGS} columns={columns} pagination={pagination}>
                <DataTableBody>
                    {blogs.map((blog) => (
                        <BlogRow key={blog._id} blog={blog} onShown={shown} onUnshown={unshown} />
                    ))}
                </DataTableBody>
            </DataTable>
        </section>
    );
}

export default BlogsDataTable;
