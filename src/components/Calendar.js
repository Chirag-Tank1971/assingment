import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, addDays, isSameMonth, isToday } from "date-fns";

const Calendar = ({ events, onDateClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = [];
  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = addDays(startOfWeek(endOfMonth(currentDate)), 6);

  let day = startDate;
  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  const renderDay = (day) => {
    const formattedDay = format(day, "d");
    const isCurrentMonth = isSameMonth(day, currentDate);
    const isTodayClass = isToday(day) ? "today" : "";

    return (
      <div
        key={day}
        className={`day ${isCurrentMonth ? "" : "disabled"} ${isTodayClass}`}
        onClick={() => isCurrentMonth && onDateClick(format(day, "yyyy-MM-dd"))}
      >
        <span>{formattedDay}</span>
        {events[format(day, "yyyy-MM-dd")]?.map((event, index) => (
          <div key={index} className="event">
            {event.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => setCurrentDate(addDays(currentDate, -30))}>Previous</button>
        <h2>{format(currentDate, "MMMM yyyy")}</h2>
        <button onClick={() => setCurrentDate(addDays(currentDate, 30))}>Next</button>
      </div>
      <div className="grid">
        {days.map(renderDay)}
      </div>
    </div>
  );
};

export default Calendar;
