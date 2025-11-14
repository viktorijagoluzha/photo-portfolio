import React from 'react';
import './Icon.css';

const Icon = ({ 
  component: IconComponent, 
  size = 'md',
  className = '',
  ...props 
}) => {
  if (!IconComponent) return null;

  return (
    <IconComponent 
      className={`icon icon-${size} ${className}`} 
      {...props} 
    />
  );
};

export default Icon;
