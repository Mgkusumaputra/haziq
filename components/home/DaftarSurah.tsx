import CardSurah from "@components/home/CardSurah";

export default async function DaftarSurah() {
    const res = await fetch("https://equran.id/api/v2/surat");
    const getSurah = await res.json();

    return (
        <div className="w-full flex flex-col items-center px-6 max-w-5xl gap-3 mt-16 mb-7 mx-auto">
            <h1 className="text-2xl font-semibold underline">Daftar Surah</h1>
            <input
                type="search"
                placeholder="🔍 Cari Surah"
                className="border-2 border-sky-500 bg-slate-50 dark:bg-transparent w-full px-3 py-2 rounded-md"
            />
            <div className="flex flex-col gap-3 w-full md:grid md:grid-cols-3">
                {getSurah.data.map((data: any) => {
                    return (
                        <CardSurah
                            key={data.nomor}
                            href={`/surah/${data.nomor}`}
                            noSurah={data.nomor}
                            namaSurah={data.namaLatin}
                            artiSurah={data.arti}
                            tempatTurun={data.tempatTurun}
                            jumlahAyat={data.jumlahAyat}
                        />
                    );
                })}
            </div>
        </div>
    );
}
