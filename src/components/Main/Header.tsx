import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [openLang, setOpenLang] = useState(false);
  const [language, setLanguage] = useState('ENG');

  const toggleLang = () => setOpenLang(!openLang);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setOpenLang(false);
    console.log('Language changed to:', lang);
  };

  return (
    <header className="header">
      <Link className="logo" to="/">
        Professional
      </Link>

      <nav className="nav-links" style={{display:'flex'}}>
        <div className="lang-selector">
          <FontAwesomeIcon icon={faGlobe} onClick={toggleLang} />
          <span className="current-lang">{language}</span>
          {openLang && (
            <div className="lang-dropdown" style={{cursor:'pointer'}}>
              <div onClick={() => changeLanguage('ENG')}>ENG</div>
              <div onClick={() => changeLanguage('RUS')}>RUS</div>
              <div onClick={() => changeLanguage('HY')}>HY</div>
            </div>
          )}
        </div>

        <Link to="/log">Login</Link>
        <Link to="/reg">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
