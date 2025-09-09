import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
     <a className="logo" href="./"> <div className="logo">
        Professional
      </div></a>
      <nav className="nav-links">
        <Link to="/log">Login</Link>
        <Link to="/reg">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
