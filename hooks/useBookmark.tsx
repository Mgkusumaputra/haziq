import { useState, useEffect } from "react";

export const useBookmark = (noSurah: number, namaSurah: string, nomorAyat: number) => {
    const [bookmark, setBookmark] = useState(false);

    useEffect(() => {
        const bookmarkData = JSON.parse(localStorage.getItem("bookmarkData") || "{}");
        setBookmark(bookmarkData[namaSurah]?.[noSurah]?.includes(nomorAyat) || false);
    }, [namaSurah, nomorAyat, noSurah]);

    const toggleBookmark = () => {
        const newBookmark = !bookmark;
        setBookmark(newBookmark);
        const bookmarkData = JSON.parse(localStorage.getItem("bookmarkData") || "{}");
        if (!bookmarkData[namaSurah]) {
            bookmarkData[namaSurah] = {};
        }
        if (!bookmarkData[namaSurah][noSurah]) {
            bookmarkData[namaSurah][noSurah] = [];
        }
        const index = bookmarkData[namaSurah][noSurah].indexOf(nomorAyat);
        if (newBookmark) {
            if (index === -1) {
                bookmarkData[namaSurah][noSurah].push(nomorAyat);
            }
        } else {
            if (index !== -1) {
                bookmarkData[namaSurah][noSurah].splice(index, 1);
            }
        }
        // Remove the Surah group if the array is empty
        if (bookmarkData[namaSurah][noSurah].length === 0) {
            delete bookmarkData[namaSurah][noSurah];
            if (Object.keys(bookmarkData[namaSurah]).length === 0) {
                delete bookmarkData[namaSurah];
            }
        }
        localStorage.setItem("bookmarkData", JSON.stringify(bookmarkData));
    };

    return { bookmark, toggleBookmark };
};
