import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '/src/redux/eventSlice';

const EventItem = ({ event }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{event.title}</h2>
      <p>Category: {event.category}</p>
      <Link to={`/events/${event.id}`}>View Details</Link>
      <button onClick={() => dispatch(toggleFavorite(event.id))}>
        {event.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default EventItem;
