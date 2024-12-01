"use client";

import { useState, useEffect, useCallback } from "react";
import Button from "./Button";
import ArrowUp from "../svgs/ArrowUp";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        const toggle = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggle);

        return () => window.removeEventListener("scroll", toggle);
    }, []);

    return (
        <div className={`fixed right-8 bottom-8 transition-all duration-300 ${isVisible ? "visible opacity-100" : "invisible opacity-0"}`}>
            <button className="flex-center size-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full" onClick={scrollToTop}>
                <ArrowUp className="w-8" />
            </button>
        </div>
    );
}

export default ScrollToTop;
