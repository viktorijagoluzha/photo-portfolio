import React, { useReducer } from 'react';
import { Send } from 'lucide-react';
import { Button, Text } from '../atoms';
import { FormField } from '../molecules';
import { useLanguage } from '../../contexts/LanguageContext';
import './PhotographerRegistrationForm.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value, message: '' };
    case 'RESET_FORM':
      return { 
        ...state, 
        fullName: '', 
        email: '', 
        phone: '',
        specialization: '',
        experience: '',
        portfolio: '',
        availability: '',
        message: 'success' 
      };
    case 'ERROR':
      return { ...state, message: 'error' };
    default:
      return state;
  }
};

const PhotographerRegistrationForm = () => {
  const { t } = useLanguage();
  
  const [formData, dispatch] = useReducer(formReducer, {
    fullName: '',
    email: '',
    phone: '',
    specialization: '',
    experience: '',
    portfolio: '',
    availability: '',
    message: '',
  });

  const handleChange = (e) => {
    dispatch({ type: 'UPDATE_FIELD', field: e.target.name, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName?.trim() || !formData.email?.trim() || !formData.phone?.trim() || !formData.specialization?.trim()) {
      dispatch({ type: 'ERROR' });
      return;
    }
    
    try {
      const emailData = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        specialization: formData.specialization,
        experience: formData.experience,
        portfolio: formData.portfolio,
        availability: formData.availability,
      };
      
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: process.env.REACT_APP_EMAILJS_SERVICE_ID,
          template_id: process.env.REACT_APP_EMAILJS_PHOTOGRAPHER_TEMPLATE_ID,
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
      console.error('Error sending application:', error);
      dispatch({ type: 'ERROR' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="photographer-registration-form">
      <Text as="h3" className="form-title">
        {t.photographerRegistration?.formTitle || "Apply as Photographer"}
      </Text>
      
      <Text as="p" className="form-description">
        {t.photographerRegistration?.formDescription || "Join our team of professional photographers"}
      </Text>
      
      {formData.message && (
        <div className={`form-message ${formData.message === 'success' ? 'success' : 'error'}`}>
          {formData.message === 'success' 
            ? (t.photographerRegistration?.successMessage || "Application sent successfully!") 
            : (t.photographerRegistration?.errorMessage || "Please fill in all required fields.")}
        </div>
      )}

      <div className="form-row">
        <FormField
          type="text"
          name="fullName"
          placeholder={t.photographerRegistration?.fullNamePlaceholder || "Full Name"}
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <FormField
          type="email"
          name="email"
          placeholder={t.photographerRegistration?.emailPlaceholder || "Email Address"}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <FormField
          type="tel"
          name="phone"
          placeholder={t.photographerRegistration?.phonePlaceholder || "Phone Number"}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <FormField
          type="select"
          name="specialization"
          label={t.photographerRegistration?.specializationLabel || "Specialization:"}
          value={formData.specialization || (t.photographerRegistration?.specializationOptions?.[0] || "Photography")}
          onChange={handleChange}
          options={t.photographerRegistration?.specializationOptions || ["Photography", "Videography", "Drone", "Photo & Video", "All"]}
        />
      </div>

      <FormField
        type="select"
        name="experience"
        label={t.photographerRegistration?.experienceLabel || "Experience Level:"}
        value={formData.experience || (t.photographerRegistration?.experienceOptions?.[0] || "Beginner")}
        onChange={handleChange}
        options={t.photographerRegistration?.experienceOptions || ["Beginner (0-1 years)", "Intermediate (1-3 years)", "Professional (3-5 years)", "Expert (5+ years)"]}
      />

      <FormField
        type="text"
        name="portfolio"
        placeholder={t.photographerRegistration?.portfolioPlaceholder || "Portfolio URL (Instagram, website, etc.)"}
        value={formData.portfolio}
        onChange={handleChange}
      />

      <FormField
        type="textarea"
        name="availability"
        placeholder={t.photographerRegistration?.availabilityPlaceholder || "Tell us about your availability and why you want to join..."}
        value={formData.availability}
        onChange={handleChange}
        rows={4}
      />

      <Button type="submit" variant="submit" icon={Send}>
        {t.photographerRegistration?.submitButton || "Submit Application"}
      </Button>
    </form>
  );
};

export default PhotographerRegistrationForm;
