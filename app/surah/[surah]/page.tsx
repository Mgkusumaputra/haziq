import Header from "@components/surah/Header";
import Ayat from "@components/surah/Ayat";
import Link from "next/link";

export default async function Surah({ params }: { params: { surah: number } }) {
    const res = await fetch(`https://equran.id/api/v2/surat/${params.surah}`);
    const selectedSurah = await res.json();
    const dataSurah = selectedSurah.data;
    const dataAyat = dataSurah.ayat;

    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-3">
                <Header
                    noSurah={dataSurah.nomor}
                    namaSurahLatin={dataSurah.namaLatin}
                    namaSurahArab={dataSurah.nama}
                    tempatTurun={dataSurah.tempatTurun}
                    jumlahAyat={dataSurah.jumlahAyat}
                    audio={dataSurah.audioFull["05"]}
                />
                <div className="w-full font-arabic mx-auto px-6 max-w-5xl">
                    <div className="flex justify-center py-8 px-7 rounded-md border border-sky-500 bg-slate-50 dark:bg-slate-700">
                        <p className="text-4xl">بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 my-8">
                {dataAyat.map((data: any) => {
                    return (
                        <Ayat
                            key={data.nomorAyat}
                            id={data.nomorAyat}
                            namaSurah={dataSurah.namaLatin}
                            noSurah={dataSurah.nomor}
                            nomorAyat={data.nomorAyat}
                            ayatArab={data.teksArab}
                            ayatLatin={data.teksLatin}
                            arti={data.teksIndonesia}
                            audio={data.audio["05"]}
                        />
                    );
                })}
            </div>
            <div className="w-full mb-5 mx-auto max-w-5xl px-6">
                <div className="flex flex-row justify-between w-full py-6 px-5 gap-2 rounded-md bg-slate-50 dark:bg-slate-700">
                    <Link
                        href={`/surah/${selectedSurah.data.suratSebelumnya.nomor}`}
                        className="flex items-center justify-center gap-2 px-3 py-1 rounded-md bg-slate-200 dark:bg-slate-900"
                    >
                        {`< ${selectedSurah.data.suratSebelumnya.namaLatin}`}
                    </Link>
                    <Link
                        href={`/surah/${selectedSurah.data.suratSelanjutnya.nomor}`}
                        className="flex items-center justify-center gap-2 px-3 py-1 rounded-md bg-slate-200 dark:bg-slate-900"
                    >
                        {`${selectedSurah.data.suratSelanjutnya.namaLatin} >`}
                    </Link>
                </div>
            </div>
        </div>
    );
}
