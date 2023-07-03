"use client";

import { useRef, useState } from "react";

import { useBookmark } from "@hooks/useBookmark";

import Pause from "@icons/Pause";
import Play from "@icons/Play";
import BookmarkSolid from "@icons/BookmarkSolid";
import BookmarkOutline from "@icons/BookmarkOutline";

interface ayatProps {
    noSurah: number;
    id: string;
    namaSurah: string;
    nomorAyat: number;
    ayatArab: string;
    ayatLatin: string;
    arti: string;
    audio: string;
}

export default function Ayat({ id, noSurah, namaSurah, nomorAyat, ayatArab, ayatLatin, arti, audio }: ayatProps) {
    const { bookmark, toggleBookmark } = useBookmark(noSurah, namaSurah, nomorAyat);

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
        <div id={id} className="w-full mx-auto px-6 max-w-5xl">
            <div className="flex flex-col py-8 px-7 gap-3 rounded-md border border-sky-500 bg-slate-50 dark:bg-slate-700">
                <div className="flex flex-row justify-between w-full">
                    <p className="">{nomorAyat}</p>
                    <div className="flex gap-2">
                        <button className="dark:text-slate-50" onClick={toggleAudio}>
                            {audioStatus ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                        <audio ref={audioRef} src={audio} onEnded={handleAudioEnded} />
                        <button className="dark:text-slate-50" onClick={toggleBookmark}>
                            {bookmark ? <BookmarkSolid className="w-4 h-4" /> : <BookmarkOutline className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
                <p className="flex justify-end text-right text-4xl mt-5 font-arabic">{ayatArab}</p>
                <div className="flex flex-col mt-3 divide-y-2 divide-solid">
                    <p className="text-sm pb-2 text-gray-800 dark:text-gray-200">{ayatLatin}</p>
                    <p className="pt-3">{arti}</p>
                </div>
            </div>
        </div>
    );
}
