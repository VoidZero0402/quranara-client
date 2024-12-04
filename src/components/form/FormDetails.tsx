import { FieldError } from "react-hook-form";

import InfoCircle from "../svgs/InfoCircle";

type DetailsProps = { error: FieldError | undefined; caption?: string };

function FormDetails({ error, caption }: DetailsProps) {
    return (
        <>
            {error ? (
                <span className="text-xs text-red-500 dark:text-red-400">{error.message}</span>
            ) : (
                caption && (
                    <div className="flex items-center gap-x-1 text-gray-600 dark:text-gray-400">
                        <InfoCircle className="w-5 shrink-0 hidden sm:block" />
                        <span className="text-sm leading-6">{caption}</span>
                    </div>
                )
            )}
        </>
    );
}

export default FormDetails;
