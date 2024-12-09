import Link from "next/link";

import Button from "@/components/ui/Button";

import ChatRoundLine from "@/components/svgs/ChatRoundLine";
import LongArrowLeft from "@/components/svgs/LongArrowLeft";
import NewTicketForm from "@/components/form/template/panel/NewTicketForm";

function NewTicket() {
    return (
        <div className="space-y-8 py-8 px-4 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="space-y-2">
                    <span className="flex items-center gap-x-1 font-pelak-medium text-xl text-gray-700 dark:text-gray-300">
                        <ChatRoundLine className="w-8" />
                        ایجاد تیکت جدید
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-7">فرم زیر رو پر کن تا مدیریت در حداقل زمان مشکلت رو حل کنه</p>
                </div>
                <Link href="/panel/tickets">
                    <Button size="lg" className="w-full sm:w-max">
                        بازگشت به تیکت‌ها
                        <LongArrowLeft />
                    </Button>
                </Link>
            </div>
            <NewTicketForm />
        </div>
    );
}

export default NewTicket;
