import React from 'react';
import './TextArea.css';

const TextArea = ({ 
  name, 
  value, 
  onChange, 
  placeholder, 
  rows = 4,
  required = false,
  className = '',
  ...props 
}) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className={`textarea ${className}`}
      {...props}
    />
  );
};

export default TextArea;
