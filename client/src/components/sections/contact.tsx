import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://getform.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-4">Contact Us</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Get in touch for your boiler and industrial equipment needs</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="text-orange-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Address</h4>
                  <p className="text-gray-600">Shop No 3, Bldg. C2,<br></br> Manish Garden, Udyam Nagar, <br></br>Pimpri,Pune - 411018.</p>
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
                  <p className="text-gray-600"> business@hamduleindustries.com</p>
                  {/* <p className="text-gray-600">sales@jaihindwelding.com</p> */}
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

            {/* Google Maps Placeholder */}
            <div className="mt-8 bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="font-medium">Google Maps Integration</p>
                <p className="text-sm">Location: Industrial Area, Mumbai</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        className="mt-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="mt-2"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        className="mt-2"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Required</Label>
                      <Select name="service">
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="repair">Repair & Maintenance</SelectItem>
                          <SelectItem value="installation">Installation</SelectItem>
                          <SelectItem value="emergency">Emergency Service</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required 
                      className="mt-2"
                      placeholder="Please describe your requirements..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
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
