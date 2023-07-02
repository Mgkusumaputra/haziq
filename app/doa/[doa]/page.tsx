export default async function DetailDoa({ params }: { params: { doa: number } }) {
    const res = await fetch(`https://equran.id/api/doa/${params.doa}`);
    const getAllDoa = await res.json();

    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-full max-w-5xl px-6 justify-center mt-20">
                <h1 className="py-3 text-2xl text-center font-semibold">{getAllDoa.nama}</h1>
                <div className="w-full mt-4 mx-auto ">
                    <div className="flex flex-col py-8 px-7 gap-3 rounded-md border border-sky-500 bg-slate-50 dark:bg-slate-700">
                        <div className="flex flex-col gap-3 mb-3">
                            <h1 className="text-4xl text-end font-arabic">{getAllDoa.ar}</h1>
                            <p className="font-semibold">{getAllDoa.tr}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="">
                                <p className="font-semibold">Artinya:</p>
                                <p className="text-gray-800 dark:text-gray-300">{getAllDoa.idn}</p>
                            </div>
                            <div className="">
                                <p className="font-semibold">Tentang Doa:</p>
                                <p className="text-gray-800 dark:text-gray-300">{getAllDoa.tentang}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
