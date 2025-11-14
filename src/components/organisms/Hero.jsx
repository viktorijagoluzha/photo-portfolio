import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../atoms';
import backgroundImage from '../../assets/DSC_0311.JPG';
import './Hero.css';

const Hero = ({ title, subtitle, ctaText, ctaHref }) => {
  return (
    <motion.section 
      id="home" 
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <Text as="h1" variant="hero-title">
          {title}
        </Text>
        <Text as="p" variant="hero-subtitle">
          {subtitle}
        </Text>
        <a href={ctaHref} className="hero-cta">
          {ctaText}
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
