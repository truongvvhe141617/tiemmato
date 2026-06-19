import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CameraShowcase from "@/components/CameraShowcase";
import PricingTable from "@/components/PricingTable";
import HowToRent from "@/components/HowToRent";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      {/* Skip navigation — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-mato-orange focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Bỏ qua điều hướng
      </a>

      <Header />
      <main id="main-content">
        <Hero />
        <CameraShowcase />
        <PricingTable />
        <HowToRent />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
