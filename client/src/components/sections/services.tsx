import { Wrench, Hammer, Route, ClipboardCheck, Settings, ShieldCheck, TrendingUp, BookOpen, MessageSquare, UserCheck, UserCheck2, UserRoundCheck, Cog, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Repair & Maintenance",
      description: "Replacement of all types of pressure parts like smoke tubes, bed coils, economiser coils, etc. Repairing of boiler parts like shell, drum, furnace etc. Overhauling of mountings, fittings, and accessories of boilers.."
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Erection & Commissioning",
      description: "One stop solution for erection and commissioning of complete boiler house covering entire scope like ducting, piping, refractory, insulation, electrical, instrumentation etc. with statutory clearance from IBR."
    },
    {
      icon: <Route className="h-8 w-8" />,
      title: "Boiler Pipeline",
      description: "Design, fabrication, and site installation of all types of steam pipeline, pressure reducing station, blowdown pipeline, feedwater pipeline, etc. strictly in accordance with IBR norms."
    },
    {
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: "Annual Inspection with IBR",
      description: "Cleaning and overhauling of boiler along with its mountings, fittings, etc for annual inspection and IBR certification by IBR authority."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Operation & Maintenance",
      description: "Comprehensive O&M services for all types of boilers, to ensure optimal performance and extended equipment life."
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: " Boiler Accessories",
      description: "Supply of boiler accessories like dust collector, wet scrubber, bag filter, air pre-heater, water pre-heater, chimney, etc.Supply of boiler accessories like dust collector, wet scrubber, bag filter, air pre-heater, water pre-heater, chimney, etc."
    },
     {
      icon: <TrendingUp className="h-8 w-8" />,
      title: " Boiler Upgradation",
      description: "Correlate field data with design calculation and undertake turnkey assignments to upgrade existing boiler performance so as to achieve significant enhanced capacity."
    },
     {
      icon: <UserCheck2 className="h-8 w-8" />,
      title: "Boiler Consultancy",
      description: "Experienced team to provide expert consultancy related to boiler services like Remnant Life Assessment (RLA), condition assessment, Short Term Certificate (STC), boiler performance enhancement, etc."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-4">What We Do</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive boiler and industrial equipment services backed by decades of expertise</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-orange-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                  <div className="text-orange-600">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
