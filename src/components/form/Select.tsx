import { createContext, useState, useContext } from "react";
import { useController, Control, FieldValues, Path } from "react-hook-form";

import { cn } from "@/libs/cn";

import FormDetails from "./FormDetails";
import ArrowDown from "../svgs/ArrowDown";
import useToggle from "@/hooks/useToggle";

type SelectContextProps = { handleSelect: (value: string, text: string) => void };

const SelectContext = createContext<SelectContextProps>({ handleSelect: () => {} });

interface SelectProps<T extends FieldValues> {
    name: keyof T;
    control: Control<T>;
    label: string;
    defaultText?: string;
    placeholder?: string;
    caption?: string;
    className?: string;
    selectClassName?: string;
    children: React.ReactNode;
}

interface SelectItemProps {
    value: string;
    text: string;
    className?: string;
    children: React.ReactNode;
}

function Select<T extends FieldValues>({ children, name, control, defaultText = "", label, placeholder = "لطفا یک گزینه را انتخاب کنید", caption, className, selectClassName }: SelectProps<T>) {
    const {
        field,
        fieldState: { error },
    } = useController({ name: name as Path<T>, control });

    const [text, setText] = useState<string>(defaultText);

    const { ref, toggleOpen, isOpen } = useToggle();

    const handleSelect = (value: string, text: string) => {
        field.onChange(value);
        setText(text);
        toggleOpen();
    };

    return (
        <div ref={ref} className={cn("flex flex-col gap-y-2 relative", className)}>
            <span className="text-gray-800 dark:text-gray-300 text-sm font-pelak-medium">{label}</span>
            <div onClick={toggleOpen} className="flex items-center justify-between py-2.5 px-3 w-full bg-white dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-200 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 rounded-lg cursor-pointer transition-colors">
                <span className="">{text || placeholder}</span>
                <ArrowDown className="w-5" />
            </div>
            <div className={cn("flex flex-col gap-y-1 absolute top-full  p-2.5 w-full bg-white dark:bg-gray-800 text-sm rounded-lg border border-gray-100 dark:border-gray-800 invisible opacity-0 mt-4 transition-all duration-300", isOpen && "visible opacity-100 mt-2")}>
                <SelectContext.Provider value={{ handleSelect }}>{children}</SelectContext.Provider>
            </div>
            <FormDetails error={error} caption={caption} />
        </div>
    );
}

Select.Item = function ({ children, className, value, text }: SelectItemProps) {
    const { handleSelect } = useContext(SelectContext);

    return (
        <div onClick={() => handleSelect(value, text)} className={cn("flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors", className)}>
            {children}
        </div>
    );
};

export default Select;
