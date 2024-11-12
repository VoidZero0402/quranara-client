import { useController, Control, FieldValues, Path } from "react-hook-form";

import { cn } from "@/libs/cn";

import FormDetails from "./FormDetails";

interface TextAreaProps<T extends FieldValues> {
    name: keyof T;
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
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <div className={cn("flex flex-col gap-y-2", className)}>
            <label htmlFor={name as string} className="text-gray-800 dark:text-gray-300 text-sm font-pelak-medium">
                {label}
            </label>
            <textarea id={name as string} {...field} onInput={onInput} placeholder={placeholder} rows={rows} maxLength={maxLength} className={cn("py-2.5 px-3 w-full resize-none overflow-hidden min-h-[102px] max-h-[2000px] bg-white dark:bg-gray-800 text-sm dark:text-gray-200 border border-gray-100 dark:border-gray-800 focus:border-gray-200 dark:focus:border-gray-700 rounded-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-all", textAreaClassName)} />
            <FormDetails error={error} caption={caption} />
        </div>
    );
}

export default TextArea;
