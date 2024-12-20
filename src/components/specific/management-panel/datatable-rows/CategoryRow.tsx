"use client";

import { REFERENCES, RefrencesText } from "@/constants/categories";

import { formatDate } from "@/libs/funcs";

import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";

import PenSquare from "@/components/svgs/PenSquare";

const RefrencesVarient = {
    [REFERENCES.BLOG]: "primary",
    [REFERENCES.TV]: "secondary",
    [REFERENCES.DISCUSSION]: "teal",
    [REFERENCES.COURSE]: "gray",
};

import { Category } from "@/types/category.types";

type CategoryRowProps = { category: Category; onUpdate: (category: Category) => void };

function CategoryRow({ category, onUpdate }: CategoryRowProps) {
    return (
        <tr>
            <td>{category.title}</td>
            <td>
                <span className="line-clamp-1">{category.caption}</span>
            </td>
            <td>
                <BadgeLight varient={RefrencesVarient[category.ref] as any}>{RefrencesText[category.ref]}</BadgeLight>
            </td>
            <td>{formatDate(new Date(category.createdAt ?? Date.now()))}</td>
            <td>
                <IconButton label="ویرایش" onClick={() => onUpdate(category)}>
                    <PenSquare />
                </IconButton>
            </td>
        </tr>
    );
}

export default CategoryRow;
