"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon in Next.js
const customIcon = new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C7.58 0 4 3.58 4 8C4 13.54 12 24 12 24C12 24 20 13.54 20 8C20 3.58 16.42 0 12 0Z" fill="#FFD200"/>
            <circle cx="12" cy="8" r="3.5" fill="black"/>
        </svg>
    `)}`,
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    shadowSize: [41, 41]
});

interface Location {
    name: string;
    coordinates: [number, number];
    address: string;
    phone: string;
}

const locations: Location[] = [
    {
        name: "Aéroport International Blaise Diagne (AIBD)",
        coordinates: [14.671, -17.073],
        address: "Dakar, Sénégal",
        phone: "+221 33 820 11 11"
    },
    {
        name: "Agence Centre-Ville Dakar",
        coordinates: [14.670, -17.430], // Approximate center/Gomis coords
        address: "102 Rue Joseph Gomis",
        phone: "+221 33 820 11 11"
    },
    {
        name: "Saly Portudal",
        coordinates: [14.443, -16.992],
        address: "Route de la résidence du port",
        phone: "+221 33 957 11 11"
    }
];

export default function LocationsMap() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <p className="text-gray-500 animate-pulse">Chargement de la carte...</p>
            </div>
        );
    }

    return (
        <MapContainer
            center={[14.55, -17.2]} // Centered between Dakar and Saly roughly
            zoom={10}
            style={{ height: "100%", width: "100%" }}
            className="z-0"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc, index) => (
                <Marker key={index} position={loc.coordinates} icon={customIcon}>
                    <Popup>
                        <div className="p-2">
                            <h3 className="font-bold text-sm mb-1">{loc.name}</h3>
                            <p className="text-xs text-gray-600 mb-1">{loc.address}</p>
                            <p className="text-xs font-semibold text-[#FFD200]">{loc.phone}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
