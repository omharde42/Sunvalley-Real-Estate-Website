
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AmenitiesSection from '../components/AmenitiesSection';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import SpecificationsSection from '../components/SpecificationsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <HeroSection />
        
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-sunvalley-dark">About </span>
              <span className="text-sunvalley-gold">Bramhacorp Sunvalley</span>
            </h2>
            
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg mb-6">
                Bramhacorp Sunvalley is a premium residential project offering luxurious homes designed for modern living. Set in a prime location, it combines elegant architecture with world-class amenities to provide an exceptional living experience.
              </p>
              <p className="text-lg">
                With spacious layouts, high-quality finishes, and attention to detail, each residence at Sunvalley is crafted to meet the highest standards of comfort and style. Experience a lifestyle where convenience, comfort, and luxury come together seamlessly.
              </p>
            </div>
          </div>
        </section>
        
        <div id="amenities">
          <AmenitiesSection />
        </div>
        
        <div id="gallery">
          <GallerySection />
        </div>
        
        <div id="specifications">
          <SpecificationsSection />
        </div>
        
        <div id="location">
          <LocationSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
