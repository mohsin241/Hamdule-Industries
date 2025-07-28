import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../assests/hamdule logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              {/* <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center">
                <span className="text-orange-500 font-bold text-lg">JH</span>
              </div> */}
              {/* <div className="hidden sm:block">
                <div className="text-navy-900 font-bold text-lg leading-tight">
                  <div><span className="text-orange-600">JAI HIND</span></div>
                  <div className="text-sm text-gray-600">Welding & Boiler Repair</div>
                </div>
              </div> */}
              <div>
                <img src={logo} alt="Hamdule Industries Logo"  className="h-10 w-auto object-contain" />
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-navy-900 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection("infrastructure")}
                className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Infrastructure
              </button>
              <button 
                onClick={() => scrollToSection("clients")}
                className="text-gray-600 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Clients
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-orange-600 text-white hover:bg-orange-700"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-orange-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 text-navy-900 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-600"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-600"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-600"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection("infrastructure")}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-600"
            >
              Infrastructure
            </button>
            <button 
              onClick={() => scrollToSection("clients")}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-orange-600"
            >
              Clients
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-orange-600 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
