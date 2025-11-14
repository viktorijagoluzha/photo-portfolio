import React from 'react';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ currentLanguage, onToggle }) => {
  return (
    <button 
      className="language-switcher" 
      onClick={onToggle}
      aria-label="Switch language"
    >
      <span className={currentLanguage === 'mk' ? 'active' : ''}>MK</span>
      <span className="separator">|</span>
      <span className={currentLanguage === 'en' ? 'active' : ''}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
