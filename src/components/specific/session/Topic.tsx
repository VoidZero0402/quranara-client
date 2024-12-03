"use client";

import { useRef } from "react";
import { useToggle } from "usehooks-ts";

import Session from "./Session";

import ArrowDown from "@/components/svgs/ArrowDown";

function Topic() {
    const [isOpen, toggleOpen] = useToggle();
    const sessionsRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="flex flex-col gap-y-2">
            <div onClick={toggleOpen} className={`flex items-center justify-between p-4 min-h-18 rounded-xl cursor-pointer transition-all duration-300 ${isOpen ? "bg-blue-500 text-white dark:bg-blue-500" : "text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"}`}>
                <span className="font-pelak-medium">مقدمه‌ای بر علوم قرآنی</span>
                <ArrowDown />
            </div>
            <div ref={sessionsRef} className={`space-y-2 overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} style={{ height: isOpen ? `${sessionsRef.current?.scrollHeight}px` : "0" }}>
                <Session />
                <Session />
                <Session />
            </div>
        </div>
    );
}

export default Topic;
