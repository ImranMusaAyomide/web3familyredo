import React from 'react';
import './Footer.css';
import biglogo from './images/biglogo.svg'; 


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={biglogo} alt="The Web3 Family Logo" style={{ width: '100px' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer; 