import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SearchBox from '../ui/SearchBox';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-saddleBrown shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="Battle of Haldighati - Home"
          >
            <span className="text-beige text-2xl font-bold">Battle of Haldighati</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className="text-beige hover:text-goldenrod transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/context" 
                  className="text-beige hover:text-goldenrod transition-colors"
                >
                  Historical Context
                </Link>
              </li>
              <li>
                <Link 
                  to="/figures" 
                  className="text-beige hover:text-goldenrod transition-colors"
                >
                  Key Figures
                </Link>
              </li>
              <li>
                <Link 
                  to="/battle" 
                  className="text-beige hover:text-goldenrod transition-colors"
                >
                  Battle Details
                </Link>
              </li>
              <li>
                <Link 
                  to="/legacy" 
                  className="text-beige hover:text-goldenrod transition-colors"
                >
                  Legacy
                </Link>
              </li>
              <li>
                <Link 
                  to="/resources" 
                  className="text-beige hover:text-goldenrod transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <SearchBox className="w-60" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-beige" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-saddleBrown border-t border-goldenrod">
          <div className="container mx-auto px-4 py-4">
            <SearchBox className="mb-4" />
            
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="block text-beige hover:text-goldenrod transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/context" 
                    className="block text-beige hover:text-goldenrod transition-colors"
                  >
                    Historical Context
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/figures" 
                    className="block text-beige hover:text-goldenrod transition-colors"
                  >
                    Key Figures
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/battle" 
                    className="block text-beige hover:text-goldenrod transition-colors"
                  >
                    Battle Details
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/legacy" 
                    className="block text-beige hover:text-goldenrod transition-colors"
                  >
                    Legacy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/resources" 
                    className="block text-beige hover:text-goldenrod transition-colors"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;