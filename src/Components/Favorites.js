import React from 'react';
import { useSelector } from 'react-redux';
import EventItem from './EventItem';

const Favorites = () => {
  const favorites = useSelector((state) => state.events.favorites);

  return (
    <div>
      <h1>Favorite Events</h1>
      {favorites.length === 0 ? (
        <p>No favorite events yet.</p>
      ) : (
        favorites.map(event => <EventItem key={event.id} event={event} />)
      )}
    </div>
  );
};

export default Favorites;
