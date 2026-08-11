import CategorySection from "@/components/shared/CategorySection";
import FeaturedProviders from "@/components/shared/FeaturedProviders";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import HomeTopGears from "@/components/shared/HomeTopGears";
import HowItWorks from "@/components/shared/HowItWorks";
import RentalBanner from "@/components/shared/RentalBanner";
// import StatsSection from "@/components/shared/StatsSection";
import Testimonials from "@/components/shared/Testimonials";
import WhyChooseUs from "@/components/shared/WhyChooseUs";

export default async function Home() {
  return (
    <>
      <Hero />
      <HomeTopGears />
      <FeaturedProviders />
      <RentalBanner />
      <HowItWorks />
      <WhyChooseUs />
      <CategorySection />

      {/* <StatsSection /> */}
      <Footer />
    </>
  );
}
