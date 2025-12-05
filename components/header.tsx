import Link from "next/link";
import { Search, Globe, Menu, User } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full flex flex-col font-sans border-b-[5px] border-[#FFD200] sticky top-0 z-[100]">
            {/* Main Header */}
            <div className="bg-white py-3 px-4 md:px-8 flex items-center justify-between relative z-50">
                <div className="flex items-center gap-4 lg:gap-12">
                    {/* Mobile Hamburger Menu - Left Aligned */}
                    <Menu className="w-7 h-7 text-black lg:hidden cursor-pointer hover:opacity-70 transition-opacity" strokeWidth={2.5} />

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 group">
                        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-700 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Link href="#" className="hover:text-black hover:underline transition-colors whitespace-nowrap">Location de voitures</Link>
                    <Link href="#" className="hover:text-black hover:underline transition-colors whitespace-nowrap">Location d'utilitaires</Link>
                    <Link href="#" className="hover:text-black hover:underline transition-colors whitespace-nowrap">Offres</Link>
                    <Link href="#" className="hover:text-black hover:underline transition-colors whitespace-nowrap">Ma réservation</Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                    {/* Desktop Right Elements */}
                    <div className="hidden lg:flex items-center gap-2 cursor-pointer hover:opacity-80">
                        <Globe className="w-4 h-4 text-[#FFD200]" />
                        <span className="text-[13px] font-bold underline decoration-1 underline-offset-2">FR/FR</span>
                    </div>

                    <div className="hidden lg:block w-[1px] h-6 bg-gray-300 mx-1"></div>

                    <div className="hidden lg:flex items-center gap-2 cursor-pointer hover:opacity-80">
                        <span className="text-[13px] font-bold">Se connecter/S'inscrire</span>
                    </div>

                    {/* Mobile Login - Right Aligned */}
                    <Link href="#" className="flex lg:hidden items-center gap-2 text-black hover:opacity-70 transition-opacity">
                        <User className="w-6 h-6" strokeWidth={2} />
                        <span className="text-sm font-bold whitespace-nowrap">Se connecter</span>
                    </Link>
                </div>
            </div>

            {/* Notification Banner */}
            {/* 
            <div className="bg-[#1c1c1c] text-white py-3 px-4 text-center text-[13px] border-t-[5px] border-[#FFD200] flex justify-center items-center">
                <p>
                    L'expérience Hertz, en quelques clics. Téléchargez l'app et prenez la route sans attendre. <Link href="#" className="underline font-bold hover:text-[#FFD200] transition-colors">Cliquez ici.</Link>
                </p>
            </div> 
            */}
        </header>
    );
}
