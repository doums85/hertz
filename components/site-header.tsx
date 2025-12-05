import Link from "next/link";
import { Search, Globe, Menu } from "lucide-react";

export function SiteHeader() {
    return (
        <header className="w-full flex flex-col font-sans">
            {/* Main Header */}
            <div className="bg-white py-3 px-4 md:px-8 flex items-center justify-between relative z-50">
                <div className="flex items-center gap-8 xl:gap-12 w-full">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 group">
                        <div className="flex flex-col">
                            <span className="text-black font-black text-3xl italic tracking-tighter leading-none" style={{ transform: "skewX(-10deg)" }}>
                                Hertz
                            </span>
                            <div className="h-[5px] w-full bg-[#FFD200] mt-0.5" style={{ transform: "skewX(-10deg)" }}></div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium text-gray-700">
                        <Link href="#" className="hover:text-black hover:underline transition-colors whitespace-nowrap">Location de voitures</Link>
                        <Link href="#" className="hover:text-black hover:underline transition-colors whitespace-nowrap">Location d'utilitaires</Link>
                        <Link href="#" className="hover:text-black hover:underline transition-colors whitespace-nowrap">Offres</Link>
                        <Link href="#" className="hover:text-black hover:underline transition-colors whitespace-nowrap">Ma réservation</Link>
                        <Link href="#" className="hover:text-black hover:underline transition-colors whitespace-nowrap">Hertz Gold Plus Rewards®</Link>

                    </nav>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                    <div className="hidden xl:flex items-center gap-2 cursor-pointer hover:opacity-80">
                        <Globe className="w-4 h-4 text-[#FFD200]" />
                        <span className="text-[13px] font-bold underline decoration-1 underline-offset-2">FR/FR</span>
                    </div>

                    <div className="hidden xl:block w-[1px] h-6 bg-gray-300 mx-1"></div>

                    <div className="hidden xl:flex items-center gap-2 cursor-pointer hover:opacity-80">
                        <span className="text-[13px] font-bold">Se connecter/S'inscrire</span>
                    </div>

                    <Menu className="w-6 h-6 text-black xl:hidden cursor-pointer" />
                </div>
            </div>

            {/* Notification Banner */}
            <div className="bg-[#1c1c1c] text-white py-3 px-4 text-center text-[13px] border-t-[5px] border-[#FFD200] flex justify-center items-center">
                <p>
                    L'expérience Hertz, en quelques clics. Téléchargez l'app et prenez la route sans attendre. <Link href="#" className="underline font-bold hover:text-[#FFD200] transition-colors">Cliquez ici.</Link>
                </p>
            </div>
        </header>
    );
}
