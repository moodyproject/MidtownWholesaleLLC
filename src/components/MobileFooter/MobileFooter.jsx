import { Link } from 'react-router-dom';
import styles from './MobileFooter.module.css';

const MobileFooter = () => {
  const navLinks = [
    { path: '/', label: 'Home', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V12H9v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9z" />
      </svg>
    ) },
    { path: '/about', label: 'About', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ) },
    { path: '/services', label: 'Services', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a7 7 0 0 0 0-6M4.6 9a7 7 0 0 1 0 6M16.24 7.76a5 5 0 0 1 0 8.48M7.76 16.24a5 5 0 0 0 0-8.48" />
      </svg>
    ) },
    { path: '/contact', label: 'Contact', icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ) },
  ];

  return (
    <footer className={styles.mobileFooter}>
      <nav className={styles.navBar}>
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} className={styles.navItem} aria-label={link.label}>
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
        <a href="tel:4148288178" className={styles.navItem} aria-label="Call Midtown Wholesale LLC">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.05.96.25 1.9.58 2.78a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.88.33 1.82.53 2.78.58a2 2 0 0 1 1.72 2z" />
          </svg>
          <span>Call</span>
        </a>
      </nav>
    </footer>
  );
};

export default MobileFooter; 