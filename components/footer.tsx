import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
    const footerLinks = {
        "À propos": [
            "Notre histoire",
            "Carrières",
            "Presse",
            "Investisseurs"
        ],
        "Services": [
            "Location de voiture",
            "Location longue durée",
            "Services aux entreprises",
            "Assurances"
        ],
        "Aide": [
            "FAQ",
            "Nous contacter",
            "Gérer ma réservation",
            "Conditions générales"
        ],
        "Destinations": [
            "Dakar",
            "Saint-Louis",
            "Saly",
            "Thiès"
        ]
    };

    return (
        <footer className="bg-gray-900 text-white">


            <div className="container mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-bold text-lg mb-4 text-yellow-400">
                                {category}
                            </h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link
                                            href="#"
                                            className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex gap-6">
                            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                                <Facebook className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                                <Instagram className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                                <Twitter className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </Link>
                        </div>
                        <div className="text-sm text-gray-400 text-center md:text-right">
                            <p>© 2024 Hertz Sénégal. Tous droits réservés.</p>
                            <div className="flex gap-4 mt-2 justify-center md:justify-end">
                                <Link href="#" className="hover:text-yellow-400 transition-colors">
                                    Politique de confidentialité
                                </Link>
                                <span>•</span>
                                <Link href="#" className="hover:text-yellow-400 transition-colors">
                                    Mentions légales
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Senegal Flag Bottom Line */}
            <div className="w-full h-3 flex text-[10px]">
                <div className="h-full w-1/3 bg-[#00853F]"></div>
                <div className="h-full w-1/3 bg-[#FDEF42] flex items-center justify-center relative">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#00853F] h-2.5 w-2.5 absolute">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>
                <div className="h-full w-1/3 bg-[#E31B23]"></div>
            </div>
        </footer>
    );
}
