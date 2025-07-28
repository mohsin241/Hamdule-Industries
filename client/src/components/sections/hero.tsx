

import { Button } from "@/components/ui/button";
import { Wrench, Phone } from "lucide-react";
import { motion } from "framer-motion";
import img from "../../assests/vecteezy_large-copper-boiler-room-with-pipes-and-valves-displaying_55303615.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url(${img})`
        }}
      />

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">D</span>
          elivering{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">R</span>
          esults,{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">R</span>
          eliability &{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">R</span>
          ock{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">S</span>
          olid{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">D</span>
          ependability
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Leading IBR approved boiler contractor in India since 1952. Trusted by major industries for boiler breakdown, repair, and fabrication services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection("services")}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold h-auto w-full sm:w-auto shadow-md"
          >
            <Wrench className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
            Our Services
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold h-auto w-full sm:w-auto transition-colors"
          >
            <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
            Get Quote
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
