import { institute } from '../data/siteData';
import './CertificationsStrip.css';

export default function CertificationsStrip() {
  return (
    <section className="certs-strip" aria-labelledby="certs-heading">
      <div className="container">
        <div className="certs-strip__header">
          <span className="section__label">Accreditation & Quality</span>
          <h2 id="certs-heading">Recognized Standards of Excellence</h2>
          <p>
            LIAMS operates under internationally recognized quality frameworks, reinforcing our
            commitment to academic integrity and continuous improvement.
          </p>
        </div>
        <ul className="certs-strip__grid">
          {institute.certifications.map((cert) => (
            <li key={cert.code} className="certs-strip__card">
              <span className="certs-strip__icon" aria-hidden="true">
                {cert.icon}
              </span>
              <div>
                <strong>{cert.code}</strong>
                <span>{cert.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
