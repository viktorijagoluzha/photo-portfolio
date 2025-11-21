import React from 'react';
import { Text } from '../components/atoms';
import { PhotographerRegistrationForm } from '../components/organisms';
import { useLanguage } from '../contexts/LanguageContext';
import './JoinUsPage.css';

const JoinUsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="join-us-page">
      <section className="join-us-hero">
        <Text as="h1" variant="section-title">
          {t.photographerRegistration.title}
        </Text>
        <Text as="p" className="join-us-description">
          {t.photographerRegistration.description}
        </Text>
      </section>

      <section className="join-us-form-section">
        <div className="section-container">
          <PhotographerRegistrationForm />
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;
