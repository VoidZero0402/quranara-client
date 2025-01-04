"use client";

import Link from "next/link";

import { formatDate } from "@/libs/funcs";

import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";
import LimitedString from "@/components/ui/LimitedString";

import Eye from "@/components/svgs/Eye";
import PenSquare from "@/components/svgs/PenSquare";
import SquareTopUp from "@/components/svgs/SquareTopUp";
import SquareBottomTop from "@/components/svgs/SquareBottomTop";

import { LimitedBlog, BlogIdentifiers } from "@/types/blog.types";

type TvRowProps = { blog: LimitedBlog; onShown: (blog: BlogIdentifiers) => void; onUnshown: (blog: BlogIdentifiers) => void };

function BlogRow({ blog, onShown, onUnshown }: TvRowProps) {
    return (
        <tr>
            <td>
                <LimitedString text={blog.title} limit={25} />
            </td>
            <td>
                <span className="underline text-amber-400">{blog.category.title}</span>
            </td>
            <td>{blog.shown ? <BadgeLight varient="teal">در حال نمایش</BadgeLight> : <BadgeLight varient="gray">عدم نمایش</BadgeLight>}</td>
            <td>
                <span className="underline">{blog.likes} پسندیدن</span>
            </td>
            <td>{formatDate(new Date(blog.updatedAt ?? Date.now()))}</td>
            <td>
                <div className="flex gap-x-2">
                    <Link href={`/blog/${blog.slug}`} target="_blank">
                        <IconButton label="مشاهده جزئیات" variant="teal">
                            <Eye />
                        </IconButton>
                    </Link>
                    <Link href={`blogs/${blog._id}/update`}>
                        <IconButton label="ویرایش">
                            <PenSquare />
                        </IconButton>
                    </Link>
                    {blog.shown ? (
                        <IconButton label="عدم نمایش" onClick={() => onUnshown({ _id: blog._id, slug: blog.slug })}>
                            <SquareTopUp />
                        </IconButton>
                    ) : (
                        <IconButton label="نمایش" onClick={() => onShown({ _id: blog._id, slug: blog.slug })}>
                            <SquareBottomTop />
                        </IconButton>
                    )}
                </div>
            </td>
        </tr>
    );
}

export default BlogRow;
