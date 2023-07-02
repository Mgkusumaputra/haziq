import Link from "next/link";

interface cardDoaProps {
    href: string;
    id: number;
    namaDoa: string;
}

export function CardDoa({ href, id, namaDoa }: cardDoaProps) {
    return (
        <Link href={href} className="bg-gradient-to-bl from-sky-400 to-sky-500 text-gray-50 p-3 rounded-md">
            <div className="flex items-center gap-3">
                <div className="bg-sky-600 p-3 h-8 w-8 flex items-center justify-center rounded-xl">
                    <span className="font-semibold text-base">{id}</span>
                </div>
                <div className="">
                    <h1>{namaDoa}</h1>
                </div>
            </div>
        </Link>
    );
}
