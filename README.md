import React from "react";

const EventCard = ({ event, onOpen }) => {
  return (
    <div
      onClick={() => onOpen(event)}
      style={{
        padding: "15px",
        border: "1px solid #ccc",
        marginBottom: "10px",
        cursor: "pointer"
      }}
    >
      <h3>{event.title}</h3>
      <p>{event.date}</p>
    </div>
  );
};

export default EventCard;
