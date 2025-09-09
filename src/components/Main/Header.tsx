import React from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        MyApp
      </div>
      <nav className="nav-links">
        <Link to="/log">Login</Link>
        <Link to="/reg">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
