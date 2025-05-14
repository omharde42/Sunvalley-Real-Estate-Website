
import React from 'react';

const amenities = [
  { title: 'Swimming Pool', icon: '🏊‍♂️' },
  { title: 'Fitness Center', icon: '💪' },
  { title: 'Children\'s Play Area', icon: '🧒' },
  { title: 'Landscaped Gardens', icon: '🌳' },
  { title: 'Clubhouse', icon: '🏛️' },
  { title: 'Sports Court', icon: '🎾' },
  { title: '24/7 Security', icon: '🔒' },
  { title: 'Parking Space', icon: '🚗' },
];

const AmenitiesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-sunvalley-dark">Premium </span>
          <span className="text-sunvalley-gold">Amenities</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center hover:border-sunvalley-gold"
            >
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
