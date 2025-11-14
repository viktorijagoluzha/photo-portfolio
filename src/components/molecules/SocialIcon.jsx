import React from 'react';
import './SocialIcon.css';

const SocialIcon = ({ href, icon: IconComponent, className = '' }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`social-icon ${className}`}
    >
      <IconComponent className="social-icon-svg" />
    </a>
  );
};

export default SocialIcon;
