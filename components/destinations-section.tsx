
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import StaggerScaleItem from "@/components/animations/stagger-scale-item";

export default function DestinationsSection() {
    const destinations = [
        {
            name: "Dakar",
            image: "/destinations/dakar.png",
            description: "La capitale vibrante, point de départ de toutes vos aventures.",
            // Dakar is handled explicitly in the grid layout
        },
        {
            name: "Saly Portudal",
            image: "/destinations/saly.png",
            description: "Détente assurée sur la Petite Côte.",
        },
        {
            name: "Saint-Louis",
            image: "/destinations/saint-louis.png",
            description: "Charme colonial et histoire.",
        },
        {
            name: "Thiès",
            image: "/destinations/thies.png",
            description: "Le carrefour ferroviaire et culturel.",
        },
        {
            name: "Touba",
            image: "/destinations/touba.png",
            description: "Cité religieuse et architecturale.",
        },
        {
            name: "Ziguinchor",
            image: "/destinations/ziguinchor.png",
            description: "Au cœur de la Casamance.",
        },
        {
            name: "Cap Skirring",
            image: "/destinations/cap-skirring.png",
            description: "Les plus belles plages du Sénégal.",
        }
    ];


    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <FadeIn
                        direction="left"
                        duration={0.8}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 uppercase italic tracking-tighter">
                            Nos <span className="text-[#FFD200]">Destinations</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            De Dakar à la Casamance, nos agences vous accueillent partout au Sénégal pour vous offrir une mobilité sans limite.
                        </p>
                    </FadeIn>
                    <FadeIn
                        direction="right"
                        duration={0.8}
                    >
                        <Button variant="outline" className="hidden md:flex border-2 border-black text-black hover:bg-black hover:text-white transition-all font-bold group">
                            Trouver une agence <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </FadeIn>
                </div>

                {/*
                   Grid Layout Logic: 4 columns
                   Row 1: Dakar (2x2) | Saly (1x1) | St-Louis (1x1)
                   Row 2: [Dakar spans here] | Thiès (1x1) | Touba (1x1)
                   Row 3: Ziguinchor (2x1) | Cap Skirring (2x1)
                */}
                <StaggerContainer
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-4"
                >

                    {/* Dakar (Large - 2x2) */}
                    <StaggerScaleItem className="group relative overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <Image
                            src={destinations[0].image}
                            alt={destinations[0].name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-black/30 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg group-hover:bg-black/50 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className="text-[#FFD200] w-5 h-5" />
                                    <span className="text-[#FFD200] font-bold tracking-wider uppercase text-sm">Agence Principale</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{destinations[0].name}</h3>
                                <p className="text-white text-lg font-medium leading-relaxed mb-4">
                                    {destinations[0].description}
                                </p>
                                <Button className="w-full bg-[#FFD200] text-black hover:bg-white hover:text-black border-none font-bold rounded-xl h-12">
                                    Voir l'agence
                                </Button>
                            </div>
                        </div>
                    </StaggerScaleItem>

                    {/* Saly (1x1) */}
                    <StaggerScaleItem>
                        <SimpleDestinationCard destination={destinations[1]} />
                    </StaggerScaleItem>

                    {/* Saint-Louis (1x1) */}
                    <StaggerScaleItem>
                        <SimpleDestinationCard destination={destinations[2]} />
                    </StaggerScaleItem>

                    {/* Thiès (1x1) */}
                    <StaggerScaleItem>
                        <SimpleDestinationCard destination={destinations[3]} />
                    </StaggerScaleItem>

                    {/* Touba (1x1) */}
                    <StaggerScaleItem>
                        <SimpleDestinationCard destination={destinations[4]} />
                    </StaggerScaleItem>

                    {/* Ziguinchor (2x1) */}
                    <StaggerScaleItem className="md:col-span-2">
                        <WideDestinationCard destination={destinations[5]} />
                    </StaggerScaleItem>

                    {/* Cap Skirring (2x1) */}
                    <StaggerScaleItem className="md:col-span-2">
                        <WideDestinationCard destination={destinations[6]} />
                    </StaggerScaleItem>

                </StaggerContainer>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" className="w-full border-2 border-black text-black hover:bg-black hover:text-white transition-all font-bold">
                        Voir toutes les agences
                    </Button>
                </div>
            </div>
        </section>
    );
}

// Helper Components for cleaner code
function SimpleDestinationCard({ destination }: { destination: any }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full w-full">
            <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50"></div>
            <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-black/40 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg group-hover:bg-black/60 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FFD200] transition-colors">{destination.name}</h3>
                    <p className="text-white/90 text-sm font-medium leading-snug">{destination.description}</p>
                </div>
            </div>
        </div>
    );
}

function WideDestinationCard({ destination }: { destination: any }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full w-full">
            <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50"></div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-col justify-end items-start h-full pointer-events-none">
                <div className="bg-black/40 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-lg w-full md:w-auto md:min-w-[300px] group-hover:bg-black/60 transition-colors duration-300 pointer-events-auto">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#FFD200] transition-colors">{destination.name}</h3>
                    <p className="text-white/90 font-medium">{destination.description}</p>
                </div>
            </div>
        </div>
    );
}
