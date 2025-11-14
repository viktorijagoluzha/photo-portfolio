import React from 'react';
import { motion } from 'framer-motion';
import { Image, Text } from '../atoms';
import { SocialIcon } from '../molecules';
import { Instagram } from 'lucide-react';
import './TeamCard.css';

const TeamCard = ({ member }) => {
  return (
    <motion.div 
      className="team-card"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="team-image-wrapper">
        <Image 
          src={member.imageSrc} 
          alt={member.name} 
          className="team-image"
          fallbackSrc="https://placehold.co/128x128/3f3f46/ffffff?text=Photo"
        />
      </div>
      <Text as="h3" variant="card-title" className="team-name">
        {member.name}
      </Text>
      <Text as="p" variant="card-subtitle" className="team-role">
        {member.role}
      </Text>
      <Text as="p" variant="body" className="team-bio">
        {member.bio}
      </Text>
      <SocialIcon 
        href={member.instagram}
        icon={Instagram}
        className="team-social-link"
      />
    </motion.div>
  );
};

export default TeamCard;
