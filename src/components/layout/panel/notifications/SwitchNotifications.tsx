"use client";

import Link from "next/link";

import { MODE } from "@/constants/notifications";

import Tabs, { TabsItem } from "@/components/ui/Tabs";

import { Mode } from "@/types/notification.types";

type SwitchNotificationsProps = { mode: Mode };

function SwitchNotifications({ mode }: SwitchNotificationsProps) {
    return (
        <Tabs defaultValue={mode} onChangeTab={() => {}} className="flex-col xs:flex-row self-center xl:self-auto w-full xs:w-max p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <Link href={`/panel/notifications?mode=${MODE.UNREAD}`} className="w-full xs:w-max">
                <TabsItem value={MODE.UNREAD}>اعلانات خوانده نشده</TabsItem>
            </Link>
            <Link href={`/panel/notifications?mode=${MODE.READ}`} className="w-full xs:w-max">
                <TabsItem value={MODE.READ}>اعلانات خوانده شده</TabsItem>
            </Link>
        </Tabs>
    );
}

export default SwitchNotifications;
