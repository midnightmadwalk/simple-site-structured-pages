
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, Clock, FileText, Users, ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';

const IEPFClaimPage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+919876543210';
    const message = 'Hello! I would like to know more about IEPF claim recovery services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const steps = [
    {
      step: 1,
      title: 'Document Collection',
      description: 'Gather all necessary documents including PAN card, bank statements, and share certificates'
    },
    {
      step: 2,
      title: 'Verification Process',
      description: 'Our experts verify your documents and check eligibility for IEPF claims'
    },
    {
      step: 3,
      title: 'Application Filing',
      description: 'We file your application with proper documentation to the IEPF authority'
    },
    {
      step: 4,
      title: 'Follow-up & Recovery',
      description: 'Regular follow-up with authorities until your funds are successfully recovered'
    }
  ];

  const documents = [
    'PAN Card',
    'Bank Account Statements',
    'Share Certificates',
    'Identity Proof (Aadhaar/Passport)',
    'Address Proof',
    'Death Certificate (if applicable)',
    'Legal Heir Certificate (if applicable)',
    'Nomination Details'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">IEPF Claim & Recovery</h1>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Professional assistance for recovering your unclaimed dividends, deposits, and shares from IEPF
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-primary-foreground/90">
                Start Your Claim
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

      {/* What is IEPF Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">What is IEPF?</h2>
              <p className="text-xl text-gray-600">
                The Investor Education and Protection Fund (IEPF) is a fund established by the Government of India 
                to promote investor awareness and protect the interests of investors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Investor Protection</h3>
                  <p className="text-gray-600">Safeguards investor interests and unclaimed investments</p>
                  <Button 
                    size="sm" 
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white mt-4"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Ask
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">7-Year Rule</h3>
                  <p className="text-gray-600">Unclaimed amounts are transferred to IEPF after 7 years</p>
                  <Button 
                    size="sm" 
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white mt-4"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Ask
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Recovery Process</h3>
                  <p className="text-gray-600">Rightful owners can claim back their funds through proper procedure</p>
                  <Button 
                    size="sm" 
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white mt-4"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Ask
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Recovery Process</h2>
            <p className="text-xl text-gray-600">Simple 4-step process to recover your funds</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600 mb-3">{step.description}</p>
                        <Button 
                          size="sm" 
                          onClick={handleWhatsAppClick}
                          className="bg-green-500 hover:bg-green-600 text-white"
                        >
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Get Help
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Required Documents</h2>
              <p className="text-xl text-gray-600">Documents you'll need for IEPF claim recovery</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Document Checklist</h3>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardContent className="p-8">
                  <FileText className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Need Document Help?</h3>
                  <p className="text-gray-600 mb-6">
                    Our experts can guide you through the document preparation process and 
                    ensure you have everything needed for a successful claim.
                  </p>
                  <div className="space-y-3">
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp for Document Help
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-5 w-5" />
                      Call for Assistance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Recover Your IEPF Funds?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Don't let your money stay unclaimed. Our expert team is here to help you recover every penny.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-primary-foreground/90">
              Start Your IEPF Claim
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
    </div>
  );
};

export default IEPFClaimPage;
