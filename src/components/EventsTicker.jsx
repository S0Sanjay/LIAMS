import { Link } from 'react-router-dom';
import { featuredEvents } from '../data/siteData';
import './EventsTicker.css';

function EventCard({ event }) {
  return (
    <article className="event-ticker__card">
      <div className="event-ticker__date">
        <span className="event-ticker__year">{event.year}</span>
        <span className="event-ticker__day">{event.day}</span>
        <span className="event-ticker__month">{event.month}</span>
      </div>
      <div className="event-ticker__body">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </article>
  );
}

export default function EventsTicker() {
  const items = [...featuredEvents, ...featuredEvents];

  return (
    <section className="events-ticker-section section--alt">
      <div className="container events-ticker-section__layout">
        <div className="events-ticker-section__intro">
          <span className="section__label">Upcoming</span>
          <h2>Events</h2>
          <p>
            Conferences, symposia, and training programmes — stay updated with the latest at LIAMS.
          </p>
          <Link to="/events" className="btn btn--secondary">
            View All Events
          </Link>
        </div>

        <div className="events-ticker" aria-label="Upcoming events scrolling list">
          <div className="events-ticker__fade events-ticker__fade--top" aria-hidden="true" />
          <div className="events-ticker__viewport">
            <div className="events-ticker__track">
              {items.map((event, index) => (
                <EventCard key={`${event.id}-${index}`} event={event} />
              ))}
            </div>
          </div>
          <div className="events-ticker__fade events-ticker__fade--bottom" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
