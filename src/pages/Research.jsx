import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/motion/Reveal';
import StaggerGrid from '../components/motion/StaggerGrid';
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
        <Reveal className="container content-block">
          <h2>Research & Publication Support</h2>
          <p>
            LIAMS provides end-to-end research support for scholars and institutions — from
            ideation and methodology to publication, indexing, and intellectual property
            protection. Our innovation lab fosters collaborative, multidisciplinary inquiry.
          </p>
        </Reveal>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="section__header">
            <span className="section__label">Services</span>
            <h2>Research Services</h2>
          </Reveal>
          <StaggerGrid className="grid grid--2 research-services-grid">
            {researchServices.map(({ title, description }) => (
              <article key={title} className="card service-detail">
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </StaggerGrid>
          <Reveal delay={0.1} className="page-cta">
            <Link to="/contact" className="btn btn--navy">
              Request Research Support
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
