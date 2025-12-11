"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReactNode } from "react";

export default function RecaptchaProvider({ children }: { children: ReactNode }) {
    const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    // Optional: Return children without provider if key is missing to allow dev/build without key
    if (!recaptchaKey) {
        console.warn("Recaptcha key not found, captcha disabled.");
        return <>{children}</>;
    }

    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
            {children}
        </GoogleReCaptchaProvider>
    );
}
