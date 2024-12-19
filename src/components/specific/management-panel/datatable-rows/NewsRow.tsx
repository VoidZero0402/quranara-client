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

type NewsRowProps = { news: News };

function NewsRow({ news }: NewsRowProps) {
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
                    <IconButton label="پیش نمایش">
                        <Eye />
                    </IconButton>
                    <IconButton label="ویرایش">
                        <PenSquare />
                    </IconButton>
                    {news.shown ? (
                        <IconButton label="عدم نمایش">
                            <SquareTopUp />
                        </IconButton>
                    ) : (
                        <IconButton label="نمایش">
                            <SquareBottomTop />
                        </IconButton>
                    )}
                    <IconButton label="حذف دائمی">
                        <Trash />
                    </IconButton>
                </div>
            </td>
        </tr>
    );
}

export default NewsRow;
