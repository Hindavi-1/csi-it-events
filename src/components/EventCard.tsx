"use client";
import { useState } from "react";
import { X } from "lucide-react";
import "../styles/EventCard.css";

type EventProps = {
  id: string;
  title: string;
  type: string;
  time?: string;
  description?: string;
  seatLimit?: number;
  seatsTaken?: number;
  whatsappLink?: string;
};

export default function EventCard({ event }: { event: EventProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    yearBranch: "",
    contactNumber: "",
    whatsappJoined: false
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsRegisterFormOpen(false);
    setSubmitSuccess(false);
  };

  const openRegisterForm = () => {
    setIsRegisterFormOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: val
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.yearBranch.trim()) errors.yearBranch = "Year/Branch is required";
    if (!formData.contactNumber.trim()) {
      errors.contactNumber = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      errors.contactNumber = "Please enter a valid 10-digit number";
    }
    if (!formData.whatsappJoined) errors.whatsappJoined = "Please join the WhatsApp group";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: event.id,
          eventTitle: event.title,
          ...formData,
          timestamp: new Date().toISOString()
        }),
      });
      
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      
      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        yearBranch: "",
        contactNumber: "",
        whatsappJoined: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormErrors({
        submit: "Registration failed. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            {!isRegisterFormOpen ? (
              // Event Details View
              <>
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
                
                <button className="modal-register-btn" onClick={openRegisterForm}>
                  Register Now
                </button>
              </>
            ) : submitSuccess ? (
              // Success Message
              <div className="register-success">
                <div className="success-icon">✓</div>
                <h2>Registration Successful!</h2>
                <p>You are now registered for {event.title}.</p>
                <p>We look forward to seeing you at the event!</p>
                <button className="modal-register-btn" onClick={closeModal}>
                  Close
                </button>
              </div>
            ) : (
              // Registration Form
              <div className="register-form-container">
                <h2 className="form-title">Register for {event.title}</h2>
                
                <form className="register-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={formErrors.fullName ? "input-error" : ""}
                    />
                    {formErrors.fullName && <span className="error-message">{formErrors.fullName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className={formErrors.email ? "input-error" : ""}
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="yearBranch">Year/Branch</label>
                    <input
                      type="text"
                      id="yearBranch"
                      name="yearBranch"
                      value={formData.yearBranch}
                      onChange={handleInputChange}
                      placeholder="E.g., 3rd Year / Computer Science"
                      className={formErrors.yearBranch ? "input-error" : ""}
                    />
                    {formErrors.yearBranch && <span className="error-message">{formErrors.yearBranch}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your 10-digit number"
                      className={formErrors.contactNumber ? "input-error" : ""}
                    />
                    {formErrors.contactNumber && <span className="error-message">{formErrors.contactNumber}</span>}
                  </div>
                  
                  <div className="whatsapp-section">
                    <p>Please join the WhatsApp group for event updates:</p>
                    <a 
                      href={event.whatsappLink || "https://chat.whatsapp.com/example"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="whatsapp-link"
                    >
                      Join WhatsApp Group
                    </a>
                    
                    <div className="form-group checkbox-group">
                      <input
                        type="checkbox"
                        id="whatsappJoined"
                        name="whatsappJoined"
                        checked={formData.whatsappJoined}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="whatsappJoined">I have joined the WhatsApp group for this event</label>
                      {formErrors.whatsappJoined && <span className="error-message">{formErrors.whatsappJoined}</span>}
                    </div>
                  </div>
                  
                  {formErrors.submit && <div className="submit-error">{formErrors.submit}</div>}
                  
                  <div className="form-actions">
                    <button 
                      type="button" 
                      className="cancel-btn" 
                      onClick={() => setIsRegisterFormOpen(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="submit-btn" 
                      disabled={isSubmitting || !formData.whatsappJoined}
                    >
                      {isSubmitting ? "Submitting..." : "Register"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
