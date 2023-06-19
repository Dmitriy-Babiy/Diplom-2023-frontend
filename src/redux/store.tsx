import { configureStore } from '@reduxjs/toolkit';
import { sessionReducer } from '../redux/slice/SessionSlice';
import { roomsReducer } from './slice/RoomsSlice';
import { bookingsReducer } from './slice/BookingsSlice';

export const Store = configureStore({
    reducer: {
        session: sessionReducer,
        rooms: roomsReducer,
        bookings: bookingsReducer,
    },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
