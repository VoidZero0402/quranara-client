"use client";

import { RefrencesText } from "@/constants/categories";

import { formatDate } from "@/libs/funcs";

import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";

import PenSquare from "@/components/svgs/PenSquare";

import { Category } from "@/types/category.types";

type CategoryRowProps = { category: Category, onEdit: (category: Category) => void };

function CategoryRow({ category, onEdit }: CategoryRowProps) {
    return (
        <tr>
            <td>{category.title}</td>
            <td><span className="line-clamp-1">{category.caption}</span></td>
            <td>
                <BadgeLight>{RefrencesText[category.ref]}</BadgeLight>
            </td>
            <td>{formatDate(new Date(category.createdAt ?? Date.now()))}</td>
            <td>
                <IconButton label="ویرایش" onClick={() => onEdit(category)}>
                    <PenSquare />
                </IconButton>
            </td>
        </tr>
    );
}

export default CategoryRow;
