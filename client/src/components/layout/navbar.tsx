import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../assests/logo (2).png";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Products", id: "products" },
  { label: "Infrastructure", id: "infrastructure" },
  { label: "Clients", id: "clients" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
              >
                {label}
              </button>
            ))}
            <Button onClick={() => scrollToSection("contact")} className="bg-orange-500 hover:bg-orange-600 text-white">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-4 py-3 space-y-2">
            {NAV_ITEMS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left text-gray-700 hover:text-orange-500 text-sm font-medium px-3 py-2"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-orange-500 font-semibold px-3 py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
