import React from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import CitationPopover from '../components/ui/CitationPopover';
import PeriodDecoration from '../components/ui/PeriodDecoration';
import { Link } from 'react-router-dom';

const HistoricalContextPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Historical Context - Battle of Haldighati (1576)';
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Historical Context', path: '/context' }
  ];

  return (
    <div className="bg-beige min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-saddleBrown mb-4">Historical Context</h1>
          
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <span className="mr-2">16th Century India</span>
            <span className="mx-2">|</span>
            <span className="flex items-center">
              Academic Sources: 
              <CitationPopover citationIds={['chandra1982', 'sharma1954', 'roy2012']} />
            </span>
          </div>
          
          <div className="prose max-w-none text-saddleBrown">
            <p className="text-lg">
              To understand the Battle of Haldighati, we must examine the political, social, and cultural landscape of 16th century India. This period was marked by the expansion of Mughal power under Emperor Akbar and the response of regional kingdoms to this growing empire.
            </p>

            <PeriodDecoration type="divider" />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">The Rise of the Mughal Empire</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
              <div className="md:w-2/3">
                <p>
                  By 1576, the Mughal Empire had been established in India for about fifty years, following Babur's victory at the First Battle of Panipat in 1526. Emperor Akbar, who ascended the throne in 1556, had embarked on a policy of expansion and consolidation that would define his reign.
                </p>
                <p className="mt-4">
                  Akbar's empire-building strategy had several components:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Military conquest of strategic territories</li>
                  <li>Diplomatic alliances, particularly with Rajput kingdoms</li>
                  <li>Administrative reforms that centralized authority</li>
                  <li>Religious policies that promoted integration of diverse communities</li>
                </ul>
              </div>
              
              <div className="md:w-1/3">
                <img 
                  src="../../mughal-darbar.jpg" 
                  alt="Historical representation of the Mughal court"
                  className="rounded-lg shadow-md"
                />
                <p className="text-xs text-gray-600 mt-2">
                  Representation of a Mughal durbar (court) similar to Akbar's court. Source: Pexels
                </p>
              </div>
            </div>
            
            <p>
              By the 1570s, Akbar had secured alliances with several major Rajput houses, including the Kachhwahas of Amber (modern Jaipur), the Rathores of Marwar (modern Jodhpur), and the Hadas of Bundi. These alliances were typically cemented through marriages between Rajput princesses and the imperial family, and by appointing Rajput nobles to high positions in the Mughal administration and military.
            </p>
            
            <blockquote className="border-l-4 border-goldenrod pl-4 italic my-6">
              "Akbar's policy of reconciliation with the Rajputs was a masterpiece of statesmanship. By incorporating Rajput chiefs into the imperial framework, he secured powerful allies for the empire while neutralizing potential centers of resistance."
              <footer className="text-right text-sm mt-2">— Satish Chandra, <cite>Medieval India: From Sultanat to the Mughals</cite></footer>
            </blockquote>
            
            <PeriodDecoration type="divider" />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Mewar: The Unconquered State</h2>
            
            <p>
              Among the Rajput states, Mewar (centered around Chittor and Udaipur) stood out for its historical resistance to outside powers. The ruling Sisodia clan prided themselves on never having submitted to foreign rule, maintaining their independence through centuries of invasions and political upheaval.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div>
                <h3 className="text-xl font-semibold text-maroon mb-2">Strategic Importance of Mewar</h3>
                <p>
                  Mewar's strategic location in southern Rajasthan made it vital for several reasons:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Control of key trade routes between Delhi and Gujarat</li>
                  <li>Access to important passes through the Aravalli mountain range</li>
                  <li>Rich agricultural lands and resources</li>
                  <li>Symbolic importance as a center of Rajput power and identity</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-maroon mb-2">Historical Resistance</h3>
                <p>
                  Mewar had a long tradition of resistance against external powers:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Successfully resisted multiple Delhi Sultanate invasions</li>
                  <li>Rana Sanga (r. 1509-1528) had nearly defeated Babur before Panipat</li>
                  <li>Defended Chittor against Bahadur Shah of Gujarat in 1535</li>
                  <li>Endured a major siege of Chittor by Akbar in 1567-68</li>
                </ul>
              </div>
            </div>
            
            <p>
              The fall of Chittor to Akbar in 1568 was a devastating blow to Mewar, resulting in massive casualties and the loss of their traditional capital. However, rather than submit to Mughal authority, the royal family and surviving nobles retreated to the hills and established a new base at Gogunda, continuing their resistance under Maharana Pratap, who ascended the throne in 1572.
            </p>
            
            <PeriodDecoration type="divider" />
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">The Road to Haldighati: Diplomatic Failures</h2>
            
            <p>
              Between 1572 and 1576, Akbar made several diplomatic attempts to bring Maharana Pratap into the imperial fold without further military conflict. These efforts included:
            </p>
            
            <ol className="list-decimal pl-5 space-y-3 my-4">
              <li>
                <strong>First Embassy (1573):</strong> Raja Man Singh's uncle Raja Bhagwant Das led a delegation to Maharana Pratap, offering favorable terms for an alliance.
              </li>
              <li>
                <strong>Second Embassy (1574):</strong> Raja Todar Mal, Akbar's finance minister, was sent to negotiate with additional incentives.
              </li>
              <li>
                <strong>Personal Meeting (1575):</strong> A meeting was arranged between Pratap and Raja Man Singh at Gogunda, but broke down over protocol issues—Pratap sent his son Amar Singh to receive Man Singh rather than greeting him personally.
              </li>
              <li>
                <strong>Final Ultimatum (early 1576):</strong> Akbar's court poet and diplomat Jalal Khan delivered a final offer, which Pratap rejected.
              </li>
            </ol>
            
            <p>
              The fundamental issue was that while Akbar expected personal submission (including attendance at the imperial court and marital alliances), Maharana Pratap was willing to acknowledge Mughal power only in a nominal sense, without compromising Mewar's effective independence or his personal dignity as the head of the Sisodia clan.
            </p>
            
            <div className="bg-beige p-5 rounded-lg border border-goldenrod my-6">
              <h3 className="text-xl font-semibold text-maroon mb-3">Cultural Dimensions of the Conflict</h3>
              <p className="mb-3">
                The resistance of Maharana Pratap was not merely political but also had cultural dimensions:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Rajput Honor Code:</strong> The concept of "rajdharma" (royal duty) emphasized protection of tradition, territory, and subjects above personal safety or comfort.
                </li>
                <li>
                  <strong>Lineage Pride:</strong> The Sisodias of Mewar claimed descent from the Sun (Suryavanshi) and considered their lineage the most pure among Rajput clans.
                </li>
                <li>
                  <strong>Historical Memory:</strong> The recent fall of Chittor (1568) and the jauhar (mass self-immolation) of Rajput women were fresh wounds in Mewar's collective memory.
                </li>
                <li>
                  <strong>Religious Identity:</strong> While not the primary factor, religious differences between Hindu Rajputs and the Muslim Mughals added another dimension to the conflict.
                </li>
              </ul>
            </div>
            
            <p>
              After the failure of diplomatic efforts, Akbar dispatched a military force under Raja Man Singh to subdue Mewar, leading to the confrontation at Haldighati on June 18, 1576.
            </p>
            
            <div className="flex justify-center my-8">
              <img 
                src="../../landscape.jpg" 
                alt="Landscape similar to the Haldighati region"
                className="rounded-lg shadow-lg max-w-2xl"
              />
            </div>
            
            <p className="text-center text-sm text-gray-600 mb-8">
              Landscape similar to the Haldighati region where the battle took place. The narrow mountain pass played a crucial role in the battle dynamics.
            </p>
            
            <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Broader Historical Significance</h2>
            
            <p>
              The Battle of Haldighati occurred during a pivotal period in Indian history, characterized by:
            </p>
            
            <ul className="list-disc pl-5 space-y-3 my-4">
              <li>
                <strong>Imperial Consolidation:</strong> Akbar's efforts to create a centralized, pan-Indian empire that transcended regional and communal divisions.
              </li>
              <li>
                <strong>Changing Military Technology:</strong> The introduction of gunpowder weapons was transforming warfare across the subcontinent.
              </li>
              <li>
                <strong>Cultural Synthesis:</strong> Akbar's promotion of cultural integration through his policies of sulh-i-kul (universal peace) and din-i-ilahi (divine faith).
              </li>
              <li>
                <strong>Economic Integration:</strong> The expansion of trade networks and standardization of currency and weights under Mughal administration.
              </li>
            </ul>
            
            <p>
              Understanding these broader currents helps place the Battle of Haldighati in its proper historical context—not simply as an isolated military engagement, but as part of the larger process of state formation and resistance in early modern India.
            </p>
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <Link 
            to="/"
            className="bg-saddleBrown hover:bg-maroon text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            ← Home
          </Link>
          
          <Link 
            to="/figures"
            className="bg-saddleBrown hover:bg-maroon text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Key Figures →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HistoricalContextPage;