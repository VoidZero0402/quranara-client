"use client";

import OffCanvas, { OffCanvasHeader, OffCanvasInstanceProps } from "@/components/ui/OffCanvas";

import CreateSessionForm from "@/components/form/template/management-panel/CreateSessionForm";

import PlaybackSpeed from "@/components/svgs/PlaybackSpeed";

import { LimitedTopic } from "@/types/topic.types";

type CreateSessionOffCanvasProps = OffCanvasInstanceProps & { topic: LimitedTopic; slug: string };

function CreateSessionOffCanvas({ isOpen, onClose, topic, slug }: CreateSessionOffCanvasProps) {
    return (
        <OffCanvas isOpen={isOpen} onClose={onClose} scrollable>
            <OffCanvasHeader>
                <div className="flex items-center gap-x-2">
                    <PlaybackSpeed className="w-6 shrink-0" />
                    <span className="leading-7">ایجاد جلسه جدید</span>
                </div>
            </OffCanvasHeader>
            <div>
                <CreateSessionForm topic={topic} slug={slug} onClose={onClose} />
            </div>
        </OffCanvas>
    );
}

export default CreateSessionOffCanvas;
