import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();
  const event = useSelector((state) => 
    state.events.events.find(event => event.id === parseInt(id))
  );

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetail;
