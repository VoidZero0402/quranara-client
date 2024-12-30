"use client";

import IconButton from "@/components/ui/IconButton";

import PenSquare from "@/components/svgs/PenSquare";
import Lock from "@/components/svgs/Lock";

import { PopulatedSession } from "@/types/session.types";

type SessionProps = { session: PopulatedSession; onUpdate: (session: PopulatedSession) => void };

function Session({ session, onUpdate }: SessionProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 font-pelak-medium bg-white dark:bg-gray-850 rounded-xl">
            <div className="flex items-center gap-x-2 w-full sm:w-max text-gray-800 dark:text-gray-200">
                <span className="flex-center shrink-0 size-8 text-sm gray-light rounded-lg">{session.order}</span>
                <span className="">{session.title}</span>
            </div>
            <div className="flex items-center gap-x-2 self-end" onClick={() => onUpdate(session)}>
                <IconButton label="ویرایش جلسه">
                    <PenSquare />
                </IconButton>
                <div className="py-2.5 px-4 w-18 text-sm text-center gray-light rounded-lg">{session.time}</div>
                {!session.isPublic && (
                    <div className="flex-center size-10 gray-light rounded-lg">
                        <Lock className="w-5" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Session;
