import "@styles/globals.css";
import { Quicksand } from "next/font/google";

import { Navbar } from "@components/navbar";
import ThemeProvider from "@hooks/useTheme";

const quicksand = Quicksand({
    subsets: ["latin"],
    display: "swap",
    style: ["normal"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-quicksand",
});

export const metadata = {
    title: "Haziq - Al-Quran Online Bahasa Indonesia",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <ThemeProvider>
                <body className={`${quicksand.className} bg-slate-300 text-gray-950 dark:bg-slate-800 dark:text-gray-50`}>
                    <Navbar />
                    {children}
                </body>
            </ThemeProvider>
        </html>
    );
}
