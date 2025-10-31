import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CV = () => {
  const { t, language } = useLanguage();

  // CV download links - you'll need to create these PDF files
  const cvLinks = {
    en: 'https://rafiqyassine.github.io/portfolio/cv/cv-yassine-rafiq-en.pdf',
    fr: 'https://rafiqyassine.github.io/portfolio/cv/cv-yassine-rafiq-fr.pdf'
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvLinks[language];
    link.download = `cv-yassine-rafiq-${language}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cv" className="section">
      <h2 className="section-title">{t('cv.title')}</h2>
      <div className="cv-content">
        <div className="cv-actions">
          <button onClick={handleDownload} className="btn btn-primary download-btn">
            <i className="fas fa-download"></i>
            {t('cv.download')} ({language.toUpperCase()})
          </button>
        </div>

        <div className="cv-preview">
          <div className="cv-section">
            <h3><i className="fas fa-graduation-cap"></i> {t('cv.education')}</h3>
            <div className="cv-item">
              <h4>{t('cv.educationDetails.degree')}</h4>
              <p className="cv-meta">{t('cv.educationDetails.school')} • {t('cv.educationDetails.year')}</p>
              <p>{t('cv.educationDetails.description')}</p>
            </div>
          </div>

          <div className="cv-section">
            <h3><i className="fas fa-briefcase"></i> {t('cv.experience')}</h3>
            <div className="cv-item">
              <h4>{t('cv.experienceDetails.job1.title')}</h4>
              <p className="cv-meta">{t('cv.experienceDetails.job1.company')} • {t('cv.experienceDetails.job1.period')}</p>
              <p>{t('cv.experienceDetails.job1.description')}</p>
            </div>
            <div className="cv-item">
              <h4>{t('cv.experienceDetails.job2.title')}</h4>
              <p className="cv-meta">{t('cv.experienceDetails.job2.company')} • {t('cv.experienceDetails.job2.period')}</p>
              <p>{t('cv.experienceDetails.job2.description')}</p>
            </div>
          </div>

          <div className="cv-section">
            <h3><i className="fas fa-language"></i> {t('cv.languages')}</h3>
            <div className="languages-list">
              <p>• {t('cv.languagesList.arabic')}</p>
              <p>• {t('cv.languagesList.french')}</p>
              <p>• {t('cv.languagesList.english')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
