"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, FormEvent } from "react";
import ContactFormUI from "@/components/contact/contact-form-ui";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import RecaptchaProvider from "@/components/providers/recaptcha-provider";

function FormWithLogic() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            // Only verify if hook is ready
            if (executeRecaptcha) {
                const token = await executeRecaptcha("contact_form");
                console.log("Captcha Token:", token);
            }

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus("success");

        } catch (error) {
            console.error("Submit error:", error);
            setStatus("error");
        } finally {
            if (status !== "success") setStatus("idle");
        }
    };

    return <ContactFormUI onSubmit={handleSubmit} status={status} />;
}

export default function ContactPage() {
    return (
        <main className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contactez-nous</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Une question ? Besoin d'assistance ? Notre équipe est à votre écoute pour vous accompagner.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="border-none shadow-md h-full">
                            <CardContent className="p-6 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FFD200]/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-[#FFD200]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                                        <p className="text-gray-600 text-sm mb-2">Du Lundi au Samedi, 8h - 18h</p>
                                        <a href="tel:+221338201111" className="text-lg font-bold text-gray-900 hover:text-[#FFD200] transition-colors">
                                            +221 33 820 11 11
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FFD200]/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-[#FFD200]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600 text-sm mb-2">Nous répondons sous 24h</p>
                                        <a href="mailto:hertz@hertz.sn" className="text-lg font-bold text-gray-900 hover:text-[#FFD200] transition-colors">
                                            hertz@hertz.sn
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FFD200]/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-[#FFD200]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Siège Social</h3>
                                        <address className="not-italic text-gray-600 text-sm leading-relaxed">
                                            102 Rue Joseph Gomis<br />
                                            X Amadou Assane Ndoye<br />
                                            BP 2302 Dakar, Sénégal
                                        </address>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="border-none shadow-md h-full">
                            <CardContent className="p-8">
                                <RecaptchaProvider>
                                    <FormWithLogic />
                                </RecaptchaProvider>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}
