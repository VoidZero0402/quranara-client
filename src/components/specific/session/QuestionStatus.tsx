import { STATUS } from "@/constants/questions";

import { Question } from "@/types/question.types";

type QuestionStatusProps = Pick<Question, "status">;

function QuestionStatus({ status }: QuestionStatusProps) {
    return <>{status === STATUS.ACTIVE ? <span className="py-2.5 px-4 font-pelak-medium text-sm amber-light rounded-lg">در انتظار پاسخ</span> : status === STATUS.SLEEP ? <span className="py-2.5 px-4 font-pelak-medium text-sm teal-light rounded-lg">پاسخ داده شده</span> : <span className="py-2.5 px-4 font-pelak-medium text-sm red-light rounded-lg">بسته شده</span>}</>;
}

export default QuestionStatus;
