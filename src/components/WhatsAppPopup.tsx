
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919876543210';
    const message = 'Hello! I would like to know more about your IEPF claim recovery services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 max-w-xs animate-fade-in">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-800">Need Help?</h3>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Chat with us on WhatsApp for instant assistance with your IEPF claims!
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            Start Chat
          </Button>
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg animate-bounce"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default WhatsAppPopup;
