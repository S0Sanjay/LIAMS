const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function formatEventDateParts(eventDate) {
  if (!eventDate) {
    return { year: '—', day: '—', month: 'TBD' };
  }
  const d = new Date(`${eventDate}T12:00:00`);
  if (Number.isNaN(d.getTime())) {
    return { year: '—', day: '—', month: 'TBD' };
  }
  return {
    year: String(d.getFullYear()),
    day: String(d.getDate()).padStart(2, '0'),
    month: MONTHS[d.getMonth()],
  };
}

export function formatEventDateLabel(eventDate) {
  const { day, month, year } = formatEventDateParts(eventDate);
  if (day === '—') return 'Date TBD';
  return `${day} ${month} ${year}`;
}
