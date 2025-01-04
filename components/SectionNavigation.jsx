'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";

const SectionNavigation = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition < 90) {
                setActiveSection(null);
                return;
            }

            sections.forEach(({ id }) => {
                const sectionElement = document.getElementById(id);

                if (sectionElement) {
                    const offsetTop = sectionElement.offsetTop;
                    const offsetBottom = offsetTop + sectionElement.offsetHeight;

                    if (scrollPosition >= offsetTop - 400 && scrollPosition < offsetBottom - 100) {
                        if (activeSection !== id) {
                            setActiveSection(id);
                        }
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {sections.map(({ id, label, icon }) => (
                <Link href={`#${id}`} key={id} className="px-2">
                    <p
                        className={`text-black nav-link rounded-3 px-0 py-3 text-capitalize mb-0 d-flex align-items-center gap-2 ${activeSection === id ? "active" : ""
                            }`}
                    >
                        <span className='d-flex align-items-center me-1 fw-bold text-black'>
                            {icon}
                        </span>
                        <span>{label}</span>
                    </p>
                </Link>
            ))}
        </>
    );
};

export default SectionNavigation;
