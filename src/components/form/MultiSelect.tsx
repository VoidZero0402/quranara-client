import { useController, Control, FieldValues, Path } from "react-hook-form";

import { cn } from "@/libs/cn";

import useToggle from "@/hooks/useToggle";

import FormDetails from "./FormDetails";

import ArrowDown from "../svgs/ArrowDown";
import CheckCircle from "../svgs/CheckCircle";
import XMark from "../svgs/XMark";

type MultiSelectProps<T extends FieldValues> = {
    name: string;
    control: Control<T>;
    label: string;
    options: { value: string; text: string }[];
    selectedText: string;
    placeholder?: string;
    caption?: string;
    className?: string;
    selectClassName?: string;
};

interface MultiSelectItemProps {
    value: string;
    selected: boolean;
    handleSelect: (value: string) => void;
    children: React.ReactNode;
}

function MultiSelect<T extends FieldValues>({ name, control, label, options, selectedText, placeholder, caption, className, selectClassName }: MultiSelectProps<T>) {
    const {
        field,
        fieldState: { error },
    } = useController({ name: name as Path<T>, control });

    const { ref, toggleOpen, isOpen } = useToggle();

    const handleSelect = (value: string) => {
        if (field.value.includes(value)) {
            field.onChange(field.value.filter((item: string) => item !== value));
        } else {
            field.onChange([...field.value, value]);
        }
    };

    const clear = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        field.onChange([]);
    };

    return (
        <div ref={ref} className={cn("flex flex-col gap-y-2 relative h-max font-pelak-medium", className)}>
            {label && <span className="text-sm text-gray-800 dark:text-gray-200">{label}</span>}
            <div onClick={toggleOpen} className="flex items-center justify-between p-4 w-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 rounded-xl cursor-pointer transition-colors">
                <span className="font-pelak text-gray-600 dark:text-gray-200">{!!field.value.length ? selectedText.replace("$", field.value.length) : placeholder}</span>
                <div className="flex items-center gap-x-2">
                    {!!field.value.length && (
                        <button onClick={clear}>
                            <XMark className="w-5" />
                        </button>
                    )}
                    <ArrowDown className="w-5" />
                </div>
            </div>
            <div className={cn("absolute top-full flex flex-col gap-y-1 py-2 px-1 w-full max-h-64 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-xl overflow-auto with-custom-scroll invisible opacity-0 mt-4 transition-all duration-300 z-20", selectClassName, isOpen && "visible opacity-100 mt-2")}>
                {options.map((option) => (
                    <MultiSelectItem key={option.value} value={option.value} selected={field.value.includes(option.value)} handleSelect={handleSelect}>
                        {option.text}
                    </MultiSelectItem>
                ))}
            </div>
            <FormDetails error={error} caption={caption} />
        </div>
    );
}

function MultiSelectItem({ children, value, selected, handleSelect }: MultiSelectItemProps) {
    return (
        <div onClick={() => handleSelect(value)} className={cn("flex items-center gap-x-2 relative p-4 rounded-xl cursor-pointer transition-colors duration-300", selected ? "teal-light" : "text-gray-700 dark:text-gray-300 hover:gray-light dark:hover:gray-light")}>
            {children}
            {selected && (
                <div className="absolute left-4 top-0 bottom-0 m-auto size-6 text-teal-500">
                    <CheckCircle />
                </div>
            )}
        </div>
    );
}

export default MultiSelect;
