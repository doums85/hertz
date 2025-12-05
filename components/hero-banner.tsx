"use client";

import FadeIn from "@/components/animations/fade-in";
import BackgroundScale from "@/components/animations/background-scale";
import BookingForm from "./booking-form";

export default function ModernHeroBanner() {

    return (
        <div className="relative w-full overflow-hidden">
            {/* Top notification bar - Keep static */}
            <div className="relative z-20 bg-black text-white py-3 px-4 text-center">
                <p className="text-sm">
                    L&apos;expérience Hertz, en quelques clics. Téléchargez l&apos;app et prenez la route sans attendre.{" "}
                    <a href="#" className="underline hover:text-yellow-400 transition-colors font-semibold">
                        Cliquez ici.
                    </a>
                </p>
            </div>

            {/* Hero Section */}
            <div className="relative min-h-[500px] w-full bg-black">
                {/* Background Image */}
                <BackgroundScale imageUrl="/hero-bg-car-dakar.png" />

                {/* Content Container */}
                <div className="relative z-10 w-full h-full flex flex-col justify-start py-20 md:py-32">
                    <div className="container mx-auto px-4 max-w-7xl">
                        {/* Hero Text */}
                        <div className="w-full mb-12 space-y-4">
                            <FadeIn direction="up" delay={0.2} duration={0.8}>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 drop-shadow-lg leading-none tracking-tighter">
                                    Hertz <span className="text-[#FFD200]">Dakar</span>.
                                </h1>
                            </FadeIn>
                            <FadeIn direction="up" delay={0.4} duration={0.8}>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-md tracking-tight">
                                    Voyagez sans limites.
                                </h2>
                            </FadeIn>
                        </div>
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
