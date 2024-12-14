"use client";

import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

type NavLinkProps = React.ComponentProps<"a"> & LinkProps & { subs?: boolean };

function NavLink({ children, href, subs }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href || (subs && pathname.startsWith(href));

    return (
        <Link href={href} className={`flex items-center gap-x-2 py-3 px-4 font-pelak-medium rounded-xl transition-all duration-300 ${isActive ? "blue-light dark:amber-light" : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"}`}>
            {children}
        </Link>
    );
}

export default NavLink;
