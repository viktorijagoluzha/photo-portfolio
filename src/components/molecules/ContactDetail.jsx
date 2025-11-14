import React from 'react';
import './ContactDetail.css';

const ContactDetail = ({ icon: IconComponent, children, className = '' }) => {
  return (
    <div className={`contact-detail ${className}`}>
      <IconComponent className="contact-detail-icon" />
      <span>{children}</span>
    </div>
  );
};

export default ContactDetail;
