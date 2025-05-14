
import React from 'react';

const SpecificationsSection = () => {
  const specifications = [
    {
      category: "Structure",
      items: [
        "RCC framed structure",
        "Earthquake resistant design",
        "High-quality construction materials"
      ]
    },
    {
      category: "Flooring",
      items: [
        "Vitrified tiles in living and dining areas",
        "Anti-skid ceramic tiles in bathrooms",
        "Wooden laminate flooring in bedrooms"
      ]
    },
    {
      category: "Kitchen",
      items: [
        "Granite counter top",
        "Stainless steel sink",
        "Provision for water purifier",
        "Premium tile dado up to 2 feet above counter"
      ]
    },
    {
      category: "Bathrooms",
      items: [
        "Premium sanitary fittings",
        "Quality CP fittings",
        "Shower partition in master bathroom",
        "Exhaust fans provision"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-sunvalley-dark">Quality </span>
          <span className="text-sunvalley-gold">Specifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specifications.map((spec, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-sunvalley-gold">{spec.category}</h3>
              <ul className="space-y-2">
                {spec.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-sunvalley-gold mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;
