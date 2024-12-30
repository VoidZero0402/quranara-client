"use client";

import Link from "next/link";

import { STATUS, StatusText } from "@/constants/courses";

import { formateDateObject, limitStringLength } from "@/libs/funcs";

import BadgeLight from "@/components/ui/BadgeLight";
import IconButton from "@/components/ui/IconButton";

import Eye from "@/components/svgs/Eye";
import PenSquare from "@/components/svgs/PenSquare";
import SquareTopUp from "@/components/svgs/SquareTopUp";
import SquareBottomTop from "@/components/svgs/SquareBottomTop";

const StatusVarients = {
    [STATUS.PRE_SELL]: "primary",
    [STATUS.ON_PERFORMING]: "secondary",
    [STATUS.REACHED]: "teal",
};

import { LimitedCourse } from "@/types/course.types";
import Layers from "@/components/svgs/Layers";

type CourseRowProps = { course: LimitedCourse; onShown: (course: Pick<LimitedCourse, "_id" | "slug">) => void; onUnshown: (course: Pick<LimitedCourse, "_id" | "slug">) => void };

function CourseRow({ course, onShown, onUnshown }: CourseRowProps) {
    return (
        <tr>
            <td>{limitStringLength(course.title, 25)}</td>
            <td>
                <BadgeLight varient={StatusVarients[course.status] as any}>{StatusText[course.status]}</BadgeLight>
            </td>
            <td>{course.shown ? <BadgeLight varient="teal">در حال نمایش</BadgeLight> : <BadgeLight varient="gray">عدم نمایش</BadgeLight>}</td>
            <td>
                <span className="underline">{course.price.toLocaleString()} تومان</span>
            </td>
            <td>{formateDateObject(course.updatedAt)}</td>
            <td>
                <div className="flex gap-x-2">
                    <Link href={`/courses/${course.slug}`} target="_blank">
                        <IconButton label="مشاهده جزئیات" variant="teal">
                            <Eye />
                        </IconButton>
                    </Link>
                    <Link href="#">
                        <IconButton label="مدیریت سرفصل‌ها و جلسات">
                            <Layers />
                        </IconButton>
                    </Link>
                    <Link href={`courses/${course._id}/update`}>
                        <IconButton label="ویرایش">
                            <PenSquare />
                        </IconButton>
                    </Link>
                    {course.shown ? (
                        <IconButton label="عدم نمایش" onClick={() => onUnshown({ _id: course._id, slug: course.slug })}>
                            <SquareTopUp />
                        </IconButton>
                    ) : (
                        <IconButton label="نمایش" onClick={() => onShown({ _id: course._id, slug: course.slug })}>
                            <SquareBottomTop />
                        </IconButton>
                    )}
                </div>
            </td>
        </tr>
    );
}

export default CourseRow;
