import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <nav className="nav">
        <a href="#home" className="logo">Yassine Rafiq</a>
        <ul className="nav-links">
          <li><a href="#home">{t('nav.home')}</a></li>
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#skills">{t('nav.skills')}</a></li>
          <li><a href="#projects">{t('nav.projects')}</a></li>
          <li><a href="#cv">{t('nav.cv')}</a></li>
          <li><a href="#contact">{t('nav.contact')}</a></li>
          <li>
            <button 
              onClick={toggleLanguage} 
              className="language-btn"
              aria-label={language === 'en' ? 'Switch to French' : 'Passer en Anglais'}
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;