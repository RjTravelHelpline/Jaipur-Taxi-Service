// components/RajasthanTourPackagesClient.jsx
"use client";
import { useScrollSpy, useSmoothScroll } from "./ToggleShow";

const RTPNav = () => {
    useScrollSpy(".tour", ".tour-packages-nav a", 3);
    useSmoothScroll(".tour-packages-nav a", 130);

    return null;
};

export default RTPNav;
