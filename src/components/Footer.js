import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="#" className="social-link">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-codepen"></i>
        </a>
      </div>
      <p>&copy; 2024 Your Name. All rights reserved.</p>
      <p>Built with React and lots of ☕</p>
    </footer>
  );
};

export default Footer;