import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import $api from '../../axios';
import { IRoom, IRooms } from '../../models/IRooms';

export const getRooms = createAsyncThunk('getRooms', async () => {
    const { data } = await $api.get<IRooms>('rooms');
    return data;
});

export const getActiveRoom = createAsyncThunk<IRoom, string>(
    'getActiveRoom',
    async (roomId: string) => {
        const { data } = await $api.get<IRoom>(`rooms/${roomId}`);
        return data;
    }
);

export const ApiAddComment = createAsyncThunk<
    IRoom,
    { roomId: string; text: string; rating: number }
>('comment/postComment', async ({ roomId, text, rating }) => {
    await $api.post('/comment', { text, rating, roomId });
    const { data } = await $api.get<IRoom>(`rooms/${roomId}`);
    return data;
});

export const ApiDeleteComment = createAsyncThunk<IRoom, { commentId: string; roomID: string }>(
    'comment/deleteComment',
    async ({ commentId, roomID }) => {
        await $api.delete(`/comment/${commentId}`);
        const { data } = await $api.get<IRoom>(`rooms/${roomID}`);
        return data;
    }
);

interface IRoomState {
    rooms: IRooms | null;
    isLoading: boolean;
    isLoadingActiveRoom: boolean;
    activeRoom: IRoom | null;
}

const initialState: IRoomState = {
    rooms: null,
    isLoading: false,
    isLoadingActiveRoom: false,
    activeRoom: null,
};

const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        deleteComment: (state, action: PayloadAction<{ commentId: string }>) => {
            const commentId = action.payload.commentId;
            if (state.activeRoom && state.activeRoom.comments) {
                state.activeRoom.comments = state.activeRoom.comments.filter(
                    (comment) => comment._id !== commentId
                );
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getRooms.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getRooms.fulfilled, (state, action: PayloadAction<IRooms>) => {
            state.rooms = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getActiveRoom.pending, (state) => {
            state.isLoadingActiveRoom = true;
        });
        builder.addCase(getActiveRoom.fulfilled, (state, action: PayloadAction<IRoom>) => {
            state.activeRoom = action.payload;
            state.isLoadingActiveRoom = false;
        });
        builder.addCase(ApiAddComment.fulfilled, (state, action) => {
            state.activeRoom = action.payload;
            state.isLoadingActiveRoom = false;
        });
        builder.addCase(ApiDeleteComment.fulfilled, (state, action) => {
            state.activeRoom = action.payload;
            state.isLoadingActiveRoom = false;
        });
    },
});

export const { deleteComment } = roomsSlice.actions;
export const roomsReducer = roomsSlice.reducer;
