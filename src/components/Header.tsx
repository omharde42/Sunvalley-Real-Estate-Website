
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ContactForm from './ContactForm';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-sunvalley-gold">Bramhacorp Sunvalley</h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2 text-sunvalley-gray">
            <Phone size={18} />
            <a href="tel:+917350060260" className="hover:text-sunvalley-gold transition-colors">
              +91 7350060260
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-sunvalley-gray">
            <Mail size={18} />
            <a href="mailto:Rohitmani@bramhacorppune.in" className="hover:text-sunvalley-gold transition-colors">
              Rohitmani@bramhacorppune.in
            </a>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-sunvalley-gold text-white border-none hover:bg-sunvalley-blue">
                Download Brochure
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <ContactForm isForBrochure={true} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
