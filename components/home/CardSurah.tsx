import Link from "next/link";

interface cardSurahProps {
    href: string;
    noSurah: number;
    namaSurah: string;
    artiSurah: string;
    tempatTurun: string;
    jumlahAyat: number;
}

export default function CardSurah({ href, noSurah, namaSurah, artiSurah, tempatTurun, jumlahAyat }: cardSurahProps) {
    return (
        <Link href={href} className="bg-gradient-to-bl from-sky-400 to-sky-500 text-gray-50 p-3 rounded-md">
            <div className="flex gap-2">
                <div className="bg-sky-600 p-3 h-8 w-8 flex items-center justify-center rounded-xl">
                    <span className="font-semibold text-base">{noSurah}</span>
                </div>
                <div className="flex justify-between w-full">
                    <div className="">
                        <h1 className="font-semibold text-xl">{namaSurah}</h1>
                        <h2 className="font-light text-xs">{artiSurah}</h2>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="font-normal text-sm">{tempatTurun}</p>
                        <p className="font-normal text-sm">{`${jumlahAyat} Ayat`}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
