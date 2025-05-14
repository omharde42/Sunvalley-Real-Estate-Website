
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ContactForm from './ContactForm';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-sunvalley-dark text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      ></div>
      
      <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
          Welcome to <span className="text-sunvalley-gold">Bramhacorp Sunvalley</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl animate-slide-in">
          Experience luxury living at its finest with premium amenities and breathtaking views
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-sunvalley-gold hover:bg-sunvalley-blue text-white px-8 py-6 text-lg">
                Download Brochure
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <ContactForm isForBrochure={true} />
            </DialogContent>
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-sunvalley-gold text-sunvalley-gold hover:bg-sunvalley-gold hover:text-white px-8 py-6 text-lg">
                Enquire Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <ContactForm isForBrochure={false} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
