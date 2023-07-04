import "@styles/globals.css";
import { Quicksand } from "next/font/google";
import Script from "next/script";

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
    description:
        "Nikmati pengalaman Membaca Al-Quran yang praktis dan interaktif dengan Haziq. Baca Al-Quran dan tafsir ayat dalam bahasa Indonesia dengan mudah",
    keywords: ["Haziq", "Al-Quran Online", "Baca Al-Quran", "Tafsir Ayat Digital", "Al-Quran Bahasa Indonesia"],
    openGraph: {
        title: "Haziq - Al-Quran Online Bahasa Indonesia",
        description:
            "Nikmati pengalaman Membaca Al-Quran yang praktis dan interaktif dengan Haziq. Baca Al-Quran dan tafsir ayat dalam bahasa Indonesia dengan mudah",
        url: "https://haziq.mgkusumaputra.me",
        siteName: "Next.js",
        images: ["https://res.cloudinary.com/dspkhqhkv/image/upload/v1688470466/Haziq/OG_Banner.png"],
        type: "website",
    },
    twitter: {
        card: "https://res.cloudinary.com/dspkhqhkv/image/upload/v1688470466/Haziq/OG_Banner.png",
        title: "Haziq - Al-Quran Online Bahasa Indonesia",
        description:
            "Nikmati pengalaman Membaca Al-Quran yang praktis dan interaktif dengan Haziq. Baca Al-Quran dan tafsir ayat dalam bahasa Indonesia dengan mudah",
        images: ["https://res.cloudinary.com/dspkhqhkv/image/upload/v1688470466/Haziq/OG_Banner.png"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Script
                async
                src="https://analytics.mgkusumaputra.me/script.js"
                data-website-id={process.env.Website_ID}
            />
            <ThemeProvider>
                <body
                    className={`${quicksand.className} bg-slate-300 text-gray-950 dark:bg-slate-800 dark:text-gray-50`}
                >
                    <Navbar />
                    {children}
                </body>
            </ThemeProvider>
        </html>
    );
}
