import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function CTABanner() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-navy-900 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Need Urgent Boiler Service?</h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">Our emergency response team is available 24/7 for critical breakdowns</p>
        <Button 
          onClick={scrollToContact}
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold h-auto w-full sm:w-auto max-w-sm"
        >
          <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
          Call Emergency Service
        </Button>
      </div>
    </section>
  );
}
