import Link from "next/link";

import Button from "@/components/ui/Button";

import UserBlockRounded from "@/components/svgs/UserBlockRounded";

function RelatedLinks() {
    return (
        <div className="p-4 sm:p-0">
            <Link href="/management-panel/users/bans">
                <Button size="lg" className="w-full sm:w-max">
                    <UserBlockRounded />
                    مدیریت کاربران مسدود شده
                </Button>
            </Link>
        </div>
    );
}

export default RelatedLinks;
