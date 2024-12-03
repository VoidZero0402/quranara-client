import Breadcrumb, { BreadcrumbItem, BreadcrumbSlice } from "@/components/ui/Breadcrumb";

import { Session } from "@/types/session.types";

type HeaderProps = Pick<Session, "title" | "course">;

function Header({ title, course }: HeaderProps) {
    return (
        <header className="container">
            <Breadcrumb>
                <BreadcrumbItem href="/courses">دوره‌های تخصصی</BreadcrumbItem>
                <BreadcrumbSlice />
                <BreadcrumbItem href={`/courses/${course.slug}`}>{course.title}</BreadcrumbItem>
                <BreadcrumbSlice />
                <BreadcrumbItem href="#">{title}</BreadcrumbItem>
            </Breadcrumb>
        </header>
    );
}

export default Header;
