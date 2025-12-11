import Link from "next/link";
import Image from "next/image";
import { Users, Briefcase, Fuel, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VehicleProps {
    name: string;
    category: string;
    image: string;
    price: number;
    seats: number;
    bags: number | string;
    transmission: string;
    fuelType: string;
}

export default function VehicleCard({
    name,
    category,
    image,
    price,
    seats,
    bags,
    transmission,
    fuelType,
}: VehicleProps) {
    return (
        <div className="group h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden hover:-translate-y-2">
            {/* Image Area */}
            <div className="relative aspect-video overflow-hidden bg-gray-50 flex items-center justify-center">
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={250}
                    className="object-contain p-4 transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800 shadow-sm border border-gray-100">
                    {category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
                <div className="w-12 h-1 bg-[#FFD200] mb-4"></div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-[#FFD200]" />
                        <span>{seats} places</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Briefcase className="w-4 h-4 text-[#FFD200]" />
                        <span>{typeof bags === 'number' ? `${bags} valises` : bags}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Gauge className="w-4 h-4 text-[#FFD200]" />
                        <span>{transmission}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Fuel className="w-4 h-4 text-[#FFD200]" />
                        <span>{fuelType}</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-4">
                    <div className="text-sm font-bold text-gray-900">
                        A partir de {price.toLocaleString('fr-FR')} FCFA/jour
                    </div>
                    <Link href="/locations" className="w-full">
                        <Button className="w-full bg-black text-white hover:bg-[#FFD200] hover:text-black transition-colors font-bold rounded-lg h-12">
                            Réserver ce véhicule
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
