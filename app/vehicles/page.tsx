import VehicleCard from "@/components/vehicles/vehicle-card";
import VehicleFilters from "@/components/vehicles/vehicle-filters";

import StaggerContainer from "@/components/animations/stagger-container";
import StaggerItem from "@/components/animations/stagger-item";
import FadeIn from "@/components/animations/fade-in";

export default function VehiclesPage() {
    const carVehicles = [
        {
            name: "Peugeot 208",
            category: "Économique",
            image: "/vehicles/peugeot-208.png",
            price: 25000,
            seats: 5,
            bags: 2,
            transmission: "Manuelle",
            fuelType: "Essence"
        },
        {
            name: "Toyota Corolla",
            category: "Compacte",
            image: "/car.png",
            price: 35000,
            seats: 5,
            bags: 3,
            transmission: "Automatique",
            fuelType: "Hybride"
        },
        {
            name: "Peugeot 3008",
            category: "SUV",
            image: "/vehicles/toyota-rav4.png",
            price: 55000,
            seats: 5,
            bags: 4,
            transmission: "Automatique",
            fuelType: "Essence"
        },
        {
            name: "Toyota RAV4",
            category: "SUV",
            image: "/vehicles/toyota-rav4.png",
            price: 60000,
            seats: 5,
            bags: 4,
            transmission: "Automatique",
            fuelType: "Hybride"
        },
        {
            name: "Mercedes Classe C",
            category: "Luxe",
            image: "/vehicles/mercedes-c-class.png",
            price: 90000,
            seats: 5,
            bags: 4,
            transmission: "Automatique",
            fuelType: "Diesel"
        },
        {
            name: "Kaiyi X7",
            category: "SUV Luxe",
            image: "/kaiyi-x7-promo.png",
            price: 120000,
            seats: 5,
            bags: 5,
            transmission: "Automatique",
            fuelType: "Essence"
        },
    ];

    const vanVehicles = [
        {
            name: "Peugeot Partner",
            category: "Utilitaire",
            image: "https://images.hertz.com/vehicles/220x128/FR/A4_PEUGEOT_PARTNER.png",
            price: 40000,
            seats: 2,
            bags: "3m³",
            transmission: "Manuelle",
            fuelType: "Diesel"
        },
        {
            name: "Renault Master",
            category: "Utilitaire",
            image: "https://images.hertz.com/vehicles/220x128/FR/C4_RENAULT_MASTER.png",
            price: 60000,
            seats: 3,
            bags: "10m³",
            transmission: "Manuelle",
            fuelType: "Diesel"
        },
        {
            name: "Toyota Hilux",
            category: "Pick-up",
            image: "https://images.hertz.com/vehicles/220x128/FR/O_TOYOTA_HILUX_DB_CAB.png",
            price: 75000,
            seats: 5,
            bags: "Benne",
            transmission: "Manuelle",
            fuelType: "Diesel"
        },
    ];

    return (
        <main className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <FadeIn direction="down">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Notre Flotte</h1>
                        <p className="text-gray-600">Choisissez le véhicule idéal pour votre voyage ou votre activité au Sénégal.</p>
                    </FadeIn>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="w-full md:w-64 shrink-0">
                        <FadeIn delay={0.2} direction="right">
                            <VehicleFilters />
                        </FadeIn>
                    </aside>
                    <div className="flex-1">
                        <FadeIn delay={0.3}>
                            <div className="mb-6 flex justify-end">
                                <div className="text-sm font-medium text-gray-500">
                                    <span className="text-[#FFD200] font-bold">{carVehicles.length}</span> véhicules disponibles
                                </div>
                            </div>
                        </FadeIn>
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {carVehicles.map((vehicle, index) => (
                                <StaggerItem key={index} className="h-full">
                                    <VehicleCard {...vehicle} />
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </main>
    );
}
