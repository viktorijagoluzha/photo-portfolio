import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '../atoms';
import './PortfolioItem.css';

const PortfolioItem = ({ item, index }) => {
  return (
    <motion.div 
      className="portfolio-item"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
    >
      <Image 
        src={item.image} 
        alt={item.category} 
        className="portfolio-image"
        fallbackSrc="https://placehold.co/400x400/1e293b/ffffff?text=Media"
      />
      <div className="portfolio-overlay">
        <span className="portfolio-category">{item.category}</span>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
