import React, { useReducer, useCallback } from 'react';
import { Send } from 'lucide-react';
import { Button, Text } from '../atoms';
import { FormField } from '../molecules';
import { useLanguage } from '../../contexts/LanguageContext';
import './ContactForm.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value, message: '' };
    case 'RESET_FORM':
      return { ...state, name: '', email: '', details: '', message: 'success' };
    case 'ERROR':
      return { ...state, message: 'error' };
    default:
      return state;
  }
};

const ContactForm = () => {
  const { t } = useLanguage();
  
  const [formData, dispatch] = useReducer(formReducer, {
    name: '',
    email: '',
    service: '',
    details: '',
    message: '',
  });

  const handleChange = useCallback((e) => {
    dispatch({ type: 'UPDATE_FIELD', field: e.target.name, value: e.target.value });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form Data:', formData); // Debug log
    
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.details?.trim()) {
      console.log('Validation failed:', { 
        name: formData.name, 
        email: formData.email, 
        details: formData.details 
      });
      dispatch({ type: 'ERROR' });
      return;
    }
    
    // Send email notification using EmailJS (free service)
    try {
      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        service: formData.service,
        message: formData.details,
        to_email: 'your-email@example.com', // Replace with your email
      };
      
      console.log('Sending email with data:', emailData); // Debug log
      
      // Using EmailJS service
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: process.env.REACT_APP_EMAILJS_SERVICE_ID,
          template_id: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          user_id: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
          template_params: emailData,
        }),
      });
      
      if (response.ok) {
        dispatch({ type: 'RESET_FORM' });
      } else {
        dispatch({ type: 'ERROR' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      dispatch({ type: 'ERROR' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <Text as="h3" className="form-title">
        {t.contact.form.title}
      </Text>
      
      {formData.message && (
        <div className={`form-message ${formData.message === 'success' ? 'success' : 'error'}`}>
          {formData.message === 'success' ? t.contact.form.successMessage : t.contact.form.errorMessage}
        </div>
      )}

      <div className="form-row">
        <FormField
          type="text"
          name="name"
          placeholder={t.contact.form.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormField
          type="email"
          name="email"
          placeholder={t.contact.form.emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <FormField
        type="select"
        name="service"
        label={t.contact.form.serviceLabel}
        value={formData.service || t.contact.form.serviceOptions[0]}
        onChange={handleChange}
        options={t.contact.form.serviceOptions}
      />

      <FormField
        type="textarea"
        name="details"
        placeholder={t.contact.form.detailsPlaceholder}
        value={formData.details}
        onChange={handleChange}
        rows={4}
        required
      />

      <Button type="submit" variant="submit" icon={Send}>
        {t.contact.form.submitButton}
      </Button>
    </form>
  );
};

export default ContactForm;
