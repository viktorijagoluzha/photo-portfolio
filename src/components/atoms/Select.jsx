import React from 'react';
import './Select.css';

const Select = ({ 
  name, 
  value, 
  onChange, 
  options = [],
  className = '',
  ...props 
}) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`select ${className}`}
      {...props}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
