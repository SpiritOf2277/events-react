import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [
    { id: 1, title: 'Rock Concert', category: 'Concert', description: 'A great rock concert.', isFavorite: false },
    { id: 2, title: 'Movie Night', category: 'Movie', description: 'A fantastic movie night.', isFavorite: false },
  ],
  favorites: [],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const event = state.events.find(event => event.id === action.payload);
      if (event) {
        event.isFavorite = !event.isFavorite;
        if (event.isFavorite) {
          state.favorites.push(event);
        } else {
          state.favorites = state.favorites.filter(fav => fav.id !== action.payload);
        }
      }
    }
  },
});

export const { toggleFavorite } = eventSlice.actions;
export default eventSlice.reducer;
