import { FieldValues, Control } from "react-hook-form";

import Select from "@/components/form/Select";

interface CategorySelectProps<T extends FieldValues> {
    control: Control<T>;
}

function CategorySelect<T extends FieldValues>({ control }: CategorySelectProps<T>) {
    return <Select control={control} name="category"></Select>;
}

export default CategorySelect;
