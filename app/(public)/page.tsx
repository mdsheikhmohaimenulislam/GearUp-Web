import CategorySection from "@/components/shared/CategorySection";
import FeaturedProviders from "@/components/shared/FeaturedProviders";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import HomeTopGears from "@/components/shared/HomeTopGears";
import HowItWorks from "@/components/shared/HowItWorks";
import RentalBanner from "@/components/shared/RentalBanner";
import StatsSection from "@/components/shared/StatsSection";

import HeroSection from "@/components/shared/HeroSection";

import Testimonials from "@/components/shared/Testimonials";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import UpcomingAdventures from "@/components/shared/UpcomingAdventures";

export default async function Home() {
  return (
    <>
      <Hero />
      <HomeTopGears />
      <FeaturedProviders />
      <HeroSection />

      <CategorySection />
      <HowItWorks />
      <RentalBanner />
      <UpcomingAdventures />
      <StatsSection />

      <Footer />
    </>
  );
}
