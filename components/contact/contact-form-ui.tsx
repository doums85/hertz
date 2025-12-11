"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormEvent } from "react";

interface ContactFormProps {
    onSubmit: (e: FormEvent) => void;
    status: "idle" | "submitting" | "success" | "error";
}

export default function ContactFormUI({ onSubmit, status }: ContactFormProps) {
    return (
        <form className="space-y-6" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="firstname">Prénom</Label>
                    <Input id="firstname" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastname">Nom</Label>
                    <Input id="lastname" placeholder="Votre nom" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" placeholder="+221 77 000 00 00" />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="L'objet de votre demande" />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="min-h-[150px]"
                />
            </div>

            <Button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full md:w-auto bg-[#FFD200] text-black hover:bg-black hover:text-white font-bold h-12 px-8 transition-colors disabled:opacity-50"
            >
                <Send className="w-4 h-4 mr-2" />
                {status === "submitting" ? "Envoi..." : status === "success" ? "Message Envoyé !" : "Envoyer le message"}
            </Button>

            <p className="text-xs text-gray-400 mt-4 leading-tight">
                Ce site est protégé par reCAPTCHA et la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Politique de confidentialité</a> et les <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Conditions d'utilisation</a> de Google s'appliquent.
            </p>
            {status === "success" && (
                <p className="text-green-600 font-medium mt-2">Votre message a bien été envoyé. Nous vous répondrons sous peu.</p>
            )}
            {status === "error" && (
                <p className="text-red-500 font-medium mt-2">Une erreur est survenue. Veuillez réessayer.</p>
            )}
        </form>
    );
}
