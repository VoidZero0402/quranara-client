import Link, { LinkProps } from "next/link";

import { getMenus } from "@/api/queries/ui";

import { cn } from "@/libs/cn";

import ArrowDown from "@/components/svgs/ArrowDown";

type NavigationItemProps = { text: string } & React.ComponentProps<"li"> & LinkProps;

type NavigationDropDownProps = React.ComponentProps<"div">;

type NavigationLinkProps = { title: string; caption: string } & LinkProps;

async function Navigation() {
    const { data } = await getMenus();

    return (
        <ul className="flex gap-x-4">
            <NavigationItem text="صفحه اصلی" href="#" />
            <NavigationItem text="دوره‌های تخصصی" href="#">
                <NavigationDropDown>
                    <div className="flex flex-col gap-y-1">
                        {data.courses.map((course) => (
                            <NavigationLink key={course._id} href={`/courses/${course.slug}`} title={course.title} caption="مباحث و موضوعات مربوط به علوم قرآنی" />
                        ))}
                    </div>
                </NavigationDropDown>
            </NavigationItem>
            <NavigationItem text="مقالات" href="#">
                <NavigationDropDown>
                    <div className="flex flex-col gap-y-1">
                        {data.categories.blog.map((blog) => (
                            <NavigationLink key={blog._id} href={`#`} title={blog.title} caption={blog.caption} />
                        ))}
                    </div>
                </NavigationDropDown>
            </NavigationItem>
            <NavigationItem text="آموزش‌های رایگان" href="#">
                <NavigationDropDown>
                    <div className="flex flex-col gap-y-1">
                        {data.categories.tv.map((tv) => (
                            <NavigationLink key={tv._id} href={`#`} title={tv.title} caption={tv.caption} />
                        ))}
                    </div>
                </NavigationDropDown>
            </NavigationItem>
            <NavigationItem text="درباره ما" href="#" />
        </ul>
    );
}

function NavigationItem({ children, text, href }: NavigationItemProps) {
    return (
        <li className="relative group text-gray-800 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-400 transition-all">
            <Link href={href} className="flex items-center gap-x-0.5 w-full">
                {text} {children && <ArrowDown />}
            </Link>
            {children}
        </li>
    );
}

function NavigationDropDown({ children, className }: NavigationDropDownProps) {
    return (
        <div className={cn("absolute right-0 top-full pt-6 w-64 invisible opacity-0 mt-2 group-hover:visible group-hover:opacity-100 group-hover:mt-0 transition-all delay-75", className)}>
            <div className="w-full p-4 bg-white dark:bg-gray-850 border-y-2 border-amber-400 rounded-xl">{children}</div>
        </div>
    );
}

function NavigationLink({ href, title, caption }: NavigationLinkProps) {
    return (
        <Link href={href} className="p-2 space-y-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            <div className="flex items-center gap-x-2">
                <div className="size-2 rounded-sm bg-amber-400"></div>
                <span className="block font-pelak-medium text-gray-800 dark:text-gray-200">{title}</span>
            </div>
            <p className="text-xs line-clamp-1 text-gray-600 dark:text-gray-400">{caption}</p>
        </Link>
    );
}

export default Navigation;
