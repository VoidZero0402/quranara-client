import Link, { LinkProps } from "next/link";

import { cn } from "@/libs/cn";

import ArrowDown from "@/components/svgs/ArrowDown";

import { Menus } from "@/types/ui.types";

type NavigationProps = { menus: Menus };

type NavigationItemProps = { text: string } & React.ComponentProps<"li"> & LinkProps;

type NavigationDropDownProps = React.ComponentProps<"div">;

type NavigationLinkProps = { title: string; caption: string } & LinkProps;

async function Navigation({ menus }: NavigationProps) {
    return (
        <ul className="hidden lg:flex gap-x-4">
            <NavigationItem text="صفحه اصلی" href="/" />
            <NavigationItem text="دوره‌های تخصصی" href="/courses">
                <NavigationDropDown>
                    <div className="flex flex-col gap-y-1">
                        {menus.courses.map((course) => (
                            <NavigationLink key={course._id} href={`/courses/${course.slug}`} title={course.title} caption={course.description} />
                        ))}
                        <NavigationLink href="/courses" title="همه دوره‌های تخصصی" caption="مشاهده همه دوره‌های تخصصی قرآن‌آرا" />
                    </div>
                </NavigationDropDown>
            </NavigationItem>
            <NavigationItem text="مقالات" href="/blog">
                <NavigationDropDown>
                    <div className="flex flex-col gap-y-1">
                        {menus.categories.blog.map((blog) => (
                            <NavigationLink key={blog._id} href={`/blog?category=${blog._id}`} title={blog.title} caption={blog.caption} />
                        ))}
                        <NavigationLink href="/blog" title="همه دسته‌بندی‌ها" caption="مشاهده همه دسته‌بندی‌های مقالات" />
                    </div>
                </NavigationDropDown>
            </NavigationItem>
            <NavigationItem text="ویدیوهای آموزشی" href="/tv">
                <NavigationDropDown>
                    <div className="flex flex-col gap-y-1">
                        {menus.categories.tv.map((tv) => (
                            <NavigationLink key={tv._id} href={`/tv?category=${tv._id}`} title={tv.title} caption={tv.caption} />
                        ))}
                        <NavigationLink href="/tv" title="همه دسته‌بندی‌ها" caption="مشاهده همه دسته‌بندی‌های آموزشی" />
                    </div>
                </NavigationDropDown>
            </NavigationItem>
            <NavigationItem text="درباره ما" href="/about-us" />
        </ul>
    );
}

function NavigationItem({ children, text, href }: NavigationItemProps) {
    return (
        <li className="relative group text-gray-800 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 transition-all">
            <Link href={href} className="flex items-center gap-x-0.5 w-full font-pelak-medium">
                {text} {children && <ArrowDown className="w-5" />}
            </Link>
            {children}
        </li>
    );
}

function NavigationDropDown({ children, className }: NavigationDropDownProps) {
    return (
        <div className={cn("absolute right-0 top-full pt-6 w-72 invisible opacity-0 mt-2 group-hover:visible group-hover:opacity-100 group-hover:mt-0 transition-all delay-75", className)}>
            <div className="w-full p-4 bg-white dark:bg-gray-850 border-y-2 border-amber-400 rounded-2xl">{children}</div>
        </div>
    );
}

function NavigationLink({ href, title, caption }: NavigationLinkProps) {
    return (
        <Link href={href} className="p-2.5 space-y-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            <div className="flex items-center gap-x-2">
                <div className="shrink-0 size-2 rounded-sm bg-amber-400"></div>
                <span className="font-pelak-medium text-gray-800 dark:text-gray-200 line-clamp-1">{title}</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">{caption}</p>
        </Link>
    );
}

export default Navigation;
