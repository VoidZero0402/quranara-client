"use client";

import { motion } from "framer-motion";

type CTABoxProps = { title: string; description: string; href: string } & React.ComponentProps<"div">;

function CTABox({ children, title, description, href }: CTABoxProps) {
    return (
        <motion.a initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 100, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} viewport={{ once: true }} href={href}>
            <div className="flex flex-col sm:flex-row items-center gap-4 p-6 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-850 dark:hover:bg-gray-800 rounded-2xl transition-all duration-300">
                <div className="shrink-0">
                    <div className="flex-center size-20 bg-amber-500/5 rounded-full">
                        <div className="flex-center size-16 p-2 bg-amber-500/10 text-amber-400 rounded-full">{children}</div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2 text-center sm:text-start">
                    <h3 className="font-pelak-medium text-xl">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-7 line-clamp-2">{description}</p>
                </div>
            </div>
        </motion.a>
    );
}

export default CTABox;
