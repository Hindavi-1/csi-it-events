import "../styles/EventCard.css";

export default function EventCard({ event }: { event: any }) {
  const progress = (event.seatsTaken / event.seatLimit) * 100;

  return (
    <div className="event-card">
      <h3 className="event-title">{event.title}</h3>
      <span className="event-category">{event.category}</span>
      <p className="event-desc">{event.description}</p>

      {/* Progress Bar */}
      <div className="event-progress">
        <div className="event-progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <small className="event-seats">
        {event.seatsTaken}/{event.seatLimit} seats filled
      </small>

      {/* Button */}
      <a href={`/events/${event.id}`} className="event-btn">
        View Details
      </a>
    </div>
  );
}
