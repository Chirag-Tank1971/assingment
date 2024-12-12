import React, { useState } from "react";

const EventModel = ({ date, events, onClose, onSave, onEdit }) => {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    const newEvent = { name: eventName, startTime, endTime, description };
    onSave(newEvent);
    resetForm();
  };

  const resetForm = () => {
    setEventName("");
    setStartTime("");
    setEndTime("");
    setDescription("");
  };

  return (
    <div className="modal">
      <h2>Events for {date}</h2>
      <button onClick={onClose}>Close</button>
      <div className="event-form">
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSave}>Add Event</button>
      </div>

      <h3>Event List</h3>
      {events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} className="event-item">
            <strong>{event.name}</strong> ({event.startTime} - {event.endTime})
            <p>{event.description}</p>
            <button
              onClick={() =>
                onEdit(events.filter((_, idx) => idx !== index))
              }
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No events for this day.</p>
      )}
    </div>
  );
};

export default EventModel;
