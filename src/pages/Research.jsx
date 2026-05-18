import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { researchServices } from '../data/siteData';

export default function Research() {
  return (
    <>
      <PageHero
        label="Research"
        title="Research & Innovation"
        subtitle="Publication support, PhD guidance, innovation lab, and IPR consulting."
      />

      <section className="section">
        <div className="container content-block">
          <h2>Research & Publication Support</h2>
          <p>
            LIAMS provides end-to-end research support for scholars and institutions — from
            ideation and methodology to publication, indexing, and intellectual property
            protection. Our innovation lab fosters collaborative, multidisciplinary inquiry.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Services</span>
            <h2>Research Services</h2>
          </div>
          <div className="grid grid--2">
            {researchServices.map(({ title, description }) => (
              <article key={title} className="card service-detail">
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="page-cta">
            <Link to="/contact" className="btn btn--navy">
              Request Research Support
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
