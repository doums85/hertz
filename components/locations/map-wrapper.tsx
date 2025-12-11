"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

const LocationsMap = dynamic(() => import("./locations-map"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
            <MapPin className="w-10 h-10 animate-bounce" />
        </div>
    ),
});

export default function MapWrapper() {
    return <LocationsMap />;
}
