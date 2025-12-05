import ModernHeroBanner from "@/components/hero-banner";
import WhyHertzSection from "@/components/why-hertz-section";

import VehicleSection from "@/components/vehicle-section";
import DestinationsSection from "@/components/destinations-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

import PromoBanner from "@/components/promo-banner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ModernHeroBanner />
      <PromoBanner />
      <WhyHertzSection />
      <VehicleSection />
      {/* <TeamSection /> */}
      <DestinationsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
