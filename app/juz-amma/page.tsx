"use client";

import { useEffect, useState } from "react";
import CardSurah from "@components/home/CardSurah";

export default function JuzAmma() {
    const [searchQuery, setSearchQuery] = useState("");
    const [surahData, setSurahData] = useState([]);

    useEffect(() => {
        const fetchSurahData = async () => {
            const res = await fetch("https://equran.id/api/v2/surat");
            const getAllSurah = await res.json();
            const filterJuzAmma = getAllSurah.data.slice(77, 114);
            setSurahData(filterJuzAmma);
        };

        fetchSurahData();
    }, []);

    const filteredSurahs = surahData.filter((data: any) => {
        return data.namaLatin.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="w-full flex flex-col items-center px-6 max-w-5xl gap-3 mt-28 mb-7 mx-auto">
            <h1 className="text-2xl font-semibold underline">Juz Amma</h1>
            <input
                type="search"
                placeholder="🔍 Cari Surah"
                className="border-2 border-sky-500 bg-slate-50 dark:bg-transparent w-full px-3 py-2 mt-5 rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex flex-col gap-3 w-full md:grid md:grid-cols-3">
                {filteredSurahs.map((data: any) => {
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

// import CardSurah from "../../components/home/CardSurah";

// export default async function JuzAmma() {
//     const res = await fetch("https://equran.id/api/v2/surat");
//     const getAllSurah = await res.json();
//     const filterJuzAmma = getAllSurah.data.slice(77, 114);

//     return (
//         <div className="w-full flex flex-col items-center px-6 max-w-5xl gap-3 mt-28 mb-7 mx-auto">
//             <h1 className="text-2xl font-semibold underline">Juz Amma</h1>
//             <input
//                 type="search"
//                 placeholder="🔍 Cari Surah"
//                 className="border-2 border-sky-500 bg-slate-50 dark:bg-transparent w-full px-3 py-2 mt-5 rounded-md"
//             />
//             <div className="flex flex-col gap-3 w-full md:grid md:grid-cols-3">
//                 {filterJuzAmma.map((data: any) => {
//                     return (
//                         <CardSurah
//                             key={data.nomor}
//                             href={`/surah/${data.nomor}`}
//                             noSurah={data.nomor}
//                             namaSurah={data.namaLatin}
//                             artiSurah={data.arti}
//                             tempatTurun={data.tempatTurun}
//                             jumlahAyat={data.jumlahAyat}
//                         />
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }
