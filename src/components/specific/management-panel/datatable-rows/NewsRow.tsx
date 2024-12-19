"use client";

import { formatDate, limitStringLength } from "@/libs/funcs";

import Placeholder from "@/components/ui/Placeholder";
import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";

import Eye from "@/components/svgs/Eye";
import PenSquare from "@/components/svgs/PenSquare";
import SquareTopUp from "@/components/svgs/SquareTopUp";
import SquareBottomTop from "@/components/svgs/SquareBottomTop";
import Trash from "@/components/svgs/Trash";

import { News } from "@/types/news.types";
import Link from "next/link";

type NewsRowProps = { news: News; onPreview: (news: News) => void; onRemove: (payload: Pick<News, "_id" | "title">) => void; onShown: (_id: string) => void; onUnshown: (_is: string) => void };

function NewsRow({ news, onPreview, onRemove, onShown, onUnshown }: NewsRowProps) {
    return (
        <tr>
            <td>
                <div>
                    <Placeholder className="h-28 aspect-video" type="image" />
                </div>
            </td>
            <td>
                <span>{limitStringLength(news.title, 25)}</span>
            </td>
            <td>{news.shown ? <BadgeLight varient="teal">در حال نمایش</BadgeLight> : <BadgeLight varient="gray">عدم نمایش</BadgeLight>}</td>
            <td>{formatDate(new Date(news.createdAt ?? Date.now()))}</td>
            <td>
                <div className="flex gap-x-2">
                    <IconButton label="پیش نمایش" onClick={() => onPreview(news)}>
                        <Eye />
                    </IconButton>
                    <Link href={`news/${news._id}/update`}>
                        <IconButton label="ویرایش">
                            <PenSquare />
                        </IconButton>
                    </Link>
                    {news.shown ? (
                        <IconButton label="عدم نمایش" onClick={() => onUnshown(news._id)}>
                            <SquareTopUp />
                        </IconButton>
                    ) : (
                        <IconButton label="نمایش" onClick={() => onShown(news._id)}>
                            <SquareBottomTop />
                        </IconButton>
                    )}
                    <IconButton label="حذف دائمی" onClick={() => onRemove({ _id: news._id, title: news.title })}>
                        <Trash />
                    </IconButton>
                </div>
            </td>
        </tr>
    );
}

export default NewsRow;
