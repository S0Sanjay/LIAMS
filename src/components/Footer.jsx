import { Link } from 'react-router-dom';
import { institute, navLinks } from '../data/siteData';
import SocialIcons from './SocialIcons';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/logos/liams-logo-full.png" alt={institute.shortName} className="footer__logo" />
          <p className="footer__tagline">{institute.tagline}</p>
          <SocialIcons />
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer__links">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <address className="footer__contact">
            <p>{institute.contact.address}</p>
            <p>
              <a href={`mailto:${institute.contact.email}`}>{institute.contact.email}</a>
            </p>
            <p>
              <a href={`tel:${institute.contact.phone.replace(/\s/g, '')}`}>
                {institute.contact.phone}
              </a>
            </p>
            <p>{institute.contact.hours}</p>
          </address>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            &copy; {year} {institute.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
