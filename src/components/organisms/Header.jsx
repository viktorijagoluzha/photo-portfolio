import React from 'react';
import { NavLink, LanguageSwitcher } from '../molecules';
import './Header.css';

const Header = ({ studioName, brandName, navItems = [], currentLanguage, onLanguageToggle }) => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="header-title">
          <span className="brand">{brandName}</span> {studioName.replace(brandName, '').trim()}
        </h1>
        <div className="header-nav-wrapper">
          <nav className="nav-menu">
            {navItems.map((item, index) => (
              <NavLink key={index} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <LanguageSwitcher 
            currentLanguage={currentLanguage}
            onToggle={onLanguageToggle}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
