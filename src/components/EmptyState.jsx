import './EmptyState.css';

export default function EmptyState({ message, compact = false }) {
  return (
    <div className={`empty-state${compact ? ' empty-state--compact' : ''}`} role="status">
      <span className="empty-state__icon" aria-hidden="true">
        ○
      </span>
      <p>{message}</p>
    </div>
  );
}
