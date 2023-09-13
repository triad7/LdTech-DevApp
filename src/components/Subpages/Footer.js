import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img src= "https://www.ldtech.in/images/logo.png" />
       <br/>
      <div className="social-icons">
       
        <a href="https://www.facebook.com/ldtechelearning?mibextid=LQQJ4d" className="social-icon">
          <FontAwesomeIcon icon={faFacebook}/>
         
        </a>
<<<<<<< HEAD
        <a href=" https://www.ldtech.in/" className="social-icon">
=======
        <a href="https://www.ldtech.in/" className="social-icon">
>>>>>>> fcac7666c8bca04da16212961c9313b82a4ab711
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a href="https://instagram.com/ldtechelearning?igshid=MzRlODBiNWFlZA==" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/company/livedigitaltechnologies/mycompany/" className="social-icon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
      <div className="copyright">
        &copy; 2023 Copyright: <a href="https://www.ldtech.in/">LDTech.in</a>
      </div>
    </footer>
  );
};

export default Footer;
