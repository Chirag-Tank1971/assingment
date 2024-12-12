import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import EventModal from "./components/EventModel";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState(() => {

    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : {};
  });

  const [selectedDate, setSelectedDate] = useState(null);


  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (date, event) => {
    setEvents((prev) => ({
      ...prev,
      [date]: [...(prev[date] || []), event],
    }));
  };

  const editEvent = (date, updatedEvents) => {
    setEvents((prev) => ({
      ...prev,
      [date]: updatedEvents,
    }));
  };

  return (
    <div className="App">
      <h1>Dynamic Calendar</h1>
      <Calendar
        events={events}
        onDateClick={setSelectedDate}
      />
      {selectedDate && (
        <EventModal
          date={selectedDate}
          events={events[selectedDate] || []}
          onClose={() => setSelectedDate(null)}
          onSave={(event) => addEvent(selectedDate, event)}
          onEdit={(updatedEvents) => editEvent(selectedDate, updatedEvents)}
        />
      )}
    </div>
  );
};

export default App;
