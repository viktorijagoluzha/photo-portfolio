import React from 'react';
import './NavLink.css';

const NavLink = ({ href, children, className = '' }) => {
  return (
    <a href={href} className={`nav-link ${className}`}>
      {children}
    </a>
  );
};

export default NavLink;
