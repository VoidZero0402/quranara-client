"use client";

import { memo, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Content from "@/components/layout/content/Content";

import Button from "@/components/ui/Button";

import Widgets from "@/components/svgs/Widgets";

type IntroContentProps = { content: string; onInView: (section: string) => void };

function IntroContent({ content, onInView }: IntroContentProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [ref, inView] = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView) onInView("content");
    }, [inView]);

    return (
        <section ref={ref} className="space-y-8 p-6 bg-white dark:bg-gray-850 rounded-2xl" id="content">
            <h3 className="flex items-center gap-x-2 font-pelak-medium text-xl">
                <Widgets className="w-8" />
                توضیحات دوره
            </h3>
            <div className="relative space-y-4 overflow-hidden" style={{ height: isOpen ? "auto" : "600px" }}>
                <Content content={content} />
                {!isOpen && (
                    <div className={`absolute left-0 right-0 bottom-0 bg-gradient-to-t from-white dark:from-gray-850 to-transparent h-40`}>
                        <Button size="lg" variant="filled-secondary" className="absolute left-0 right-0 bottom-0 m-auto w-max" onClick={() => setIsOpen(true)}>
                            ادامه توضیحات دوره
                        </Button>
                    </div>
                )}
                {isOpen && (
                    <Button size="lg" variant="filled-secondary" className="m-auto" onClick={() => setIsOpen(false)}>
                        بستن توضیحات دوره
                    </Button>
                )}
            </div>
        </section>
    );
}

export default memo(IntroContent);
