"use client";
import { useState } from "react";
import { X } from "lucide-react";
import "../styles/EventCard.css";

type EventProps = {
  title: string;
  type: string;
  time?: string;
  description?: string;
  seatLimit?: number;
  seatsTaken?: number;
};

export default function EventCard({ event }: { event: EventProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Calculate progress if seat information is available
  const progress = event.seatLimit && event.seatsTaken
    ? (event.seatsTaken / event.seatLimit) * 100
    : null;

  return (
    <>
      <div className="event-card">
        <h3 className="event-title">{event.title}</h3>
        <span className="event-category">{event.type}</span>
        
        {/* Register Button */}
        <button onClick={openModal} className="event-btn">
          View Details
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="event-modal-overlay" onClick={closeModal}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <h2 className="modal-title">{event.title}</h2>
            <span className="modal-category">{event.type}</span>
            
            {event.time && <p className="modal-time">⏰ {event.time}</p>}
            
            {event.description && (
              <div className="modal-description">
                <p>{event.description}</p>
              </div>
            )}
            
            {progress !== null && (
              <div className="modal-seats">
                <div className="event-progress">
                  <div 
                    className="event-progress-fill" 
                    style={{ width: `${progress}%` }} 
                  />
                </div>
                <small>
                  {event.seatsTaken}/{event.seatLimit} seats filled
                </small>
              </div>
            )}
            
            <button className="modal-register-btn">Register Now</button>
          </div>
        </div>
      )}
    </>
  );
}
