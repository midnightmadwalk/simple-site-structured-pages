
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, MessageCircle, FileText, Share2, Shield, Users, Award, Building, Search, FileCheck, Banknote, Briefcase } from 'lucide-react';
import WhatsAppPopup from '@/components/WhatsAppPopup';
import WhatsAppWave from '@/components/WhatsAppWave';
import ScrollAnimations from '@/components/ScrollAnimations';
import siteConfig from '@/config/siteConfig.json';

const HomePage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = siteConfig.contact.whatsapp;
    const message = siteConfig.whatsappMessages.home;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      icon: Shield,
      title: 'IEPF Claim',
      description: 'Expert assistance in recovering unclaimed dividends, deposits, and shares from IEPF',
    },
    {
      icon: FileCheck,
      title: 'Duplicate Issue of Shares',
      description: 'Professional help for recovering lost, stolen, or damaged share certificates',
    },
    {
      icon: Share2,
      title: 'Transmission of Shares',
      description: 'Legal assistance for transferring shares from deceased shareholders to legal heirs',
    },
    {
      icon: Users,
      title: 'Unclaimed Insurance',
      description: 'Recover unclaimed insurance amounts due to various policy-related issues',
    },
    {
      icon: Award,
      title: 'Unclaimed Mutual Funds',
      description: 'Professional assistance for recovering dormant mutual fund investments',
    },
    {
      icon: Building,
      title: 'In-Operative Bank Deposits',
      description: 'Reactivate dormant bank accounts and recover unclaimed deposits',
    },
    {
      icon: Search,
      title: 'Unclaimed Debtors',
      description: 'Trace and recover unclaimed debts and outstanding amounts',
    },
    {
      icon: Briefcase,
      title: 'Litigation Funding Consulting',
      description: 'Expert consultation for complex financial recovery litigation cases',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      {/* WhatsApp Wave Animation */}
      <WhatsAppWave />
      
      {/* Scroll Animation Handler */}
      <ScrollAnimations />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-20 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in">
              Professional Financial Recovery Services
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-primary-foreground/80 px-4">
              Expert assistance for IEPF claims, unclaimed deposits, and comprehensive financial recovery solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="bg-white text-primary hover:bg-primary-foreground/90 transition-colors">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 md:py-16 bg-white scroll-slide-left">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{siteConfig.statistics.successfulClaims}</div>
              <div className="text-gray-600 text-sm md:text-base">Successful Claims</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{siteConfig.statistics.amountRecovered}</div>
              <div className="text-gray-600 text-sm md:text-base">Amount Recovered</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{siteConfig.statistics.yearsExperience}</div>
              <div className="text-gray-600 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{siteConfig.statistics.supportAvailability}</div>
              <div className="text-gray-600 text-sm md:text-base">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-primary/5 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive financial recovery solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-fade-in group h-full">
                <CardContent className="p-4 md:p-6 text-center h-full flex flex-col">
                  <div className="mb-4 relative">
                    <service.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto gen-z-icon group-hover:animate-wiggle" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-primary/20 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex-grow">{service.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">{service.description}</p>
                  <div className="flex gap-2 justify-center mt-auto">
                    <Button variant="outline" size="sm" className="hover-scale border-primary text-primary hover:bg-primary hover:text-white text-xs">
                      Learn More
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={handleWhatsAppClick}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-white scroll-slide-right">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Why Choose Us?</h2>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Expert Team</h3>
                    <p className="text-gray-600 text-sm md:text-base">Experienced professionals with deep knowledge of IEPF processes</p>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white flex-shrink-0"
                  >
                    <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">100% Success Rate</h3>
                    <p className="text-gray-600 text-sm md:text-base">Proven track record of successful claim recoveries</p>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white flex-shrink-0"
                  >
                    <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">No Hidden Charges</h3>
                    <p className="text-gray-600 text-sm md:text-base">Transparent pricing with no surprise fees</p>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white flex-shrink-0"
                  >
                    <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Quick Processing</h3>
                    <p className="text-gray-600 text-sm md:text-base">Fast turnaround time for all claim processes</p>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white flex-shrink-0"
                  >
                    <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 md:p-8 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&fit=crop" 
                alt="Professional team"
                className="w-full h-60 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-secondary text-white scroll-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Recover Your Money?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-primary-foreground/80 max-w-2xl mx-auto px-4">
            Don't let your hard-earned money remain unclaimed. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button size="lg" className="bg-white text-primary hover:bg-primary-foreground/90 transition-colors">
              Start Your Claim Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppPopup />
    </div>
  );
};

export default HomePage;
