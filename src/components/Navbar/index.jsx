import { useState } from 'react';
import NavbarCss from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={NavbarCss.navbar}>
      <div className={NavbarCss['navbar-container']}>
        <div className={NavbarCss['navbar-logo']}>Ariel Lagata</div>
        <div className={NavbarCss['navbar-toggle']} onClick={toggleMenu}>
          <div className={`${NavbarCss.bar} ${isOpen ? NavbarCss.open : ''}`}></div>
          <div className={`${NavbarCss.bar} ${isOpen ? NavbarCss.open : ''}`}></div>
          <div className={`${NavbarCss.bar} ${isOpen ? NavbarCss.open : ''}`}></div>
        </div>
        <div className={`${NavbarCss['navbar-links']} ${isOpen ? NavbarCss.open : ''}`}>
          <Link to='/home' className={currentPath === '/home' ? NavbarCss.active : ''}>Home</Link>
          <Link to='/aboutme' className={currentPath === '/aboutme' ? NavbarCss.active : ''}>About</Link>
          <Link to='/portfolio' className={currentPath === '/portfolio' ? NavbarCss.active : ''}>Portfolio</Link>
          <Link to='/contact' className={currentPath === '/contact' ? NavbarCss.active : ''}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
