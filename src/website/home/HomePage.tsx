
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, Users, Award, ArrowRight } from 'lucide-react';
import WhatsAppPopup from '@/components/WhatsAppPopup';
import WhatsAppWave from '@/components/WhatsAppWave';
import ScrollAnimations from '@/components/ScrollAnimations';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      {/* WhatsApp Wave Animation */}
      <WhatsAppWave />
      
      {/* Scroll Animation Handler */}
      <ScrollAnimations />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Professional Financial Recovery Services
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Expert assistance for IEPF claims, unclaimed deposits, and financial recovery solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-primary-foreground/90 transition-colors">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-white scroll-slide-left">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Successful Claims</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">₹10Cr+</div>
              <div className="text-gray-600">Amount Recovered</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-primary/5 scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial recovery solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <Shield className="h-16 w-16 text-primary mx-auto gen-z-icon group-hover:animate-wiggle" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">IEPF Claim Recovery</h3>
                <p className="text-gray-600 mb-6">
                  Expert assistance in recovering unclaimed dividends, deposits, and shares from IEPF
                </p>
                <Button variant="outline" className="hover-scale border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <Users className="h-16 w-16 text-primary mx-auto gen-z-icon group-hover:animate-float" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary/20 rounded-full animate-bounce"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Unclaimed Deposits</h3>
                <p className="text-gray-600 mb-6">
                  Recover dormant bank accounts, fixed deposits, and other unclaimed financial assets
                </p>
                <Button variant="outline" className="hover-scale border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 animate-fade-in group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <Award className="h-16 w-16 text-primary mx-auto gen-z-icon group-hover:icon-spin-slow" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full icon-pulse"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Legal Consultation</h3>
                <p className="text-gray-600 mb-6">
                  Professional legal guidance for complex financial recovery cases
                </p>
                <Button variant="outline" className="hover-scale border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white scroll-slide-right">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-600">Experienced professionals with deep knowledge of IEPF processes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">100% Success Rate</h3>
                    <p className="text-gray-600">Proven track record of successful claim recoveries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">No Hidden Charges</h3>
                    <p className="text-gray-600">Transparent pricing with no surprise fees</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quick Processing</h3>
                    <p className="text-gray-600">Fast turnaround time for all claim processes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&h=400&fit=crop" 
                alt="Professional team"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white scroll-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Recover Your Money?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Don't let your hard-earned money remain unclaimed. Contact us today for a free consultation.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-primary-foreground/90 transition-colors">
            Start Your Claim Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <WhatsAppPopup />
    </div>
  );
};

export default HomePage;
