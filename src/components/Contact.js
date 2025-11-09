import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <h2 className="section-title">{t('contact.title')}</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h3>{t('contact.email')}</h3>
              <p>your.email@example.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <h3>{t('contact.phone')}</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fab fa-linkedin"></i>
            </div>
            <div>
              <h3>{t('contact.linkedin')}</h3>
              <p>linkedin.com/in/yourprofile</p>
            </div>
          </div>
        </div>
        
        <div className="contact-message">
          <h3>{t('contact.getInTouch')}</h3>
          <p>{t('contact.messageText')}</p>
          <div className="contact-actions">
            <a href="mailto:your.email@example.com" className="btn btn-primary">
              <i className="fas fa-envelope"></i>
              {t('contact.sendEmail')}
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <i className="fab fa-linkedin"></i>
              {t('contact.connectLinkedIn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;