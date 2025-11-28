import React, { useState } from "react";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const events = [
    {
      id: 1,
      title: "Tech Fest",
      date: "20 Dec 2024",
      description: "A grand technical festival with workshops and events."
    },
    {
      id: 2,
      title: "Sports Meet",
      date: "05 Jan 2025",
      description: "Annual sports competition of the college."
    }
  ];

  const openModal = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Upcoming Events</h1>

      {events.map((ev) => (
        <EventCard key={ev.id} event={ev} onOpen={openModal} />
      ))}

      <EventModal show={showModal} event={selectedEvent} onClose={closeModal} />
    </div>
  );
};

export default App;
