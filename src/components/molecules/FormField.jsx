import React from 'react';
import { Input, TextArea, Select } from '../atoms';
import './FormField.css';

const FormField = ({ 
  type = 'text', 
  label, 
  name, 
  value, 
  onChange, 
  placeholder,
  required = false,
  options,
  rows,
  className = ''
}) => {
  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <TextArea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
        />
      );
    }
    
    if (type === 'select') {
      return (
        <Select
          name={name}
          value={value}
          onChange={onChange}
          options={options}
        />
      );
    }
    
    return (
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    );
  };

  return (
    <div className={`form-field ${className}`}>
      {label && (
        <label htmlFor={name} className="form-field-label">
          {label}
        </label>
      )}
      {renderInput()}
    </div>
  );
};

export default FormField;
