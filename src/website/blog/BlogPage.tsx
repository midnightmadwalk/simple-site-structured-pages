import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowRight, MessageCircle } from 'lucide-react';
import WhatsAppPopup from '@/components/WhatsAppPopup';
import ScrollAnimations from '@/components/ScrollAnimations';
import siteConfig from '@/config/siteConfig.json';

const BlogPage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = siteConfig.contact.whatsapp;
    const message = siteConfig.whatsappMessages.home;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding IEPF: A Comprehensive Guide',
      excerpt: 'Learn everything about the Investor Education and Protection Fund and how to recover your unclaimed funds.',
      author: 'EquiClaim Team',
      date: '2024-12-15',
      category: 'IEPF Recovery',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Top 5 Mistakes to Avoid During IEPF Claims',
      excerpt: 'Common pitfalls that delay or complicate your IEPF claim recovery process and how to avoid them.',
      author: 'Financial Expert',
      date: '2024-12-10',
      category: 'Tips & Tricks',
      readTime: '3 min read',
    },
    {
      id: 3,
      title: 'IPO Investment Guide: What You Need to Know',
      excerpt: 'Complete guide to Initial Public Offering investments, risks, and opportunities in the Indian market.',
      author: 'Investment Advisor',
      date: '2024-12-05',
      category: 'IPO Consultancy',
      readTime: '7 min read',
    },
    {
      id: 4,
      title: 'Insurance Advisory: Choosing the Right Policy',
      excerpt: 'Expert advice on selecting the best insurance policies for your needs - General, Vehicle, Mediclaim, and Life Insurance.',
      author: 'Insurance Expert',
      date: '2024-12-01',
      category: 'Insurance Advisory',
      readTime: '6 min read',
    },
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
              Financial Recovery Blog
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-primary-foreground/80 px-4">
              Expert insights, tips, and guides for financial recovery, IEPF claims, and investment advisory
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="bg-white text-primary hover:bg-primary-foreground/90 transition-colors">
                Subscribe to Newsletter
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

      {/* Blog Posts Section */}
      <section className="py-12 md:py-20 bg-white scroll-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest Articles</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Stay updated with the latest insights and expert advice on financial recovery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all duration-300 animate-fade-in group h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="hover-scale border-primary text-primary hover:bg-primary hover:text-white text-xs">
                        Read More
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={handleWhatsAppClick}
                        className="bg-green-500 hover:bg-green-600 text-white"
                      >
                        <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-20 bg-primary/5 scroll-slide-left">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Browse by Category</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Find articles that match your interests
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['IEPF Recovery', 'Tips & Tricks', 'IPO Consultancy', 'Insurance Advisory'].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {category}
                  </h3>
                  <Button 
                    size="sm" 
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white mt-2"
                  >
                    <MessageCircle className="h-3 w-3" />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Need Expert Advice?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-primary-foreground/80 max-w-2xl mx-auto px-4">
            Get personalized guidance from our financial recovery experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button size="lg" className="bg-white text-primary hover:bg-primary-foreground/90 transition-colors">
              Schedule Consultation
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

export default BlogPage;