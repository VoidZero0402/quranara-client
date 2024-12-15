import { cn } from "@/libs/cn";

import DataTableFooter from "./DataTableFooter";

type DataTableProps = React.ComponentProps<"div">;

function DataTable({ children, className }: DataTableProps) {
    return (
        <div className="space-y-4">
            <div className={cn("w-full overflow-x-auto with-custom-scroll with-custom-scroll--horizontal", className)}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <div>شناسه</div>
                            </th>
                            <th>نام و نام خانوادگی</th>
                            <th>سن</th>
                            <th>شهر محل زندگی</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>6730e55ad94153e62f852490</td>
                            <td>اشرف الله عظیمی</td>
                            <td>۳۴</td>
                            <td>همدان</td>
                        </tr>
                        <tr>
                            <td>6730e55ad94153e62f852490</td>
                            <td>اشرف الله عظیمی</td>
                            <td>۳۴</td>
                            <td>همدان</td>
                        </tr>
                        <tr>
                            <td>6730e55ad94153e62f852490</td>
                            <td>اشرف الله عظیمی</td>
                            <td>۳۴</td>
                            <td>همدان</td>
                        </tr>
                        <tr>
                            <td>6730e55ad94153e62f852490</td>
                            <td>اشرف الله عظیمی</td>
                            <td>۳۴</td>
                            <td>همدان</td>
                        </tr>
                        <tr>
                            <td>6730e55ad94153e62f852490</td>
                            <td>اشرف الله عظیمی</td>
                            <td>۳۴</td>
                            <td>همدان</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <DataTableFooter pagesCount={10} current={2} entity="users" />
        </div>
    );
}

export default DataTable;
