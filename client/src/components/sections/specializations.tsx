import { Flame, Cog, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import sp from "../../assests/special.webp"

export default function Specializations() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Specialization</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Decades of expertise in boiler breakdown, repair, and reconditioning services</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Flame className="text-orange-600 h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">Boiler Breakdown & Shutdown Jobs</h3>
                    <p className="text-gray-600 mb-4">Extensive experience with specialized teams to carry out boiler breakdown or shutdown jobs expeditiously.</p>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="text-orange-600 mr-2 h-4 w-4" />
                        100 smoke tubes replacement in 5 days
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-orange-600 mr-2 h-4 w-4" />
                        100 studded bed coils replacement in 3 days
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Cog className="text-orange-600 h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">Reconditioning & Installation</h3>
                    <p className="text-gray-600 mb-4">Fully reconditioned package type smoke tube boilers with meticulous processes at amazingly low prices.</p>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="text-orange-600 mr-2 h-4 w-4" />
                        Strict reconditioning processes
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-orange-600 mr-2 h-4 w-4" />
                        Built-to-order equipment
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Large industrial boiler room with complex piping systems */}
            <img 
              src= {sp}
              alt="Industrial boiler facility" 
              className="rounded-xl shadow-lg w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
