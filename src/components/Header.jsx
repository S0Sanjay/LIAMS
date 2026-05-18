import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/siteData';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__top">
        <div className="container header__top-inner">
          <span>ISO 9001:2015 | ISO 21001:2018 | MSME Registered</span>
        </div>
      </div>
      <div className="header__main">
        <div className="container header__inner">
          <Link to="/" className="header__brand" onClick={closeMenu}>
            <img
              src="/logos/liams-logo-symbol.png"
              alt="LIAMS crest"
              className="header__logo"
            />
            <span className="header__brand-text">
              <strong>LIAMS</strong>
              <small>Loyola Institute of Advanced Multidisciplinary Studies</small>
            </span>
          </Link>

          <button
            type="button"
            className={`header__toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
            <ul>
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn--primary header__cta" onClick={closeMenu}>
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
