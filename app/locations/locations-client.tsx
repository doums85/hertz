"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import MapWrapper from "@/components/locations/map-wrapper";
import StaggerContainer from "@/components/animations/stagger-container";
import StaggerItem from "@/components/animations/stagger-item";
import FadeIn from "@/components/animations/fade-in";
import { motion, AnimatePresence } from "framer-motion";

const locations = [
    {
        name: "Aéroport International Blaise Diagne (AIBD)",
        address: "Dakar, Sénégal",
        phone: "+221 33 820 11 11",
        hours: "24h/24, 7j/7",
        type: "Aéroport",
        coordinates: [14.671, -17.073] as [number, number]
    },
    {
        name: "Agence Centre-Ville Dakar",
        address: "102 Rue Joseph Gomis",
        phone: "+221 33 820 11 11",
        hours: "Lun - Ven: 08:00 - 18:00, Sam: 09:00 - 13:00",
        type: "Ville",
        coordinates: [14.670, -17.430] as [number, number]
    },
    {
        name: "Saly Portudal",
        address: "Route de la résidence du port",
        phone: "+221 33 957 11 11",
        hours: "Lun - Sam: 09:00 - 17:00",
        type: "Ville",
        coordinates: [14.443, -16.992] as [number, number]
    }
];

export default function LocationsClient() {
    const [activeFilter, setActiveFilter] = useState("Tous");

    const filteredLocations = activeFilter === "Tous"
        ? locations
        : locations.filter(loc => loc.type === activeFilter);

    return (
        <main className="min-h-screen flex flex-col md:flex-row h-screen-minus-header overflow-hidden">
            {/* List Side */}
            <div className="w-full md:w-1/3 lg:w-[450px] bg-white border-r border-gray-200 flex flex-col h-full z-10 shadow-xl">
                <div className="p-6 border-b border-gray-100 bg-white z-10">
                    <FadeIn delay={0.1}>
                        <h1 className="text-2xl font-extrabold uppercase tracking-tight mb-2">Nos Agences</h1>
                        <p className="text-sm text-gray-500 mb-6">Trouvez l'agence Hertz la plus proche de vous au Sénégal.</p>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-2">
                            {["Tous", "Aéroport", "Ville"].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`
                                        px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300
                                        ${activeFilter === filter
                                            ? "bg-[#FFD200] text-black shadow-md scale-105"
                                            : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"}
                                    `}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar bg-gray-50/50">
                    <StaggerContainer className="p-4 space-y-4">
                        <AnimatePresence mode="popLayout">
                            {filteredLocations.map((loc) => (
                                <StaggerItem key={loc.name} className="w-full">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="font-bold text-gray-900 group-hover:text-[#FFD200] transition-colors duration-300">{loc.name}</h3>
                                            <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded-sm shrink-0 ml-2">
                                                {loc.type}
                                            </span>
                                        </div>

                                        <div className="space-y-2.5">
                                            <div className="flex items-start gap-3 text-sm text-gray-600">
                                                <MapPin className="w-4 h-4 text-[#FFD200] mt-0.5 shrink-0" />
                                                <span className="leading-snug">{loc.address}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                                <Clock className="w-4 h-4 text-[#FFD200] shrink-0" />
                                                <span>{loc.hours}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                                <Phone className="w-4 h-4 text-[#FFD200] shrink-0" />
                                                <span>{loc.phone}</span>
                                            </div>
                                        </div>

                                        <div className="mt-5 flex gap-2">
                                            <Button size="sm" variant="outline" className="w-full border-gray-200 hover:border-[#FFD200] hover:bg-[#FFD200] hover:text-black transition-all duration-300">
                                                <Navigation className="w-3 h-3 mr-2" /> Itinéraire
                                            </Button>
                                        </div>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </AnimatePresence>
                        {filteredLocations.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="p-8 text-center text-gray-400 text-sm"
                            >
                                Aucune agence trouvée pour ce filtre.
                            </motion.div>
                        )}
                    </StaggerContainer>
                </div>
            </div>

            {/* Map Side */}
            <div className="flex-1 bg-gray-100 relative min-h-[50vh] md:min-h-auto">
                <FadeIn delay={0.3} className="w-full h-full">
                    <MapWrapper locations={filteredLocations} />
                </FadeIn>
            </div>
        </main>
    );
}
