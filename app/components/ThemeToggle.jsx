"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [light, setLight] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("theme");
        if (saved === "light") {
            document.body.classList.add("light-mode");
            setLight(true);
        }
    }, []);

    function toggle() {
        const isLight = document.body.classList.toggle("light-mode");
        setLight(isLight);
        localStorage.setItem("theme", isLight ? "light" : "dark");
    }

    if (!mounted) return null;

    return (
        <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
            {light ? "☀️" : "🌙"}
        </button>
    );
}