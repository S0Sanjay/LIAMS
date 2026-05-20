import { Link } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import CertificationsStrip from '../components/CertificationsStrip';
import PageHero from '../components/PageHero';
import PreviousEventsGallery from '../components/PreviousEventsGallery';
import Reveal from '../components/motion/Reveal';
import StaggerGrid from '../components/motion/StaggerGrid';
import { useUpcomingEvents } from '../hooks/usePublicContent';
import './Events.css';

export default function Events() {
  const { events, loading } = useUpcomingEvents();

  return (
    <>
      <PageHero
        label="Events"
        title="Conferences & Events"
        subtitle="National and international conferences with peer-reviewed proceedings."
      />

      <section className="section">
        <div className="container">
          <Reveal className="section__header">
            <span className="section__label">Upcoming</span>
            <h2>Upcoming Events</h2>
          </Reveal>
          {loading ? (
            <p className="events-gallery__empty">Loading events…</p>
          ) : events.length === 0 ? (
            <EmptyState message="No upcoming events" />
          ) : (
            <StaggerGrid className="events-list">
              {events.map((event) => (
                <article key={event.id} className="card event-card">
                  <span className="event-card__status">Upcoming</span>
                  <h3>{event.title}</h3>
                  <p>
                    <strong>Date:</strong> {event.dateLabel} &nbsp;|&nbsp;{' '}
                    <strong>Venue:</strong> {event.venue}
                  </p>
                  {event.form_link && (
                    <p>
                      <a
                        href={event.form_link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--secondary"
                        style={{ marginTop: '0.75rem', display: 'inline-block' }}
                      >
                        Register / Submit
                      </a>
                    </p>
                  )}
                </article>
              ))}
            </StaggerGrid>
          )}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <Reveal className="section__header">
            <span className="section__label">Gallery</span>
            <h2>Previous Events</h2>
            <p>Highlights from conferences, workshops, and programmes hosted by LIAMS.</p>
          </Reveal>
          <PreviousEventsGallery />
        </div>
      </section>

      <section className="section">
        <Reveal className="container content-block">
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
        </Reveal>
      </section>

      <CertificationsStrip />
    </>
  );
}
