import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SeoPage from './pages/services/SeoPage';
import PaidPage from './pages/services/PaidPage';
import SocialPage from './pages/services/SocialPage';
import InfluencerPage from './pages/services/InfluencerPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case Page.ABOUT:
        return <About onNavigate={setCurrentPage} />;
      case Page.SERVICES:
        return <Services onNavigate={setCurrentPage} />;
      case Page.CONTACT:
        return <Contact />;
      case Page.BLOG:
        return <Blog onNavigate={setCurrentPage} />;
      case Page.SERVICE_SEO:
        return <SeoPage onNavigate={setCurrentPage} />;
      case Page.SERVICE_PAID:
        return <PaidPage onNavigate={setCurrentPage} />;
      case Page.SERVICE_SOCIAL:
        return <SocialPage onNavigate={setCurrentPage} />;
      case Page.SERVICE_INFLUENCER:
        return <InfluencerPage onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-amber-500/30">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <WhatsAppFloat />
      <main className="fade-in">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Analytics />
    </div>
  );
};

export default App;