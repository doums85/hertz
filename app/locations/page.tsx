import LocationsClient from "./locations-client";

export const metadata = {
    title: "Nos Agences - Hertz Sénégal",
    description: "Trouvez l'agence Hertz la plus proche de vous au Sénégal. Dakar, AIBD, Saly.",
};

export default function LocationsPage() {
    return <LocationsClient />;
}
