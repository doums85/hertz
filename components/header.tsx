"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Globe, Menu, User, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
    const pathname = usePathname();
    const navLinks = [
        { href: "/", label: "Accueil" },
        { href: "#", label: "Location de voitures" },
        { href: "#", label: "Location d'utilitaires" },
        { href: "#", label: "Offres" },
        { href: "#", label: "Ma réservation" },
    ];

    return (
        <header className="w-full flex flex-col font-sans border-b-[5px] border-[#FFD200] sticky top-0 z-[100]">
            {/* Main Header */}
            <div className="bg-white py-3 px-4 md:px-8 flex items-center justify-between relative z-50">
                <div className="flex items-center gap-4 lg:gap-12">
                    {/* Mobile Hamburger Menu - Left Aligned */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Menu className="w-7 h-7 text-black lg:hidden cursor-pointer hover:opacity-70 transition-opacity" strokeWidth={2.5} />
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0 border-r-0">
                            <SheetHeader className="p-4 border-b border-gray-100 flex flex-row items-center justify-between space-y-0">
                                <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
                                <div className="relative w-24 h-8">
                                    <Image src="/logo.svg" alt="Hertz Logo" fill className="object-contain" priority />
                                </div>
                                <SheetClose asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                                        <X className="w-5 h-5" />
                                        <span className="sr-only">Fermer</span>
                                    </Button>
                                </SheetClose>
                            </SheetHeader>

                            <div className="flex flex-col h-full py-4">
                                <nav className="flex flex-col px-4 space-y-2">


                                    {/* Links */}
                                    {/* Links */}
                                    {navLinks.map((link, index) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={index}
                                                href={link.href}
                                                className={cn(
                                                    "py-3 text-base font-medium transition-colors border-b border-gray-50 last:border-0",
                                                    isActive
                                                        ? "text-[#FFD200] font-bold"
                                                        : "text-gray-800 hover:text-[#FFD200]"
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        );
                                    })}
                                </nav>

                                <div className="mt-auto px-4 pb-4">
                                    <div className="pt-4 border-t border-gray-100 flex items-center gap-2 py-3 text-base font-medium text-gray-800 hover:text-[#FFD200] transition-colors border-b border-gray-50 cursor-pointer">
                                        {/* FR / FR */}
                                        <Globe className="w-4 h-4 text-[#FFD200]" />
                                        <span>FR / FR</span>

                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 group">
                        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-gray-700 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className={cn(
                                    "transition-colors whitespace-nowrap",
                                    isActive
                                        ? "text-black font-bold underline decoration-[#FFD200] decoration-2 underline-offset-4"
                                        : "hover:text-black hover:underline"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
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
