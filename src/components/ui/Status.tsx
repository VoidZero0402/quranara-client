import { STATUS } from "@/constants/questions";

import { Question } from "@/types/question.types";

type StatusProps = Pick<Question, "status">;

function Status({ status }: StatusProps) {
    return <>{status === STATUS.ACTIVE ? <span className="shrink-0 w-max py-2.5 px-4 font-pelak-medium text-sm amber-light rounded-lg">در انتظار پاسخ</span> : status === STATUS.SLEEP ? <span className="shrink-0 w-max py-2.5 px-4 font-pelak-medium text-sm teal-light rounded-lg">پاسخ داده شده</span> : <span className="shrink-0 w-max py-2.5 px-4 font-pelak-medium text-sm red-light rounded-lg">بسته شده</span>}</>;
}

export default Status;
