import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-saddleBrown text-beige">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-goldenrod">Battle of Haldighati</h3>
            <p className="mb-4">
              This website presents historical research on the 1576 Battle of Haldighati, a significant event in 
              Indian history that shaped the relationship between the Mughal Empire and Rajput kingdoms.
            </p>
            <p className="text-sm">
              All content follows academic citation standards and draws from primary and secondary historical sources.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-goldenrod">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-goldenrod transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/context" className="hover:text-goldenrod transition-colors">Historical Context</Link>
              </li>
              <li>
                <Link to="/figures" className="hover:text-goldenrod transition-colors">Key Figures</Link>
              </li>
              <li>
                <Link to="/battle" className="hover:text-goldenrod transition-colors">Battle Details</Link>
              </li>
              <li>
                <Link to="/legacy" className="hover:text-goldenrod transition-colors">Legacy</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-goldenrod transition-colors">Resources</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-goldenrod">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/educators" className="hover:text-goldenrod transition-colors">For Educators</Link>
              </li>
              <li>
                <Link to="/resources/bibliography" className="hover:text-goldenrod transition-colors">Bibliography</Link>
              </li>
              <li>
                <Link to="/resources/methodology" className="hover:text-goldenrod transition-colors">Research Methodology</Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-goldenrod transition-colors">Accessibility Statement</Link>
              </li>
              <li>
                <Link to="/high-contrast" className="hover:text-goldenrod transition-colors">High Contrast Mode</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-goldenrod mt-8 pt-6 text-center text-sm">
          <p>
            © 2025 Battle of Haldighati Historical Project. All historical information is provided for educational purposes.
          </p>
          <p className="mt-2">
            Content is available under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-goldenrod hover:underline">CC BY-NC-SA 4.0</a> unless otherwise noted.
          </p>
          <p className="mt-2 text-goldenrod">
            Developed with ❤️ by <a href="https://github.com/aayushsh2003" target="_blank" rel="noopener noreferrer" className="hover:underline">Aayush Sharma</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;