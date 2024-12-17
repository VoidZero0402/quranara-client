import { cn } from "@/libs/cn";

import DataTableAfter from "./DataTableAfter";

import { Entities } from "@/types/entities.types";
import { Pagination } from "@/types/response.types";

export type Column = {
    key: string;
    text: string;
};

type DataTableProps = { entity: Entities; columns: Column[]; pagination: Pagination } & React.ComponentProps<"div">;

type DataTableHeadProps = { columns: Column[] };

type DataTableChildrenProps = React.ComponentProps<"div">;

function DataTable({ children, entity, columns, pagination, className }: DataTableProps) {
    return (
        <div className="space-y-4">
            <div className={cn("w-full overflow-x-auto with-custom-scroll with-custom-scroll--horizontal", className)}>
                <table className="table">
                    <DataTableHead columns={columns} />
                    {children}
                </table>
            </div>
            <DataTableAfter count={pagination.count} pagesCount={pagination.pagesCount} current={pagination.page} entity={entity} />
        </div>
    );
}

export function DataTableHead({ columns }: DataTableHeadProps) {
    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.key}>{column.text}</th>
                ))}
            </tr>
        </thead>
    );
}

export function DataTableBody({ children }: DataTableChildrenProps) {
    return <tbody>{children}</tbody>;
}

export default DataTable;
