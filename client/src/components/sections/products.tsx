import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import pro1 from "../../assests/product1.jpg";
import pro2 from "../../assests/product2.webp";
import pro3 from "../../assests/product3.jpg";
import pro4 from "../../assests/product4.png";
import pro5 from "../../assests/product5.avif";
import pro6 from "../../assests/product6.webp";
import pro7 from "../../assests/product7.webp";
import pro8 from "../../assests/product8.jpg";
import pro9 from "../../assests/product9.jpg";
import pro10 from "../../assests/product10.jpg";
import pro11 from "../../assests/product11.avif";
import pro12 from "../../assests/product12.avif";

export default function Products() {
  const products = [
    { title: "Studded Bed Coils", image: pro1 },
    { title: "Super Heater Coils", image: pro2 },
    { title: "Waterwall Panels", image: pro3 },
    { title: "Bank Tube Assembly", image: pro4 },
    { title: "Headers", image: pro5 },
    { title: "De-Super Heater", image: pro6 },
    { title: "Evaporator Coils", image: pro7 },
    { title: "Economizer Coils", image: pro8 },
    { title: "Swaged End Tubes", image: pro9 },
    { title: "High Freq. Spiral Fin Tube Welded Coil", image: pro10 },
    { title: "Short Radius Bend (1D & 0.65D)", image: pro11 },
    { title: "Various Types of Air Nozzles", image: pro12 }
  ];

  return (
    <section id="products" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Fabricated Products</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality fabricated products designed and manufactured to meet industrial standards
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="group shadow-xl rounded-xl overflow-hidden bg-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="relative overflow-hidden h-64">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold tracking-wide">
                    {product.title}
                  </span>
                </div>
              </div>

              <Card className="rounded-t-none border-t-0">
                <CardContent className="p-5 bg-gray-50">
                  <h3 className="text-lg font-semibold text-navy-900 transition-colors group-hover:text-orange-600">
                    {product.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
