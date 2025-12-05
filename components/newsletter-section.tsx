
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/fade-in";

export default function NewsletterSection() {
    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Background Elements */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url('/patterns/wax.png')`,
                    backgroundSize: '400px',
                    backgroundRepeat: 'repeat'
                }}
            ></div>

            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD200]/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: "1s" }}></div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text and Stats */}
                        <FadeIn
                            direction="left"
                            duration={0.8}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD200]/10 border border-[#FFD200]/20 text-[#FFD200] text-sm font-bold uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-[#FFD200] animate-pulse"></span>
                                Hertz Sénégal Community
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase italic tracking-tighter">
                                Dalal Ak <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD200] via-yellow-400 to-[#FFD200]">Jam !</span>
                            </h2>

                            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-md leading-relaxed">
                                Rejoignez notre communauté pour recevoir nos meilleures offres et découvrir les trésors cachés du Sénégal.
                            </p>

                            <div className="flex items-center gap-8 pt-4">
                                <div>
                                    <p className="text-3xl font-black text-white">5k+</p>
                                    <p className="text-gray-500 text-sm font-bold uppercase tracking-wide">Abonnés</p>
                                </div>
                                <div className="w-px h-12 bg-gray-800"></div>
                                <div>
                                    <p className="text-3xl font-black text-white">100%</p>
                                    <p className="text-gray-500 text-sm font-bold uppercase tracking-wide">Sénégal</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Form Card */}
                        <FadeIn
                            direction="right"
                            duration={0.8}
                            className="relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD200] to-green-600 rounded-2xl blur opacity-20 animate-pulse"></div>
                            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl shadow-2xl">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-gray-300 uppercase tracking-wide">Votre email</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="exemple@email.com"
                                                className="bg-black/50 border-gray-700 text-white pl-10 h-12 focus:border-[#FFD200] focus:ring-[#FFD200]/20 rounded-xl transition-all"
                                            />
                                        </div>
                                    </div>
                                    <Button className="w-full h-12 bg-[#FFD200] hover:bg-white text-black font-black text-lg uppercase tracking-wide rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                                        S'inscrire <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section >
    );
}
