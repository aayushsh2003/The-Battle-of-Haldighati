import React from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import CitationPopover from '../components/ui/CitationPopover';
import PeriodDecoration from '../components/ui/PeriodDecoration';
import { Link } from 'react-router-dom';

const LegacyPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Legacy and Impact - Battle of Haldighati (1576)';
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Legacy and Impact', path: '/legacy' }
  ];

  return (
    <div className="bg-beige min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-saddleBrown mb-4">Legacy and Historical Impact</h1>
          
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <span className="mr-2">Historical Analysis</span>
            <span className="mx-2">|</span>
            <span className="flex items-center">
              Academic Sources: 
              <CitationPopover citationIds={['sharma1954', 'roy2012', 'singh2015']} />
            </span>
          </div>
          
          <div className="prose max-w-none text-saddleBrown">
            <p className="text-lg">
              The Battle of Haldighati, though fought in a single day in 1576, has cast a long shadow over Indian history. Its impact extends far beyond the immediate military outcome, influencing cultural memory, regional identity, and historical interpretation for centuries.
            </p>

            <PeriodDecoration type="divider" />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Immediate Aftermath</h2>
            
            <p>
              In the short term, the Battle of Haldighati had several direct consequences:
            </p>
            
            <ul className="list-disc pl-5 space-y-3 my-4">
              <li>
                <strong>Continued Resistance:</strong> Despite the tactical defeat, Maharana Pratap escaped and continued his resistance from the hills and forests of southern Mewar.
              </li>
              <li>
                <strong>Mughal Occupation:</strong> The Mughals occupied parts of Mewar, including the areas around Gogunda and Kumbhalgarh, but were unable to establish complete control.
              </li>
              <li>
                <strong>Guerrilla Campaign:</strong> Maharana Pratap shifted to guerrilla tactics, conducting raids against Mughal outposts and supply lines from bases in the Aravalli hills.
              </li>
              <li>
                <strong>Resource Constraints:</strong> The loss of agricultural lands forced the Mewar court to live under austere conditions, a period chronicled in folk tales about Maharana Pratap eating bread made from grass.
              </li>
            </ul>
            
            <p>
              By 1579, Akbar had turned his attention to challenges in the northwest and Afghanistan, reducing pressure on Mewar. Taking advantage of this, Maharana Pratap gradually recaptured much of his lost territory. By the time of his death in 1597, he had recovered most of Mewar except Chittor.
            </p>
            
            <PeriodDecoration type="divider" />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Political and Military Legacy</h2>
            
            <div className="flex flex-col md:flex-row gap-8 my-6">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-maroon mb-3">Lessons in Asymmetric Warfare</h3>
                <p>
                  The Battle of Haldighati and the subsequent guerrilla campaign offer important lessons in asymmetric warfare:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>The value of terrain knowledge in compensating for numerical disadvantage</li>
                  <li>The effectiveness of mobility and surprise against larger, conventional forces</li>
                  <li>The importance of secure bases in inaccessible areas</li>
                  <li>The strategic value of targeting supply lines rather than engaging in direct confrontation</li>
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-maroon mb-3">Impact on Mughal-Rajput Relations</h3>
                <p>
                  The battle and Pratap's continued resistance influenced Mughal policy toward Rajput states:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Demonstrated the limits of Mughal military power in difficult terrain</li>
                  <li>Reinforced the value of diplomacy and accommodation with Rajput rulers</li>
                  <li>Created a precedent for selective autonomy within the imperial framework</li>
                  <li>Influenced Akbar's successors in their approach to regional powers</li>
                </ul>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-goldenrod pl-4 italic my-6">
              "The resistance of Maharana Pratap demonstrated that even the mighty Mughal Empire had its limitations. In the difficult terrain of southern Rajasthan, imperial power could be effectively challenged by determined local resistance with popular support."
              <footer className="text-right text-sm mt-2">— Kaushik Roy, <cite>Hinduism and the Ethics of Warfare in South Asia</cite></footer>
            </blockquote>
            
            <PeriodDecoration type="divider" />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Cultural and Symbolic Significance</h2>
            
            <p>
              Perhaps the most enduring legacy of Haldighati is its place in cultural memory and the symbolic value attached to the battle and its participants:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-beige p-5 rounded-lg border border-goldenrod">
                <h3 className="text-xl font-semibold text-maroon mb-3">Maharana Pratap as a Symbol</h3>
                <p>
                  Over the centuries, Maharana Pratap has been transformed from a historical figure into a cultural icon symbolizing:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Rajput valor and martial spirit</li>
                  <li>Resistance to foreign domination</li>
                  <li>Sacrifice for principles and independence</li>
                  <li>Rajasthani and later Indian nationalism</li>
                </ul>
              </div>
              
              <div className="bg-beige p-5 rounded-lg border border-goldenrod">
                <h3 className="text-xl font-semibold text-maroon mb-3">Folklore and Literature</h3>
                <p>
                  The battle has inspired a rich tradition of cultural production:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Ballads and folk songs celebrating Rajput heroism</li>
                  <li>Court poems like "Raj Prashasti" and "Pratap Vilas"</li>
                  <li>Modern historical novels and dramas</li>
                  <li>Contemporary films and television series</li>
                </ul>
              </div>
            </div>
            
            <p>
              Elements of the battle have become particularly iconic in popular memory:
            </p>
            
            <ul className="list-disc pl-5 space-y-3 my-4">
              <li>
                <strong>Chetak:</strong> Maharana Pratap's loyal horse who carried him to safety despite being mortally wounded has become a symbol of loyalty and sacrifice. Statues of Chetak are found throughout Rajasthan.
              </li>
              <li>
                <strong>The Spear Throw:</strong> Pratap's attack on Man Singh's howdah (elephant seat) with his spear is frequently depicted in paintings and sculptures.
              </li>
              <li>
                <strong>Jhala Man's Sacrifice:</strong> The story of Jhala Man taking on the royal insignia to enable Pratap's escape exemplifies the Rajput ideal of loyalty unto death.
              </li>
            </ul>
            
            <div className="my-8 flex justify-center">
              <img 
                src="https://images.pexels.com/photos/6670704/pexels-photo-6670704.jpeg" 
                alt="Memorial similar to those honoring Maharana Pratap"
                className="rounded-lg shadow-lg max-w-2xl"
              />
            </div>
            
            <p className="text-center text-sm text-gray-600 mb-8">
              Memorial structures similar to those dedicated to Maharana Pratap and the Battle of Haldighati are found throughout Rajasthan.
            </p>
            
            <PeriodDecoration type="divider" />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Historical Interpretation and Reassessment</h2>
            
            <p>
              The Battle of Haldighati has been subject to varying interpretations over the centuries:
            </p>
            
            <div className="space-y-4 my-6">
              <div>
                <h3 className="text-xl font-semibold text-maroon mb-2">Colonial Period (19th Century)</h3>
                <p>
                  British historians like James Tod romantically portrayed the battle as a struggle for freedom against a foreign power, often drawing parallels to European history. This interpretation emphasized religious differences and downplayed the complex political realities of 16th century India.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-maroon mb-2">Nationalist Period (Early-Mid 20th Century)</h3>
                <p>
                  Indian nationalist historians incorporated Maharana Pratap into the broader narrative of resistance against foreign rule, connecting the 16th century struggle to the contemporary independence movement. This period saw the elevation of Pratap as a pan-Indian hero rather than a regional figure.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-maroon mb-2">Post-Independence Scholarship</h3>
                <p>
                  Modern historians have approached the battle with greater nuance, examining:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>The complex network of alliances that cut across religious lines</li>
                  <li>The pragmatic rather than ideological motivations of many participants</li>
                  <li>The battle's place in the broader process of state formation in early modern India</li>
                  <li>The gap between historical reality and cultural memory</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-maroon mb-2">Contemporary Relevance</h3>
                <p>
                  Today, the Battle of Haldighati continues to resonate in Indian political and cultural discourse. References to Maharana Pratap appear in discussions of regional identity, national heritage, and historical memory. The battle site at Haldighati is a significant tourist destination and place of commemoration.
                </p>
              </div>
            </div>
            
            <PeriodDecoration type="divider" />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Conclusion: The Living Legacy</h2>
            
            <p>
              Nearly 450 years after the Battle of Haldighati, its legacy continues to evolve. What began as a military engagement between regional powers has been transformed into a powerful symbol with multiple layers of meaning. The battle reminds us that historical events often acquire significance far beyond their immediate context, shaped by the needs and perspectives of successive generations.
            </p>
            
            <p className="mt-4">
              For historians, the challenge is to balance appreciation for the cultural importance of Haldighati with a commitment to understanding the battle in its proper historical context. By examining both the facts of what happened on June 18, 1576, and the ways the battle has been remembered and reinterpreted, we gain insight not only into medieval Indian history but also into the processes by which societies construct meaningful narratives about their past.
            </p>
            
            <blockquote className="border-l-4 border-goldenrod pl-4 italic my-6">
              "The Battle of Haldighati lives in two realms: as a historical event with concrete causes and consequences, and as a cultural touchstone that continues to inspire and provoke. Both dimensions are essential to understanding its full significance in Indian history."
              <footer className="text-right text-sm mt-2">— Rajendra Singh, <cite>Battles That Changed History</cite></footer>
            </blockquote>
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <Link 
            to="/battle"
            className="bg-saddleBrown hover:bg-maroon text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            ← Battle Details
          </Link>
          
          <Link 
            to="/resources"
            className="bg-saddleBrown hover:bg-maroon text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Educational Resources →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegacyPage;