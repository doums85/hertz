"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Fuel, Gauge, Users, Briefcase } from "lucide-react";

// Données fictives des véhicules
const vehicles = [
    {
        id: 1,
        name: "Peugeot 208",
        category: "Économique",
        image: "/vehicles/peugeot-208.png",
        specs: {
            seats: 5,
            transmission: "Manuelle",
            fuel: "Essence",
            luggage: 2
        },
        price: "A partir de 25 000 FCFA/jour"
    },
    {
        id: 2,
        name: "Toyota RAV4",
        category: "SUV",
        image: "/vehicles/toyota-rav4.png",
        specs: {
            seats: 5,
            transmission: "Automatique",
            fuel: "Essence",
            luggage: 4
        },
        price: "A partir de 45 000 FCFA/jour"
    },
    {
        id: 3,
        name: "Mitsubishi L200",
        category: "Pick-up 4x4",
        image: "/vehicles/mitsubishi-l200.png",
        specs: {
            seats: 5,
            transmission: "Manuelle",
            fuel: "Diesel",
            luggage: 5
        },
        price: "A partir de 60 000 FCFA/jour"
    },
    {
        id: 4,
        name: "Mercedes Classe C",
        category: "Berline Luxe",
        image: "/vehicles/mercedes-c-class.png",
        specs: {
            seats: 5,
            transmission: "Automatique",
            fuel: "Diesel",
            luggage: 3
        },
        price: "A partir de 80 000 FCFA/jour"
    },
    {
        id: 5,
        name: "Hyundai H1",
        category: "Minibus",
        image: "/vehicles/hyundai-h1.png",
        specs: {
            seats: 9,
            transmission: "Manuelle",
            fuel: "Diesel",
            luggage: 8
        },
        price: "A partir de 55 000 FCFA/jour"
    }
];

export default function VehicleSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 }
        }
    });

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase italic tracking-tighter">
                            Notre Flotte <span className="text-[#FFD200]">Premium</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Découvrez une large gamme de véhicules récents, adaptés à tous vos besoins de déplacement au Sénégal.
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <Button
                            onClick={scrollPrev}
                            disabled={!prevBtnEnabled}
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white transition-all disabled:opacity-30"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            onClick={scrollNext}
                            disabled={!nextBtnEnabled}
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white transition-all disabled:opacity-30"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4 md:-ml-6 py-4">
                            {vehicles.map((vehicle) => (
                                <div
                                    key={vehicle.id}
                                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-6"
                                >
                                    <div className="group h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden">
                                        {/* Image Area */}
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={vehicle.image}
                                                alt={vehicle.name}
                                                fill
                                                className="object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800 shadow-sm">
                                                {vehicle.category}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                                            <div className="w-12 h-1 bg-[#FFD200] mb-4"></div>

                                            {/* Specs */}
                                            <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Users className="w-4 h-4 text-[#FFD200]" />
                                                    <span>{vehicle.specs.seats} places</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Briefcase className="w-4 h-4 text-[#FFD200]" />
                                                    <span>{vehicle.specs.luggage} valises</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Gauge className="w-4 h-4 text-[#FFD200]" />
                                                    <span>{vehicle.specs.transmission}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Fuel className="w-4 h-4 text-[#FFD200]" />
                                                    <span>{vehicle.specs.fuel}</span>
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-4">
                                                <div className="text-sm font-semibold text-gray-500">
                                                    {vehicle.price}
                                                </div>
                                                <Button className="w-full bg-black text-white hover:bg-[#FFD200] hover:text-black transition-colors font-bold rounded-lg h-12">
                                                    Réserver ce véhicule
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-12 text-center">
                    <Button
                        variant="outline"
                        className="px-8 py-6 rounded-full border-2 border-black text-black font-bold text-lg hover:bg-black hover:text-white transition-all uppercase tracking-wide group"
                    >
                        Voir tous les véhicules
                        <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
