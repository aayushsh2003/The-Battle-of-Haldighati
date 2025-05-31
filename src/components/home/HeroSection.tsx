import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/hero.jpg)', 
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-goldenrod">
            The Battle of Haldighati
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-beige">
            June 18, 1576
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            A pivotal confrontation between Maharana Pratap of Mewar and the forces of Mughal Emperor Akbar that shaped the course of medieval Indian history.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/battle" 
              className="bg-maroon hover:bg-saddleBrown text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Explore the Battle
            </Link>
            <Link 
              to="/context" 
              className="bg-transparent hover:bg-goldenrod text-goldenrod hover:text-saddleBrown font-semibold px-6 py-3 rounded-md border-2 border-goldenrod transition-colors"
            >
              Historical Context
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;