"use client";

import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, MapPin } from "lucide-react";

export default function BookingForm() {
    const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
    const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
    const [pickupDateOpen, setPickupDateOpen] = useState(false);
    const [returnDateOpen, setReturnDateOpen] = useState(false);

    const [isSticky, setIsSticky] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    useEffect(() => {
        const handleScroll = () => {
            if (!isDesktop) {
                setIsSticky(false);
                return;
            }

            // Use scrollY to determine sticky state when using position: fixed
            // 380px is approximately where the form meets the header (500px banner - 128px overlap)
            setIsSticky(window.scrollY > 380);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isDesktop]);

    return (
        <section
            ref={sectionRef}
            className={`w-full z-50 transition-all duration-300 ${isDesktop && isSticky ? 'fixed top-[64px] left-0 right-0' : 'relative'}`}
        >
            <div className={`
                transition-all duration-300 relative mx-auto
                ${isSticky
                    ? 'w-full bg-white shadow-xl border-b border-gray-100' // Full width, squared corners
                    : 'w-full bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden'}
            `}>
                <div className="w-full">
                    {/* Bottom Border Accent - Show only when not sticky */}
                    <div className={`${isSticky ? 'hidden' : 'absolute'} bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400`}></div>

                    <div className={`px-6 md:px-8 ${isSticky ? 'py-4' : 'pt-6 pb-6 md:pt-8 md:pb-8'}`}>
                        {/* Top Options Bar */}
                        {/* Hide Top Options Bar when sticky */}
                        <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-5 mb-5 border-b border-gray-100 ${isSticky ? 'hidden' : ''}`}>
                            {/* Same Location Checkbox */}
                            <div className="flex items-center gap-3">
                                <label className="group flex items-center gap-3 cursor-pointer select-none">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            defaultChecked
                                        />
                                        <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-gray-300 rounded-md bg-white peer-checked:bg-gradient-to-br peer-checked:from-yellow-400 peer-checked:to-yellow-500 peer-checked:border-yellow-500 transition-all duration-300 flex items-center justify-center shadow-sm group-hover:border-yellow-400">
                                            <svg
                                                className="w-3.5 h-3.5 md:w-4 md:h-4 text-black opacity-0 peer-checked:opacity-100 transition-all duration-300 transform scale-0 peer-checked:scale-100"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={3}
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-xs md:text-sm font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                                        Même agence de départ et d&apos;arrivée
                                    </span>
                                </label>
                            </div>

                            {/* Action Links */}
                            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm">
                                <button className="flex items-center gap-2 px-2 py-1 md:px-3 md:py-1.5 text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold transition-all rounded-md">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <path strokeLinecap="round" d="M12 16v-4M12 8h.01" />
                                    </svg>
                                    Code promo
                                </button>
                                <div className="hidden lg:block h-5 w-px bg-gray-200"></div>
                                <button className="px-2 py-1 md:px-3 md:py-1.5 text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-semibold transition-all rounded-md whitespace-nowrap">
                                    Gérer ma réservation
                                </button>
                            </div>
                        </div>

                        {/* Form Fields - Compact Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
                            {/* Location Field */}
                            <div className="lg:col-span-3">
                                <div className="relative">
                                    <Label htmlFor="location" className="text-xs md:text-sm font-bold text-gray-800 mb-1.5 flex items-center gap-2">
                                        <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-500" />
                                        <span>Lieu de départ</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        id="location"
                                        placeholder="Ville, aéroport..."
                                        className="w-full h-10 md:h-12 px-4 bg-white border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all text-sm text-gray-900 placeholder:text-gray-400 font-medium shadow-sm hover:border-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Pickup Group */}
                            <div className="lg:col-span-4 xl:col-span-4 bg-gray-50/50 rounded-lg p-3 border border-gray-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                    <span className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-wider">Départ</span>
                                </div>
                                <div className="grid grid-cols-[1.5fr_1fr] md:flex gap-3">
                                    <div className="flex-1 min-w-0">
                                        <Popover open={pickupDateOpen} onOpenChange={setPickupDateOpen}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    id="pickupDate"
                                                    className="w-full h-10 md:h-11 justify-between font-medium text-xs md:text-sm bg-white border-gray-300 hover:border-yellow-400 focus:border-yellow-400 rounded-md px-3"
                                                >
                                                    <span className="truncate">{pickupDate ? pickupDate.toLocaleDateString('fr-FR') : "Date"}</span>
                                                    <CalendarIcon className="w-3.5 h-3.5 text-gray-400 ml-1 shrink-0" />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={pickupDate}
                                                    onSelect={(date) => {
                                                        setPickupDate(date);
                                                        setPickupDateOpen(false);
                                                    }}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <div className="w-full sm:w-[130px] shrink-0">
                                        <Input
                                            type="time"
                                            defaultValue="10:00"
                                            className="w-full h-10 md:h-11 bg-white border-gray-300 rounded-md text-xs md:text-sm focus:border-yellow-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Return Group */}
                            <div className="lg:col-span-4 xl:col-span-4 bg-gray-50/50 rounded-lg p-3 border border-gray-100">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                    <span className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-wider">Retour</span>
                                </div>
                                <div className="grid grid-cols-[1.5fr_1fr] md:flex gap-3">
                                    <div className="flex-1 min-w-0">
                                        <Popover open={returnDateOpen} onOpenChange={setReturnDateOpen}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    id="returnDate"
                                                    className="w-full h-10 md:h-11 justify-between font-medium text-xs md:text-sm bg-white border-gray-300 hover:border-yellow-400 focus:border-yellow-400 rounded-md px-3"
                                                >
                                                    <span className="truncate">{returnDate ? returnDate.toLocaleDateString('fr-FR') : "Date"}</span>
                                                    <CalendarIcon className="w-3.5 h-3.5 text-gray-400 ml-1 shrink-0" />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={returnDate}
                                                    onSelect={(date) => {
                                                        setReturnDate(date);
                                                        setReturnDateOpen(false);
                                                    }}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <div className="w-full sm:w-[130px] shrink-0">
                                        <Input
                                            type="time"
                                            defaultValue="10:00"
                                            className="w-full h-10 md:h-11 bg-white border-gray-300 rounded-md text-xs md:text-sm focus:border-yellow-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="lg:col-span-1 flex items-end">
                                <Button
                                    size="lg"
                                    className="w-full h-12 md:h-[52px] bg-yellow-400 hover:bg-yellow-500 text-black font-black text-base rounded-lg shadow-sm transition-all"
                                >
                                    <span className="mr-2">Voir les véhicules</span>
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
