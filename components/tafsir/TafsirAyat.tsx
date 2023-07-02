interface tafsirAyatProps {
    nomorAyat: number;
    teksTafsir: string;
}

export function TafsirAyat({ nomorAyat, teksTafsir }: tafsirAyatProps) {
    return (
        <div className="w-full mx-auto px-6 max-w-5xl">
            <div className="flex flex-col py-8 px-7 gap-3 rounded-md border border-sky-500 bg-slate-50 dark:bg-slate-700">
                <div className="flex flex-row justify-between w-full">
                    <p className="">{nomorAyat}</p>
                </div>
                <div className="flex flex-col mt-3 divide-y-2 divide-solid">
                    <p className="pt-3">{teksTafsir}</p>
                </div>
            </div>
        </div>
    );
}
