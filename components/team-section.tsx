import Image from "next/image";

const teamMembers = [
    {
        name: "Amadou Diallo",
        role: "Directeur Général",
        image: "/team/manager.png",
        bio: "Plus de 15 ans d'expérience dans la location automobile. Amadou veille à ce que chaque client vive l'excellence Hertz."
    },
    {
        name: "Fatou Ndiaye",
        role: "Responsable Service Client",
        image: "/team/support.png",
        bio: "Toujours à l'écoute, Fatou et son équipe sont là pour répondre à toutes vos questions et faciliter vos démarches."
    },
    {
        name: "Moussa Sow",
        role: "Chef des Opérations",
        image: "/team/operations.png",
        bio: "Expert technique, Moussa garantit la fiabilité et la sécurité de notre flotte pour que vous rouliez l'esprit tranquille."
    }
];

export default function TeamSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase italic tracking-tighter">
                        L'Équipe <span className="text-[#FFD200]">Hertz Sénégal</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Derrière chaque location réussie se cache une équipe passionnée et dévouée.
                        Nous travaillons chaque jour pour vous offrir le meilleur service et des véhicules irréprochables.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group relative">
                            <div className="absolute inset-0 bg-[#FFD200] rounded-2xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 -z-10"></div>
                            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 h-full flex flex-col items-center text-center">
                                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-gray-50 shadow-inner">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-[#FFD200] font-bold text-sm tracking-wide uppercase mb-4">{member.role}</p>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
