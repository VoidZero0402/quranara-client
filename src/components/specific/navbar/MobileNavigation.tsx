"use client";

import { useState, useCallback, useRef, useMemo, startTransition } from "react";
import Link, { LinkProps } from "next/link";

import { cn } from "@/libs/cn";

import { SvgComponentProps } from "@/types/component.types";
import { Menus } from "@/types/ui.types";

import ArrowDown from "@/components/svgs/ArrowDown";
import Document from "@/components/svgs/Document";
import HomeAngle from "@/components/svgs/HomeAngle";
import Layers from "@/components/svgs/Layers";
import PlayCircle from "@/components/svgs/PlayCircle";
import QuestionCircle from "@/components/svgs/QuestionCircle";

type MobileNavigationProps = { menus: Menus };

type MobileNavigationItemProps = { text: string; Icon: React.FC<SvgComponentProps> } & LinkProps;

type CollapsableMobileNavigationItemProps = { text: string; Icon: React.FC<SvgComponentProps>; isActive: boolean; onActive: () => void } & React.ComponentProps<"li">;

type NavigationLinkProps = { title: string; caption: string } & LinkProps;

function MobileNavigation({ menus }: MobileNavigationProps) {
    const [active, setActive] = useState<string>("");

    const onActive = useCallback(
        (key: string) => () => {
            startTransition(() => {
                setActive((active) => (active === key ? "" : key));
            });
        },
        []
    );

    return (
        <ul className="flex flex-col gap-y-1">
            <MobileNavigationItem text="صفحه اصلی" Icon={HomeAngle} href="/" />
            <CollapsableMobileNavigationItem text="دوره‌های تخصصی" Icon={Layers} isActive={active === "courses"} onActive={onActive("courses")}>
                <div className="w-full p-2">
                    {useMemo(() => menus.courses.map((course) => <NavigationLink key={course._id} href={`/courses/${course.slug}`} title={course.title} caption="مباحث و موضوعات مربوط به علوم قرآنی" />), [])}
                    <NavigationLink href="/courses" title="همه دوره‌ها" caption="مشاهده همه دوره‌های تخصصی قرآن آرا" />
                </div>
            </CollapsableMobileNavigationItem>
            <CollapsableMobileNavigationItem text="مقالات" Icon={Document} isActive={active === "blog"} onActive={onActive("blog")}>
                <div className="w-full p-2">
                    {useMemo(() => menus.categories.blog.map((blog) => <NavigationLink key={blog._id} href={`#`} title={blog.title} caption={blog.caption} />), [])}
                    <NavigationLink href="/blog" title="همه مقالات" caption="مشاهده همه مقالات قرآن آرا" />
                </div>
            </CollapsableMobileNavigationItem>
            <CollapsableMobileNavigationItem text="آموزش‌های رایگان" Icon={PlayCircle} isActive={active === "tv"} onActive={onActive("tv")}>
                <div className="w-full p-2">
                    {useMemo(() => menus.categories.tv.map((tv) => <NavigationLink key={tv._id} href={`#`} title={tv.title} caption={tv.caption} />), [])}
                    <NavigationLink href="/tv" title="همه آموزش‌های رایگان" caption="مشاهده همه آموزش‌های رایگان قرآن آرا" />
                </div>
            </CollapsableMobileNavigationItem>
            <MobileNavigationItem text="درباره ما" Icon={QuestionCircle} href="/about-us" />
        </ul>
    );
}

function MobileNavigationItem({ text, Icon, href }: MobileNavigationItemProps) {
    return (
        <li>
            <Link href={href} className="flex items-center gap-x-2 py-3 px-4 font-pelak-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg select-none transition-colors">
                <Icon />
                {text}
            </Link>
        </li>
    );
}

function CollapsableMobileNavigationItem({ children, text, Icon, isActive, onActive }: CollapsableMobileNavigationItemProps) {
    const collapseRef = useRef<HTMLDivElement>(null);

    return (
        <li>
            <div className={cn("flex items-center justify-between w-full py-3 px-4 font-pelak-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 select-none transition-colors", isActive && "bg-gray-50 dark:bg-gray-700")} onClick={onActive}>
                <div className="flex items-center gap-x-2">
                    <Icon />
                    {text}
                </div>
                <ArrowDown />
            </div>
            <div ref={collapseRef} className={cn("opacity-0 overflow-hidden transition-all duration-300", isActive && "opacity-100")} style={{ height: isActive ? `${collapseRef.current!.scrollHeight}px` : "0" }}>
                {children}
            </div>
        </li>
    );
}

function NavigationLink({ href, title, caption }: NavigationLinkProps) {
    return (
        <Link href={href} className="block p-2 space-y-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
            <div className="flex items-center gap-x-2">
                <div className="size-2 rounded-sm bg-amber-400"></div>
                <span className="block font-pelak-medium text-gray-800 dark:text-gray-200">{title}</span>
            </div>
            <p className="text-xs line-clamp-1 text-gray-600 dark:text-gray-400">{caption}</p>
        </Link>
    );
}

export default MobileNavigation;
