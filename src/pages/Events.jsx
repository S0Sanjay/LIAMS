import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { upcomingEvents } from '../data/siteData';

export default function Events() {
  return (
    <>
      <PageHero
        label="Events"
        title="Conferences & Events"
        subtitle="National and international conferences with peer-reviewed proceedings."
      />

      <section className="section">
        <div className="container">
          <div className="section__header">
            <span className="section__label">Upcoming</span>
            <h2>Upcoming Events</h2>
          </div>
          <div className="events-list">
            {upcomingEvents.map(({ title, date, venue, status }) => (
              <article key={title} className="card event-card">
                <span className="event-card__status">{status}</span>
                <h3>{title}</h3>
                <p>
                  <strong>Date:</strong> {date} &nbsp;|&nbsp; <strong>Venue:</strong> {venue}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container content-block">
          <h2>National / International Conferences</h2>
          <p>
            LIAMS organizes and co-hosts conferences that bring together researchers, faculty,
            and industry experts across disciplines. Events follow rigorous academic standards
            with opportunities for paper presentation and networking.
          </p>

          <h2>Conference Proceedings</h2>
          <p>
            Selected papers from LIAMS conferences are published in peer-reviewed proceedings
            with ISBN registration and indexing support. Proceedings archives will be listed
            here as they become available.
          </p>

          <p className="page-cta">
            <Link to="/contact" className="btn btn--navy">
              Submit / Register for Events
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
