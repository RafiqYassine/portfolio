import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage(); // FIXED: Added 'language' here
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(language === 'en' ? 'Thank you for your message! I will get back to you soon.' : 'Merci pour votre message ! Je vous répondrai bientôt.');
    setFormData({ name: '', email: '', message: '' });
  };

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
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3>{t('contact.location')}</h3>
              <p>Your City, Country</p>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('contact.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">{t('contact.emailPlaceholder')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-paper-plane"></i>
            {t('contact.sendMessage')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;