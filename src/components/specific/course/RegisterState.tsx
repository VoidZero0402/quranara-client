"use client";

import Register from "./Register";

import UserRounded from "@/components/svgs/UserRounded";

type RegisterProps = { _id: string, hasAccess: boolean };

function RegisterState({ _id, hasAccess }: RegisterProps) {
    return (
        <div className="w-full sm:w-1/2">
            {hasAccess ? (
                <div className="flex items-center justify-center gap-x-1 w-full h-14 font-pelak-medium blue-light dark:teal-light rounded-2xl">
                    <UserRounded />
                    شما دانشجوی دوره هستید
                </div>
            ) : (
                <Register _id={_id} />
            )}
        </div>
    );
}

export default RegisterState;
