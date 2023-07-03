import "@styles/globals.css";
import { Quicksand } from "next/font/google";

import { Navbar } from "@components/Navbar";
import ThemeProvider from "@hooks/useTheme";
import Head from "next/head";

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Head>
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://haziq.mgkusumaputra.me" />
                <meta property="og:title" content="Haziq — Al-Quran Online Bahasa Indonesia" />
                <meta
                    property="og:description"
                    content="Nikmati pengalaman Membaca Al-Quran yang praktis dan interaktif dengan Haziq. Baca Al-Quran dan tafsir ayat dalam bahasa Indonesia dengan mudah"
                />
                <meta property="og:image" content="/images/OG_Banner.png" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://haziq.mgkusumaputra.me" />
                <meta property="twitter:title" content="Haziq — Al-Quran Online Bahasa Indonesia" />
                <meta
                    property="twitter:description"
                    content="Nikmati pengalaman Membaca Al-Quran yang praktis dan interaktif dengan Haziq. Baca Al-Quran dan tafsir ayat dalam bahasa Indonesia dengan mudah"
                />
                <meta property="twitter:image" content="/images/OG_Banner.png" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
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
