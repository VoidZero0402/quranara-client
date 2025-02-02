"use client";

import { useCallback, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useDebounceCallback } from "usehooks-ts";

import { courses as coursesCache } from "@/api/cache/tags";
import { getCoursesSummary } from "@/api/queries/courses";
import { signCourse } from "@/api/mutations/users";
import { SignCourseStatusOptions } from "@/api/errors/users";

import { statusHandler } from "@/libs/responses";
import { revalidate } from "@/libs/revalidate";

import Modal, { ModalBody, ModalFooter, ModalHeader, ModalInstanceProps } from "../../Modal";

import Button from "@/components/ui/Button";
import Select, { SelectItem } from "@/components/ui/Select";

import Layers from "@/components/svgs/Layers";

import { SummaryCourse } from "@/types/course.types";

import { User } from "@/types/user.types";

type SignCourseModalProps = ModalInstanceProps & { user: Pick<User, "_id" | "username"> };

function SignCourseModal({ isOpen, onClose, user }: SignCourseModalProps) {
    const [course, setCourse] = useState<SummaryCourse | null>(null);

    const { data } = useQuery({ queryKey: ["courses-summary"], queryFn: getCoursesSummary, enabled: !!user?._id });

    const onSelect = useCallback((course: string) => {
        setCourse(JSON.parse(course));
    }, []);

    const debouncedSetCourse = useDebounceCallback(setCourse, 300);

    const handleClose = () => {
        debouncedSetCourse(null);
        onClose();
    };

    const { mutate: sign, isPending } = useMutation({
        mutationFn: () => signCourse({ course: course?._id as string, user: user?._id }),
        onSettled(data) {
            if (data) {
                statusHandler(data, SignCourseStatusOptions);

                if (data.success) {
                    revalidate(coursesCache.default, coursesCache.getOne(course?.slug as string));
                }
            }
        },
    });

    return (
        <Modal isOpen={isOpen} onClose={handleClose} className="max-w-[640px] w-full">
            <ModalHeader>
                <div className="flex items-center gap-x-1">
                    <Layers />
                    اهدای دوره به کاربر
                </div>
            </ModalHeader>
            <ModalBody className="space-y-8 min-h-72">
                <Select onSelect={onSelect} value={course?.title} defaultText="لطفا یک دوره را انتخاب کنید">
                    {data?.data?.courses?.map((course) => (
                        <SelectItem key={course._id} value={JSON.stringify(course)} text={course.title}>
                            {course.title}
                        </SelectItem>
                    ))}
                </Select>
                {course && (
                    <div className="font-pelak-medium text-gray-700 dark:text-gray-300 leading-8">
                        <span>
                            در صورتی که از اهدای دوره <span className="text-amber-400 underline">{course.title}</span> به کاربر <span className="text-blue-500 underline">{user.username}</span> اطمینان دارید روی دکمه <span className="underline">اهدای دوره مدنظر</span> کلیک نمایید
                        </span>
                    </div>
                )}
            </ModalBody>
            <ModalFooter className="flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full" disabled={!course || isPending} onClick={sign as any}>
                    {isPending ? "در حال اهدای دوره" : "اهدای دوره مدنظر"}
                </Button>
                <Button size="lg" variant="neutral-base" className="w-full" onClick={handleClose}>
                    انصراف از عملیات
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default SignCourseModal;
