import Pause from "@icons/Pause";
import Play from "@icons/Play";
import BookmarkSolid from "@icons/BookmarkSolid";
import BookmarkOutline from "@icons/BookmarkOutline";

interface ayatProps {
    nomorAyat: number;
    ayatArab: string;
    ayatLatin: string;
    arti: string;
    audio: string;
}


export default async function Ayat({ nomorAyat, ayatArab, ayatLatin, arti, audio }: ayatProps) {
    // const audio = "paused";
    const bookmark = "notsaved";
    

    return (
        <div className="w-full mx-auto px-6 max-w-5xl">
            <div className="flex flex-col py-8 px-7 gap-3 rounded-md border border-sky-500 bg-slate-50 dark:bg-slate-700">
                <div className="flex flex-row justify-between w-full">
                    <p className="">{nomorAyat}</p>
                    <div className="flex gap-2">
                        <button className="dark:text-slate-50" >
                            {audio === "played" ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                        </button>
                        <button className="dark:text-slate-50">
                            {bookmark === "saved" ? (
                                <BookmarkSolid className="w-4 h-4" />
                            ) : (
                                <BookmarkOutline className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                </div>
                <p className="flex justify-end text-4xl mt-5">{ayatArab}</p>
                <div className="flex flex-col mt-3 divide-y-2 divide-solid">
                    <p className="text-sm pb-2 text-gray-800 dark:text-gray-200">{ayatLatin}</p>
                    <p className="pt-3">{arti}</p>
                </div>
            </div>
        </div>
    );
}
