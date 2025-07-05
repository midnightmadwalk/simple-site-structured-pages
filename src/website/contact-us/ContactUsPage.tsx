
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import siteConfig from '@/config/siteConfig.json';

const ContactUsPage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = siteConfig.contact.whatsapp;
    const message = siteConfig.whatsappMessages.contact;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 px-4">
              Get in touch with our expert team for professional financial recovery assistance
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Get In Touch</h2>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-primary/10 p-2 md:p-3 rounded-full flex-shrink-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">Phone Numbers</h3>
                      {siteConfig.contact.phones.map((phone, index) => (
                        <p key={index} className="text-gray-600 text-sm md:text-base">{phone}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-primary/10 p-2 md:p-3 rounded-full flex-shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">Email Address</h3>
                      {siteConfig.contact.emails.map((email, index) => (
                        <p key={index} className="text-gray-600 text-sm md:text-base">{email}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-primary/10 p-2 md:p-3 rounded-full flex-shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">Office Address</h3>
                      <p className="text-gray-600 text-sm md:text-base">{siteConfig.contact.address.line1}</p>
                      <p className="text-gray-600 text-sm md:text-base">{siteConfig.contact.address.line2}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-primary/10 p-2 md:p-3 rounded-full flex-shrink-0">
                      <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base">Working Hours</h3>
                      <p className="text-gray-600 text-sm md:text-base">{siteConfig.contact.workingHours.weekdays}</p>
                      <p className="text-gray-600 text-sm md:text-base">{siteConfig.contact.workingHours.saturday}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 md:p-8 rounded-lg">
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <MessageCircle className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Send us a Message</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base px-2">
                  Get instant assistance through WhatsApp. Our team is ready to help you with your IEPF claims and financial recovery needs.
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors inline-flex items-center gap-2 md:gap-3"
                >
                  <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">Quick answers to common questions</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">How long does IEPF claim process take?</h3>
                <p className="text-gray-600 text-xs md:text-sm">Typically 30-90 days depending on the complexity of the case and documentation provided.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">What documents do I need?</h3>
                <p className="text-gray-600 text-xs md:text-sm">PAN card, bank statements, share certificates, and identity proof are usually required.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Are there any hidden charges?</h3>
                <p className="text-gray-600 text-xs md:text-sm">No, we believe in transparent pricing with no surprise fees or hidden charges.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Do you guarantee success?</h3>
                <p className="text-gray-600 text-xs md:text-sm">We have a 100% success rate and only take cases where we are confident of recovery.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
