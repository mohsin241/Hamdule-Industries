import { Button } from "@/components/ui/button";
import { SiLinkedin, SiX, SiYoutube } from "react-icons/si";
import logo from "../../assests/footer_logo.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            {/* <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">JH</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">
                  <span className="text-orange-500">JAI HIND</span> Welding & Boiler Repair
                </div>
              </div>
            </div> */}
            <div className="mb-4">
              <img
                src={logo}
                alt="Hamdule Industries Logo"
                className=" h-14 md:h-16 lg:h-20 w-auto object-contain bg-white"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading IBR approved boiler contractor in India since 1952.
              Trusted by major industries for boiler breakdown, repair, and
              fabrication services.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                className="bg-orange-600 hover:bg-orange-700 p-2"
              >
                <SiLinkedin className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                className="bg-orange-600 hover:bg-orange-700 p-2"
              >
                <SiX className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                className="bg-orange-600 hover:bg-orange-700 p-2"
              >
                <SiYoutube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-orange-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-orange-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="hover:text-orange-500 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("infrastructure")}
                  className="hover:text-orange-500 transition-colors"
                >
                  Infrastructure
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("clients")}
                  className="hover:text-orange-500 transition-colors"
                >
                  Clients
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="hover:text-orange-500 transition-colors cursor-pointer">
                  Boiler Repair
                </span>
              </li>
              <li>
                <span className="hover:text-orange-500 transition-colors cursor-pointer">
                  Emergency Service
                </span>
              </li>
              <li>
                <span className="hover:text-orange-500 transition-colors cursor-pointer">
                  Installation
                </span>
              </li>
              <li>
                <span className="hover:text-orange-500 transition-colors cursor-pointer">
                  Maintenance
                </span>
              </li>
              <li>
                <span className="hover:text-orange-500 transition-colors cursor-pointer">
                  IBR Inspection
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; 2024 Jai Hind Welding and Boiler Repair Works. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
