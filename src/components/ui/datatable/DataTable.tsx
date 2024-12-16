import { cn } from "@/libs/cn";

import DataTableAfter from "./DataTableAfter";

import { Entities } from "@/types/entities.types";
import { Pagination } from "@/types/response.types";

type DataTableProps = { entity: Entities; pagination: Pagination } & React.ComponentProps<"div">;

type DataTableChildrenProps = React.ComponentProps<"div">;

function DataTable({ children, entity, pagination, className }: DataTableProps) {
    return (
        <div className="space-y-4">
            <div className={cn("w-full overflow-x-auto with-custom-scroll with-custom-scroll--horizontal", className)}>
                <table className="table">{children}</table>
            </div>
            <DataTableAfter pagesCount={pagination.pagesCount} current={pagination.page} entity={entity} />
        </div>
    );
}

export function DataTableHead({ children }: DataTableChildrenProps) {
    return <thead>{children}</thead>;
}

export function DataTableBody({ children }: DataTableChildrenProps) {
    return <tbody>{children}</tbody>;
}

export default DataTable;
