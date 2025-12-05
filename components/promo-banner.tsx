"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
    return (
        <section className="w-full bg-[#FFD200] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between py-8 md:py-0 min-h-[300px]">

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight leading-tight">
                            L'INNOVATION<br />
                            ROULE AVEC VOUS.
                        </h2>
                        <p className="text-xl md:text-2xl font-medium text-black/90">
                            Découvrez notre nouvelle flotte Premium.
                            <br />
                            <span className="font-bold">Puissance, Confort et Style.</span>
                        </p>

                        <button className="mt-6 inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-900 transition-transform hover:scale-105 active:scale-95 shadow-lg">
                            Découvrir la gamme
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Car Image - Positioned to look like the reference */}
                    <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] mt-8 md:mt-0 flex items-center justify-center md:justify-end">
                        <div className="relative w-full h-full">
                            <Image
                                src="/kaiyi-x7-promo.png"
                                alt="Nouvelle Kaiyi X7"
                                fill
                                className="object-contain object-center md:object-right"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
