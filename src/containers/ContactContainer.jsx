import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactContainer = () => {
  const handleSubmit = (formData) => {
    console.log('Contact form submitted:', formData);
    // Here you could send form data to a server
  };

  return (
    <div>
      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
};