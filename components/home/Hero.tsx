import CardHero from "@components/home/CardHero";

export default function Hero() {
    return (
        <div className="mt-32 w-full flex flex-col px-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-16">
                <h1 className="font-bold text-3xl">Baca Al-Quran dan Tafsir Ayat Dengan Mudah Bersama Haziq</h1>
            </div>
            <div className="flex flex-col gap-3 md:grid md:grid-cols-3">
                <CardHero href="/doa" title="Kumpulan Doa" />
                <CardHero href="/juz-amma" title="Juz Amma" />
                <CardHero href="/bookmark" title="Ayat Favorit" />
            </div>
        </div>
    );
}
