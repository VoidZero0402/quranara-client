import { getAllQuestions } from "@/api/queries/questions";

import { ENTITIES } from "@/constants/entities";

import { FILTER__STATUSES } from "@/constants/questions";

import { getDatatableItemsPerPage } from "@/libs/server/cookies";

import QuestionsHeader from "@/components/layout/management-panel/questions/QuestionsHeader";

import { Status } from "@/types/question.types";
import QuestionsDataTable from "@/components/layout/management-panel/questions/QuestionsDataTable";

async function Questions({ searchParams }: { searchParams: Promise<{ page: string; status: Status }> }) {
    const { page = 1, status: statusParam } = await searchParams;
    const limit = await getDatatableItemsPerPage(ENTITIES.QUESTIONS);

    const status = (FILTER__STATUSES.includes(statusParam) && statusParam) as any;

    const { data } = await getAllQuestions({ page: +page, limit, ...(status && { status }) });

    return (
        <div className="space-y-4">
            <QuestionsHeader />
            <QuestionsDataTable questions={data.questions} pagination={data.pagination} />
        </div>
    );
}

export default Questions;
