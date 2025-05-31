import React from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import BattleMap from '../components/battle/BattleMap';
import TimelineSlider from '../components/ui/TimelineSlider';
import CitationPopover from '../components/ui/CitationPopover';
import PeriodDecoration from '../components/ui/PeriodDecoration';
import { historicalImages } from '../data/historicalImages';
import { Link } from 'react-router-dom';

const BattleDetailsPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Battle Details - Battle of Haldighati (1576)';
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Battle Details', path: '/battle' }
  ];

  // Get battle-related images
  const battleImages = historicalImages.filter(img => 
    img.id.includes('battle') || img.id.includes('armor') || img.id.includes('cavalry')
  );

  return (
    <div className="bg-beige min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-saddleBrown mb-4">Battle of Haldighati: Military Analysis</h1>
          
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <span className="mr-2">June 18, 1576</span>
            <span className="mx-2">|</span>
            <span className="mr-2">Haldighati Pass, Rajasthan</span>
            <span className="mx-2">|</span>
            <span className="flex items-center">
              Academic Sources: 
              <CitationPopover citationIds={['sarkar1960', 'sharma1954', 'chandra1982']} />
            </span>
          </div>
          
          <div className="prose max-w-none text-saddleBrown">
            <p className="text-lg">
              The Battle of Haldighati, fought on June 18, 1576, stands as one of the most significant military engagements of medieval India. This battle between Maharana Pratap's forces and the Mughal army commanded by Raja Man Singh has been extensively studied for its tactical implications, the role of terrain, and its place in the broader context of Mughal-Rajput relations.
            </p>

            <PeriodDecoration type="divider" />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Battlefield Geography</h2>
            <p>
              Haldighati is a narrow mountain pass in the Aravalli Range, named for its turmeric-colored yellow soil ('haldi' means turmeric in Hindi). The pass is approximately 1.5 kilometers long and narrows to about 100 meters at its most constricted point. This geographical feature played a crucial role in the battle strategy, as it allowed the numerically inferior Rajput forces to partially neutralize the Mughal advantage in numbers.
            </p>
            
            <BattleMap />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Force Composition</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="bg-beige p-4 rounded-lg border border-goldenrod">
                <h3 className="text-xl font-semibold text-maroon mb-2">Rajput Forces</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Total Strength:</strong> Approximately 3,000</li>
                  <li><strong>Commander:</strong> Maharana Pratap Singh</li>
                  <li><strong>Cavalry:</strong> 800 Rajput horsemen</li>
                  <li><strong>Afghan Contingent:</strong> 400 Afghan cavalry led by Hakim Khan Sur</li>
                  <li><strong>Bhil Archers:</strong> 1,500 tribal infantry</li>
                  <li><strong>Other Allies:</strong> 400 from various supporting clans</li>
                </ul>
              </div>
              
              <div className="bg-beige p-4 rounded-lg border border-goldenrod">
                <h3 className="text-xl font-semibold text-maroon mb-2">Mughal Forces</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Total Strength:</strong> Approximately 10,000</li>
                  <li><strong>Commander:</strong> Raja Man Singh I</li>
                  <li><strong>Rajput Allies:</strong> 5,000 (including Kachwaha cavalry)</li>
                  <li><strong>Mughal Cavalry:</strong> 3,000</li>
                  <li><strong>Infantry and Artillery:</strong> 2,000</li>
                  <li><strong>War Elephants:</strong> 30</li>
                </ul>
              </div>
            </div>
            
            <p>
              The disparity in numbers was significant, with Mughal forces outnumbering the Rajputs by more than three to one. However, Maharana Pratap's forces had the advantage of intimate knowledge of the terrain and the strategic value of the narrow pass.
            </p>
            
            <PeriodDecoration type="divider" />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Battle Chronology</h2>
            <TimelineSlider />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Military Tactics</h2>
            <p>
              The battle showcased several notable tactical elements that military historians have studied:
            </p>
            
            <ul className="list-disc pl-5 space-y-3 my-4">
              <li>
                <strong>Guerrilla Approach:</strong> Maharana Pratap utilized elements of guerrilla warfare, using the terrain to launch surprise attacks and quick retreats.
              </li>
              <li>
                <strong>Targeted Leadership Strike:</strong> The Rajput strategy focused on targeting the Mughal command, specifically Raja Man Singh, recognizing that eliminating the leadership could create disarray.
              </li>
              <li>
                <strong>Combined Arms Approach:</strong> The Mughals effectively coordinated their cavalry, infantry, and war elephants in a combined arms approach that eventually overwhelmed the Rajput forces.
              </li>
              <li>
                <strong>Sacrificial Rear Guard:</strong> The sacrifice of Jhala Man to enable Maharana Pratap's escape is an example of a tactical rear-guard action that preserved the strategic leadership at the cost of tactical defeat.
              </li>
            </ul>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              {battleImages.slice(0, 2).map(image => (
                <div key={image.id} className="border border-goldenrod rounded-lg overflow-hidden">
                  <img 
                    src={image.imageUrl} 
                    alt={image.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3 bg-beige">
                    <h4 className="font-semibold text-saddleBrown">{image.title}</h4>
                    <p className="text-sm text-gray-700">{image.description}</p>
                    <p className="text-xs text-gray-500 mt-1">Source: {image.attribution}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Historical Significance</h2>
            <p>
              While technically a Mughal victory, the Battle of Haldighati failed to achieve the Mughal objective of capturing Maharana Pratap or ending Mewar's resistance. The battle is often analyzed as a tactical defeat but a strategic stalemate for the Rajputs, as it:
            </p>
            
            <ol className="list-decimal pl-5 space-y-3 my-4">
              <li>Demonstrated the effectiveness of terrain and knowledge of local geography in military engagements</li>
              <li>Established Maharana Pratap as a symbol of resistance against overwhelming odds</li>
              <li>Showed the limitations of numerical superiority in difficult terrain</li>
              <li>Illustrated the complexity of political alliances in medieval India, with Rajputs fighting on both sides</li>
              <li>Set the stage for continued resistance that would eventually allow Mewar to reclaim much of its territory</li>
            </ol>
            
            <blockquote className="border-l-4 border-goldenrod pl-4 italic my-6">
              "The Battle of Haldighati, though technically won by the Mughals, failed to break the spirit of Mewar. It instead cemented Maharana Pratap's position as a symbol of unwavering resistance against foreign domination."
              <footer className="text-right text-sm mt-2">— Jadunath Sarkar, <cite>Military History of India</cite></footer>
            </blockquote>
            
            <PeriodDecoration type="divider" />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Scholarly Perspectives</h2>
            <p>
              Historical analysis of the Battle of Haldighati has evolved over time, with different perspectives emphasizing various aspects:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-beige p-4 rounded-lg">
                <h4 className="font-semibold text-maroon">Rajput Perspective</h4>
                <p className="text-sm">
                  Traditional Rajput accounts emphasize Maharana Pratap's valor and the moral victory of resistance against a numerically superior foe. These accounts highlight the sacrifice of Jhala Man and the legendary loyalty of Pratap's horse Chetak.
                </p>
              </div>
              
              <div className="bg-beige p-4 rounded-lg">
                <h4 className="font-semibold text-maroon">Mughal Perspective</h4>
                <p className="text-sm">
                  Mughal chronicles like Akbarnama describe the battle as a victory that extended Mughal influence, while acknowledging the difficulty of the terrain and the fierce resistance encountered.
                </p>
              </div>
              
              <div className="bg-beige p-4 rounded-lg">
                <h4 className="font-semibold text-maroon">Colonial Historiography</h4>
                <p className="text-sm">
                  British historians like James Tod romanticized the battle as an example of native resistance against an imperial power, drawing parallels to European historical narratives.
                </p>
              </div>
              
              <div className="bg-beige p-4 rounded-lg">
                <h4 className="font-semibold text-maroon">Modern Academic View</h4>
                <p className="text-sm">
                  Contemporary historians examine the battle in its broader political context, analyzing the complex network of alliances and the strategic imperatives that drove both sides.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <Link 
            to="/figures"
            className="bg-saddleBrown hover:bg-maroon text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            ← Key Figures
          </Link>
          
          <Link 
            to="/legacy"
            className="bg-saddleBrown hover:bg-maroon text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Legacy and Impact →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BattleDetailsPage;