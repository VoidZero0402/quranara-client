"use client";

import { useState } from "react";

import Content from "@/components/layout/content/Content";

import Button from "@/components/ui/Button";

import Copy from "@/components/svgs/Copy";

function IntroContent() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="space-y-8 p-6 bg-white dark:bg-gray-850 rounded-2xl" id="content">
            <h3 className="flex items-center gap-x-2 font-pelak-medium text-2xl">
                <Copy className="w-8" />
                توضیحات دوره
            </h3>
            <div className="relative overflow-hidden" style={{ height: isOpen ? "auto" : "600px" }}>
                <Content />
                {!isOpen && <div className={`absolute left-0 right-0 bottom-0 bg-gradient-to-t from-white dark:from-gray-850 to-transparent h-40`}>
                    <Button size="lg" variant="filled-secondary" className="absolute left-0 right-0 bottom-0 m-auto w-max" onClick={() => setIsOpen(true)}>ادامه توضیحات دوره</Button>
                </div>}
                {isOpen && <Button size="lg" variant="filled-secondary" className="m-auto" onClick={() => setIsOpen(false)}>بستن توضیحات دوره</Button>}
            </div>
        </section>
    );
}

export default IntroContent;
