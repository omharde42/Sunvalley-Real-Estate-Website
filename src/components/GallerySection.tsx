
import React from 'react';

const GallerySection = () => {
  // Placeholder for gallery images (in a real implementation, these would be actual image paths)
  const galleryImages = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
    "/gallery-6.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-sunvalley-dark">Project </span>
          <span className="text-sunvalley-gold">Gallery</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div 
                className="h-64 bg-gray-300 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${img})`, 
                  backgroundImage: 'url(/placeholder.svg)' // Fallback to placeholder if images don't exist
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
