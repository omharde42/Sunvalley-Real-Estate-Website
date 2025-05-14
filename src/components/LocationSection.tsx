
import React from 'react';

const LocationSection = () => {
  const locationPoints = [
    "Strategically located in a prime area",
    "Easy access to major highways",
    "Proximity to shopping centers and malls",
    "Close to schools and educational institutions",
    "Near hospitals and healthcare facilities",
    "Surrounded by parks and recreational areas",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-sunvalley-dark">Strategic </span>
          <span className="text-sunvalley-gold">Location</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="h-80 lg:h-full bg-gray-300 rounded-lg overflow-hidden">
              {/* Placeholder for Google Maps (in a real implementation, this would be an actual map) */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-600 text-center p-4">Interactive Map<br />Would Be Embedded Here</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Location Advantages</h3>
            <ul className="space-y-4">
              {locationPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-sunvalley-gold mr-2 font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Address</h4>
              <p className="text-gray-700">
                Bramhacorp Sunvalley<br />
                Near [Landmark], [Area]<br />
                [City], [State] [Pincode]<br />
                India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
