import React from 'react';
import './Text.css';

const Text = ({ 
  as: Component = 'p', 
  variant = 'body',
  children, 
  className = '',
  ...props 
}) => {
  return (
    <Component className={`text text-${variant} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Text;
