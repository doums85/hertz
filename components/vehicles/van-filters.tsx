"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function VanFilters() {
    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <span className="w-1 h-6 bg-[#FFD200]"></span>
                    Filtrer par
                </h3>

                <Accordion type="multiple" defaultValue={["category", "price", "transmission"]} className="w-full">
                    <AccordionItem value="category" className="border-b-0 mb-4">
                        <AccordionTrigger className="hover:no-underline hover:text-[#FFD200] font-bold text-gray-800">Catégorie</AccordionTrigger>
                        <AccordionContent className="space-y-3 pt-2">
                            {["Camionnette", "Fourgon", "Pick-up", "Benne", "Frigorifique"].map((cat) => (
                                <div key={cat} className="flex items-center space-x-2">
                                    <Checkbox id={`cat-${cat}`} />
                                    <Label htmlFor={`cat-${cat}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                        {cat}
                                    </Label>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="price" className="border-b-0 mb-4">
                        <AccordionTrigger className="hover:no-underline hover:text-[#FFD200] font-bold text-gray-800">Prix par jour</AccordionTrigger>
                        <AccordionContent className="pt-4 px-2">
                            <Slider defaultValue={[50000]} max={200000} step={5000} className="mb-4" />
                            <div className="flex justify-between text-xs font-medium text-gray-500">
                                <span>20k FCFA</span>
                                <span>200k+ FCFA</span>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="transmission" className="border-b-0">
                        <AccordionTrigger className="hover:no-underline hover:text-[#FFD200] font-bold text-gray-800">Transmission</AccordionTrigger>
                        <AccordionContent className="space-y-3 pt-2">
                            {["Manuelle", "Automatique"].map((trans) => (
                                <div key={trans} className="flex items-center space-x-2">
                                    <Checkbox id={`trans-${trans}`} />
                                    <Label htmlFor={`trans-${trans}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                        {trans}
                                    </Label>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
