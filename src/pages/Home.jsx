import { Link } from 'react-router-dom';
import { institute, coreServices } from '../data/siteData';
import CertificationsStrip from '../components/CertificationsStrip';
import EventsTicker from '../components/EventsTicker';
import TestimonialMarquee from '../components/TestimonialMarquee';
import './Home.css';

const announcements = [
  'Registration open for the Faculty Development Program on Research Methodology.',
  'Call for papers: IACMI 2026 — submit abstracts by 20 May.',
  'Workshop on Intellectual Property Rights & Patents scheduled for 5 September.',
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="hero__badge">Welcome to {institute.shortName}</span>
            <h1>{institute.name}</h1>
            <p className="hero__tagline">{institute.tagline}</p>
            <p className="hero__intro">
              A centre of excellence advancing multidisciplinary education, industry-aligned
              training, and research innovation for scholars, faculty, and institutional partners.
            </p>
            <div className="hero__actions">
              <Link to="/about" className="btn btn--primary">
                Discover LIAMS
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <img
              src="/logos/liams-logo-full.png"
              alt={`${institute.shortName} — ${institute.name}`}
              className="hero__logo"
            />
          </div>
        </div>
      </section>

      <section className="announcement-strip" aria-label="Latest announcement">
        <div className="container announcement-strip__wrapper">
          <div className="announcement-strip__viewport" aria-hidden="true">
            <div className="announcement-strip__track">
              {announcements.map((text, index) => (
                <span key={index} className="announcement-strip__item">
                  {text}
                </span>
              ))}
            </div>
            <div className="announcement-strip__track">
              {announcements.map((text, index) => (
                <span key={`duplicate-${index}`} className="announcement-strip__item">
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CertificationsStrip />

      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Introduction</span>
            <h2>Advancing Knowledge Across Disciplines</h2>
            <p>
              Loyola Institute of Advanced Multidisciplinary Studies (LIAMS) integrates
              traditional academic rigour with modern technology, engineering, and research
              practice — preparing scholars and professionals for a dynamic global landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Core Services</span>
            <h2>What We Offer</h2>
            <p>
              Comprehensive academic and institutional services across training, research,
              events, and collaborations.
            </p>
          </div>
          <div className="grid grid--4">
            {coreServices.map(({ title, description, path, icon }) => (
              <article key={title} className="card">
                <div className="card__icon" aria-hidden="true">
                  {icon}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={path} className="card__link">
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <EventsTicker />

      <TestimonialMarquee />

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <h2>Partner With LIAMS</h2>
          <p>
            Explore collaborations, training programmes, and research support tailored to your
            institution.
          </p>
          <Link to="/contact" className="btn btn--primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
