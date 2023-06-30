import CardHero from "@components/home/CardHero";

export default function Hero() {

    return (
        <div className="mt-32 w-full flex flex-col px-6 max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-16">
                <h1 className="font-bold text-3xl">Hello World</h1>
            </div>
            <div className="flex flex-col gap-3 md:grid md:grid-cols-3">
                <CardHero href="/" title="Kumpulan Doa" />
                <CardHero href="/" title="Juz Amma" />
                <CardHero href="/" title="Ayat Favorit" />
            </div>
        </div>
    );
}
