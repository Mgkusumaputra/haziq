"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Play from "@icons/Play";
import Pause from "@icons/Pause";
import Book from "@icons/Book";

interface headerSurahProps {
    noSurah: number;
    namaSurahLatin: string;
    namaSurahArab: string;
    tempatTurun: string;
    jumlahAyat: number;
    audio: string;
}

export function AudioPaused() {
    return (
        <>
            <Play className="w-4 h-4" />
            <span>Putar Audio</span>
        </>
    );
}
export function AudioPlayed() {
    return (
        <>
            <Pause className="w-4 h-4" />
            <span>Hentikan Audio</span>
        </>
    );
}

export default function Header({
    noSurah,
    namaSurahLatin,
    namaSurahArab,
    tempatTurun,
    jumlahAyat,
    audio,
}: headerSurahProps) {
    const [audioStatus, setAudioStatus] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    function toggleAudio() {
        if (!audioRef.current) return;

        if (audioStatus) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setAudioStatus(!audioStatus);
    }

    function handleAudioEnded() {
        setAudioStatus(false);
    }

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
                    <button
                        onClick={toggleAudio}
                        className="flex items-center justify-center gap-2 px-3 py-1 rounded-md bg-slate-200 dark:bg-slate-900"
                    >
                        {audioStatus ? <AudioPlayed /> : <AudioPaused />}
                    </button>
                    <audio ref={audioRef} src={audio} onEnded={handleAudioEnded} />
                    <Link
                        href={`/tafsir/${noSurah}`}
                        className="flex items-center justify-center gap-2 px-3 py-1 rounded-md bg-slate-200 dark:bg-slate-900"
                    >
                        <Book className="w-4 h-4" /> Buka Tafsir
                    </Link>
                </div>
            </div>
        </div>
    );
}
