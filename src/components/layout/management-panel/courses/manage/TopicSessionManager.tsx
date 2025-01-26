"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import Topic from "@/components/specific/management-panel/courses/manage/Topic";

const UpdateTopicModal = dynamic(() => import("@/components/modal/management-panel/courses/UpdateTopicModal"), { ssr: false });
const RemoveSessionModal = dynamic(() => import("@/components/modal/management-panel/courses/RemoveSessionModal"), { ssr: false });
const CreateSessionOffCanvas = dynamic(() => import("@/components/specific/management-panel/courses/manage/CreateSessionOffCanvas"), { ssr: false });
const UpdateSessionOffCanvas = dynamic(() => import("@/components/specific/management-panel/courses/manage/UpdateSessionOffCanvas"), { ssr: false });

import { Topic as TopicType, LimitedTopic } from "@/types/topic.types";
import { PopulatedSession } from "@/types/session.types";

type TopicSessionManagerProps = { topics: TopicType[]; slug: string };

function TopicSessionManager({ topics, slug }: TopicSessionManagerProps) {
    const { isOpen: isOpenUpdateModal, open: openUpdateModal, close: closeUpdateModal, props: updateModalProps } = useToggleState<{ topic: LimitedTopic }>();
    const { isOpen: isOpenRemoveSessionModal, open: openRemoveSessionModal, close: closeRemoveSessionModal, props: removeSessionModalProps } = useToggleState<{ session: PopulatedSession }>();
    const { isOpen: isOpenCreateSessionOffCanvas, open: openCreateSessionOffCanvas, close: closeCreateSessionOffCanvas, props: createSessionOffCanvasProps } = useToggleState<{ topic: LimitedTopic }>();
    const { isOpen: isOpenUpdateSessionOffCanvas, open: openUpdateSessionOffCanvas, close: closeUpdateSessionOffCanvas, props: updateSessionOffCanvasProps } = useToggleState<{ session: PopulatedSession }>();

    const onUpdate = useCallback((topic: LimitedTopic) => {
        openUpdateModal({ topic });
    }, []);

    const onCreateSession = useCallback((topic: LimitedTopic) => {
        openCreateSessionOffCanvas({ topic });
    }, []);

    const onUpdateSession = useCallback((session: PopulatedSession) => {
        openUpdateSessionOffCanvas({ session });
    }, []);

    const onRemoveSession = useCallback((session: PopulatedSession) => {
        openRemoveSessionModal({ session });
    }, []);

    return (
        <section>
            <div className="space-y-4 p-4 sm:p-0">
                {topics.map((topic) => (
                    <Topic key={topic._id} topic={topic} onUpdate={onUpdate} onCreateSession={onCreateSession} onUpdateSession={onUpdateSession} onRemoveSession={onRemoveSession} />
                ))}
            </div>
            <UpdateTopicModal isOpen={isOpenUpdateModal} onClose={closeUpdateModal} {...updateModalProps} slug={slug} />
            <RemoveSessionModal isOpen={isOpenRemoveSessionModal} onClose={closeRemoveSessionModal} {...removeSessionModalProps} slug={slug} />
            <CreateSessionOffCanvas isOpen={isOpenCreateSessionOffCanvas} onClose={closeCreateSessionOffCanvas} {...createSessionOffCanvasProps} slug={slug} />
            <UpdateSessionOffCanvas isOpen={isOpenUpdateSessionOffCanvas} onClose={closeUpdateSessionOffCanvas} {...updateSessionOffCanvasProps} slug={slug} />
        </section>
    );
}

export default TopicSessionManager;
