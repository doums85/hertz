import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

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
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD200]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD200]/10 border border-[#FFD200]/20 text-[#FFD200] font-medium text-sm mb-4">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD200] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD200]"></span>
                                </span>
                                Newsletter Exclusive
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-tight">
                                DALAL AK <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD200] to-yellow-500">JAM !</span>
                            </h2>

                            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                                Rejoignez le club Hertz Sénégal. Recevez nos meilleures offres de location et nos secrets de voyage directement dans votre boîte mail.
                            </p>

                            <div className="flex gap-4 pt-4">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-white">5k+</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">Abonnés</span>
                                </div>
                                <div className="w-px h-12 bg-gray-800"></div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-white">100%</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">Senegal</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD200] via-orange-500 to-green-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-[#FFD200] flex items-center justify-center shadow-lg shadow-yellow-500/20">
                                        <Mail className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-xl">Restez connecté</h3>
                                        <p className="text-gray-400 text-sm">Pas de spam, promis.</p>
                                    </div>
                                </div>

                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="votre@email.com"
                                            className="w-full bg-black/50 border border-zinc-700 text-white placeholder:text-zinc-600 px-6 py-4 rounded-xl focus:outline-none focus:border-[#FFD200] focus:ring-1 focus:ring-[#FFD200] transition-all"
                                        />
                                    </div>
                                    <Button className="w-full bg-[#FFD200] hover:bg-yellow-400 text-black font-black text-lg h-14 rounded-xl transition-all group">
                                        S'inscrire maintenant
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
