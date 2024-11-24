import { useCallback } from "react";
import { useController, FieldValues, Control, Path } from "react-hook-form";

import { cn } from "@/libs/cn";

import FormDetails from "./FormDetails";

interface TextFieldProps<T extends FieldValues> {
    name: keyof T;
    control: Control<T>;
    label: string;
    type?: "text" | "password" | "email" | "tel";
    placeholder?: string;
    caption?: string;
    className?: string;
    inputClassName?: string;
    regex?: RegExp;
    children?: React.ReactNode;
}

function TextField<T extends FieldValues>({ children, name, control, label, type = "text", placeholder, caption, className, inputClassName, regex }: TextFieldProps<T>) {
    const {
        field,
        fieldState: { error },
    } = useController({ name: name as Path<T>, control });

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (regex) {
                e.target.value = e.target.value.replace(new RegExp(`[^${regex.source}]`, "g"), "");
            }
            field.onChange(e);
        },
        [field, regex]
    );

    return (
        <div className={cn("flex flex-col gap-y-2", className)}>
            <label htmlFor={name as string} className="font-pelak-medium text-sm text-gray-800 dark:text-gray-200">
                {label}
            </label>
            <div className="relative text-gray-500">
                <input {...field} onChange={onChange} type={type} placeholder={placeholder} id={name as string} className={cn("py-2.5 px-3 w-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200 border border-gray-100 dark:border-gray-800 focus:border-gray-200 dark:focus:border-gray-700 rounded-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 placeholder:text-sm transition-colors", inputClassName)} />
                <div className="flex-center absolute left-3 top-0 bottom-0 m-auto">{children}</div>
            </div>
            <FormDetails error={error} caption={caption} />
        </div>
    );
}

export default TextField;
