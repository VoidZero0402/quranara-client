"use client";

import { formateDateObject } from "@/libs/funcs";

import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";

import PenSquare from "@/components/svgs/PenSquare";
import Trash from "@/components/svgs/Trash";

import { Discount } from "@/types/discount.types";

type DiscountRowProps = { discount: Discount; onRemove: (discount: Pick<Discount, "_id" | "code">) => void; onUpdate: (discount: Discount) => void };

function DiscountRow({ discount, onRemove, onUpdate }: DiscountRowProps) {
    return (
        <tr>
            <td>
                <span className="underline text-amber-400">{discount.code}</span>
            </td>
            <td>
                <BadgeLight varient="gray">{discount.percent} درصد</BadgeLight>
            </td>
            <td>
                <span className="underline">
                    {discount.max} - {discount.uses} مرتبه
                </span>
            </td>
            <td>{formateDateObject(discount.createdAt ?? Date.now())}</td>
            <td>{formateDateObject(discount.expireAt ?? Date.now())}</td>
            <td>
                <div className="flex gap-x-2">
                    <IconButton label="ویرایش" onClick={() => onUpdate(discount)}>
                        <PenSquare />
                    </IconButton>
                    <IconButton label="حذف دائمی" variant="danger" onClick={() => onRemove({ _id: discount._id, code: discount.code })}>
                        <Trash />
                    </IconButton>
                </div>
            </td>
        </tr>
    );
}

export default DiscountRow;
