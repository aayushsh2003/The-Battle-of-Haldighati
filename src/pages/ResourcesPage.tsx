import React from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import PeriodDecoration from '../components/ui/PeriodDecoration';
import { citations, formatCitation } from '../data/citations';
import { Link } from 'react-router-dom';
import { FileText, Download, Book, ExternalLink } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Educational Resources - Battle of Haldighati (1576)';
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Educational Resources', path: '/resources' }
  ];

  return (
    <div className="bg-beige min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-saddleBrown mb-6">Educational Resources</h1>
          
          <div className="prose max-w-none text-saddleBrown mb-8">
            <p className="text-lg">
              This section provides resources for educators, students, and researchers interested in the Battle of Haldighati and its historical context. All materials follow academic standards and draw from verified historical sources.
            </p>
          </div>
          
          <PeriodDecoration type="divider" />
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-maroon mb-6">For Educators</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-beige border border-goldenrod rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-maroon rounded-full p-2 mr-3">
                    <FileText size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-saddleBrown">Lesson Plans</h3>
                </div>
                <p className="text-saddleBrown mb-4">
                  Complete lesson plans for middle and high school history classes, with activities, discussion questions, and assessment tools.
                </p>
                <Link 
                  to="/resources/lesson-plans"
                  className="inline-flex items-center text-maroon hover:text-saddleBrown font-medium transition-colors"
                >
                  View Lesson Plans
                  <Download size={16} className="ml-2" />
                </Link>
              </div>
              
              <div className="bg-beige border border-goldenrod rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-maroon rounded-full p-2 mr-3">
                    <Book size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-saddleBrown">Primary Sources</h3>
                </div>
                <p className="text-saddleBrown mb-4">
                  Translated excerpts from primary historical documents related to the Battle of Haldighati, with contextual notes and analysis.
                </p>
                <Link 
                  to="/resources/primary-sources"
                  className="inline-flex items-center text-maroon hover:text-saddleBrown font-medium transition-colors"
                >
                  Explore Sources
                  <ExternalLink size={16} className="ml-2" />
                </Link>
              </div>
              
              <div className="bg-beige border border-goldenrod rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="bg-maroon rounded-full p-2 mr-3">
                    <Download size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-saddleBrown">Printable Materials</h3>
                </div>
                <p className="text-saddleBrown mb-4">
                  Maps, timelines, character profiles, and other printable resources for classroom use or independent study.
                </p>
                <Link 
                  to="/resources/printables"
                  className="inline-flex items-center text-maroon hover:text-saddleBrown font-medium transition-colors"
                >
                  Download Materials
                  <Download size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </section>
          
          <PeriodDecoration type="divider" />
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-maroon mb-6">Research Methodology</h2>
            
            <div className="bg-beige border border-goldenrod rounded-lg p-6">
              <p className="text-saddleBrown mb-4">
                The historical content on this website has been developed using a rigorous research methodology that incorporates:
              </p>
              
              <ul className="list-disc pl-5 space-y-3 text-saddleBrown mb-6">
                <li>
                  <strong>Primary Sources:</strong> Original documents from the period, including court chronicles, administrative records, and personal accounts from both Rajput and Mughal perspectives.
                </li>
                <li>
                  <strong>Archaeological Evidence:</strong> Findings from excavations at battle-related sites, analysis of weapons, armor, and other artifacts.
                </li>
                <li>
                  <strong>Secondary Literature:</strong> Peer-reviewed academic works from recognized historians specializing in medieval Indian history.
                </li>
                <li>
                  <strong>Cross-Cultural Perspectives:</strong> Inclusion of Rajput, Mughal, local, and international viewpoints to provide a balanced understanding.
                </li>
                <li>
                  <strong>Critical Analysis:</strong> Careful examination of sources for bias, context, and reliability, with transparent acknowledgment of historical uncertainties.
                </li>
              </ul>
              
              <p className="text-saddleBrown">
                Where historical details are contested or uncertain, we have noted this and presented multiple interpretations. All factual claims are supported by citations to reputable sources following the Chicago Manual of Style format.
              </p>
            </div>
          </section>
          
          <PeriodDecoration type="divider" />
          
          <section>
            <h2 className="text-2xl font-bold text-maroon mb-6">Bibliography</h2>
            
            <div className="bg-white border border-goldenrod rounded-lg p-6">
              <h3 className="text-xl font-semibold text-maroon mb-4">Primary Sources</h3>
              <ul className="list-none space-y-3 text-saddleBrown mb-8">
                <li>
                  <p>Abu'l-Fazl ibn Mubarak. <em>Akbarnama</em>. Translated by H. Beveridge. Calcutta: Asiatic Society, 1897-1939.</p>
                </li>
                <li>
                  <p>Khan, Abdul Qadir. <em>Muntakhab-ul-Lubab</em>. Asiatic Society, 1927.</p>
                </li>
                <li>
                  <p>Rajput Court Chronicles. <em>Raj Prashasti</em>. Translated by G.N. Sharma. Udaipur: Maharana Pratap Historical Society, 1970.</p>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold text-maroon mb-4">Secondary Sources</h3>
              <ul className="list-none space-y-3 text-saddleBrown">
                {citations.map(citation => (
                  <li key={citation.id}>
                    <p>{formatCitation(citation)}</p>
                  </li>
                ))}
                <li>
                  <p>Acharya, Narayana. <em>Maharana Pratap: The Hero of Haldighati</em>. New Delhi: National Book Trust, 2005.</p>
                </li>
                <li>
                  <p>Richards, John F. <em>The Mughal Empire</em>. Cambridge: Cambridge University Press, 1993.</p>
                </li>
                <li>
                  <p>Eraly, Abraham. <em>The Mughal Throne: The Saga of India's Great Emperors</em>. London: Phoenix, 2004.</p>
                </li>
              </ul>
            </div>
          </section>
        </div>
        
        <div className="flex justify-between mt-8">
          <Link 
            to="/legacy"
            className="bg-saddleBrown hover:bg-maroon text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            ← Legacy and Impact
          </Link>
          
          <Link 
            to="/"
            className="bg-saddleBrown hover:bg-maroon text-white font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;