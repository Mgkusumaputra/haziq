import Header from "@components/surah/Header";

export default async function Surah() {
    return (
        <div className="mx-6">
            <Header
                noSurah={0}
                namaSurahLatin={"Al-Fatihah"}
                namaSurahArab={"الفاتحة"}
                tempatTurun={"Mekah"}
                jumlahAyat={1}
            />
        </div>
    );
}
