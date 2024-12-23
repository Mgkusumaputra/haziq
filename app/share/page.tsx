"use client";

import HaziqLogo from "@/components/icons/HaziqLogo";
import { useToPng } from "@hugocxl/react-to-image";
import Image from "next/image";
import { FormEvent, useState } from "react";

interface SelectedAyatSurah {
  surah: string;
  ayat: {
    number: number;
    arabic: string;
    translation: string;
  };
}

export default function Share() {
  const [selectedAyatSurah, setSelectedAyatSurah] =
    useState<SelectedAyatSurah>();
  const [loading, setLoading] = useState(false);

  async function getSurahData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const surahInput = formData.get("surahInput");
    const ayatInput = Number(formData.get("ayatInput"));

    try {
      const res = await fetch(`https://equran.id/api/v2/surat/${surahInput}`);
      const selectedSurah = await res.json();
      const dataSurah = selectedSurah.data;

      const dataAyat = dataSurah.ayat;

      const ayatFilter = dataAyat.find(
        (ayat: any) => ayat.nomorAyat === ayatInput
      );

      setSelectedAyatSurah({
        surah: dataSurah.namaLatin,
        ayat: {
          number: ayatFilter.nomorAyat,
          arabic: ayatFilter.teksArab,
          translation: ayatFilter.teksIndonesia,
        },
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  const [{ isSuccess, isLoading }, convert] = useToPng<HTMLDivElement>({
    selector: "#generatedQuote",
    backgroundColor: "#FFFFFF",
    onError: (error) => console.log("Error:", error),
    onSuccess: (data) => {
      const link = document.createElement("a");
      link.download = `${selectedAyatSurah?.surah}:${selectedAyatSurah?.ayat.number}.png`;
      link.href = data;
      link.click();
    },
  });

  return (
    <div className="w-full flex flex-col items-center px-6 max-w-5xl gap-3 mt-28 mb-7 mx-auto">
      <h1 className="text-2xl font-semibold underline">Share</h1>
      <form
        onSubmit={getSurahData}
        className="flex flex-col items-center justify-center w-full"
      >
        <div className="flex flex-row gap-7 w-full">
          <input
            type="search"
            name="surahInput"
            placeholder="🔍 Nomor Surah"
            className="border-2 border-sky-500 bg-slate-50 dark:bg-transparent w-full px-3 py-2 mt-5 rounded-md"
          />
          <input
            type="search"
            name="ayatInput"
            placeholder="🔍 Nomor Ayat"
            className="border-2 border-sky-500 bg-slate-50 dark:bg-transparent w-full px-3 py-2 mt-5 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-900 w-fit mt-5"
          disabled={loading}
        >
          {loading ? "Loading..." : "Select Surah & Ayat"}
        </button>
      </form>

      <div className="flex flex-row gap-7 w-full items-center justify-center">
        {selectedAyatSurah && (
          <div>
            <div className="relative w-[1200px] h-[628px]" id="generatedQuote">
              <div className="flex flex-col w-full h-full items-center justify-center bg-white text-[#0B2447] px-20">
                <div className="flex flex-col gap-8">
                  <p className="text-4xl font-bold text-right font-arabic">
                    {selectedAyatSurah?.ayat.arabic}
                  </p>
                  <div className="flex flex-col text-2xl gap-1">
                    <p className="font-semibold">
                      &quot;{selectedAyatSurah?.ayat.translation}&quot;
                    </p>
                    <p className="font-medium">
                      {selectedAyatSurah?.surah}:
                      {selectedAyatSurah?.ayat.number}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                width={64}
                height={64}
                src="https://res.cloudinary.com/dspkhqhkv/image/upload/v1688470690/Haziq/Haziq_Icon.png"
                alt={""}
                className="absolute right-10 bottom-10"
              />
            </div>

            {isSuccess && (
              <div className="flex flex-row gap-5">
                <button
                  disabled
                  className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-900 w-fit mt-5"
                >
                  Quote berhasil disimpan
                </button>
                <button
                  onClick={convert}
                  className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-900 w-fit mt-5"
                >
                  Download Ulang?
                </button>
              </div>
            )}
            {!isSuccess && (
              <button
                onClick={convert}
                className="px-4 py-2 rounded-md bg-slate-200 dark:bg-slate-900 w-fit mt-5"
              >
                {isLoading ? "Loading..." : "Simpan Quote"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

