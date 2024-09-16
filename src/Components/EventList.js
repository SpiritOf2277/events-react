import React from 'react';
import { useSelector } from 'react-redux';
import EventItem from './EventItem';

const EventList = () => {
  const events = useSelector((state) => state.events.events);

  return (
    <div>
      <h1>All Events</h1>
      <div>
        {events.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
