"use client";

import { useEffect, useState } from "react";
import CardBookmark from "@components/bookmark/CardBookmark";

export default function Bookmark() {
    const [bookmarkData, setBookmarkData] = useState({});

    useEffect(() => {
        const dataFromLocalStorage = localStorage.getItem("bookmarkData");
        if (dataFromLocalStorage) {
            setBookmarkData(JSON.parse(dataFromLocalStorage));
        }
    }, []);

    let idCounter = 1;

    return (
        <div className="w-full flex flex-col items-center px-6 max-w-5xl gap-3 mt-28 mb-7 mx-auto">
            <h1 className="text-2xl font-semibold underline">Ayat Favorit</h1>
            <div className="flex flex-col gap-3 w-full">
                {Object.entries(bookmarkData).map(([namaSurah, surahData]) =>
                    Object.entries(surahData as { [noSurah: string]: number[] }).map(([noSurah, ayatList]) =>
                        ayatList.map((nomorAyat: number) => {
                            const id = idCounter; // Assign the current counter value as the id
                            idCounter++; // Increment the counter for the next Ayat
                            return (
                                <CardBookmark
                                    key={`${namaSurah}-${noSurah}-${nomorAyat}`}
                                    href={`/surah/${noSurah}/#${nomorAyat}`}
                                    id={id}
                                    namaSurah={namaSurah}
                                    nomorAyat={nomorAyat}
                                />
                            );
                        })
                    )
                )}
            </div>
        </div>
    );
}
