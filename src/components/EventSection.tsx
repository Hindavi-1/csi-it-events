"use client";
import EventCard from "./EventCard";
import "../styles/EventSection.css";

// Define event data structure
type EventType = {
  id: string;
  title: string;
  type: string;
  category: "Workshop" | "Contest" | "Online";
  day: 1 | 2 | 3;
  time?: string;
  description?: string;
  seatLimit?: number;
  seatsTaken?: number;
};

// Complete event data organized by days
const eventsData: EventType[] = [
  // Day 1: Online Events (Monday)
  {
    id: "1",
    title: "Pitch-A-Thon",
    type: "Online",
    category: "Online",
    day: 1,
    time: "Monday",
    description: "Mini hackathon style PPT challenge where ideas meet innovation.",
    seatLimit: 25,
    seatsTaken: 18,
  },
  {
    id: "2",
    title: "AdVision",
    type: "Online",
    category: "Online",
    day: 1,
    time: "Monday",
    description: "Banner, poster, and billboard design competition.",
    seatLimit: 30,
    seatsTaken: 15,
  },
  {
    id: "3",
    title: "Echoes Rebounded",
    type: "Online",
    category: "Online",
    day: 1,
    time: "Monday",
    description: "Shayari, poems, and creative writing competition.",
    seatLimit: 40,
    seatsTaken: 22,
  },
  {
    id: "4",
    title: "PixelCraft",
    type: "Online",
    category: "Online",
    day: 1,
    time: "Monday",
    description: "UI/UX design competition based on Sustainable Development Goals.",
    seatLimit: 35,
    seatsTaken: 20,
  },
  
  // Day 2: Technical Events (Tuesday)
  // Workshops
  {
    id: "5",
    title: "DeepDive into GitHub",
    type: "Workshop",
    category: "Workshop",
    day: 2,
    time: "Tuesday, 1:30–3:30",
    description: "Learn advanced GitHub features and workflows for better collaboration.",
    seatLimit: 50,
    seatsTaken: 30,
  },
  {
    id: "6",
    title: "Cyber Forensics & Security",
    type: "Workshop",
    category: "Workshop",
    day: 2,
    time: "Tuesday, 1:30–3:30",
    description: "Explore the world of digital forensics and cybersecurity techniques.",
    seatLimit: 45,
    seatsTaken: 35,
  },
  // Contests
  {
    id: "7",
    title: "Backspace: No Escape",
    type: "Contest",
    category: "Contest",
    day: 2,
    time: "Tuesday, 3:30–5:00",
    description: "Coding contest with multiple rounds testing logic and accuracy.",
    seatLimit: 50,
    seatsTaken: 12,
  },
  {
    id: "8",
    title: "Beat the Bot",
    type: "Contest",
    category: "Contest",
    day: 2,
    time: "Tuesday, 3:30–5:00",
    description: "Challenge AI models with creative prompts and problem-solving.",
    seatLimit: 40,
    seatsTaken: 25,
  },
  {
    id: "9",
    title: "Game of Controls: Algo League",
    type: "Contest",
    category: "Contest",
    day: 2,
    time: "Tuesday, 3:30–5:00",
    description: "Algorithm optimization challenge with competitive gameplay.",
    seatLimit: 30,
    seatsTaken: 20,
  },
  
  // Day 3: Non-Technical Events (Wednesday)
  // Workshops
  {
    id: "10",
    title: "Fun with Canva",
    type: "Workshop",
    category: "Workshop",
    day: 3,
    time: "Wednesday, 1:30–3:00",
    description: "Learn to create stunning designs with Canva's easy-to-use platform.",
    seatLimit: 60,
    seatsTaken: 40,
  },
  {
    id: "11",
    title: "The Art of Stock Analysis",
    type: "Workshop",
    category: "Workshop",
    day: 3,
    time: "Wednesday, 1:30–3:00",
    description: "Introduction to stock market analysis and investment strategies.",
    seatLimit: 50,
    seatsTaken: 30,
  },
  // Contests
  {
    id: "12",
    title: "Cyber Quest",
    type: "Contest",
    category: "Contest",
    day: 3,
    time: "Wednesday, 3:00–4:30",
    description: "Digital treasure hunt with cryptic clues and tech challenges.",
    seatLimit: 40,
    seatsTaken: 25,
  },
  {
    id: "13",
    title: "Mystery Unmasked",
    type: "Contest",
    category: "Contest",
    day: 3,
    time: "Wednesday, 3:00–4:30",
    description: "Fun event guessing sounds, personalities, and an imposter round.",
    seatLimit: 40,
    seatsTaken: 30,
  },
];

export default function EventSection() {
  // Helper function to filter events by day
  const getEventsByDay = (day: number) => eventsData.filter(event => event.day === day);
  
  // Helper function to filter events by category
  const getEventsByCategory = (events: EventType[], category: string) => {
    return events.filter(event => event.category === category);
  };

  // Get events for each day
  const day1Events = getEventsByDay(1);
  const day2Events = getEventsByDay(2);
  const day3Events = getEventsByDay(3);

  // Get workshops and contests for day 2
  const day2Workshops = getEventsByCategory(day2Events, "Workshop");
  const day2Contests = getEventsByCategory(day2Events, "Contest");

  // Get workshops and contests for day 3
  const day3Workshops = getEventsByCategory(day3Events, "Workshop");
  const day3Contests = getEventsByCategory(day3Events, "Contest");

  return (
    <section id="events" className="events-section">
      <h2 className="events-title">Explore Events</h2>
      <p className="events-subtitle">
        Technical • Non-Technical • Online • Offline
      </p>

      {/* Day 1: Online Events */}
      <div className="event-day-block">
        <h3 className="day-heading">📅 Day 1 • Online Events</h3>
        <div className="events-grid">
          {day1Events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* Day 2: Technical Events */}
      <div className="event-day-block">
        <h3 className="day-heading">📅 Day 2 • Technical Events</h3>
        
        {/* Workshops */}
        <h4 className="category-heading">Workshops</h4>
        <div className="events-grid">
          {day2Workshops.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        {/* Contests */}
        <h4 className="category-heading">Contests</h4>
        <div className="events-grid">
          {day2Contests.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      {/* Day 3: Non-Technical Events */}
      <div className="event-day-block">
        <h3 className="day-heading">📅 Day 3 • Non-Technical Events</h3>
        
        {/* Workshops */}
        <h4 className="category-heading">Workshops</h4>
        <div className="events-grid">
          {day3Workshops.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        {/* Contests */}
        <h4 className="category-heading">Contests</h4>
        <div className="events-grid">
          {day3Contests.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
