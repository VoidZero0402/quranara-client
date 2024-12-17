"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { MODE } from "@/constants/notifications";

import { seenNotification } from "@/api/mutations/notifications";
import { SeenNotificationStatusOptions } from "@/api/errors/notifications";

import { statusHandler } from "@/libs/responses";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

type SeenNotificationButtonProps = { identifier: string };

function SeenNotificationButton({ identifier }: SeenNotificationButtonProps) {
    const router = useRouter();

    const queryClient = useQueryClient();

    const { mutate: seen, isPending } = useMutation({
        mutationKey: [`seen-notification-${identifier}`],
        mutationFn: () => seenNotification({ notificationId: identifier }),
        onSettled(data) {
            if (data) {
                statusHandler(data, SeenNotificationStatusOptions);

                if (data.status === 200) {
                    queryClient.invalidateQueries({
                        queryKey: [`notifications-${MODE.UNREAD}`],
                    });

                    queryClient.invalidateQueries({
                        queryKey: [`notifications-${MODE.READ}`],
                    });

                    router.refresh();
                }
            }
        },
    });

    return (
        <Button size="lg" variant="neutral-base" className="shrink-0" disabled={isPending} onClick={() => seen()}>
            دریافت شد
        </Button>
    );
}

export default SeenNotificationButton;
