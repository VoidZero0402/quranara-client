"use client";

import Link from "next/link";

import { formatDate, limitStringLength } from "@/libs/funcs";

import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";

import Eye from "@/components/svgs/Eye";
import PenSquare from "@/components/svgs/PenSquare";
import SquareTopUp from "@/components/svgs/SquareTopUp";
import SquareBottomTop from "@/components/svgs/SquareBottomTop";

import { LimitedTv } from "@/types/tv.types";

type TvRowProps = { tv: LimitedTv; onShown: (_id: string) => void; onUnshown: (_is: string) => void };

function TvRow({ tv, onShown, onUnshown }: TvRowProps) {
    return (
        <tr>
            <td>{limitStringLength(tv.title, 25)}</td>
            <td>
                <span className="underline text-amber-400">{tv.category.title}</span>
            </td>
            <td>{tv.shown ? <BadgeLight varient="teal">در حال نمایش</BadgeLight> : <BadgeLight varient="gray">عدم نمایش</BadgeLight>}</td>
            <td>
                <span className="underline">{tv.likes} پسندیدن</span>
            </td>
            <td>{formatDate(new Date(tv.updatedAt ?? Date.now()))}</td>
            <td>
                <div className="flex gap-x-2">
                    <Link href={`/tv/${tv.slug}`} target="_blank">
                        <IconButton label="مشاهده جزئیات" variant="teal">
                            <Eye />
                        </IconButton>
                    </Link>
                    <Link href={`tvs/${tv._id}/update`}>
                        <IconButton label="ویرایش">
                            <PenSquare />
                        </IconButton>
                    </Link>
                    {tv.shown ? (
                        <IconButton label="عدم نمایش" onClick={() => onUnshown(tv._id)}>
                            <SquareTopUp />
                        </IconButton>
                    ) : (
                        <IconButton label="نمایش" onClick={() => onShown(tv._id)}>
                            <SquareBottomTop />
                        </IconButton>
                    )}
                </div>
            </td>
        </tr>
    );
}

export default TvRow;
