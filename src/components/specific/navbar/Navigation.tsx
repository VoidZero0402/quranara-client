import Link, { LinkProps } from "next/link";

import ArrowDown from "@/components/svgs/ArrowDown";

type NavigationItemProps = { text: string } & React.ComponentProps<"li"> & LinkProps;

function Navigation() {
    return (
        <ul className="flex gap-x-4">
            <NavigationItem text="صفحه اصلی" href="#" />
            <NavigationItem text="دوره های تخصصی" href="#" />
            <NavigationItem text="مقالات" href="#" />
            <NavigationItem text="آموزش های رایگان" href="#" />
            <NavigationItem text="درباره ما" href="#" />
        </ul>
    );
}

function NavigationItem({ children, text, href }: NavigationItemProps) {
    return (
        <li>
            <Link href={href} className="flex items-center gap-x-0.5">
                {text} {children && <ArrowDown />}
            </Link>
        </li>
    );
}

export default Navigation;
