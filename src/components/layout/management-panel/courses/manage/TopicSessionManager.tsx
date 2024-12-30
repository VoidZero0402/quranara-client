"use client";

import { useCallback } from "react";
import dynamic from "next/dynamic";

import useToggleState from "@/hooks/useToggleState";

import Topic from "@/components/specific/management-panel/courses/manage/Topic";

const UpdateTopicModal = dynamic(() => import("@/components/modal/management-panel/courses/UpdateTopicModal"), { ssr: false });
const CreateSessionModal = dynamic(() => import("@/components/modal/management-panel/courses/CreateSessionModal"), { ssr: false });
const UpdateSessionModal = dynamic(() => import("@/components/modal/management-panel/courses/UpdateSessionModal"), { ssr: false });

import { Topic as TopicType, LimitedTopic } from "@/types/topic.types";
import { PopulatedSession } from "@/types/session.types";

type TopicSessionManagerProps = { topics: TopicType[]; slug: string };

function TopicSessionManager({ topics, slug }: TopicSessionManagerProps) {
    const { isOpen: isOpenUpdateModal, open: openUpdateModal, close: closeUpdateModal, props: updateModalProps } = useToggleState<{ topic: LimitedTopic }>();
    const { isOpen: isOpenCreateSessionModal, open: openCreateSessionModal, close: closeCreateSessionModal, props: createSessionModalProps } = useToggleState<{ topic: LimitedTopic }>();
    const { isOpen: isOpenUpdateSessionModal, open: openUpdateSessionModal, close: closeUpdateSessionModal, props: updateSessionModalProps } = useToggleState<{ session: PopulatedSession }>();

    const onUpdate = useCallback((topic: LimitedTopic) => {
        openUpdateModal({ topic });
    }, []);

    const onCreateSession = useCallback((topic: LimitedTopic) => {
        openCreateSessionModal({ topic });
    }, []);

    const onUpdateSession = useCallback((session: PopulatedSession) => {
        openUpdateSessionModal({ session });
    }, []);

    return (
        <section>
            <div className="space-y-4 p-4 sm:p-0">
                {topics.map((topic) => (
                    <Topic key={topic._id} topic={topic} onUpdate={onUpdate} onCreateSession={onCreateSession} onUpdateSession={onUpdateSession} />
                ))}
            </div>
            <UpdateTopicModal isOpen={isOpenUpdateModal} onClose={closeUpdateModal} {...updateModalProps} slug={slug} />
            <CreateSessionModal isOpen={isOpenCreateSessionModal} onClose={closeCreateSessionModal} {...createSessionModalProps} slug={slug} />
            <UpdateSessionModal isOpen={isOpenUpdateSessionModal} onClose={closeUpdateSessionModal} {...updateSessionModalProps} slug={slug} />
        </section>
    );
}

export default TopicSessionManager;
