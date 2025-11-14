import React from 'react';
import { Header, Footer } from '../organisms';
import { useLanguage } from '../../contexts/LanguageContext';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#team', label: t.nav.team },
    { href: '#services', label: t.nav.services },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#booking', label: t.nav.contact },
  ];

  return (
    <div className="app-container">
      <Header 
        studioName={t.studioName}
        brandName={t.brandName}
        navItems={navItems}
        currentLanguage={language}
        onLanguageToggle={toggleLanguage}
      />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
