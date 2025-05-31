import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import HistoricalContextPage from './pages/HistoricalContextPage';
import KeyFiguresPage from './pages/KeyFiguresPage';
import FigureDetailPage from './pages/FigureDetailPage';
import BattleDetailsPage from './pages/BattleDetailsPage';
import LegacyPage from './pages/LegacyPage';
import ResourcesPage from './pages/ResourcesPage';
import NotFoundPage from './pages/NotFoundPage';

const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = location;
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/context" element={<HistoricalContextPage />} />
              <Route path="/figures" element={<KeyFiguresPage />} />
              <Route path="/figures/:id" element={<FigureDetailPage />} />
              <Route path="/battle" element={<BattleDetailsPage />} />
              <Route path="/legacy" element={<LegacyPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;