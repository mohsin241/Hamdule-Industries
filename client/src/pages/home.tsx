import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Specializations from "@/components/sections/specializations";
import CTABanner from "@/components/sections/cta-banner";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Products from "@/components/sections/products";
import Infrastructure from "@/components/sections/infrastructure";
import Clients from "@/components/sections/clients";
import Contact from "@/components/sections/contact";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import ScrollToTop from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Specializations />
        <CTABanner />
        <About />
        <Services />
        <Products />
        <Infrastructure />
        <Clients />
        <Contact />
      </main>
      <Footer />
      {/* <WhatsAppButton /> */}
      <ScrollToTop />
    </div>
  );
}
