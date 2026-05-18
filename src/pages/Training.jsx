import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { trainingPrograms } from '../data/siteData';

export default function Training() {
  return (
    <>
      <PageHero
        label="Training & Development"
        title="Training & Development"
        subtitle="Industry-oriented programmes, faculty development, and hands-on workshops."
      />

      <section className="section">
        <div className="container content-block">
          <h2>Introduction</h2>
          <p>
            LIAMS Training & Development bridges academic learning and professional practice.
            Our programmes are designed for students, faculty, and industry partners seeking
            structured pathways in multidisciplinary skills, research readiness, and innovation.
          </p>
          <p>
            Each offering aligns with our ISO-certified quality management systems, ensuring
            measurable outcomes and continuous improvement.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Programmes</span>
            <h2>Our Training Offerings</h2>
          </div>
          <div className="grid grid--3">
            {trainingPrograms.map(({ title, description }) => (
              <article key={title} className="card">
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="page-cta">
            <Link to="/contact" className="btn btn--navy">
              Enquire About Training
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
