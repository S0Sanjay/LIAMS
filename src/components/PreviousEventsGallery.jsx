import EmptyState from './EmptyState';
import StaggerGrid from './motion/StaggerGrid';
import { usePreviousEvents } from '../hooks/usePublicContent';
import './PreviousEventsGallery.css';

export default function PreviousEventsGallery() {
  const { items, loading } = usePreviousEvents();

  if (loading) {
    return <p className="events-gallery__empty">Loading gallery…</p>;
  }

  if (!items.length) {
    return <EmptyState message="No previous events in the gallery" />;
  }

  return (
    <StaggerGrid className="events-gallery">
      {items.map((item) => (
        <figure key={item.id} className="events-gallery__item">
          {item.image_url && (
            <img src={item.image_url} alt={item.caption || item.category || 'Past event'} loading="lazy" />
          )}
          <figcaption>
            {item.category && <span className="events-gallery__category">{item.category}</span>}
            {item.caption && <p>{item.caption}</p>}
          </figcaption>
        </figure>
      ))}
    </StaggerGrid>
  );
}
