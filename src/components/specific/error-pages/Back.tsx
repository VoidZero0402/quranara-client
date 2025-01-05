"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";

function Back() {
    const router = useRouter();

    return (
        <div className="xs:w-1/2">
            <Button size="lg" variant="neutral-base" className="w-full" onClick={router.back}>
                بازگشت به صفحه قبل
            </Button>
        </div>
    );
}

export default Back;
