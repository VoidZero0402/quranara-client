import Breadcrumb, { BreadcrumbItem, BreadcrumbSlice } from "@/components/ui/Breadcrumb";

import { Blog } from "@/types/blog.types";

type HeaderProps = Pick<Blog, "title" | "category">;

function Header({ title, category }: HeaderProps) {
    return (
        <header className="container">
            <Breadcrumb>
                <BreadcrumbItem href="/blog">مقالات</BreadcrumbItem>
                <BreadcrumbSlice />
                <BreadcrumbItem href={`/blog?category=${category._id}`}>{category.title}</BreadcrumbItem>
                <BreadcrumbSlice />
                <BreadcrumbItem href="#">{title}</BreadcrumbItem>
            </Breadcrumb>
        </header>
    );
}

export default Header;
