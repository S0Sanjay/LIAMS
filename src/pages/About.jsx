import PageHero from '../components/PageHero';
import {
  vision,
  mission,
  objectives,
  leadership,
  advisoryBoard,
  institute,
} from '../data/siteData';
import './About.css';

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="About LIAMS"
        subtitle={institute.name}
      />

      <section className="section">
        <div className="container about-split">
          <div>
            <span className="section__label">Vision</span>
            <h2>Our Vision</h2>
            <p className="lead">{vision}</p>
          </div>
          <div className="about-symbol">
            <img src="/logos/liams-logo-symbol.png" alt="" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <span className="section__label">Mission</span>
          <h2>Our Mission</h2>
          <p className="lead">{mission}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Objectives</span>
            <h2>Core Objectives</h2>
          </div>
          <ul className="objectives-list">
            {objectives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Leadership</span>
            <h2>Academic Leadership</h2>
          </div>
          <div className="grid grid--3">
            {leadership.map(({ name, role, note }) => (
              <article key={name} className="card leader-card">
                <div className="leader-card__avatar" aria-hidden="true">
                  {name.charAt(0)}
                </div>
                <h3>{name}</h3>
                <p className="leader-card__role">{role}</p>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Message</span>
            <h2>Director&apos;s Message</h2>
          </div>
          <article className="director-message card">
            <p>
              Welcome to the Loyola Institute of Advanced Multidisciplinary Studies. At LIAMS,
              we believe that the greatest breakthroughs occur at the intersection of disciplines
              — where engineering meets humanities, where innovation meets ethics, and where
              education meets industry.
            </p>
            <p>
              Our institute is committed to nurturing scholars, faculty, and professionals who
              are equipped to lead in a rapidly evolving world. Through our ISO-certified quality
              frameworks, we ensure that every programme, partnership, and research initiative
              meets the highest standards of excellence.
            </p>
            <p>
              I invite you to explore our services, connect with our team, and join us in
              building a future defined by multidisciplinary learning and transformative impact.
            </p>
            <footer className="director-message__sign">
              <strong>Director, LIAMS</strong>
              <span>Loyola Institute of Advanced Multidisciplinary Studies</span>
            </footer>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Governance</span>
            <h2>Advisory Board</h2>
            <p>Distinguished experts guiding institutional strategy and academic quality.</p>
          </div>
          <div className="grid grid--2">
            {advisoryBoard.map(({ name, designation, field }) => (
              <article key={name} className="card board-card">
                <h3>{name}</h3>
                <p className="board-card__designation">{designation}</p>
                <p className="board-card__field">{field}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
