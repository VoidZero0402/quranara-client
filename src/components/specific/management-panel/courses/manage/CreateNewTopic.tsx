"use client";

import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

const CreateTopicModal = dynamic(() => import("@/components/modal/management-panel/courses/CreateTopicModal"), { ssr: false });

import Button from "@/components/ui/Button";

import LinkCircle from "@/components/svgs/LinkCircle";

import { CourseIdentifiers } from "@/types/course.types";

type CreateNewTopicProps = { course: CourseIdentifiers };

function CreateNewTopic({ course }: CreateNewTopicProps) {
    const { isOpen, close, open, props } = useToggleState<{ course: CourseIdentifiers }>();

    return (
        <>
            <Button size="lg" onClick={() => open({ course })}>
                <LinkCircle />
                ایجاد سرفصل جدید
            </Button>
            <CreateTopicModal isOpen={isOpen} onClose={close} {...props} />
        </>
    );
}

export default CreateNewTopic;
