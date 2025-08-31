"use client";
import EventCard from "./EventCard";
import "../styles/EventSection.css";

const sampleEvents = [
  {
    id: "1",
    title: "Backspace: No Escape",
    category: "Technical",
    description: "Coding contest with multiple rounds testing logic and accuracy.",
    seatsTaken: 12,
    seatLimit: 50,
  },
  {
    id: "2",
    title: "Mystery Unmasked",
    category: "Non-Technical",
    description: "Fun event guessing sounds, personalities, and an imposter round.",
    seatsTaken: 30,
    seatLimit: 40,
  },
  {
    id: "3",
    title: "Pitch-A-Thon",
    category: "Online",
    description: "Mini hackathon style PPT challenge where ideas meet innovation.",
    seatsTaken: 18,
    seatLimit: 25,
  },
];

export default function EventSection() {
  return (
    <section id="events" className="events-section">
      <h2 className="events-title">Explore Events</h2>
      <p className="events-subtitle">
        Technical • Non-Technical • Online • Offline
      </p>

      <div className="events-grid">
        {sampleEvents.map((ev) => (
          <EventCard key={ev.id} event={ev} />
        ))}
      </div>
    </section>
  );
}
