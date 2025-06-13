import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useHideOnScroll from '../../hooks/useHideOnScroll';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hidden = useHideOnScroll();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img 
            src="/images/midtown-logo-white.svg" 
            alt="Midtown Wholesale LLC" 
            className={styles.logoImage}
          />
          <div className={styles.logoText}>
            <span className={styles.logoMain}>Midtown</span>
            <span className={styles.logoSub}>Wholesale LLC</span>
          </div>
        </Link>

        <div className={styles.mobileTitle}>Midtown Wholesale LLC</div>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 