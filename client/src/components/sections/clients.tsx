import { motion } from "framer-motion";
import manikchandLogo from '../../assests/manikchand logo.png';
import whirlpoolLogo from "../../assests/Whirlpool logo.png";
import bekaertLogo from '../../assests/Bekaert_logo.png';
import atlasCopcoLogo from '../../assests/Atlas-Copco-logo.png';
import barcLogo from '../../assests/Bhabha_Atomic_Research_Centre_Logo.png';
import ciplaLogo from '../../assests/Cipla_logo.png';
import siGroupLogo from '../../assests/SI-Group.jpg';
import chicagoLogo from '../../assests/chicago.png';
import kalyaniLogo from '../../assests/Kalyani_Group.png';
import amcorLogo from '../../assests/AMCR.png';
import smrLogo from '../../assests/smr.png';
import sclLogo from '../../assests/scl.jpg';
import fireproLogo from '../../assests/firepro.jpg';
import finolexLogo from '../../assests/finolex.png';
import weikfieldLogo from '../../assests/weikfield.jpg';
import avhLogo from '../../assests/AVH.png';
import govindLogo from '../../assests/govind_milk.jpg'
import TransparentLogo from '../../assests/Tranparent_Energy.jpg'

export default function Clients() {
  const clientLogos = [
    { name: "Manikchand", src: manikchandLogo },
    { name: "Whirlpool", src: whirlpoolLogo },
    { name: "Bekaert", src: bekaertLogo },
    { name: "Atlas Copco", src: atlasCopcoLogo },
    { name: "BARC", src: barcLogo },
    { name: "Cipla", src: ciplaLogo },
    { name: "SI Group", src: siGroupLogo },
    { name: "Chicago Pneumatic", src: chicagoLogo },
    { name: "Kalyani", src: kalyaniLogo },
    { name: "Amcor", src: amcorLogo },
    { name: "SMR", src: smrLogo },
    { name: "SCL", src: sclLogo },
    { name: "Firepro", src: fireproLogo },
    { name: "Finolex", src: finolexLogo },
    { name: "Weikfield", src: weikfieldLogo },
    { name: "AVH", src: avhLogo },
    { name: "Govind", src: govindLogo },
    { name: "Transparent", src: TransparentLogo}
  ];

  const sectors = [
    "Energy", "Infrastructure", "Steel",
    "Construction", "EPC (Engineering, Procurement & Construction)", "Renewable Energy"
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Trusted by Leading Companies</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We proudly serve India’s top industrial and manufacturing clients.
          </p>
        </div>

        {/* Logo Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-16 object-contain   hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Sector Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Industry Sectors We Serve</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((sector, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform"
              >
                {sector}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
