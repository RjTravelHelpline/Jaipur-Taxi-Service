"use client";
import { useState, useEffect } from "react";
import { PiArrowUp } from "react-icons/pi";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const toggleVisibility = () => {
            if (typeof window !== "undefined") {
                if (window.pageYOffset > 300) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    // Scroll back to the top of the page
    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            {isVisible && (
                <button
                    className="back-to-top p-lg-3 p-sm-2 d-flex rounded-5"
                    onClick={scrollToTop}
                >
                    <PiArrowUp />
                </button>
            )}
        </>
    );
};

export default BackToTop;