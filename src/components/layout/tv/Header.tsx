import Breadcrumb, { BreadcrumbItem, BreadcrumbSlice } from "@/components/ui/Breadcrumb";

import { Tv } from "@/types/tv.types";

type HeaderProps = Pick<Tv, "title" | "category">;

function Header({ title, category }: HeaderProps) {
    return (
        <header className="container">
            <Breadcrumb>
                <BreadcrumbItem href="/tv">آموزش‌ها</BreadcrumbItem>
                <BreadcrumbSlice />
                <BreadcrumbItem href={`/tv?category=${category._id}`}>{category.title}</BreadcrumbItem>
                <BreadcrumbSlice />
                <BreadcrumbItem href="#">{title}</BreadcrumbItem>
            </Breadcrumb>
        </header>
    );
}

export default Header;
