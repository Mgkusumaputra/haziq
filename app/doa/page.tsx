import { CardDoa } from "@components/doa/CardDoa";

export default async function Doa() {
    const res = await fetch("https://equran.id/api/doa");
    const getAllDoa = await res.json();

    return (
        <div className="w-full flex flex-col items-center px-6 max-w-5xl gap-3 mt-28 mb-7 mx-auto">
            <h1 className="text-2xl font-semibold underline">Kumpulan Doa</h1>
            <div className="flex flex-col gap-3 w-full md:grid md:grid-cols-3">
                {getAllDoa.map((data: any) => {
                    return <CardDoa key={data.id} href={`/doa/${data.id}`} namaDoa={data.nama} id={data.id} />;
                })}
            </div>
        </div>
    );
}
