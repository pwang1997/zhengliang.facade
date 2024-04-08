'use client';

import MoonIcon from "icons/MoonIcon";
import SunIcon from "icons/SunIcon";
import { useEffect, useState } from "react";

export default function DarkModeSwitcher() {
    const [darkMode, setDarkMode] = useState<boolean>(
        typeof window !== 'undefined' ?
            localStorage?.getItem("theme") === "dark" : true
    );

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "dark") {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
    }, [darkMode])
    return (
        <div className="relative w-8 h-8 flex item-center
        hover:bg-white-hover dark:bg-dark dark:text-white dark:hover:bg-dark-hover 
        cursor-pointer rounded-full p-1"
            onClick={() => setDarkMode(!darkMode)}>
            {
                darkMode ?
                    <MoonIcon />
                    :
                    <SunIcon clazzName="text-yellow-400" />
            }
        </div>
    )
}