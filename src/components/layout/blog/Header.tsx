import Breadcrumb, { BreadcrumbItem, BreadcrumbSlice } from "@/components/ui/Breadcrumb";

function Header() {
    return (
        <header className="container">
            <Breadcrumb>
                <BreadcrumbItem href="/blog">مقالات</BreadcrumbItem>
                <BreadcrumbSlice />
                <BreadcrumbItem href="/blog">دسته آموزش تجوید</BreadcrumbItem>
                <BreadcrumbSlice />
                <BreadcrumbItem href="#">اهمیت تفسیر در فهم قرآن</BreadcrumbItem>
            </Breadcrumb>
        </header>
    );
}

export default Header;
