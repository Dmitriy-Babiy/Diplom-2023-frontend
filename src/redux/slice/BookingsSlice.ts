import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../axios';

export const GetAllBookingsUser = createAsyncThunk<IBookings, string>(
    'bookings/GetAllBookingsUser',
    async (userId) => {
        const { data } = await $api.get<IBookings>(`bookings/${userId}`);
        return data;
    }
);

export const PostBooking = createAsyncThunk('bookings/PostBooking', async () => {});

export const DeleteBooking = createAsyncThunk<IBookings, string>(
    'bookings/DeleteBooking',
    async (bookingId) => {
        const { data } = await $api.delete(`booking/${bookingId}`);
        return data;
    }
);

export interface IBooking {
    _id: string;
    user: string;
    room: {
        _id: string;
        title: string;
    };
    price: number;
    checkInDate: Date;
    checkOutDate: Date;
    isPayment: false;
}

export interface IBookings extends Array<IBooking> {}

interface IBookingsState {
    isLoading: boolean;
    bookings: IBookings;
}

const initialState: IBookingsState = {
    isLoading: false,
    bookings: [],
};

const bookingsSlice = createSlice({
    name: 'bookings',
    initialState,
    reducers: {
        deleteBooking: (state, action: PayloadAction<{ bookingId: string }>) => {
            state.bookings = state.bookings.filter(
                (booking) => booking._id !== action.payload.bookingId
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(GetAllBookingsUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(GetAllBookingsUser.fulfilled, (state, action: PayloadAction<IBookings>) => {
            state.bookings = action.payload;
            state.isLoading = false;
        });
    },
});

export const { deleteBooking } = bookingsSlice.actions;
export const bookingsReducer = bookingsSlice.reducer;
