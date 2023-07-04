import Hero from "@components/home/Hero";
import DaftarSurah from "@components/home/DaftarSurah";
import Footer from "@components/Footer";

export default function Home() {
    return (
        <>
            <div className="flex flex-col h-screen">
                <Hero />
                <DaftarSurah />
                <Footer />
            </div>
        </>
    );
}
