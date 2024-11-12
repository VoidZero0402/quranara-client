import { ComponentProps } from "react";

import { cn } from "@/libs/cn";

type DropdownProps = ComponentProps<"div">;

function Dropdown({ children, className }: DropdownProps) {
    return <div className={cn("w-full p-2.5 space-y-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-800", className)}>{children}</div>;
}

Dropdown.Slice = function () {
    return <span className="block h-[1px] bg-gray-50 dark:bg-gray-700"></span>;
};

Dropdown.Header = function ({ children, className }: DropdownProps) {
    return <div className={className}>{children}</div>;
};

Dropdown.Body = function ({ children, className }: DropdownProps) {
    return <ul className={cn("flex flex-col gap-y-1", className)}>{children}</ul>;
};

Dropdown.Item = function ({ children, className }: DropdownProps) {
    return <li className={cn("flex items-center gap-x-2 py-2.5 px-3 text-gray-800 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors", className)}>{children}</li>;
};

Dropdown.Footer = function ({ children, className }: DropdownProps) {
    return <div className={className}>{children}</div>;
};

export default Dropdown;
