import React from 'react';
import { Link } from 'react-router-dom';
import { keyFigures } from '../../data/keyFigures';
import CitationPopover from '../ui/CitationPopover';

const FeaturedFigures: React.FC = () => {
  // Select a few key figures to feature
  const featuredFigures = keyFigures.slice(0, 3);

  return (
    <section className="py-12 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-saddleBrown mb-2">Key Historical Figures</h2>
          <p className="text-maroon max-w-2xl mx-auto">
            The Battle of Haldighati was shaped by remarkable individuals whose decisions and actions changed the course of history.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredFigures.map(figure => (
            <div 
              key={figure.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-goldenrod transition-transform hover:scale-105"
            >
              {figure.imageUrl && (
                <img 
                  src={figure.imageUrl} 
                  alt={figure.name}
                  className="w-full h-48 object-cover object-center"
                />
              )}
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-saddleBrown">{figure.name}</h3>
                  <span className={`text-sm px-2 py-1 rounded ${
                    figure.side === 'Rajput' 
                      ? 'bg-maroon text-white' 
                      : 'bg-goldenrod text-saddleBrown'
                  }`}>
                    {figure.side}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{figure.title}</p>
                
                <p className="text-saddleBrown mb-4">
                  {figure.description.length > 150 
                    ? `${figure.description.substring(0, 150)}...` 
                    : figure.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <Link 
                    to={`/figures/${figure.id}`}
                    className="text-maroon hover:text-saddleBrown font-medium transition-colors"
                  >
                    Read more
                  </Link>
                  
                  <CitationPopover citationIds={figure.citationIds} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/figures"
            className="inline-block bg-saddleBrown hover:bg-maroon text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            View All Historical Figures
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFigures;