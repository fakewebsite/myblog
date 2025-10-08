import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { TermsPage } from './components/TermsPage';
import { SkillsToLearn2025 } from './components/blog-posts/SkillsToLearn2025';
import { DigitalTools2025 } from './components/blog-posts/DigitalTools2025';
import { PersonalBrandOnline } from './components/blog-posts/PersonalBrandOnline';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'terms':
        return <TermsPage />;
      case 'skills-to-learn-2025':
        return <SkillsToLearn2025 onNavigate={handleNavigate} />;
      case 'digital-tools-2025':
        return <DigitalTools2025 onNavigate={handleNavigate} />;
      case 'personal-brand-online':
        return <PersonalBrandOnline onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
