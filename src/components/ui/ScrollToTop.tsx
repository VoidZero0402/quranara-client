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
            <Button size="circle" rounded="full" variant="neutral-base" className="size-16" onClick={scrollToTop}>
                <ArrowUp className="w-8" />
            </Button>
        </div>
    );
}

export default ScrollToTop;
