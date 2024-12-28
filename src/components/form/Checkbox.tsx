import { useController, Control, FieldValues, Path } from "react-hook-form";

import { cn } from "@/libs/cn";
import FormDetails from "./FormDetails";

interface CheckboxProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    label: string;
    caption?: string;
    checkboxClassName?: string;
}

function Checkbox<T extends FieldValues>({ name, control, label, caption, checkboxClassName }: CheckboxProps<T>) {
    const {
        field,
        fieldState: { error },
    } = useController({ name: name as Path<T>, control });

    return (
        <div className="flex flex-col gap-y-2">
            <label htmlFor={name as string} className="flex items-center gap-x-2">
                <input type="checkbox" {...field} checked={!!field.value} className={cn("appearance-none size-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 rounded-md cursor-pointer checked:bg-amber-400 dark:checked:bg-amber-400 transition-colors", checkboxClassName)} />
                <span className="font-pelak-medium text-sm text-gray-800 dark:text-gray-200">{label}</span>
            </label>
            <FormDetails error={error} caption={caption} />
        </div>
    );
}

export default Checkbox;
