import Link from "next/link";
import React from "react";

interface cardBookmarkProps {
    href: string;
    id: number;
    namaSurah: string;
    nomorAyat: number;
}

export default function CardBookmark({ href, id, namaSurah, nomorAyat }: cardBookmarkProps) {
    return (
        <Link href={href} className="bg-gradient-to-bl from-sky-400 to-sky-500 text-gray-50 p-3 rounded-md">
            <div className="flex items-center gap-3">
                <div className="bg-sky-600 p-3 h-8 w-8 flex items-center justify-center rounded-xl">
                    <span className="font-semibold text-base">{id}</span>
                </div>
                <div className="text-xl font-semibold">
                    <h1>
                        {namaSurah}: {nomorAyat}
                    </h1>
                </div>
            </div>
        </Link>
    );
}
