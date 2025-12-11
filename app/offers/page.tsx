import OfferCard from "@/components/offers/offer-card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import StaggerItem from "@/components/animations/stagger-item";

export default function OffersPage() {
    const offers = [
        {
            title: "Week-end Évasion",
            description: "Profitez de 20% de réduction sur vos locations le week-end. Partez l'esprit tranquille avec notre couverture complète incluse.",
            image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000",
            validUntil: "31 Déc. 2025",
            tag: "Populaire"
        },
        {
            title: "Offre Business",
            description: "Des tarifs préférentiels pour vos déplacements professionnels. Flexibilité totale et surclassement selon disponibilité.",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000",
            validUntil: "Permanent",
            tag: "Pro"
        },
        {
            title: "Location Longue Durée",
            description: "Besoin d'un véhicule pour plus d'un mois ? Découvrez nos offres LLD sans engagement avec maintenance incluse.",
            image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000",
            validUntil: "Permanent",
            tag: "Exclusif"
        },
        {
            title: "Dernière Minute",
            description: "Réservez moins de 48h à l'avance et bénéficiez de tarifs réduits sur une sélection de véhicules.",
            image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1000",
            validUntil: "15 Jan. 2026",
            tag: "Promo"
        },
    ];

    return (
        <main className="bg-white min-h-screen pb-20">
            {/* Hero Header */}
            <div className="bg-[#1c1c1c] text-white py-16 px-4 mb-12 relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <FadeIn direction="down">
                        <Badge className="bg-[#FFD200] text-black hover:bg-[#FFD200] mb-6 px-4 py-1.5 border-0 rounded-full text-xs font-bold shadow-glow uppercase tracking-wider">Bons Plans</Badge>
                        <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 text-white">Nos Offres <span className="text-[#FFD200]">Spéciales</span></h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Des réductions exclusives et des avantages pensés pour vous. Ne manquez pas nos meilleures opportunités.</p>
                    </FadeIn>
                </div>

                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD200] opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offers.map((offer, index) => (
                        <StaggerItem key={index} className="h-full">
                            <OfferCard {...offer} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </main>
    );
}
