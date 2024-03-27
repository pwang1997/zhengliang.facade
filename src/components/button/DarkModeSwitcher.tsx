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
        <div className="relative w-16 h-8 flex item-center
       dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1"
            onClick={() => setDarkMode(!darkMode)}>
            <MoonIcon />
            <div className={`absolute bg-white w-6 h-6 rounded-full shadow-md 
            transform transition-transform duration-300`} style={darkMode ? { left: '2px' } : { right: '2px' }}></div>
            <SunIcon clazzName="ml-auto text-yellow-400" />
        </div>
    )
}