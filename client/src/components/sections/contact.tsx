"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
    product: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    serviceProduct: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSelectChange = (field: "service" | "product", value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, serviceProduct: "" }));
  };

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    // if (!formData.message.trim() || formData.message.length < 10) newErrors.message = "Message must be at least 10 characters.";
    if (!formData.service && !formData.product) newErrors.serviceProduct = "Select at least a service or a product.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const { name, email, message, service, product } = formData;

    const encodedMessage = encodeURIComponent(
      `Hello, I would like to get in touch:\n\nName: ${name}\nEmail: ${email}\nService: ${service || "N/A"}\nProduct: ${product || "N/A"}\nMessage: ${message.trim() || "N/A"}`
    );

    const whatsappNumber = "9167880724";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
      service: "",
      product: "",
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-4">Contact Us</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch for your boiler and industrial equipment needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info Left Side (same as before) */}
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="text-orange-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    Shop No 3, Bldg. C2,<br />Manish Garden, Udyam Nagar,<br />Pimpri, Pune - 411018.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="text-orange-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Phone</h4>
                  <p className="text-gray-600">O: +91-20-2750 2200</p>
                  <p className="text-gray-600">C: +91-97 6666 9933</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Mail className="text-orange-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Email</h4>
                  <p className="text-gray-600">business@hamduleindustries.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="text-orange-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Office Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Emergency Service: 24/7</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 rounded-xl overflow-hidden h-64 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4557821792024!2d73.81666841417484!3d18.551869787392036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4e07d6f4cd%3A0x225f84223c7e58fa!2sPimpri%20Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690389611476"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="mt-2"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="mt-2"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="service">Service *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent className="h-36">
                          <SelectItem value="emergency">Boiler Breakdown & Shutdown Jobs</SelectItem>
                          <SelectItem value="consultation">Reconditioning & Installation</SelectItem>
                          <SelectItem value="repair">Repair & Maintenance</SelectItem>
                          <SelectItem value="installation">Erection & Commissioning</SelectItem>
                          <SelectItem value="emergency">Boiler Pipeline</SelectItem>
                          <SelectItem value="consultation">Annual Inspection with IBR</SelectItem>
                          <SelectItem value="repair">Operation & Maintenance</SelectItem>
                          <SelectItem value="installation">Boiler Accessories</SelectItem>
                          <SelectItem value="emergency">Boiler Upgradation</SelectItem>
                          <SelectItem value="consultation">Boiler Consultancy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="product">Product *</Label>
                      <Select value={formData.product} onValueChange={(value) => handleSelectChange("product", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent className="h-36" >
                          <SelectItem value="boiler">Studded Bed Coils</SelectItem>
                          <SelectItem value="burner">Super Heater Coils</SelectItem>
                          <SelectItem value="valve">Waterwall Panels</SelectItem>
                          <SelectItem value="pump">Bank Tube Assembly</SelectItem>
                          <SelectItem value="boiler">Headers</SelectItem>
                          <SelectItem value="burner">De-Super Heater</SelectItem>
                          <SelectItem value="valve">Evaporator Coils</SelectItem>
                          <SelectItem value="pump">Economizer Coils</SelectItem>
                          <SelectItem value="boiler">Swaged End Tubes</SelectItem>
                          <SelectItem value="burner">High Freq. Spiral Fin Tube Welded Coil</SelectItem>
                          <SelectItem value="valve">Short Radius Bend (1D & 0.65D)</SelectItem>
                          <SelectItem value="pump">Various Types of Air Nozzles</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {errors.serviceProduct && (
                    <p className="text-red-500 text-sm mt-1">{errors.serviceProduct}</p>
                  )}

                  <div>
                    <Label htmlFor="message">Message </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your requirements..."
                      className="mt-2"
                    />
                    {/* {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>} */}
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white h-12">
                    <Send className="mr-2 h-4 w-4" />
                    Send via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
