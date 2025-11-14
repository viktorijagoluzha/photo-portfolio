import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '',
  icon: Icon,
  ...props 
}) => {
  const Component = motion.button;

  return (
    <Component
      type={type}
      onClick={onClick}
      className={`button button-${variant} ${className}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      {...props}
    >
      {Icon && <Icon className="button-icon" />}
      {children}
    </Component>
  );
};

export default Button;
