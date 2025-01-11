import { cookies } from "next/headers";

import { getManagementPanelDatas } from "@/api/queries/ui";

import Statistics from "@/components/layout/management-panel/index/Statistics";
import Assignments from "@/components/layout/management-panel/index/Assignments";
import Latests from "@/components/layout/management-panel/index/Latests";

async function ManagementPanel() {
    const { data } = await getManagementPanelDatas((await cookies()).toString());

    return (
        <div className="space-y-8">
            <Statistics usersCount={data.usersCount} coursesCount={data.coursesCount} blogsCount={data.blogsCount} tvsCount={data.tvsCount} />
            <Assignments ticketsCount={data.ticketsCount} commentsCount={data.commentsCount} questionsCount={data.questionsCount} />
            <Latests users={data.lastUsers} orders={data.lastOrders} />
        </div>
    );
}

export default ManagementPanel;
