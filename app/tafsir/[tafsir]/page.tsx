import { Header } from "@components/tafsir/Header";
import { TafsirAyat } from "@components/tafsir/TafsirAyat";

export default async function Tafsir({ params }: { params: { tafsir: number } }) {
    const res = await fetch(`https://equran.id/api/v2/tafsir/${params.tafsir}`);
    const selectedTafsir = await res.json();
    const dataTafsir = selectedTafsir.data;
    const dataAyatTafsir = dataTafsir.tafsir;

    return (
        <div className="flex flex-col gap-5">
            <Header
                noSurah={dataTafsir.nomor}
                namaSurahLatin={dataTafsir.namaLatin}
                namaSurahArab={dataTafsir.nama}
                tempatTurun={dataTafsir.tempatTurun}
                jumlahAyat={dataTafsir.jumlahAyat}
            />
            {dataAyatTafsir.map((data: any) => {
                return <TafsirAyat key={data.ayat} nomorAyat={data.ayat} teksTafsir={data.teks} />;
            })}
            {/* <TafsirAyat nomorAyat={0} teksTafsir={""} /> */}
        </div>
    );
}
