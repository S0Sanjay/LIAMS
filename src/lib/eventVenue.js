export const DEFAULT_EVENT_VENUE = 'Chennai';

export function formatEventVenue(venue) {
  const trimmed = typeof venue === 'string' ? venue.trim() : '';
  return trimmed || DEFAULT_EVENT_VENUE;
}
