import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Hero, TeamCard, ServiceCard, PortfolioItem, ContactForm } from '../components/organisms';
import { Text } from '../components/atoms';
import { ContactDetail, SocialIcon } from '../components/molecules';
import { useLanguage } from '../contexts/LanguageContext';
import { ALEKSANDAR_IMAGE, ELENA_IMAGE, PORTFOLIO_ITEMS } from '../constants';
import { SERVICES } from '../constants/services';
import './HomePage.css';

const HomePage = () => {
  const { t } = useLanguage();

  // Map team members with translations
  const teamMembers = [
    {
      name: t.team.members[0].name,
      role: t.team.members[0].role,
      bio: t.team.members[0].bio,
      imageSrc: ALEKSANDAR_IMAGE,
      instagram: "https://www.instagram.com/vickyg_phtography/",
    },
    {
      name: t.team.members[1].name,
      role: t.team.members[1].role,
      bio: t.team.members[1].bio,
      imageSrc: ELENA_IMAGE,
      instagram: "https://www.instagram.com/sasho_drone_video/",
    }
  ];

  // Map services with translations
  const services = SERVICES.map((service, index) => ({
    icon: service.icon,
    title: t.services.items[index].title,
    description: t.services.items[index].description
  }));

  // Map portfolio categories with translations
  const portfolioItems = [
    { category: t.portfolio.categories.drone, image: PORTFOLIO_ITEMS[0].image },
    { category: t.portfolio.categories.weddings, image: PORTFOLIO_ITEMS[1].image },
    { category: t.portfolio.categories.commercial, image: PORTFOLIO_ITEMS[2].image },
    { category: t.portfolio.categories.video, image: PORTFOLIO_ITEMS[3].image },
    { category: t.portfolio.categories.portraits, image: PORTFOLIO_ITEMS[4].image },
    { category: t.portfolio.categories.nature, image: PORTFOLIO_ITEMS[5].image }
  ];

  return (
    <>
      <Hero 
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        ctaText={t.hero.cta}
        ctaHref="#booking"
      />
      
      {/* Team Section */}
      <section id="team" className="section section-dark">
        <div className="section-container">
          <Text as="h2" variant="section-title" className="section-title">
            {t.team.title}
          </Text>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="section section-gray">
        <div className="section-container">
          <Text as="h2" variant="section-title" className="section-title">
            {t.services.title}
          </Text>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section section-gray">
        <Text as="h2" variant="section-title" className="section-title">
          {t.portfolio.title}
        </Text>
        <div className="section-container portfolio-grid">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} item={item} index={index} />
          ))}
        </div>
      </section>
      
      {/* Contact/Booking Section */}
      <section id="booking" className="section section-dark">
        <div className="section-container contact-grid">
          <div className="contact-info">
            <Text as="h3" className="contact-title">
              {t.contact.title}
            </Text>
            <Text as="p" className="contact-description">
              {t.contact.description}
            </Text>
            <div className="contact-details">
              <ContactDetail icon={Phone}>
                {t.contact.phone}
              </ContactDetail>
              <ContactDetail icon={Mail}>
                {t.contact.email}
              </ContactDetail>
              <ContactDetail icon={MapPin}>
                {t.contact.location}
              </ContactDetail>
            </div>
            <div className="contact-social">
              <SocialIcon href="#" icon={Instagram} />
              <SocialIcon href="#" icon={Facebook} />
            </div>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default HomePage;
