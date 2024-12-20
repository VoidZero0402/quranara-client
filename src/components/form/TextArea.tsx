import { useController, Control, FieldValues, Path } from "react-hook-form";

import { cn } from "@/libs/cn";

import FormDetails from "./FormDetails";

interface TextAreaProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label: string;
    placeholder?: string;
    caption?: string;
    rows?: number;
    maxLength?: number;
    className?: string;
    textAreaClassName?: string;
}

function TextArea<T extends FieldValues>({ name, control, label, placeholder, caption, rows, maxLength, className, textAreaClassName }: TextAreaProps<T>) {
    const {
        field,
        fieldState: { error },
    } = useController({ name: name as Path<T>, control });

    const onInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight + 1}px`;
    };

    return (
        <div className={cn("flex flex-col gap-y-2", className)}>
            <label htmlFor={name as string} className="font-pelak-medium text-sm text-gray-800 dark:text-gray-200">
                {label}
            </label>
            <textarea id={name as string} {...field} onInput={onInput} placeholder={placeholder} rows={rows} maxLength={maxLength} className={cn("p-4 w-full min-h-40 max-h-[500px] bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200 border border-gray-100 dark:border-gray-800 focus:border-gray-200 dark:focus:border-gray-700 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none overflow-auto with-custom-scroll  transition-all", textAreaClassName)} />
            <FormDetails error={error} caption={caption} />
        </div>
    );
}

export default TextArea;
