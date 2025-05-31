import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import CitationPopover from '../components/ui/CitationPopover';
import PeriodDecoration from '../components/ui/PeriodDecoration';
import { getFigureById } from '../data/keyFigures';

const FigureDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const figure = id ? getFigureById(id) : undefined;
  
  React.useEffect(() => {
    if (figure) {
      document.title = `${figure.name} - Battle of Haldighati (1576)`;
    } else {
      document.title = 'Historical Figure - Battle of Haldighati (1576)';
    }
  }, [figure]);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Key Figures', path: '/figures' },
    { label: figure?.name || 'Figure', path: `/figures/${id}` }
  ];

  if (!figure) {
    return (
      <div className="bg-beige min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h1 className="text-3xl font-bold text-saddleBrown mb-4">Historical Figure Not Found</h1>
            <p className="text-lg text-saddleBrown mb-6">
              The historical figure you are looking for could not be found in our records.
            </p>
            <Link 
              to="/figures"
              className="inline-block bg-saddleBrown hover:bg-maroon text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Return to Key Figures
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-beige min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {/* Hero Section */}
          <div 
            className="relative h-64 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${figure.imageUrl || 'https://images.pexels.com/photos/73870/stars-space-dark-galaxy-73870.jpeg'})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="flex items-center mb-2">
                <h1 className="text-3xl md:text-4xl font-bold mr-3">{figure.name}</h1>
                <span className={`text-sm px-2 py-1 rounded ${
                  figure.side === 'Rajput' 
                    ? 'bg-maroon text-white' 
                    : 'bg-goldenrod text-saddleBrown'
                }`}>
                  {figure.side}
                </span>
              </div>
              <p className="text-xl opacity-90">{figure.title}</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-600 mb-6">
              <span className="mr-2">Historical Figure</span>
              <span className="mx-2">|</span>
              <span className="flex items-center">
                Sources: 
                <CitationPopover citationIds={figure.citationIds} />
              </span>
            </div>
            
            <div className="prose max-w-none text-saddleBrown">
              <h2 className="text-2xl font-bold text-maroon mb-4">Biographical Overview</h2>
              <p className="text-lg mb-6">
                {figure.description}
              </p>
              
              <PeriodDecoration type="divider" />
              
              <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Role in the Battle of Haldighati</h2>
              {figure.id === 'maharana-pratap' && (
                <>
                  <p>
                    Maharana Pratap was the central figure of the Battle of Haldighati, personally leading his forces against the Mughal army. As the ruler of Mewar, he had refused to submit to Mughal Emperor Akbar, rejecting diplomatic overtures and maintaining his independence.
                  </p>
                  <p className="mt-4">
                    During the battle, Pratap led the initial charge, mounted on his famous horse Chetak. He targeted the Mughal commander Raja Man Singh, attempting to break the Mughal leadership. According to historical accounts, he came close enough to attack Man Singh's howdah (elephant seat) with his spear.
                  </p>
                  <p className="mt-4">
                    As the battle turned against the Rajputs due to superior Mughal numbers, Pratap was persuaded to leave the battlefield to continue the resistance another day. His escape, aided by the sacrifice of his loyal chieftain Jhala Man, allowed the resistance of Mewar to continue for years after the battle.
                  </p>
                </>
              )}
              
              {figure.id === 'man-singh' && (
                <>
                  <p>
                    Raja Man Singh I served as the commander of the Mughal forces at Haldighati. His appointment by Emperor Akbar was strategically significant, as he was a Rajput himself—a Kachwaha from Amber (modern Jaipur). Akbar hoped that having a Rajput general lead the army would cause division among Maharana Pratap's forces.
                  </p>
                  <p className="mt-4">
                    During the battle, Man Singh commanded from atop an elephant, following Mughal military practice for commanders. This made him a visible target, and Maharana Pratap specifically sought him out during the initial Rajput charge. Man Singh narrowly escaped when Pratap's spear struck his howdah.
                  </p>
                  <p className="mt-4">
                    His tactical decisions during the battle, particularly his use of the Mughal army's superior numbers to gradually encircle the Rajput forces, were crucial to the eventual Mughal victory. After the battle, he occupied parts of Mewar but was unable to establish permanent control or capture Maharana Pratap.
                  </p>
                </>
              )}
              
              {figure.id === 'hakim-khan-sur' && (
                <>
                  <p>
                    Hakim Khan Sur's presence in Maharana Pratap's army represents one of the most interesting aspects of the Battle of Haldighati. As an Afghan Muslim descendant of the Sur dynasty (which had briefly interrupted Mughal rule in North India), he chose to ally with the Hindu Rajput ruler against the Mughal Empire.
                  </p>
                  <p className="mt-4">
                    During the battle, Hakim Khan Sur commanded a contingent of Afghan cavalry, providing crucial support to Maharana Pratap's forces. His troops were known for their skill in mounted combat and were positioned as part of the main Rajput charge.
                  </p>
                  <p className="mt-4">
                    Historical accounts suggest that Hakim Khan Sur fought valiantly and may have been killed during the battle, though some sources indicate he survived and continued to support Mewar's resistance afterward. His participation demonstrates that the conflict was primarily political rather than religious in nature.
                  </p>
                </>
              )}
              
              {figure.id === 'akbar' && (
                <>
                  <p>
                    Emperor Akbar was not personally present at the Battle of Haldighati, remaining in his capital at Fatehpur Sikri. However, his political and military decisions directly led to the conflict. After multiple failed diplomatic missions to bring Maharana Pratap into the imperial fold, Akbar authorized military action against Mewar.
                  </p>
                  <p className="mt-4">
                    Akbar's appointment of Raja Man Singh, a Rajput, to lead the Mughal forces was a calculated decision that reflected his sophisticated understanding of the political dynamics of Rajasthan. By having a Rajput commander lead against another Rajput ruler, he highlighted the divisions among the Rajput clans and emphasized that the conflict was political rather than religious.
                  </p>
                  <p className="mt-4">
                    After the battle, Akbar received reports of the tactical victory but eventual strategic stalemate. Within a few years, his attention turned to challenges in other parts of his empire, reducing pressure on Mewar and allowing Maharana Pratap to gradually reclaim territory.
                  </p>
                </>
              )}
              
              {figure.id === 'jhala-man' && (
                <>
                  <p>
                    Jhala Man's role in the Battle of Haldighati represents one of the most celebrated examples of sacrifice and loyalty in Rajput history. As a chieftain of the Jhala clan and a loyal supporter of Maharana Pratap, he played a crucial role in the latter stages of the battle.
                  </p>
                  <p className="mt-4">
                    When it became clear that the battle was turning against the Rajputs due to the Mughal numerical advantage, Jhala Man convinced Maharana Pratap to leave the battlefield to ensure the continuation of Mewar's resistance. To facilitate this, he donned the royal insignia of Maharana Pratap—including the distinctive crown and royal umbrella—to draw the Mughal forces toward himself.
                  </p>
                  <p className="mt-4">
                    This deception worked, allowing Pratap to escape while the Mughals concentrated their attack on Jhala Man, believing him to be the Maharana. Jhala Man fought until he was killed, his sacrifice becoming a defining moment of the battle and an enduring symbol of Rajput loyalty.
                  </p>
                </>
              )}
              
              <PeriodDecoration type="divider" />
              
              <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Historical Legacy</h2>
              {figure.id === 'maharana-pratap' && (
                <>
                  <p>
                    Maharana Pratap's legacy has grown far beyond his historical role to become a powerful symbol in Indian cultural and political imagination. After Haldighati, he continued his resistance from the hills of Mewar, gradually reclaiming much of his lost territory through guerrilla warfare. By the time of his death in 1597, he had recovered most of Mewar except Chittor.
                  </p>
                  <p className="mt-4">
                    In modern India, Maharana Pratap is revered as a symbol of patriotism, independence, and resistance to foreign domination. Countless institutions, public spaces, and government programs bear his name. His birthday is celebrated as a festival in Rajasthan, and statues of Pratap mounted on his horse Chetak are found throughout India.
                  </p>
                  <p className="mt-4">
                    Historians debate aspects of his legacy, with some emphasizing his role as a regional ruler defending his territory and others portraying him as an early nationalist figure. What remains undisputed is his remarkable persistence against overwhelming odds and his refusal to compromise on his principles of independence.
                  </p>
                </>
              )}
              
              {figure.id === 'man-singh' && (
                <>
                  <p>
                    Raja Man Singh's legacy is complex, reflecting the nuanced politics of the Mughal-Rajput relationship. After Haldighati, he continued to serve Emperor Akbar with distinction, becoming one of the nine gems (navaratnas) of Akbar's court. He was appointed governor of several provinces, including Kabul and Bengal, and led successful military campaigns in Afghanistan and Orissa.
                  </p>
                  <p className="mt-4">
                    His alliance with the Mughals brought significant benefits to his home state of Amber, which flourished under Mughal protection. The magnificent Amber Fort near Jaipur stands as a testament to the prosperity of his reign. Man Singh also built important temples and patronized arts and literature.
                  </p>
                  <p className="mt-4">
                    In historical memory, perceptions of Man Singh vary. Some view him as a pragmatic ruler who secured advantages for his people through alliance rather than resistance, while others contrast his accommodation with Maharana Pratap's defiance. Modern historians increasingly recognize that both approaches represented valid political strategies in the complex landscape of medieval India.
                  </p>
                </>
              )}
              
              {figure.id === 'hakim-khan-sur' && (
                <>
                  <p>
                    Hakim Khan Sur's legacy highlights the complex nature of identity and allegiance in medieval India. As a Muslim general fighting for a Hindu Rajput ruler against the Mughal Empire (itself Muslim-ruled), he challenges simplistic religious narratives of Indian history.
                  </p>
                  <p className="mt-4">
                    His loyalty to Mewar rather than to the Mughals was likely influenced by both personal and political factors. As a descendant of the Sur dynasty that had briefly ruled North India before being displaced by the Mughals, he may have had dynastic reasons to oppose Akbar. Additionally, like many regional powers, he may have preferred alliance with a local ruler who would grant him autonomy over submission to a centralizing empire.
                  </p>
                  <p className="mt-4">
                    In contemporary discourse, Hakim Khan Sur is often cited as an example of India's syncretic traditions and the ways in which political alliances in medieval India transcended religious boundaries. His tomb in Rajasthan is maintained as a historical monument and is visited by both Hindu and Muslim pilgrims.
                  </p>
                </>
              )}
              
              {figure.id === 'akbar' && (
                <>
                  <p>
                    Emperor Akbar's legacy extends far beyond the Battle of Haldighati, as he is widely regarded as the greatest of the Mughal emperors. His 49-year reign transformed the Mughal state from a conquering force into an established empire with sophisticated administrative systems, cultural patronage, and religious policies aimed at integration.
                  </p>
                  <p className="mt-4">
                    The failure to fully subjugate Mewar stands as one of the few limitations on Akbar's otherwise remarkable record of expansion and consolidation. However, even this limitation demonstrates a pragmatic aspect of his rule—the recognition that some conflicts were not worth the continued commitment of imperial resources when other challenges demanded attention.
                  </p>
                  <p className="mt-4">
                    In modern historical assessment, Akbar is credited with laying the foundations for a multicultural empire that integrated diverse populations and traditions. His religious policy of sulh-i-kul (universal peace) and his administrative reforms creating the mansabdari system had lasting impacts on Indian governance. The magnificent buildings he commissioned, including Fatehpur Sikri and parts of Agra Fort, remain as visible symbols of his cultural achievements.
                  </p>
                </>
              )}
              
              {figure.id === 'jhala-man' && (
                <>
                  <p>
                    Jhala Man's legacy is primarily defined by his act of self-sacrifice during the Battle of Haldighati. In Rajput tradition, his decision to take on the royal insignia and face certain death to allow Maharana Pratap's escape exemplifies the virtue of swami bhakti (loyalty to one's lord), which was central to Rajput ethical codes.
                  </p>
                  <p className="mt-4">
                    This sacrifice is commemorated in folk songs, historical ballads, and artistic depictions throughout Rajasthan. The Jhala clan continues to take pride in their ancestor's role in preserving Mewar's independence by enabling Maharana Pratap's survival.
                  </p>
                  <p className="mt-4">
                    Beyond regional memory, Jhala Man's story has entered broader Indian cultural narratives about loyalty, sacrifice, and commitment to larger causes. His act represents the supporting roles that were essential to historical outcomes but are sometimes overshadowed by more prominent figures in historical accounts. Modern commemorations at Haldighati often acknowledge his contribution alongside that of Maharana Pratap.
                  </p>
                </>
              )}
              
              <PeriodDecoration type="divider" />
              
              {figure.quotes && figure.quotes.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-maroon mt-8 mb-4">Notable Quotations</h2>
                  <div className="space-y-6">
                    {figure.quotes.map((quote, index) => (
                      <blockquote key={index} className="border-l-4 border-goldenrod pl-4 italic my-4">
                        "{quote}"
                        <footer className="text-right text-sm mt-2">— Attributed to {figure.name}</footer>
                      </blockquote>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-8">
          <Link 
            to="/figures"
            className="bg-saddleBrown hover:bg-maroon text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            ← Back to Key Figures
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FigureDetailPage;