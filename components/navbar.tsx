"use client";

import { useTheme } from "next-themes";

import Sun from "@icons/Sun";
import Moon from "@icons/Moon";

export function Navbar() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-20 flex items-center justify-center w-full py-4 px-6 bg-slate-50 dark:bg-slate-700">
                <div className="flex items-center justify-between max-w-3xl w-full">
                    <strong className="font-semibold text-2xl">Haziq</strong>
                    <button
                        className="p-1 border-2 border-slate-200 rounded-md drop-shadow-lg dark:border-slate-500"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        {theme === "dark" ? <Sun /> : <Moon />}
                    </button>
                </div>
            </nav>
        </>
    );
}
