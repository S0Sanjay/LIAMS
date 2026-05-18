import { Link } from 'react-router-dom';
import {
  institute,
  coreServices,
  testimonials,
  vision,
  mission,
} from '../data/siteData';
import './Home.css';

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
              training, and research innovation — certified to international quality standards.
            </p>
            <div className="hero__actions">
              <Link to="/about" className="btn btn--primary">
                Discover LIAMS
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Contact Us
              </Link>
            </div>
            <ul className="hero__certs">
              {institute.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
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
          <div className="intro-cards grid grid--2">
            <article className="intro-card">
              <h3>Our Vision</h3>
              <p>{vision}</p>
            </article>
            <article className="intro-card intro-card--gold">
              <h3>Our Mission</h3>
              <p>{mission}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Core Services</span>
            <h2>What We Offer</h2>
            <p>Comprehensive academic and institutional services across training, research, events, and collaborations.</p>
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

      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Testimonials</span>
            <h2>What Our Partners Say</h2>
            <p>Trusted by academic and industry partners for quality, professionalism, and impact.</p>
          </div>
          <div className="grid grid--3">
            {testimonials.map(({ quote, author, role, org }) => (
              <blockquote key={author} className="testimonial card">
                <p className="testimonial__quote">&ldquo;{quote}&rdquo;</p>
                <footer>
                  <cite>{author}</cite>
                  <span>
                    {role}, {org}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <h2>Partner With LIAMS</h2>
          <p>Explore collaborations, training programmes, and research support tailored to your institution.</p>
          <Link to="/contact" className="btn btn--primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
