import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface OfferProps {
    title: string;
    description: string;
    image: string;
    validUntil: string;
    tag: string;
}

export default function OfferCard({
    title,
    description,
    image,
    validUntil,
    tag
}: OfferProps) {
    return (
        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group rounded-3xl bg-gray-50">
            <div className="relative aspect-video overflow-hidden m-2 rounded-2xl w-[calc(100%-16px)] mx-auto mt-2">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-black px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm rounded-full border border-gray-100">
                    {tag}
                </div>
            </div>

            <CardHeader className="pb-2 px-6 pt-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors mb-1">{title}</h3>
            </CardHeader>

            <CardContent className="grow px-6 pb-6 pt-0">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

                <div className="flex items-center gap-2 text-xs text-gray-500 font-bold bg-white w-fit px-3 py-1 rounded-full border border-gray-100">
                    <Clock className="w-3.5 h-3.5 text-[#FFD200]" />
                    <span>Valable jusqu'au {validUntil}</span>
                </div>
            </CardContent>

            <CardFooter className="px-6 pb-6 pt-0">
                <Link href="/offers" className="w-full">
                    <Button className="w-full bg-black text-white hover:bg-[#FFD200] hover:text-black font-bold h-10 text-sm rounded-lg transition-all shadow-sm hover:shadow-md">
                        VOIR L'OFFRE <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
