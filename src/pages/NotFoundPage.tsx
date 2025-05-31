import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Page Not Found - Battle of Haldighati (1576)';
  }, []);

  return (
    <div className="bg-beige min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-maroon mb-4">Page Not Found</h1>
        
        <div className="text-6xl text-goldenrod mb-6">404</div>
        
        <p className="text-saddleBrown mb-6">
          The historical document you are looking for could not be found in our archives. It may have been moved, removed, or never existed.
        </p>
        
        <Link 
          to="/"
          className="inline-block bg-saddleBrown hover:bg-maroon text-white font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;