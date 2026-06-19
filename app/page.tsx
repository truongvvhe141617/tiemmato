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
    <main>
      <Header />
      <Hero />
      <CameraShowcase />
      <PricingTable />
      <HowToRent />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
