import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="w-full py-8 flex flex-col md:flex-row items-center justify-center gap-1 bg-slate-50 text-gray-950 dark:bg-slate-700 dark:text-gray-50">
                <p className="text-lg">Copyright © {new Date().getFullYear()} Haziq - Made with ❤ by</p>
                <Link target="_blank" href="https://mgkusumaputra.me" className="underline font-bold">
                    Mgkusumaputra
                </Link>
            </div>
        </>
    );
}
