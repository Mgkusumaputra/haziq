"use client";
import Link from "next/link";

import { useTheme } from "next-themes";

import Sun from "@icons/Sun";
import Moon from "@icons/Moon";
import HaziqLogo from "./icons/HaziqLogo";

export function Navbar() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-20 flex items-center justify-center w-full py-4 px-6 bg-slate-50 dark:bg-slate-700">
                <div className="flex items-center justify-between max-w-5xl px-6 w-full">
                    <Link href="/">
                        <h2 className="flex items-center gap-2 font-bold text-2xl">
                            <HaziqLogo  className="h-8 w-8"/>
                            Haziq
                        </h2>
                    </Link>
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
