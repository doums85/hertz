import { Card, CardContent } from "@/components/ui/card";
import { Check, Globe, Shield } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import StaggerItem from "@/components/animations/stagger-item";

export default function WhyHertzSection() {
    const features = [
        {
            icon: Check,
            title: "Flexibilité totale",
            description: "Modifiez ou annulez votre réservation jusqu'à 24h avant la prise en charge."
        },
        {
            icon: Globe,
            title: "Présence nationale",
            description: "Des agences dans tout le Sénégal : Dakar, Saint-Louis, Saly, et plus encore."
        },
        {
            icon: Shield,
            title: "Véhicules fiables",
            description: "Une flotte moderne et bien entretenue pour votre sécurité et confort."
        }
    ];

    return (
        <section className="py-16 px-4 bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <FadeIn direction="down" duration={0.6} className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase italic tracking-tighter text-center">
                        Pourquoi choisir <span className="text-[#FFD200]">Hertz</span> ?
                    </h2>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <StaggerItem key={index} className="h-full">
                            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                                <CardContent className="p-8 text-center h-full flex flex-col items-center">
                                    <div className="mb-6 flex justify-center">
                                        <div className="bg-yellow-400 rounded-full p-4">
                                            <feature.icon className="w-8 h-8 text-black" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
