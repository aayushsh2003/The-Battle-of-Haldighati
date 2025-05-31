import React, { useState } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import CitationPopover from '../components/ui/CitationPopover';
import PeriodDecoration from '../components/ui/PeriodDecoration';
import { keyFigures, getFiguresBySide } from '../data/keyFigures';
import { Link } from 'react-router-dom';

const KeyFiguresPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Rajput' | 'Mughal'>('All');
  
  React.useEffect(() => {
    document.title = 'Key Figures - Battle of Haldighati (1576)';
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Key Figures', path: '/figures' }
  ];

  const filteredFigures = filter === 'All' 
    ? keyFigures 
    : getFiguresBySide(filter);

  return (
    <div className="bg-beige min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-saddleBrown mb-6">Key Historical Figures</h1>
          
          <div className="prose max-w-none text-saddleBrown mb-8">
            <p className="text-lg">
              The Battle of Haldighati was shaped by remarkable individuals whose decisions, values, and actions influenced the course of history. From legendary rulers to loyal soldiers, these figures represent different perspectives on the conflict between Mewar and the Mughal Empire.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setFilter('All')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg focus:z-10 focus:ring-2 focus:ring-goldenrod ${
                  filter === 'All'
                    ? 'bg-saddleBrown text-white'
                    : 'bg-beige text-saddleBrown hover:bg-goldenrod hover:text-saddleBrown'
                }`}
              >
                All Figures
              </button>
              <button
                type="button"
                onClick={() => setFilter('Rajput')}
                className={`px-4 py-2 text-sm font-medium focus:z-10 focus:ring-2 focus:ring-goldenrod ${
                  filter === 'Rajput'
                    ? 'bg-maroon text-white'
                    : 'bg-beige text-saddleBrown hover:bg-goldenrod hover:text-saddleBrown'
                }`}
              >
                Rajput Side
              </button>
              <button
                type="button"
                onClick={() => setFilter('Mughal')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg focus:z-10 focus:ring-2 focus:ring-goldenrod ${
                  filter === 'Mughal'
                    ? 'bg-goldenrod text-saddleBrown'
                    : 'bg-beige text-saddleBrown hover:bg-goldenrod hover:text-saddleBrown'
                }`}
              >
                Mughal Side
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredFigures.map(figure => (
              <div 
                key={figure.id}
                className="bg-beige rounded-lg overflow-hidden border border-goldenrod flex flex-col md:flex-row"
              >
                {figure.imageUrl && (
                  <div className="md:w-1/3">
                    <img 
                      src={figure.imageUrl} 
                      alt={figure.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-saddleBrown">{figure.name}</h2>
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
                    {figure.description}
                  </p>
                  
                  {figure.quotes && figure.quotes.length > 0 && (
                    <blockquote className="border-l-4 border-goldenrod pl-3 italic my-4 text-sm">
                      "{figure.quotes[0]}"
                    </blockquote>
                  )}
                  
                  <div className="flex justify-between items-center mt-4">
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
        </div>
        
        <PeriodDecoration type="divider" />
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-2xl font-bold text-saddleBrown mb-4">Historical Significance</h2>
          
          <p className="text-saddleBrown mb-6">
            The key figures of the Battle of Haldighati represented different political ideologies and loyalties during a period of significant change in medieval India. Their interactions and conflicts were not simply personal but reflected broader historical currents of the time:
          </p>
          
          <ul className="list-disc pl-5 space-y-3 text-saddleBrown">
            <li>
              <strong>Centralization vs. Regional Autonomy:</strong> The conflict between Akbar and Maharana Pratap represented the tension between imperial centralization and regional autonomy.
            </li>
            <li>
              <strong>Diverse Alliances:</strong> The presence of figures like Hakim Khan Sur (an Afghan Muslim fighting for the Rajput side) and Raja Man Singh (a Rajput fighting for the Mughals) illustrates that alliances crossed religious and ethnic lines.
            </li>
            <li>
              <strong>Competing Visions:</strong> These historical figures embodied competing visions for the political organization of the Indian subcontinent, with lasting implications for regional identity.
            </li>
          </ul>
        </div>
        
        <div className="flex justify-between mt-8">
          <Link 
            to="/context"
            className="bg-saddleBrown hover:bg-maroon text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            ← Historical Context
          </Link>
          
          <Link 
            to="/battle"
            className="bg-saddleBrown hover:bg-maroon text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Battle Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KeyFiguresPage;