import { Flame, Factory, Slice, Search, Wrench, CheckCircle, Download, Hammer, ActivitySquare, CheckCheck, Ruler, LayoutDashboard, ScanLine, Drill, RotateCcw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import img1 from "../../assests/infra_img1.jpeg";
import img2 from "../../assests/infra_img2.jpg";
import img3 from "../../assests/infra_img3.jpg";
import { motion } from "framer-motion";

export default function Infrastructure() {
  const equipment = [
    { icon: <Hammer className="h-5 w-5" />, name: "Studding work for bed evaporator tubes" },
    { icon: <ActivitySquare className="h-5 w-5" />, name: "Serpentine bends of economiser coil" },
    { icon: <CheckCheck className="h-5 w-5" />, name: "Quality Control" },
    { icon: <Ruler className="h-5 w-5" />, name: "Layout checking (Studded bed coil)" },
    { icon: <LayoutDashboard className="h-5 w-5" />, name: "Layout making" },
    { icon: <ScanLine className="h-5 w-5" />, name: "Bend quality check" },
    { icon: <RotateCcw className="h-5 w-5" />, name: "100NB CNC tube bending machine" },
    { icon: <Drill className="h-5 w-5" />, name: "Header drilling" }
  ];

  const protocols = [
    "ISO Quality Management System",
    "IBR Compliance Standards",
    "ASME Code Requirements",
    "Comprehensive Safety Training"
  ];

  return (
    <section id="infrastructure" className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Infrastructure & Facilities</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities and equipment ensuring quality and precision in every project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Text and Features */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-semibold text-orange-600 mb-6">Key Equipment</h4>

            <div className="space-y-5 mb-10">
              {equipment.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-orange-600 bg-orange-100 p-2 rounded-full transition-transform group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Quality Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-navy-900 mb-4">Quality & Safety Protocols</h4>
                  <ul className="space-y-3 text-gray-700">
                    {protocols.map((protocol, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="text-green-600 mr-2 h-5 w-5" />
                        {protocol}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Brochure Button */}
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button variant="link" className="text-orange-600 hover:text-orange-700 px-0">
                <Download className="mr-2 h-5 w-5" />
                Download Company Brochure
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Images */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={img1}
              alt="Main Factory"
              className="rounded-2xl shadow-xl w-full object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            <div className="grid grid-cols-2 gap-4">
              <motion.img
                src={img2}
                alt="Welding"
                className="rounded-xl shadow-md w-full h-44 object-cover"
                whileHover={{ scale: 1.03 }}
              />
              <motion.img
                src={img3}
                alt="Equipment"
                className="rounded-xl shadow-md w-full h-44 object-cover"
                whileHover={{ scale: 1.03 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
