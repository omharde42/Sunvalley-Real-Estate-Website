
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

const GallerySection = () => {
  // Placeholder for gallery images (in a real implementation, these would be actual image paths)
  const galleryImages = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
    "/gallery-6.jpg",
    "/gallery-7.jpg",
    "/gallery-8.jpg",
    "/gallery-9.jpg",
    "/gallery-10.jpg",
    "/gallery-11.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-sunvalley-dark">Project </span>
          <span className="text-sunvalley-gold">Gallery</span>
        </h2>
        
        {/* Featured Gallery Poster */}
        <div className="mb-10 overflow-hidden rounded-lg shadow-xl">
          <div className="relative">
            <AspectRatio ratio={16/9}>
              <img 
                src="/lovable-uploads/a41b4ad9-5bfc-46c7-8b22-73121609eea9.png" 
                alt="Bramhacorp mountain view"
                className="w-full h-full object-cover"
              />
            </AspectRatio>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <Badge className="mb-2 self-start bg-sunvalley-gold hover:bg-sunvalley-gold/90">Featured</Badge>
              <h3 className="text-white text-2xl md:text-3xl font-bold">Bramhacorp Sunvalley</h3>
              <p className="text-white/90 mt-1">Luxury Residences in Prime Location</p>
            </div>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div 
                className="h-64 bg-gray-300 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${img}), url(/placeholder.svg)` // Using CSS fallback mechanism
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
