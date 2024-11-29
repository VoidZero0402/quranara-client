import Link, { LinkProps } from "next/link";

import LinkCircle from "@/components/svgs/LinkCircle";

type HeadingProps = React.ComponentProps<"li"> & LinkProps;

function Headings() {
    return (
        <div className="space-y-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="space-y-2">
                <span className="flex items-center gap-x-2 font-pelak-medium text-lg text-gray-800 dark:text-gray-200">
                    <LinkCircle className="w-8" />
                    سرفصل‌های مقاله
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">می‌توانید با کلیک روی هر سرفصل به بخش مورد نظر در مقاله بروید</p>
            </div>
            <ul className="space-y-4 font-pelak-medium text-gray-800 dark:text-gray-200">
                <Heading href="">پیش شرط نبودن لحن ترتیل برای حفظ قرآن کریم</Heading>
                <Heading href="">لزوم استفاده صحیح ازحافظه تصویری</Heading>
                <Heading href="">شرایط لازم مکان و زمان حفظ</Heading>
                <Heading href="">تأثیر تمرکز در ارتقاء کیفیت محفوظات</Heading>
                <Heading href="">تاثیر نظم در تقویت حافظه و ماندگاری محفوظات</Heading>
                <Heading href="">استفاده نابجا از تکرار های مکرر جهت ارسال آیات به حافظه</Heading>
            </ul>
        </div>
    );
}

function Heading({ children, href }: HeadingProps) {
    return (
        <li className="flex items-center gap-x-2">
            <span className="ball"></span>
            <Link href={href} className="hover:text-amber-500 dark:hover:text-amber-400 transition-all line-clamp-1">
                {children}
            </Link>
        </li>
    );
}

export default Headings;
