import React from 'react';
import { Text } from '../atoms';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <Text variant="small" className="footer-text">
        {t.footer.copyright}
      </Text>
    </footer>
  );
};

export default Footer;
