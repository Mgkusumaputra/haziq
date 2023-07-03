import { useState, useEffect } from "react";

export const useBookmark = (nomorSurah: number, nomorAyat: number) => {
    const [bookmark, setBookmark] = useState(false);

    useEffect(() => {
        const bookmarkData = JSON.parse(localStorage.getItem("bookmarkData") || "{}");
        setBookmark(bookmarkData[nomorSurah]?.includes(nomorAyat) || false);
    }, [nomorSurah, nomorAyat]);

    const toggleBookmark = () => {
        const newBookmark = !bookmark;
        setBookmark(newBookmark);
        const bookmarkData = JSON.parse(localStorage.getItem("bookmarkData") || "{}");
        if (!bookmarkData[nomorSurah]) {
            bookmarkData[nomorSurah] = [];
        }
        const index = bookmarkData[nomorSurah].indexOf(nomorAyat);
        if (newBookmark) {
            if (index === -1) {
                bookmarkData[nomorSurah].push(nomorAyat);
            }
        } else {
            if (index !== -1) {
                bookmarkData[nomorSurah].splice(index, 1);
            }
        }
        localStorage.setItem("bookmarkData", JSON.stringify(bookmarkData));
    };

    return { bookmark, toggleBookmark };
};
