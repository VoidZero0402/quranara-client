"use client";

import { motion } from "framer-motion";

type CTABoxProps = { title: string; description: string; href: string } & React.ComponentProps<"div">;

function CTABox({ children, title, description, href }: CTABoxProps) {
    return (
        <motion.a initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 100, y: 0 }} transition={{ duration: 0.5, delay: .25 }} viewport={{ once: true }} href={href} className="flex flex-col gap-y-2 p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-850 rounded-2xl">
            <div className="flex-center size-16 bg-amber-500/5 rounded-full">
                <div className="flex-center size-12 p-2 bg-amber-500/10 text-amber-400 rounded-full">{children}</div>
            </div>
            <h3 className="font-pelak-medium text-lg">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-7 line-clamp-4">{description}</p>
        </motion.a>
    );
}

export default CTABox;
