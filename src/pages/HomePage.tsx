import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedFigures from '../components/home/FeaturedFigures';
import TimelineSlider from '../components/ui/TimelineSlider';
import PeriodDecoration from '../components/ui/PeriodDecoration';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Battle of Haldighati (1576) - Historical Archive';
  }, []);

  return (
    <div>
      <HeroSection />
      
      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-saddleBrown text-center mb-8">The Battle That Shaped History</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-lg text-saddleBrown mb-4">
                The Battle of Haldighati, fought on June 18, 1576, was a significant military engagement between the forces of Maharana Pratap of Mewar and the Mughal army led by Raja Man Singh I, a general of Emperor Akbar.
              </p>
              <p className="text-lg text-saddleBrown mb-4">
                Though technically a Mughal victory, the battle has come to symbolize Rajput resistance against Mughal expansion and is celebrated for Maharana Pratap's valor and unwavering commitment to independence.
              </p>
              <p className="text-lg text-saddleBrown mb-6">
                The battle took place in the narrow mountain pass of Haldighati in the Aravalli Range of Rajasthan, a terrain that played a crucial role in the battle's dynamics and outcome.
              </p>
              
              <Link 
                to="/battle"
                className="inline-block bg-maroon hover:bg-saddleBrown text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Explore Battle Details
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="../../hero_main.jpg" 
                  alt="Historical representation of warriors from the period"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-3 text-sm rounded">
                  Historical representation of medieval Indian warfare techniques similar to those used in the Battle of Haldighati
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <PeriodDecoration type="divider" />
      
      {/* Timeline Section */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-saddleBrown text-center mb-8">Battle Chronology</h2>
          <p className="text-center text-saddleBrown max-w-3xl mx-auto mb-12">
            Explore the key events of the Battle of Haldighati in chronological order, from the pre-battle diplomatic efforts to the aftermath and long-term historical significance.
          </p>
          
          <TimelineSlider />
          
          <div className="text-center mt-10">
            <Link 
              to="/battle"
              className="inline-block bg-saddleBrown hover:bg-maroon text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              View Detailed Battle Analysis
            </Link>
          </div>
        </div>
      </section>
      
      {/* Key Figures Section */}
      <FeaturedFigures />
      
      {/* Call to Action */}
      <section className="py-16 bg-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Discover the Complete Historical Record</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Explore primary sources, academic research, and multiple perspectives on this pivotal historical event. Our comprehensive archive includes rare documents, historical analyses, and educational resources.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/resources"
              className="bg-goldenrod hover:bg-white text-saddleBrown font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Educational Resources
            </Link>
            <Link 
              to="/context"
              className="bg-transparent hover:bg-white text-white hover:text-saddleBrown font-semibold px-6 py-3 rounded-md border-2 border-white transition-colors"
            >
              Historical Context
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;