import { Tag, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutImg from "../../assests/about_us_img.png";
import aboutimg2 from "../../assests/Screenshot 2025-07-28 191622.png"
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 lg:py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* Text Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              About <span className="text-orange-500">Hamdule Industries</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hamdule Industries positions itself as{" "}
              <span className="text-orange-500 font-semibold">
                "Turnkey Solution Provider"
              </span>{" "}
              in the Heavy Fabrication Industry. We offer on-site installation
              of Utility & Process Piping for the Process Industries and
              Commercial Establishments across India, Southeast Asia, Middle
              East, and Africa.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Specializing in design & manufacturing of capital equipment and
              pressure vessels at our IBR-approved facility in Pune. We adopt
              the latest Indian and international standards through technology
              partnerships and strategic alliances.
            </p>
            <p className="text-lg text-navy-900 font-semibold bg-orange-100 px-4 py-2 rounded-lg inline-block shadow-sm mb-8">
              Hamdule Industries is known for the shortest response time and
              fast job completion.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              {[
                {
                  icon: <Tag className="text-orange-600 h-6 w-6" />,
                  title: "IBR Approved",
                  desc: "Certified under Indian Boiler Regulation Act 1950",
                },
                {
                  icon: <Calendar className="text-orange-600 h-6 w-6" />,
                  title: "70+ Years Experience",
                  desc: "Serving industries since 1952",
                },
                {
                  icon: <Award className="text-orange-600 h-6 w-6" />,
                  title: "Trusted Partner",
                  desc: "Preferred by Fortune 500 companies and public sectors",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-orange-100 p-3 rounded-xl shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-navy-900 font-semibold text-lg">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image & Timeline Section */}
          <div className="space-y-8">
            <motion.img
              src={aboutImg}
              alt="Industrial workshop"
              className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out"
              whileHover={{ scale: 1.05 }}
            />

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              {/* <Card className="bg-white shadow-md rounded-xl border">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-navy-900">Our Legacy</h4>
                  <div className="space-y-4">
                    {[
                      { year: "1952", text: "Founded by Junaid Hamdule" },
                      { year: "1950s", text: "IBR Approval obtained" },
                      { year: "Today", text: "Leading boiler contractor in India" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse"></div>
                        <div>
                          <span className="font-semibold text-navy-900">{item.year}:</span>
                          <span className="text-gray-600 ml-2">{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}
              <img
                src = {aboutimg2}
                alt="Our Legacy"
                className="rounded-xl shadow-md object-cover w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
