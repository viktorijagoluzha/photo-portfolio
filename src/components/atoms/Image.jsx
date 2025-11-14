import React from 'react';
import './Image.css';

const Image = ({ 
  src, 
  alt, 
  className = '',
  onError,
  fallbackSrc = "https://placehold.co/400x400/1e293b/ffffff?text=Image",
  ...props 
}) => {
  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackSrc;
    if (onError) onError(e);
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`image ${className}`}
      onError={handleError}
      {...props}
    />
  );
};

export default Image;
