import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, MessageCircle, FileText, Clock, Download } from 'lucide-react';
import WhatsAppPopup from '@/components/WhatsAppPopup';

import ScrollAnimations from '@/components/ScrollAnimations';
import siteConfig from '@/config/siteConfig.json';

const PromptReadyPage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = siteConfig.contact.whatsapp;
    const message = siteConfig.whatsappMessages.iepf;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const readyPrompts = [
    {
      title: 'IEPF Claim Application Form',
      description: 'Pre-filled application forms for IEPF claim recovery with all necessary sections',
      type: 'Form Template',
      status: 'Ready to Download',
    },
    {
      title: 'Document Checklist',
      description: 'Comprehensive checklist of all documents required for IEPF claims',
      type: 'Checklist',
      status: 'Instant Access',
    },
    {
      title: 'Letter Templates',
      description: 'Professional letter templates for various IEPF communication needs',
      type: 'Letter Template',
      status: 'Customizable',
    },
    {
      title: 'Share Transfer Application',
      description: 'Ready-to-use forms for share transmission and transfer processes',
      type: 'Form Template',
      status: 'Editable PDF',
    },
  ];

  const benefits = [
    'Save hours of paperwork preparation time',
    'Ensure compliance with IEPF regulations',
    'Reduce chances of application rejection',
    'Professional formatting and presentation',
    'Expert-reviewed content and accuracy',
    'Regular updates with latest requirements',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      
      {/* Scroll Animation Handler */}
      <ScrollAnimations />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-20 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in">
              Prompt Ready Solutions
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-primary-foreground/80 px-4">
              Get instant access to ready-to-use forms, templates, and documents for your IEPF claims
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="bg-white text-primary hover:bg-primary-foreground/90 transition-colors">
                Browse Templates
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

      {/* Ready Templates Section */}
      <section className="py-12 md:py-20 bg-white scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready-to-Use Templates</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Professional templates and forms that save time and ensure accuracy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {readyPrompts.map((prompt, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-fade-in group h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {prompt.type}
                    </span>
                    <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full ml-2">
                      {prompt.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {prompt.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-grow">
                    {prompt.description}
                  </p>
                  
                  <div className="flex gap-2 justify-center mt-auto">
                    <Button variant="outline" size="sm" className="hover-scale border-primary text-primary hover:bg-primary hover:text-white text-xs">
                      <Download className="h-3 w-3 mr-1" />
                      Download
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

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-primary/5 scroll-slide-right">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Why Use Our Templates?</h2>
              <div className="space-y-4 md:space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 md:gap-4">
                    <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div className="flex-grow">
                      <p className="text-gray-600 text-sm md:text-base">{benefit}</p>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={handleWhatsAppClick}
                      className="bg-green-500 hover:bg-green-600 text-white flex-shrink-0"
                    >
                      <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 md:p-8 rounded-lg">
              <div className="text-center">
                <FileText className="h-16 w-16 md:h-20 md:w-20 text-primary mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">Professional Templates</h3>
                <p className="text-gray-600 mb-6">
                  All templates are created by financial experts and regularly updated to meet current regulations.
                </p>
                <div className="flex flex-col gap-3">
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get Custom Template
                  </Button>
                  <Button variant="outline" className="hover-scale">
                    <Clock className="mr-2 h-5 w-5" />
                    Quick Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-20 bg-white scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Simple 3-step process to get your documents ready
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: 1, title: 'Choose Template', description: 'Select the template that matches your needs' },
              { step: 2, title: 'Download & Fill', description: 'Download and fill in your specific information' },
              { step: 3, title: 'Submit & Track', description: 'Submit your application and track progress with our help' },
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <Button 
                    size="sm" 
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Help
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-secondary text-white scroll-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-primary-foreground/80 max-w-2xl mx-auto px-4">
            Access professional templates and get expert guidance for your financial recovery process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button size="lg" className="bg-white text-primary hover:bg-primary-foreground/90 transition-colors">
              Access All Templates
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

export default PromptReadyPage;