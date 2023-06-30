import Link from "next/link";

interface cardHeroProps {
    href: string;
    title?: string;
}

export default function CardHero({ href, title }: cardHeroProps) {
    return (
        <Link
            href={href}
            className="bg-gradient-to-bl from-sky-400 to-sky-500 text-gray-50 font-semibold text-lg p-2 h-20 flex flex-col justify-end rounded-md drop-shadow-md"
        >
            {title}
        </Link>
    );
}
