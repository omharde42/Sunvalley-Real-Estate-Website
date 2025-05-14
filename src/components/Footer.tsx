
import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sunvalley-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bramhacorp Sunvalley</h3>
            <p className="mb-4">
              Luxury residences designed for those who appreciate premium living with world-class amenities.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Phone size={18} className="text-sunvalley-gold" />
              <a href="tel:+917350060260" className="hover:text-sunvalley-gold transition-colors">
                +91 7350060260
              </a>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Mail size={18} className="text-sunvalley-gold" />
              <a href="mailto:info@bramhacorpsunvalley.com" className="hover:text-sunvalley-gold transition-colors">
                info@bramhacorpsunvalley.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare size={18} className="text-sunvalley-gold" />
              <a 
                href="https://wa.me/917350060260" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-sunvalley-gold transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sunvalley-gold transition-colors">Home</a></li>
              <li><a href="#amenities" className="hover:text-sunvalley-gold transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-sunvalley-gold transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-sunvalley-gold transition-colors">Location</a></li>
              <li><a href="#specifications" className="hover:text-sunvalley-gold transition-colors">Specifications</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Disclaimer</h3>
            <p className="text-sm text-gray-400">
              The information provided on this website is for general informational purposes only. All images are artist's impressions. The dimensions, specifications, and features may vary from the final product. Please verify all details prior to purchase.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Bramhacorp Sunvalley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
