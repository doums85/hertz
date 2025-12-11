import VehicleCard from "@/components/vehicles/vehicle-card";
import VanFilters from "@/components/vehicles/van-filters";

export default function UtilsPage() {
    const vehicles = [
        {
            name: "Hyundai H1",
            category: "Minibus",
            image: "/vehicles/hyundai-h1.png",
            price: 55000,
            seats: 9,
            bags: 8,
            transmission: "Manuelle",
            fuelType: "Diesel"
        },
        {
            name: "Mitsubishi L200",
            category: "Pick-up 4x4",
            image: "/vehicles/mitsubishi-l200.png",
            price: 60000,
            seats: 5,
            bags: "Benne",
            transmission: "Manuelle",
            fuelType: "Diesel"
        },
    ];

    return (
        <main className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar */}
                    <aside className="w-full md:w-64 shrink-0">
                        <VanFilters />
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        <div className="mb-8 flex justify-between items-center">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">Nos Utilitaires</h1>
                                <p className="text-gray-600">Des véhicules robustes pour tous vos besoins professionnels et déménagements.</p>
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                <span className="text-[#FFD200] font-bold">{vehicles.length}</span> véhicules disponibles
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {vehicles.map((vehicle, index) => (
                                <VehicleCard key={index} {...vehicle} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
