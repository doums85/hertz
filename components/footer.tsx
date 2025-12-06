import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import StaggerItem from "@/components/animations/stagger-item";

export default function Footer() {
    const footerLinks = {
        "Découvrir": [
            "Notre histoire",
            "Nos véhicules",
            "Nos agences",
            "Blog Voyage",
            "Développement durable"
        ],
        "Locations": [
            "Voitures de luxe",
            "4x4 & SUV",
            "Utilitaires",
            "Location chauffeur",
            "L.L.D Entreprise"
        ],
        "Support": [
            "Centre d'aide",
            "Gérer ma réservation",
            "Objets trouvés",
            "Assurances",
            "Contact"
        ]
    };

    return (
        <footer className="bg-gray-50 text-gray-900 relative overflow-hidden border-t border-gray-200">
            {/* Ambient Background Glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FFD200] opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 py-12 relative z-10 max-w-7xl">
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Brand Column */}
                    <StaggerItem className="lg:col-span-2 space-y-4">
                        <div className="flex items-end gap-2">
                            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
                            <span className="text-[#FFD200] font-bold text-2xl font-sans uppercase tracking-wider">Sénégal</span>
                        </div>
                        <p className="text-gray-600 max-w-sm leading-relaxed text-base">
                            Plus qu'une location de voiture, une expérience de liberté.
                            Découvrez le Sénégal avec le confort et la fiabilité d'un leader mondial.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#FFD200] hover:text-black hover:border-[#FFD200] transition-all duration-300 shadow-sm"
                                >
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </StaggerItem>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <StaggerItem key={category}>
                            <h4 className="font-bold mb-4 text-gray-900 uppercase tracking-wider text-sm flex items-center gap-2">
                                <span className="w-6 h-0.5 bg-[#FFD200]"></span>
                                {category}
                            </h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link
                                            href="#"
                                            className="text-gray-600 hover:text-[#FFD200] hover:pl-1 transition-all duration-300 text-sm font-medium block"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Contact & Info */}
                <StaggerContainer delay={0.2} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-6 border-t border-gray-200">
                    <StaggerItem className="md:col-span-3 flex items-center gap-3 text-gray-600 hover:text-black transition-colors cursor-pointer group">
                        <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#FFD200] group-hover:scale-105 transition-transform shadow-sm flex-shrink-0">
                            <Phone className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Service Client</p>
                            <p className="font-bold text-gray-900 text-base whitespace-nowrap">+221 33 820 11 11</p>
                        </div>
                    </StaggerItem>

                    <StaggerItem className="md:col-span-4 flex items-center gap-3 text-gray-600 hover:text-black transition-colors cursor-pointer group">
                        <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#FFD200] group-hover:scale-105 transition-transform shadow-sm flex-shrink-0">
                            <Mail className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Email</p>
                            <p className="font-bold text-gray-900 text-base">hertz@hertz.sn</p>
                        </div>
                    </StaggerItem>

                    <StaggerItem className="md:col-span-5 flex items-center gap-3 text-gray-600 hover:text-black transition-colors cursor-pointer group">
                        <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#FFD200] group-hover:scale-105 transition-transform shadow-sm flex-shrink-0">
                            <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Siège</p>
                            <p className="font-bold text-gray-900 text-base leading-tight">102 Rue Joseph Gomis X Amadou Assane Ndoye, <br className="hidden md:block" /> BP2302 Dakar</p>
                        </div>
                    </StaggerItem>
                </StaggerContainer>

                <FadeIn delay={0.4} className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
                    <p>© {new Date().getFullYear()} Hertz Sénégal.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-[#FFD200] transition-colors">Politique de confidentialité</Link>
                        <Link href="#" className="hover:text-[#FFD200] transition-colors">CGV</Link>
                        <Link href="#" className="hover:text-[#FFD200] transition-colors">Mentions légales</Link>
                    </div>
                </FadeIn>
            </div>

            {/* Senegal Flag Bottom Line - Refined */}
            <div className="w-full h-2 flex opacity-90 transition-opacity duration-300">
                <div className="h-full w-1/3 bg-[#00853F]"></div>
                <div className="h-full w-1/3 bg-[#FDEF42] flex items-center justify-center relative overflow-hidden">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#00853F] h-full w-auto py-px relative z-10">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>
                <div className="h-full w-1/3 bg-[#E31B23]"></div>
            </div>
        </footer>
    );
}
