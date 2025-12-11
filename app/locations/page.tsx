import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import MapWrapper from "@/components/locations/map-wrapper";

export default function LocationsPage() {
    const locations = [
        {
            name: "Aéroport International Blaise Diagne (AIBD)",
            address: "Dakar, Sénégal",
            phone: "+221 33 820 11 11",
            hours: "24h/24, 7j/7",
            type: "Aéroport"
        },
        {
            name: "Agence Centre-Ville Dakar",
            address: "102 Rue Joseph Gomis",
            phone: "+221 33 820 11 11",
            hours: "Lun - Ven: 08:00 - 18:00, Sam: 09:00 - 13:00",
            type: "Ville"
        },
        {
            name: "Saly Portudal",
            address: "Route de la résidence du port",
            phone: "+221 33 957 11 11",
            hours: "Lun - Sam: 09:00 - 17:00",
            type: "Ville"
        }
    ];

    return (
        <main className="min-h-screen flex flex-col md:flex-row h-screen-minus-header">
            {/* List Side */}
            <div className="w-full md:w-1/3 lg:w-[400px] bg-white border-r border-gray-200 overflow-y-auto h-full z-10 shadow-xl">
                <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
                    <h1 className="text-2xl font-extrabold uppercase tracking-tight mb-2">Nos Agences</h1>
                    <p className="text-sm text-gray-500">Trouvez l'agence Hertz la plus proche de vous au Sénégal.</p>
                </div>

                <div className="divide-y divide-gray-100">
                    {locations.map((loc, index) => (
                        <div key={index} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-[#FFD200] transition-colors">{loc.name}</h3>
                                <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded-sm">{loc.type}</span>
                            </div>

                            <div className="space-y-3 mt-4">
                                <div className="flex items-start gap-3 text-sm text-gray-600">
                                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                                    <span className="leading-snug">{loc.address}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                                    <span>{loc.hours}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                                    <span>{loc.phone}</span>
                                </div>
                            </div>

                            <div className="mt-6 flex gap-2">
                                <Button size="sm" variant="outline" className="w-full border-gray-300 hover:border-[#FFD200] hover:bg-[#FFD200] hover:text-black transition-colors">
                                    <Navigation className="w-3 h-3 mr-2" /> Itinéraire
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Map Placeholder Side */}
            {/* Map Side */}
            <div className="flex-1 bg-gray-100 relative min-h-[50vh] md:min-h-auto">
                <MapWrapper />
            </div>
        </main>
    );
}
