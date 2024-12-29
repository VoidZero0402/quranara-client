import { notFound } from "next/navigation";

import { getRawTv } from "@/api/queries/tv";

import UpdateTvHeader from "@/components/layout/management-panel/tvs/update/UpdateTvHeader";
import UpdateTvForm from "@/components/form/template/management-panel/UpdateTvForm";

async function UpdateTv({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const {
        data: { tv },
        status,
    } = await getRawTv({ tvId: id });

    if (status === 404) {
        notFound();
    }

    return (
        <div className="space-y-4">
            <UpdateTvHeader />
            <div className="py-8 px-4 sm:p-8 bg-white dark:bg-gray-850 sm:rounded-2xl">
                <UpdateTvForm tv={tv} />
            </div>
        </div>
    );
}

export default UpdateTv;
