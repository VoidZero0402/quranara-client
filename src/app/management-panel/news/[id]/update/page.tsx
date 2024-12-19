import { notFound } from "next/navigation";

import { getNews } from "@/api/queries/news";

import UpdateNewsHeader from "@/components/layout/management-panel/news/update/UpdateNewsHeader";
import UpdateNewsForm from "@/components/form/template/management-panel/UpdateNewsForm";

async function UpdateNews({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const {
        data: { news },
        status,
    } = await getNews({ newsId: id });

    if (status === 404) {
        notFound();
    }

    return (
        <div className="space-y-4">
            <UpdateNewsHeader />
            <div className="py-8 px-4 sm:p-8 bg-white dark:bg-gray-850 sm:rounded-2xl">
                <UpdateNewsForm news={news} />
            </div>
        </div>
    );
}

export default UpdateNews;
