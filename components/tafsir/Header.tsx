import Link from "next/link";

import Book from "@icons/Book";

interface headerTafsirProps {
    noSurah: number;
    namaSurahLatin: string;
    namaSurahArab: string;
    tempatTurun: string;
    jumlahAyat: number;
}

export function Header({ noSurah, namaSurahLatin, namaSurahArab, tempatTurun, jumlahAyat }: headerTafsirProps) {
    return (
        <div className="w-full mt-20 mx-auto max-w-5xl px-6">
            <div className="flex flex-col w-full py-6 px-5 gap-2 bg-slate-50 dark:bg-slate-700">
                <div className="flex items-center justify-center gap-4 text-2xl font-bold">
                    <div className="bg-sky-600 p-3 h-8 w-8 flex items-center justify-center rounded-xl text-gray-50">
                        <span className="font-semibold text-base">{noSurah}</span>
                    </div>
                    <h1 className="">{namaSurahLatin}</h1>
                    <span>•</span>
                    <p className="font-arabic">{namaSurahArab}</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <p>{tempatTurun}</p>
                    <p>{jumlahAyat} Ayat</p>
                </div>
                <div className="flex flex-col mt-4 items-end gap-3 font-semibold">
                    <Link
                        href={`/surah/${noSurah}`}
                        className="flex items-center justify-center gap-2 px-3 py-1 rounded-md bg-slate-200 dark:bg-slate-900"
                    >
                        <Book className="w-4 h-4" /> Buka Surat
                    </Link>
                </div>
            </div>
        </div>
    );
}
