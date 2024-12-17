import Link from "next/link";

import Button from "@/components/ui/Button";

import UserGroup from "@/components/svgs/UserGroup";

function RelatedLinks() {
    return (
        <div className="p-4 sm:p-0">
            <Link href="/management-panel/users">
                <Button size="lg" className="w-full sm:w-max">
                    <UserGroup />
                    مدیریت کاربران قرآن‌آرا
                </Button>
            </Link>
        </div>
    );
}

export default RelatedLinks;
