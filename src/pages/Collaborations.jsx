import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/motion/Reveal';
import StaggerGrid from '../components/motion/StaggerGrid';
import { collaborations } from '../data/siteData';

export default function Collaborations() {
  return (
    <>
      <PageHero
        label="Partnerships"
        title="Institutional Collaborations & Services"
        subtitle="MoUs, accreditation support, and collaborative knowledge-sharing initiatives."
      />

      <section className="section">
        <div className="container">
          <StaggerGrid className="grid grid--3">
            {collaborations.map(({ title, description }) => (
              <article key={title} className="card">
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </StaggerGrid>
          <Reveal delay={0.1} className="page-cta">
            <Link to="/contact" className="btn btn--navy">
              Propose a Collaboration
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
