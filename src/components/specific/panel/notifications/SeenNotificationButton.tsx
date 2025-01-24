"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { MODE } from "@/constants/notifications";

import { seenNotification } from "@/api/mutations/notifications";
import { SeenNotificationStatusOptions } from "@/api/errors/notifications";

import { statusHandler } from "@/libs/responses";

import useInvalidateQueries from "@/hooks/useInvalidateQueries";

import Button from "@/components/ui/Button";

type SeenNotificationButtonProps = { identifier: string };

function SeenNotificationButton({ identifier }: SeenNotificationButtonProps) {
    const router = useRouter();

    const invalidate = useInvalidateQueries([`notifications-${MODE.READ}`, `notifications-${MODE.UNREAD}`]);

    const { mutate: seen, isPending } = useMutation({
        mutationKey: [`seen-notification-${identifier}`],
        mutationFn: () => seenNotification({ notificationId: identifier }),
        onSettled(data) {
            if (data) {
                statusHandler(data, SeenNotificationStatusOptions);

                if (data.status === 200) {
                    invalidate();
                    router.refresh();
                }
            }
        },
    });

    return (
        <Button size="lg" variant="neutral-base" className="shrink-0" disabled={isPending} onClick={seen as any}>
            دریافت شد
        </Button>
    );
}

export default SeenNotificationButton;
