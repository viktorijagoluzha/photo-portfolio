import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../atoms';
import './ServiceCard.css';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div 
      className="service-card"
      initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Icon className="service-icon" />
      <Text as="h4" className="service-title">
        {service.title}
      </Text>
      <Text as="p" className="service-description">
        {service.description}
      </Text>
    </motion.div>
  );
};

export default ServiceCard;
