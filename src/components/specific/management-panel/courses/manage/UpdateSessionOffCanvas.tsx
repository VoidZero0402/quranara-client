"use client";

import OffCanvas, { OffCanvasHeader, OffCanvasInstanceProps } from "@/components/ui/OffCanvas";

import UpdateSessionForm from "@/components/form/template/management-panel/UpdateSessionForm";

import PlaybackSpeed from "@/components/svgs/PlaybackSpeed";

import { PopulatedSession } from "@/types/session.types";

type UpdateSessionOffCanvasProps = OffCanvasInstanceProps & { session: PopulatedSession; slug: string };

function UpdateSessionOffCanvas({ isOpen, onClose, session, slug }: UpdateSessionOffCanvasProps) {
    return (
        <OffCanvas isOpen={isOpen} onClose={onClose} scrollable>
            <OffCanvasHeader>
                <div className="flex items-center gap-x-2">
                    <PlaybackSpeed className="w-6 shrink-0" />
                    <span className="leading-7">ویرایش جلسه &quot;{session?.title}&quot;</span>
                </div>
            </OffCanvasHeader>
            <div>
                <UpdateSessionForm session={session} slug={slug} onClose={onClose} />
            </div>
        </OffCanvas>
    );
}

export default UpdateSessionOffCanvas;
